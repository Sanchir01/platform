import { Controller, Get } from '@nestjs/common'
import { PlanService } from './plan.service'

@Controller('plan')
export class PlanController {
	constructor(private readonly planService: PlanService) {}

	@Get()
	async allPlans() {
		return this.planService.getAllPlans()
	}
}
