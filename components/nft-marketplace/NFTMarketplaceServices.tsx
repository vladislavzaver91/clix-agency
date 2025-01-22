'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const services = [
	{
		title: 'Decentralized NFT marketplace',
		description:
			'Our NFT marketplace development services empower your platform users with greater autonomy, while enhancing transparency and control over their digital assets.',
	},
	{
		title: 'Metaverse NFT marketplace',
		description:
			"Elevate your NFT marketplace with CLIX's bespoke solutions for creating interactive and immersive Metaverse NFT marketplaces, tailored to meet modern user demands.",
	},
	{
		title: 'Smart contracts for NFTs',
		description:
			'Trust our expertise in smart contract development and security audits to ensure a safe and reliable NFT ecosystem, where all transactions are secure and transparent.',
	},
	{
		title: 'Non-fungible tokens creation',
		description:
			'Our NFT marketplace developers will incorporate token creation capabilities into your platform, allowing users to tokenize their assets effortlessly and manage their digital collectibles.',
	},
	{
		title: 'Decentralized NFT wallet',
		href: '/services/crypto-wallet',
		description:
			'We offer decentralized NFT storage solutions that streamline the management of NFT data, including media like videos, audio, and images, while maintaining full security and ownership.',
	},
	{
		title: 'Ethereum NFT marketplace development',
		description:
			'As Ethereum remains the dominant platform for NFTs, CLIX specializes in Ethereum NFT marketplace development, providing a thriving, user-friendly space for your digital assets.',
	},
	{
		title: 'Smart contract development',
		href: '/services/smart-contract',
		description:
			'Our experienced developers build secure and efficient Solidity smart contracts that unlock the full potential of your NFT project, ensuring scalability and reliability.',
	},
	{
		title: 'Solana NFT marketplace development',
		description:
			"With Solana's rapid transaction speeds and low fees, CLIX offers top-tier Solana NFT marketplace development services, enabling you to create a fast and cost-efficient platform for your NFT ecosystem.",
	},
]

export default function NFTMarketplaceServices() {
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
										animate={{ opacity: 1, height: '120px' }}
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
