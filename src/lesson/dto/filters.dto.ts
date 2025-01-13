import { IsNumber, IsOptional, Min } from 'class-validator'

export class FiltersLessonsDto {
	@IsNumber()
	@IsOptional()
	@Min(1)
	subCourseId: number
}
