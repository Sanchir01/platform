import { Controller, Get, HttpCode } from '@nestjs/common'
import { UserService } from './user.service'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { CurrentUser } from 'src/auth/decorators/user.devorators'

@Controller('profile')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	@HttpCode(200)
	@Auth()
	async userProfile(@CurrentUser('id') id: number) {
		return this.userService.getUserProfile(id)
	}
}
