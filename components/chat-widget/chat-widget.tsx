'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import {
	handleSubmitData,
	initialMessage,
	thankYouMessage,
} from './chat-logic.data'

const ChatWidget = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
	const [message, setMessage] = useState(initialMessage)
	const [step, setStep] = useState(0)
	const [loading, setLoading] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)

		const messageFromServer = await handleSubmitData(formData)

		setMessage(messageFromServer)
		setStep(1)
		setLoading(false)
	}

	const handleCloseChat = () => {
		setIsOpen(false)
	}

	const handleOpenChat = () => {
		setIsOpen(true)
	}

	return (
		<div className={`fixed bottom-10 right-10 z-50`}>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 50 }}
					transition={{ duration: 0.3 }}
					className='chat-widget p-4 bg-white shadow-lg rounded-lg w-96 max-w-full'
				>
					{/* Кнопка закрытия чата */}
					<button className='absolute top-2 right-2' onClick={handleCloseChat}>
						<X />
					</button>

					{loading ? (
						<p className='text-xl text-muted-foreground mb-6'>Loading...</p>
					) : (
						<p className='text-sm font-medium mb-6'>{message}</p>
					)}
					{step === 0 ? (
						<form onSubmit={handleSubmit} className='space-y-2'>
							<Input
								type='text'
								name='name'
								value={formData.name}
								onChange={handleChange}
								placeholder='Your name'
								required
							/>
							<Input
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								placeholder='Email'
								required
							/>
							<Input
								type='tel'
								name='phone'
								value={formData.phone}
								onChange={handleChange}
								placeholder='Phone'
								required
							/>
							<Button type='submit' className='w-full'>
								Send
							</Button>
						</form>
					) : (
						<>
							<p className='text-sm font-medium mb-6'>{thankYouMessage}</p>
							<div className='flex mt-2 space-x-2'>
								<Button asChild className='w-full'>
									<Link href='/get-started' onClick={handleCloseChat}>
										Leave a request
									</Link>
								</Button>

								<Button
									asChild
									variant='outline'
									onClick={handleCloseChat}
									className='w-full'
								>
									<Link href='/contact' onClick={handleCloseChat}>
										Write to social media
									</Link>
								</Button>
							</div>
						</>
					)}
				</motion.div>
			)}

			{/* Иконка для открытия чата */}
			{!isOpen && (
				<button
					onClick={handleOpenChat}
					className='chat-open-btn bg-[#0e62e4] hover:bg-[#204781] transition duration-300 text-white p-3 rounded-full'
				>
					💬
				</button>
			)}
		</div>
	)
}

export { ChatWidget }
