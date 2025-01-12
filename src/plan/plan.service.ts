import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class PlanService {
	constructor(private prisma: PrismaService) {}

	async getAllPlans() {
		return this.prisma.plans.findMany()
	}
}
