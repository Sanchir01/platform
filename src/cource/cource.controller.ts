import { Controller, Get } from '@nestjs/common'
import { courseService } from './cource.service'

@Controller('course')
export class CourceController {
	constructor(private readonly courseService: courseService) {}

	@Get()
	async getAllCourse() {
		return this.courseService.allCourse()
	}
}
