'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqItems = [
	{
		question: 'How long does the web design process take?',
		answer:
			'The timeline varies depending on the complexity of the project, but generally, it takes 4 to 6 weeks from initial research to final delivery.',
	},
	{
		question: 'Do you design for both desktop and mobile devices?',
		answer:
			'Yes, all of our designs are responsive and optimized for both desktop and mobile devices to ensure a seamless experience across all platforms.',
	},
	{
		question: 'Can you redesign an existing website?',
		answer:
			'Absolutely! We specialize in redesigning websites to improve user experience, performance, and aesthetics, while maintaining your brand identity.',
	},
	{
		question: 'Do you offer ongoing support after the design is completed?',
		answer:
			'Yes, we provide ongoing support and maintenance to ensure your website continues to perform well and stays up-to-date with the latest trends.',
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
						Got questions? We`ve got answers about our web design services.
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
