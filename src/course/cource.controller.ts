import { Controller, Get, Param } from '@nestjs/common'
import { courseService } from './cource.service'

@Controller('course')
export class CourceController {
	constructor(private readonly courseService: courseService) {}

	@Get()
	async getAllCourse() {
		return this.courseService.allCourse()
	}

	@Get(':id')
	async getOneCourse(@Param('id') id: string) {
		console.log('this couirse id', id)
		return this.courseService.oneCourse(+id)
	}
}
