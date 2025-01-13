import { IsNumber, Min } from 'class-validator'

export class SubCourseFilterDTO {
	@IsNumber()
	@Min(1)
	courseId: number
}
