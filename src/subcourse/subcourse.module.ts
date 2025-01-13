import { Module } from '@nestjs/common';
import { SubcourseService } from './subcourse.service';
import { SubcourseController } from './subcourse.controller';

@Module({
  controllers: [SubcourseController],
  providers: [SubcourseService],
})
export class SubcourseModule {}
