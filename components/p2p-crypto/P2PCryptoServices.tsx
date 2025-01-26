'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const services = [
	{
		title: 'Blockchain Development Consulting',
		href: '/services/blockchain-consulting',
		description:
			'Expert blockchain consulting to accelerate development, cut costs, and gain a competitive advantage.',
	},
	{
		title: 'Mobile App Development',
		href: '/services/mob-app',
		description:
			'We develop iOS and Android mobile applications focused on usability, speed, and maximum user engagement.',
	},
	{
		title: 'Web Development',
		href: '/services/web-dev',
		description:
			'We create modern, responsive, and high-performance websites for any purpose — from landing pages to complex web applications.',
	},
	{
		title: 'Smart Contract development',
		href: '/services/smart-contract',
		description:
			'Leverage cutting-edge technology to ensure fast, transparent, and efficient crypto transactions for your users.',
	},
	{
		title: 'Escrow system integration',
		description:
			'Incorporate a robust escrow system into your platform to ensure the security of digital assets during transactions, building trust among users.',
	},
	{
		title: 'Digital wallets',
		href: '/services/crypto-wallet',
		description:
			'Seamlessly integrate digital wallets and payment gateways to enable hassle-free fiat-to-crypto conversions and safe asset storage.',
	},
	{
		title: 'IT Outstaffing Services',
		href: '/services/it-outstaffing',
		description:
			'Enhance your team with top-tier IT specialists from Clix Agency, seamlessly integrating skilled professionals into your projects.',
	},
	{
		title: 'Outsourcing Software Development',
		href: '/services/outsourcing',
		description:
			'We provide access to a team of professional developers who can help bring your project to life quickly and efficiently.',
	},
]

export default function P2PCryptoServices() {
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
