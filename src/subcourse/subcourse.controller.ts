import { Controller, Get, Query } from '@nestjs/common'
import { SubcourseService } from './subcourse.service'
import { SubCourseFilterDTO } from './dto/course.dto'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('SubCourse')
@Controller('subcourse')
export class SubcourseController {
	constructor(private readonly subcourseService: SubcourseService) {}

	@ApiOperation({ summary: 'get all subcourse' })
	@ApiResponse({ status: 200, description: 'ok' })
	@Get()
	async allSubCourse(@Query() filterDto: SubCourseFilterDTO) {
		return this.subcourseService.getAllSubCourse(filterDto)
	}
}
