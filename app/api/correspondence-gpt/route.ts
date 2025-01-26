// import openai from '@/lib/openaiConfig'
// import { NextResponse } from 'next/server'

// export async function GET() {
// 	return NextResponse.json({ message: 'API Works!' })
// }

// export async function POST(req: Request) {
// 	const { question } = await req.json()

// 	try {
// 		const completion = await openai.chat.completions.create({
// 			model: 'gpt-4o-mini',
// 			messages: [
// 				{ role: 'system', content: 'You are a heplful assistant' },
// 				{ role: 'user', content: question },
// 			],
// 		})

// 		const answer = completion.choices[0].message.content
// 		return NextResponse.json({ answer })
// 	} catch (error) {
// 		console.error('Error fetching from OpenAI', error)
// 		return NextResponse.json(
// 			{
// 				error: 'Failed to fetch answer from OpenAI',
// 			},
// 			{ status: 500 }
// 		)
// 	}
// }

// pages/api/correspondence-gpt.ts

import openai from '@/lib/openaiConfig'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: Request) {
	const { question, userId } = await req.json()

	try {
		const completion = await openai.chat.completions.create({
			model: 'gpt-4o-mini',
			messages: [
				{ role: 'system', content: 'You are a helpful assistant' },
				{ role: 'user', content: question },
			],
		})

		const answer = completion.choices[0].message.content

		// update history correspondence
		// await prisma.clients.update({
		// 	where: { id: userId },
		// 	data: {
		// 		correspondence: {
		// 			push: { user: question, bot: answer },
		// 		},
		// 	},
		// })

		return NextResponse.json({ answer })
	} catch (error) {
		console.error('Error fetching from OpenAI', error)
		return NextResponse.json(
			{
				error: 'Failed to fetch answer from OpenAI',
			},
			{ status: 500 }
		)
	}
}
