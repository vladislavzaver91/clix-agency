'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const services = [
	{
		title: 'Сrypto wallet development (custodial and noncustodial)',
		href: '/services/crypto-wallet',
		description:
			'Enhance your business with a customized crypto wallet built to meet your specific needs.',
	},
	{
		title: 'Cryptocurrency Exchange Development',
		href: '/services/crypto-exchange',
		description:
			'Develop seamless software for secure cryptocurrency transactions, including buying, selling, exchanging, and trading.',
	},
	{
		title: 'CEX / DEX Development',
		description:
			'Whether you need a centralized (CEX) or decentralized (DEX) exchange, our specialists will transform your vision into reality.',
	},
	{
		title: 'Smart Contract development',
		href: '/services/smart-contract',
		description:
			'Leverage cutting-edge technology to ensure fast, transparent, and efficient crypto transactions for your users.',
	},
	{
		title: 'Blockchain Development Consulting',
		href: '/services/blockchain-consulting',
		description:
			'Expert blockchain consulting to accelerate development, cut costs, and gain a competitive advantage.',
	},
	{
		title: 'Web3 development',
		href: '/services/web3',
		description:
			'Utilize Web3 technology to create a highly secure, transparent, and trust-driven crypto solution.',
	},
	{
		title: 'Creation of crypto coins',
		description:
			'Shape the future of digital finance by launching your own cryptocurrency with our expert development team.',
	},
	{
		title: 'Development of a unique cryptocurrency',
		description:
			'Innovate the next generation of digital assets with a unique and scalable cryptocurrency solution.',
	},
	{
		title: 'Bots for cryptocurrency',
		description:
			'Automate trading strategies and maximize profits with AI-powered crypto trading solutions.',
	},
]

export default function CryptoCurrencyDevServices() {
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
										{service.href && (
											<Link
												href={service.href}
												className='flex items-center gap-2 text-sm font-medium transition-colors text-muted-foreground hover:text-primary'
											>
												Read More <ExternalLink className='ml-2 h-4 w-4' />
											</Link>
										)}
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
