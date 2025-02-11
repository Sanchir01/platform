import { Controller, Get } from '@nestjs/common'
import { FeatureService } from './feature.service'
import { ApiResponse } from '@nestjs/swagger'

@Controller('feature')
export class FeatureController {
	constructor(private readonly featureService: FeatureService) {}

	@Get()
	@ApiResponse({ status: 200, description: 'all feature for sub course' })
	async allFeatures() {
		return this.featureService.getAllFeatures()
	}
}
