import { faker } from '@faker-js/faker'
import { Course, PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'
dotenv.config()
const prisma = new PrismaClient()

const createProducts = async (quantity: number) => {
	const courses: Course[] = []
	for (let i = 0; i < quantity; i++) {
		const courseTitle = faker.commerce.product()
		const courseDescription = faker.commerce.productDescription()
		const course = await prisma.course.create({
			data: {
				title: courseTitle,
				description: courseDescription,
				images: Array.from({ length: 3 }).map(() =>
					faker.image.urlLoremFlickr({
						width: 500,
						height: 600
					})
				)
			}
		})
		courses.push(course)
	}
	console.log(`Created ${courses.length} products created`)
}

async function main() {
	console.log('Start seeding')
	await createProducts(10)
}
main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
