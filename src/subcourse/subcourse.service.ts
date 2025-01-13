import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { SubCourseFilterDTO } from './dto/course.dto'

@Injectable()
export class SubcourseService {
	constructor(private prisma: PrismaService) {}

	async getAllSubCourse(filter: SubCourseFilterDTO) {
		return this.prisma.subCourse.findMany({ where: { id: filter.courseId } })
	}
}
