import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class SubcourseService {
	constructor(private prisma: PrismaService) {}

	async getAllSubCourse(courseId: number) {
		return this.prisma.subCourse.findMany({
			where: courseId ? { Course: { id: courseId } } : {}
		})
	}
}
