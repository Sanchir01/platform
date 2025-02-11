import { ForbiddenException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class courseService {
	constructor(private prisma: PrismaService) {}

	async allCourse() {
		return this.prisma.course.findMany()
	}

	async oneCourse(id: number) {
		const oneCourse = this.prisma.course.findUnique({ where: { id } })

		if (!!oneCourse) {
			throw new ForbiddenException('курс с таким айди не существует')
		}
		return oneCourse
	}
}
