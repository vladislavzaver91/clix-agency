'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const services = [
	{
		title: 'Consulting',
		href: '/services/blockchain-consulting',
		description:
			'We deliver tailored DApp development solutions, aligning blockchain capabilities with your unique business requirements to drive innovation and growth.',
	},
	{
		title: 'Smart contract development',
		href: '/services/smart-contract',
		description:
			'Our team crafts secure and highly efficient smart contracts that streamline operations, foster transparency, and enhance transaction trust.',
	},
	{
		title: 'Decentralized exchanges (DEXs)',
		href: '/services/dex',
		description:
			'At CLIX, we develop decentralized platforms for seamless and secure peer-to-peer crypto trading without the need for intermediaries.',
	},
	{
		title: 'Decentralized games apps',
		description:
			'Leverage blockchain technology with our expertly designed interactive gaming applications, combining security and an exceptional user experience.',
	},
	{
		title: 'Decentralized marketplaces',
		description:
			'We create scalable, decentralized marketplaces where users can directly buy and sell goods or services in a secure and transparent environment.',
	},
	{
		title: 'Decentralized autonomous organizations (DAOs)',
		description:
			'Our developers specialize in building autonomous blockchain systems governed by smart contracts and community-driven consensus.',
	},
	{
		title: 'Decentralized crypto asset management',
		description:
			'Empower your business with tools and platforms designed to manage and track digital assets securely within a decentralized framework.',
	},
	{
		title: 'Decentralized crypto wallets',
		description:
			'With CLIX, you`ll get a secure, feature-rich DApp wallet to efficiently store, manage, and transfer cryptocurrencies and tokens.',
	},
	{
		title: 'Ethereum DApp development services',
		description:
			'"Our experts can develop robust Ethereum-based solutions tailored to harness the full potential of this powerful blockchain network.',
	},
]

export default function DAppServices() {
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
