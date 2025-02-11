import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsPhoneNumber, IsString, MinLength } from 'class-validator'

export class RegisterDto {
	@ApiProperty({ description: 'email пользователя', example: 'test@test.ru' })
	@IsEmail()
	@IsString()
	email: string

	@ApiProperty({ description: 'phone пользователя', example: '123456789' })
	@IsPhoneNumber()
	@IsString()
	phone: string

	@ApiProperty({ description: 'password пользователя', example: 'test' })
	@IsString()
	@MinLength(6, {
		message: 'минимум 6 симвоволов'
	})
	password: string
}
