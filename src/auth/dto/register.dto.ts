import { IsEmail, IsPhoneNumber, IsString, MinLength } from 'class-validator'

export class RegisterDto {
	@IsEmail()
	@IsString()
	email: string

	@IsPhoneNumber()
	@IsString()
	phone: string

	@IsString()
	@MinLength(6, {
		message: 'минимум 6 симвоволов'
	})
	password: string
}
