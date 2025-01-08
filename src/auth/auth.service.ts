import {
	BadGatewayException,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'
import { hash, verify } from 'argon2'
import { faker } from '@faker-js/faker'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private jwt: JwtService
	) {}

	async login(dto: LoginDto) {
		const oldUserPhone = await this.prisma.user.findUnique({
			where: { email: dto.email }
		})
		if (!oldUserPhone) throw new BadGatewayException('Неправильный email')

		const isValidPassword = await verify(oldUserPhone.password, dto.password)
		if (!isValidPassword)
			throw new UnauthorizedException('Неправильно введен пароль')

		const tokens = await this.issueTokens(oldUserPhone)

		return { ...tokens, user: this.returnUserFields(oldUserPhone) }
	}

	async getNewTokens(refreshToken: string) {
		const token = await this.jwt.verifyAsync(refreshToken)
		if (!token) {
			throw new UnauthorizedException('вы не авторизированы')
		}
		const user = await this.prisma.user.findUnique({ where: { id: token.id } })
		const tokens = await this.issueTokens(user)
		return { ...tokens, user: this.returnUserFields(user) }
	}

	async register(dto: RegisterDto) {
		const existUser = await this.prisma.user.findUnique({
			where: { email: dto.email }
		})
		if (existUser) {
			throw new BadGatewayException('Пользователь с таким эмейлом уже есть')
		}

		const newUser = await this.prisma.user.create({
			data: {
				phone: dto.phone,
				email: dto.email,
				name: 'user',
				isAdmin: true,
				password: await hash(dto.password),
				avatarPath: faker.image.avatar()
			}
		})
		const tokens = await this.issueTokens(newUser)

		return { user: this.returnUserFields(newUser), ...tokens }
	}

	private returnUserFields(user: User) {
		return {
			id: user.id,
			email: user.email,
			isAdmin: user.isAdmin
		}
	}

	private async issueTokens(user: User) {
		const data = { id: user.id, isAdmin: user.isAdmin }
		const accessToken = this.jwt.sign(data, { expiresIn: '14d' })
		const refreshToken = this.jwt.sign(data, { expiresIn: '1h' })
		return { accessToken, refreshToken }
	}
}
