'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../ui/button'

const approaches = [
	{
		title: 'Dedicated Team',
		label:
			'A dedicated developer or team focused entirely on your project for a full working month. Assured Payment: Prepay the last month to secure commitment.Flexible Terms: Opt for a simple 100% prepayment per month.',
		icon: '/icons/team.png',
	},
	{
		title: 'Time-Based Engagement',
		label:
			'Our adaptive collaboration model lets you pay only for the hours spent on development, ensuring efficiency and budget optimization as your project evolves.',
		icon: '/icons/time.png',
	},
	{
		title: 'Fixed Price Guarantee',
		label:
			'We define clear project scope and budget upfront, eliminating unexpected costs. This ensures a straightforward and predictable development process.',
		icon: '/icons/file.png',
	},
]

export default function HowWeWorkSection() {
	return (
		<section className='relative py-16 px-6 md:px-12 lg:px-20 bg-accent/50'>
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute -top-10 left-1/2 w-32 h-32 bg-gradient-to-r from-primary/30 to-transparent blur-3xl opacity-50'></div>
				<div className='absolute -bottom-10 right-1/2 w-40 h-40 bg-gradient-to-l from-primary/20 to-transparent blur-3xl opacity-50'></div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
				<div className='flex flex-col gap-6'>
					{approaches.map((approach, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								ease: 'easeOut',
								delay: index * 0.1,
							}}
							className='flex gap-4 relative p-6 bg-muted border border-border rounded-xl shadow-lg overflow-hidden group'
						>
							<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
							<div className='relative'>
								<Image
									src={approach.icon}
									alt={approach.title}
									width={48}
									height={48}
									className='min-w-[48px] min-h-[48px]'
								/>
							</div>
							<div>
								<h3 className='text-2xl font-extrabold tracking-widest group-hover:text-transparent text-primary group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:bg-clip-text group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
									{approach.title}
								</h3>
								<p className='text-muted-foreground mt-2'>{approach.label}</p>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='space-y-8'
				>
					<h2 className='text-6xl tracking-wider font-extrabold'>
						How we work
					</h2>

					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
					>
						<Button asChild>
							<Link href='/' className='flex items-center gap-2'>
								Contact Us <ExternalLink className='ml-2 h-4 w-4' />
							</Link>
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
