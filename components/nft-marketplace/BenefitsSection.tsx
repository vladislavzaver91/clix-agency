'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

const benefits = [
	{
		title: 'Increased Revenue Streams',
		description:
			'By creating an NFT marketplace, businesses can tap into new revenue streams through transaction fees, token sales, and other digital assets.',
	},
	{
		title: 'Enhanced User Control',
		description:
			'NFT marketplaces offer users complete ownership of their digital assets, giving them more control over their investments and trades.',
	},
	{
		title: 'Transparency and Security',
		description:
			'Blockchain technology ensures transparent and immutable records of all transactions, enhancing trust and security for users and creators.',
	},
	{
		title: 'Global Reach',
		description:
			'NFT marketplaces can attract a global audience, providing a platform for creators, collectors, and investors worldwide to engage and trade.',
	},
	{
		title: 'Customizable Features',
		description:
			'Developing an NFT marketplace tailored to your business allows you to integrate custom features such as auctions, bidding systems, and exclusive sales.',
	},
	{
		title: 'Innovative Monetization Models',
		description:
			'NFT marketplaces offer unique monetization opportunities through royalties, enabling creators to earn from secondary market sales.',
	},
	{
		title: 'Scalability and Flexibility',
		description:
			'NFT marketplaces can be easily scaled to accommodate increasing user demand, supporting a wide range of assets and features as your platform grows.',
	},
	{
		title: 'Decentralization',
		description:
			'Decentralized NFT marketplaces provide users with more autonomy, reducing the need for intermediaries and fostering a peer-to-peer ecosystem.',
	},
	{
		title: 'Ownership of Digital Assets',
		description:
			'NFTs empower users by providing verifiable ownership of digital assets, enhancing the value of collectibles, art, and other items.',
	},
	{
		title: 'Integration with Metaverse',
		description:
			'NFT marketplaces can be seamlessly integrated with Metaverse platforms, enabling the trade of virtual assets and enhancing the digital experience.',
	},
	{
		title: 'Efficient Transactions',
		description:
			'Blockchain technology ensures fast, secure, and low-cost transactions, making NFT trading more efficient for users and creators.',
	},
	{
		title: 'Community Engagement',
		description:
			'NFT marketplaces foster vibrant communities, allowing creators and users to interact, collaborate, and participate in exclusive events.',
	},
]

export default function BenefitsSection() {
	return (
		<section className='py-20 bg-background'>
			<div className='container px-4'>
				<div className='max-w-3xl mx-auto text-center mb-16'>
					<motion.h2
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						className='text-4xl font-bold mb-4'
					>
						Benefits of the NFT marketplace development
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className='text-lg text-muted-foreground'
					>
						Unlock the Power of NFT Marketplaces: Key Benefits for Your Business
					</motion.p>
				</div>

				{/* cards */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{benefits.map((benefit, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='relative p-6 bg-muted border border-border rounded-lg shadow-lg overflow-hidden group'
						>
							<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
							<h3 className='text-xl font-semibold mb-2 tracking-widest group-hover:text-transparent text-primary group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:bg-clip-text group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
								{benefit.title}
							</h3>
							<p className='text-muted-foreground'>{benefit.description}</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='flex justify-center mt-10'
				>
					<Button asChild>
						<Link href='/' className='flex items-center gap-2'>
							Contact Us <ExternalLink className='ml-2 h-4 w-4' />
						</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	)
}
