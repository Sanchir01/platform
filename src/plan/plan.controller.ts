import { Controller, Get } from '@nestjs/common'
import { PlanService } from './plan.service'
import { ApiResponse } from '@nestjs/swagger'

@Controller('plan')
export class PlanController {
	constructor(private readonly planService: PlanService) {}

	@Get()
	@ApiResponse({ status: 200, description: 'get all plans' })
	async allPlans() {
		return this.planService.getAllPlans()
	}
}
