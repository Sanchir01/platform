import { faker } from '@faker-js/faker'
import {
	Course,
	Feature,
	Lessons,
	PrismaClient,
	SubCourse
} from '@prisma/client'
import * as dotenv from 'dotenv'
dotenv.config()
const prisma = new PrismaClient()

const createProducts = async (quantity: number, plans: number) => {
	const courses: Course[] = []
	const subcourse: SubCourse[] = []
	const lessons: Lessons[] = []
	const features: Feature[] = []
	for (let i = 0; i < quantity; i++) {
		const courseTitle = faker.commerce.productAdjective()
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
		for (let i = 0; i < 3; i++) {
			const subCourseTitle = faker.commerce.productName()
			const subCourseDescription = faker.commerce.productDescription()
			const subCourse = await prisma.subCourse.create({
				data: {
					title: subCourseTitle,
					description: subCourseDescription,
					courseId: course.id
				}
			})
			subcourse.push(subCourse)

			for (let i = 0; i < 2; i++) {
				const lessonTitle = faker.commerce.productName()
				const lessonDesc = faker.commerce.productDescription()
				const lessonDuration = +faker.commerce.price({ min: 1, max: 8 })

				const lesson = await prisma.lessons.create({
					data: {
						title: lessonTitle,
						description: lessonDesc,
						duration: lessonDuration,
						subCourseId: subCourse.id
					}
				})
				lessons.push(lesson)
			}
		}
	}

	//await prisma.plans.create({
	//	data: {
	//		title: 'pro',
	//		description: 'super plan',
	//		price: 79
	//	}
	//})
	//
	//await prisma.plans.create({
	//	data: {
	//		title: 'free',
	//		description: 'super plan',
	//		price: 0
	//	}
	//})
	for (let i = 0; i < plans; i++) {
		const planName = faker.commerce.productAdjective()
		const planDesct = faker.commerce.productDescription()

		const feature = await prisma.feature.create({
			data: {
				title: planName,
				description: planDesct,
				plansId: +faker.commerce.price({ min: 1, max: 2 })
			}
		})

		features.push(feature)
	}

	console.log(`Created ${courses.length} products created`)
}

async function main() {
	console.log('Start seeding')
	await createProducts(10, 5)
}
main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
