import { ForbiddenException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class courseService {
	constructor(private prisma: PrismaService) {}

	async allCourse() {
		return this.prisma.course.findMany()
	}

	async oneCourse(id: number) {
		console.log('one course id', id)
		const oneCourse = this.prisma.course.findUnique({ where: { id: id } })
		if (!oneCourse) {
			throw new ForbiddenException('курс с таким айди не существует')
		}
		return oneCourse
	}
}
