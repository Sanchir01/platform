import { IsNumber, IsOptional, Min } from 'class-validator'

export class SubCourseFilterDTO {
	@IsNumber()
	@Min(1)
	@IsOptional()
	courseId: number
}
