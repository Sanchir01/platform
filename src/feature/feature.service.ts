import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class FeatureService {
	constructor(private prisma: PrismaService) {}

	async getAllFeatures() {
		return this.prisma.feature.findMany()
	}
}
