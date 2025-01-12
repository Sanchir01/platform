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
	async getOneCourse(@Param('courseId') courseId: string) {
		return this.courseService.oneCourse(+courseId)
	}
}
