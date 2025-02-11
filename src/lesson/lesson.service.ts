import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class LessonService {
	constructor(private prisma: PrismaService) {}

	async getAllLessons(subcourseId: number) {
		return this.prisma.lessons.findMany({
			where: subcourseId ? { SubCourse: { id: subcourseId } } : {}
		})
	}
}
