import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { ConfigModule } from '@nestjs/config'
import { CourceModule } from './course/cource.module'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { PlanModule } from './plan/plan.module'
import { FeatureModule } from './feature/feature.module'
import { LessonModule } from './lesson/lesson.module'
import { SubcourseModule } from './subcourse/subcourse.module'

@Module({
	imports: [
		PrismaModule,
		ConfigModule.forRoot({
			isGlobal: true
		}),
		CourceModule,
		AuthModule,
		UserModule,
		PlanModule,
		FeatureModule,
		LessonModule,
		SubcourseModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
