'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink, Settings } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const services = [
	{
		number: '01',
		title: 'Crypto Wallet Development Services',
		href: '/services/crypto-wallet',
		description:
			'Enhance your business with a custom-built crypto wallet tailored to your specific needs, ensuring security and efficiency.',
	},
	{
		number: '02',
		icon: Settings,
		title: 'Cryptocurrency Exchange Development Services',
		href: '/services/crypto-exchange',
		description:
			'Develop innovative software for seamless cryptocurrency transactions, enabling users to buy, sell, exchange, and trade with ease.',
	},
	{
		number: '03',
		title: 'Smart Contract Development Services',
		href: '/services/smart-contract',
		description:
			'Take your business to the next level with cutting-edge solutions that ensure transparent and efficient financial transactions.',
	},
	{
		number: '04',
		title: 'Blockchain Development Consulting',
		href: '/services/blockchain-consulting',
		description:
			'Gain a competitive advantage with expert blockchain consulting, reducing R&D costs and accelerating innovation.',
	},
	{
		number: '05',
		title: 'Decentralized Exchange Development',
		href: '/services/dex',
		description:
			'Create a fully functional Decentralized Exchange (DEX) with the expertise of our blockchain specialists, backed by deep industry knowledge.',
	},
	{
		number: '06',
		title: 'Web3 Development Services',
		href: '/services/web3',
		description:
			'Leverage Web3 technology to build secure, accountable, and transparent digital solutions for your project.',
	},
]

export default function BlockchainDevServices() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleDescription = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className='py-14 bg-background'>
			<div className='container max-w-3xl mx-auto px-4'>
				<div className='flex flex-col gap-4'>
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							className='relative border border-border rounded-lg overflow-hidden group'
						>
							{/* number */}
							<div className='absolute -top-1 -left-1 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
								{String(index + 1).padStart(2, '0')}
							</div>
							<div
								className='flex items-center justify-between p-6 cursor-pointer hover:bg-accent transition-all'
								onClick={() => toggleDescription(index)}
							>
								<h2 className='text-lg font-semibold group-hover:text-transparent text-primary group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:bg-clip-text group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
									{service.title}
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
											{service.description}
										</p>
										<Link
											href={service.href}
											className='flex items-center gap-2 text-sm font-medium transition-colors text-muted-foreground hover:text-primary'
										>
											Read More <ExternalLink className='ml-2 h-4 w-4' />
										</Link>
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
