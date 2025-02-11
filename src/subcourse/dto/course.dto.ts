import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsNumber, IsOptional, Min } from 'class-validator'

export class SubCourseFilterDTO {
	@ApiPropertyOptional({
		description: 'пример id курса который можно прокинуть для фильтров',
		example: 23
	})
	@IsNumber()
	@Min(1)
	@IsOptional()
	courseId: number
}
