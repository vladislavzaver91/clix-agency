'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const services = [
	{
		title: 'dApps Development',
		href: '/services/d-app',
		description:
			'Develop tailored, scalable dApps for any industry, ensuring alignment with your unique project requirements, business objectives, and aspirations',
	},
	{
		title: 'Decentralized Finance (DeFi) Development',
		description:
			'Revolutionize traditional financial services like lending, borrowing, and trading with bespoke decentralized finance (DeFi) applications.',
	},
	{
		title: 'Cryptocurrency Wallet Development',
		href: '/services/crypto-wallet',
		description:
			'Design and build secure, multi-functional crypto wallets for managing, buying, exchanging, and staking Web3 assets—all in one intuitive platform.',
	},
	{
		title: 'NFT Development',
		description:
			'Our team delivers state-of-the-art NFT marketplaces, facilitating smooth trading and hosting live 3D auctions. Choose from our customizable, ready-to-deploy NFT marketplace solutions to fast-track your launch.',
	},
	{
		title: 'Web3 Smart Contract Development',
		href: '/services/smart-contract',
		description:
			'Leverage the expertise of our Web3 smart contract developers, who create secure and reliable contracts to form the backbone of your decentralized applications.',
	},
	{
		title: 'Decentralized Autonomous Organization (DAO) Development',
		description:
			'Establish blockchain-driven organizations managed by smart contracts, enabling a decentralized community to participate in governance and decision-making.',
	},
	{
		title: 'Web 3 Metaverse Development',
		description:
			'Create captivating metaverse platforms tailored to industries like gaming, real estate, fashion, social media, and more, driving immersive digital experiences.',
	},
	{
		title: 'Web3 Game Development',
		description:
			'Our Web3 development specialists combine advanced tools like Unreal Engine 5 and Unity to deliver next-gen games, setting new standards in the gaming industry.',
	},
]

export default function Web3Services() {
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
