import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class courseService {
	constructor(private prisma: PrismaService) {}

	async allCourse() {
		return this.prisma.course.findMany()
	}

	async oneCourse(id: number) {
		return this.prisma.course.findUnique({ where: { id } })
	}
}
