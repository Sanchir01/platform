import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class courseService {
	constructor(private prisma: PrismaService) {}

	async allCourse() {
		return this.prisma.course.findMany()
	}
}
