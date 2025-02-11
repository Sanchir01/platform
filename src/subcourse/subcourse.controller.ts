import { Controller, Get, Query } from '@nestjs/common'
import { SubcourseService } from './subcourse.service'
import { SubCourseFilterDTO } from './dto/course.dto'
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('SubCourse')
@Controller('subcourse')
export class SubcourseController {
	constructor(private readonly subcourseService: SubcourseService) {}

	@ApiOperation({ summary: 'get all subcourse' })
	@ApiResponse({ status: 200, description: 'ok' })
	@ApiQuery({ name: 'courseId', required: false, type: Number })
	@Get()
	async allSubCourse(@Query() courseId: SubCourseFilterDTO) {
		return this.subcourseService.getAllSubCourse(+courseId.courseId)
	}
}
