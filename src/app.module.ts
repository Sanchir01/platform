import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { ConfigModule } from '@nestjs/config'
import { CourceModule } from './cource/cource.module';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [
		PrismaModule,
		ConfigModule.forRoot({
			isGlobal: true
		}),
		CourceModule,
		AuthModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
