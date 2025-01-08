import { Module } from '@nestjs/common';
import { courseService } from './cource.service'
import { CourceController } from './cource.controller';

@Module({
	controllers: [CourceController],
	providers: [courseService]
})
export class CourceModule {}
