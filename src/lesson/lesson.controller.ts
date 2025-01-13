import { Controller, Get } from '@nestjs/common'
import { LessonService } from './lesson.service'

@Controller('lesson')
export class LessonController {
	constructor(private readonly lessonService: LessonService) {}

	@Get()
	async allLessons() {
		return this.lessonService.getAllLessons()
	}
}
