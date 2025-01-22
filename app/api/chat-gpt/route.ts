import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
	try {
		const { name, email, phone } = await req.json()
		console.log('Received data:', { name, email, phone })

		const newUser = await prisma.clients.create({
			data: {
				name,
				email,
				phone_1: phone,
				correspondence: JSON.stringify([]),
				project_type: '',
				budget: '',
				message: '',
				phone_2: '',
				additional_social_network: '',
			},
		})

		console.log('User created:', newUser)

		return NextResponse.json(
			{
				success: true,
				message:
					'Спасибо за предоставленные данные! Мы рады помочь вам с вопросами по разработке. Вы можете оставить заявку в разделе Get Started или написать нам в соцсети.',
				user: newUser,
			},
			{ status: 201 }
		)
	} catch (error) {
		console.error('Error processing request:', error)
		return NextResponse.json(
			{
				success: false,
				error: 'Internal Server Error',
			},
			{ status: 500 }
		)
	}
}
