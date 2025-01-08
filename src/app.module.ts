import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { ConfigModule } from '@nestjs/config'
import { CourceModule } from './course/cource.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
	imports: [
		PrismaModule,
		ConfigModule.forRoot({
			isGlobal: true
		}),
		CourceModule,
		AuthModule,
		UserModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
