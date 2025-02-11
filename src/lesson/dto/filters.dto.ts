import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsNumber, IsOptional, Min } from 'class-validator'

export class FiltersLessonsDto {
	@ApiPropertyOptional({
		description: 'пример id сабкурса который можно прокинуть для фильтров',
		example: 102
	})
	@IsNumber()
	@IsOptional()
	@Min(1)
	subCourseId: number
}
