import { Controller, Get, Query } from '@nestjs/common'
import { SubcourseService } from './subcourse.service'
import { SubCourseFilterDTO } from './dto/course.dto'

@Controller('subcourse')
export class SubcourseController {
	constructor(private readonly subcourseService: SubcourseService) {}

	@Get()
	async allSubCourse(@Query() filterDto: SubCourseFilterDTO) {
		return this.subcourseService.getAllSubCourse(filterDto)
	}
}
