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

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('login')
	@HttpCode(201)
	@UsePipes(new ValidationPipe())
	async login(@Body() dto: LoginDto) {
		return this.authService.login(dto)
	}

	@Post('registration')
	@HttpCode(201)
	@UsePipes(new ValidationPipe())
	async register(@Body() dto: RegisterDto) {
		return this.authService.register(dto)
	}
}