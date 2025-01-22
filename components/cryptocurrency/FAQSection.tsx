'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqItems = [
	{
		question:
			'What are the key benefits of developing a cryptocurrency for my business?',
		answer:
			'A custom cryptocurrency can enhance transaction security, reduce fees, enable global reach, and provide greater financial control for your business.',
	},
	{
		question: 'How long does it take to develop a cryptocurrency?',
		answer:
			"The development timeline depends on the project's complexity, features, and security requirements. On average, it can take anywhere from a few weeks to several months.",
	},
	{
		question: 'What is the difference between a token and a coin?',
		answer:
			'A coin operates on its own blockchain (e.g., Bitcoin, Ethereum), while a token is built on an existing blockchain and often used for specific applications, such as DeFi or gaming.',
	},
	{
		question:
			'Can you integrate a cryptocurrency into an existing financial system?',
		answer:
			'Yes, we can develop and integrate cryptocurrency solutions into your existing banking, e-commerce, or financial infrastructure to streamline transactions.',
	},
	{
		question:
			'What security measures do you implement in cryptocurrency development?',
		answer:
			'We apply advanced encryption, multi-signature authentication, smart contract audits, and other security protocols to ensure the safety and integrity of your cryptocurrency.',
	},
]

export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleDescription = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className='relative py-14 bg-background'>
			{/* absolute elements */}
			<div className='absolute inset-0 pointer-events-none'>
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{
						duration: 0.6,
						ease: 'easeOut',
					}}
					className='absolute left-0 top-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-primary/30 to-transparent'
				></motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className='absolute right-0 bottom-0 w-44 h-44 bg-gradient-to-tl from-primary/20 to-transparent'
				></motion.div>
			</div>

			<div className='container max-w-3xl mx-auto px-4'>
				<div className='text-center mb-10 overflow-hidden'>
					<motion.h2
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						className='text-4xl font-bold mb-4'
					>
						Frequently Asked Questions
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
						className='text-xl text-muted-foreground'
					>
						Answers to common questions about cryptocurrency development and its
						business impact.
					</motion.p>
				</div>
				<div className='flex flex-col gap-4'>
					{faqItems.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							className='relative border border-border rounded-lg overflow-hidden group'
						>
							<div
								className='flex items-center justify-between p-6 cursor-pointer hover:bg-accent transition-all'
								onClick={() => toggleDescription(index)}
							>
								<h2 className='text-lg font-semibold group-hover:text-transparent text-primary group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:bg-clip-text group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
									{item.question}
								</h2>
								<motion.div
									animate={{ rotate: openIndex === index ? 180 : 0 }}
									transition={{ duration: 0.3 }}
								>
									<ChevronDown className='w-6 h-6 text-muted-foreground' />
								</motion.div>
							</div>
							<AnimatePresence>
								{openIndex === index && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: '100px' }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.4, ease: 'easeInOut' }}
										className='overflow-hidden bg-muted px-4'
									>
										<p className='text-muted-foreground mb-3'>{item.answer}</p>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
