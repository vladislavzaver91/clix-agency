'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import chatSteps from './chat-steps.json'

const ChatBot = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [step, setStep] = useState(0)
	const [loading, setLoading] = useState(false)
	const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
	const [messages, setMessages] = useState([
		{ role: 'bot', content: chatSteps[0].message },
	])
	const [thankYouMessage, setThankYouMessage] = useState('')

	const handleOpenChat = () => setIsOpen(true)
	const handleCloseChat = () => setIsOpen(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)

		try {
			const response = await fetch('/api/chat-gpt', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			})

			const data = await response.json()
			if (data.success) {
				setStep(1)
				setThankYouMessage(chatSteps[1].message)
				setMessages(prev => [
					...prev,
					{ role: 'bot', content: chatSteps[1].message },
				])
			}
		} catch (error) {
			console.error('Error:', error)
		} finally {
			setLoading(false)
		}
	}

	const handleChatMessage = async (message: string) => {
		setMessages(prev => [...prev, { role: 'user', content: message }])

		if (step === 2) {
			// После второго шага включаем обычный режим чата
			try {
				const response = await fetch('/api/correspondence-gpt', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ question: message }),
				})

				const data = await response.json()
				if (data.answer) {
					setMessages(prev => [...prev, { role: 'bot', content: data.answer }])
				}
			} catch (error) {
				console.error('Error:', error)
			}
		} else {
			// Переход к следующему шагу
			setStep(step + 1)
			setMessages(prev => [
				...prev,
				{ role: 'bot', content: chatSteps[step + 1].message },
			])
		}
	}

	return (
		<div className='fixed bottom-10 right-10 z-50'>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 50 }}
					transition={{ duration: 0.3 }}
					className='chat-widget p-4 bg-white shadow-lg rounded-lg w-96 max-w-full'
				>
					<button className='absolute top-2 right-2' onClick={handleCloseChat}>
						❌
					</button>

					{loading ? (
						<p className='text-xl text-muted-foreground mb-6'>Loading...</p>
					) : (
						<div>
							{step === 0 ? (
								<>
									<p className='text-sm font-medium mb-6'>
										{messages[messages.length - 1]?.content}
									</p>
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
								</>
							) : (
								<>
									<p className='text-sm font-medium mb-6'>
										{messages[messages.length - 1]?.content}
									</p>
									<form
									// onSubmit={e => {
									// 	e.preventDefault()
									// 	const input = e.target.elements.message.value
									// 	handleChatMessage(input)
									// 	e.target.reset()
									// }}
									>
										<Input name='message' placeholder='Type a message...' />
										<Button type='submit' className='w-full mt-2'>
											Send
										</Button>
									</form>
								</>
							)}
						</div>
					)}
				</motion.div>
			)}

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

export default ChatBot
