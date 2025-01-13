import {
	Body,
	Controller,
	HttpCode,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'
import { RefreshTokenDTO } from './dto/tokens.dto'
import { ApiBearerAuth } from '@nestjs/swagger'

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('login')
	@HttpCode(201)
	@UsePipes(new ValidationPipe())
	async login(@Body() dto: LoginDto) {
		return this.authService.login(dto)
	}

	@ApiBearerAuth()
	@Post('login/new-tokens')
	@HttpCode(201)
	@UsePipes(new ValidationPipe())
	async newTokens(@Body() dto: RefreshTokenDTO) {
		return this.authService.getNewTokens(dto.refreshToken)
	}
	@Post('registration')
	@HttpCode(201)
	@UsePipes(new ValidationPipe())
	async register(@Body() dto: RegisterDto) {
		return this.authService.register(dto)
	}
}
