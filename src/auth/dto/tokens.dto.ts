import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class RefreshTokenDTO {
	@ApiProperty({
		description: 'токен для поления новой пары токенов',
		example: 'Token'
	})
	@IsString()
	refreshToken: string
}
