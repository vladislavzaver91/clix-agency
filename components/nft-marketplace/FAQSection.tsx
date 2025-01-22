'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqItems = [
	{
		question: 'What is an NFT marketplace?',
		answer:
			'An NFT marketplace is a platform where users can create, buy, sell, and trade Non-Fungible Tokens (NFTs), which represent ownership of digital assets like art, music, or collectibles.',
	},
	{
		question: 'How long does it take to develop an NFT marketplace?',
		answer:
			'The development time for an NFT marketplace depends on the complexity of the project, the features required, and the blockchain platform chosen. Typically, it can take from a few months to several months.',
	},
	{
		question:
			'Which blockchain platform should I choose for my NFT marketplace?',
		answer:
			'The most popular blockchains for NFT marketplaces are Ethereum, Solana, and Binance Smart Chain. The choice depends on factors like transaction speed, fees, and the specific needs of your project.',
	},
	{
		question: 'How secure is an NFT marketplace?',
		answer:
			'Security is a top priority in our NFT marketplace development process. We implement advanced security protocols, including smart contract audits, wallet integration, and encryption to protect user data and assets.',
	},
	{
		question: 'Can I create a custom NFT marketplace for my business?',
		answer:
			'Yes, our team at CLIX specializes in developing fully customizable NFT marketplaces that align with your business goals, providing tailored features and seamless integration.',
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
						Frequently Asked Questions about NFT Marketplace Development
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
