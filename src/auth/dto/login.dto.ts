import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsEmail, IsString } from 'class-validator'

export class LoginDto {
	@ApiProperty({ description: 'email пользователя', example: 'test@test.ru' })
	@ApiPropertyOptional()
	@IsEmail()
	email: string

	@ApiProperty({ description: 'password пользователя', example: 'test01' })
	@IsString()
	password: string
}
