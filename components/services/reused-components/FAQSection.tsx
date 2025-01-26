'use client'

import { faqSection } from '@/types'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface IFaqProps {
	faq: faqSection[]
}

export default function FAQSection({ faq }: IFaqProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleDescription = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className='relative py-14 bg-background'>
			{faq.map((block, index) => (
				<div key={index} className='container max-w-3xl mx-auto px-4'>
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
							{block.subTitle}
						</motion.p>
					</div>
					<div className='flex flex-col gap-4'>
						{block.faqItems.map((item, index) => (
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
											<p className='text-muted-foreground mb-3'>
												{item.answer}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						))}
					</div>
				</div>
			))}
		</section>
	)
}
