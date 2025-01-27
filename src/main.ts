import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.enableCors()
	app.setGlobalPrefix('api')
	const config = new DocumentBuilder()
		.setTitle('Platform example')
		.setDescription('The stady platform api')
		.setVersion('1.0')
		.addTag('courses')
		.addBearerAuth()
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('/api/swagger', app, document)
	await app.listen(process.env.PORT ?? 3000)
	console.log(`server started ${await app.getUrl()}`)
}
bootstrap().catch(e => console.log('server crashed', e))
