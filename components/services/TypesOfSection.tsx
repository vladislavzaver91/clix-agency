'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

const types = [
	{
		title: 'Gaming',
		description:
			'Our team at CLIX can design and develop immersive Telegram games that enhance user engagement, bringing entertainment and community interaction directly to the platform.',
	},
	{
		title: 'Productivity tools',
		description:
			'CLIX specializes in creating productivity-enhancing apps, such as task managers, note-taking tools, and collaborative platforms, all seamlessly integrated into Telegram for a streamlined experience.',
	},
	{
		title: 'Social networking',
		description:
			'We offer custom solutions for social interaction within Telegram, including profile management, group chat features, and content-sharing capabilities to help you build and maintain vibrant communities.',
	},
	{
		title: 'Healthcare',
		description:
			'CLIX excels in developing innovative healthcare Mini Apps, such as appointment-scheduling tools and health-tracking apps, fully integrated within Telegram to provide easy access to essential health services.',
	},
	{
		title: 'Finance',
		description:
			'Our expertise in fintech allows CLIX to build secure and efficient financial Telegram Mini Apps, including crypto wallets and other financial tools, empowering users with reliable services directly within the platform.',
	},
	{
		title: 'E-commerce',
		description:
			'CLIX will craft e-commerce solutions that enable users to browse products, make purchases, and track orders seamlessly within Telegram, integrating payment gateways and customer support for a complete shopping experience.',
	},
	{
		title: 'DeFi platforms',
		description:
			'We specialize in building decentralized finance (DeFi) platforms on Telegram, providing capabilities like lending, borrowing, and trading of digital assets, all directly integrated into the messaging app for ease of access.',
	},
]

export default function TypesOfSection() {
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
						Types of Telegram Mini Apps
					</motion.h2>
				</div>

				{/* cards */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{types.map((type, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='relative p-6 bg-muted border border-border rounded-lg shadow-lg overflow-hidden group'
						>
							<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
							<h3 className='text-xl font-semibold mb-2 tracking-widest group-hover:text-transparent text-primary group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:bg-clip-text group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
								{type.title}
							</h3>
							<p className='text-muted-foreground'>{type.description}</p>
						</motion.div>
					))}

					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						className='flex justify-center items-center'
					>
						<Button asChild>
							<Link href='/' className='flex items-center gap-2'>
								Contact Us <ExternalLink className='ml-2 h-4 w-4' />
							</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
