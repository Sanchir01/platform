import { Controller, Get, Query } from '@nestjs/common'
import { LessonService } from './lesson.service'
import { FiltersLessonsDto } from './dto/filters.dto'
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger'

@Controller('lesson')
export class LessonController {
	constructor(private readonly lessonService: LessonService) {}

	@ApiOperation({ summary: 'Get all operations' })
	@ApiResponse({ status: 200, description: 'ok' })
	@ApiQuery({ name: 'subCourseId', required: false, type: Number })
	@Get()
	async allLessons(@Query() subCourseId: FiltersLessonsDto) {
		return this.lessonService.getAllLessons(+subCourseId.subCourseId)
	}
}
