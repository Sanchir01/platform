import { Controller, Get, HttpCode } from '@nestjs/common'
import { UserService } from './user.service'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { CurrentUser } from 'src/auth/decorators/user.devorators'
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger'

@ApiBearerAuth()
@Controller('profile')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@ApiResponse({ status: 200, description: 'get user profile' })
	@HttpCode(200)
	@Auth()
	@Get()
	async userProfile(@CurrentUser('id') id: number) {
		return this.userService.getUserProfile(id)
	}
}
