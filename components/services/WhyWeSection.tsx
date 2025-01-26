'use client'

import { ExternalLink } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '../ui/button'
import StatCounter from '../ui/stat-counter'

const stats = [
	{
		title: 'Years of Experience',
		counters: [
			{
				value: 8,
				time: 250,
			},
		],
	},
	{
		title: 'Successful Projects',
		counters: [
			{
				value: 120,
				time: 20,
			},
		],
	},
	{
		title: 'Countries We Worked With',
		counters: [
			{
				value: 40,
				time: 40,
			},
		],
	},
	{
		title: 'Specialists on Board',
		counters: [
			{
				value: 90,
				time: 30,
			},
		],
	},
	{
		title: 'Satisfied Clients',
		counters: [
			{
				value: 150,
				time: 20,
			},
		],
	},
]

export default function WhyWe() {
	return (
		<section className='relative py-16 px-6 md:px-12 lg:px-20'>
			{/* absolute elements */}
			<div className='absolute inset-0 pointer-events-none'>
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{
						duration: 0.6,
						ease: 'easeOut',
					}}
					className='absolute -z-10 left-0 top-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent'
				></motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className='absolute right-0 bottom-0 w-44 h-44 bg-gradient-to-tl from-primary/20 to-transparent'
				></motion.div>
				<div className='absolute left-1/2 transform -translate-x-1/2 top-1/4 w-0.5 h-3/4 bg-gradient-to-b from-primary/30 to-transparent'></div>
			</div>

			<div className='grid md:grid-cols-2 gap-12 items-center'>
				<div className='flex flex-col gap-6'>
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.6,
								ease: 'easeOut',
								delay: index * 0.1,
							}}
							className='p-6 bg-muted border border-border rounded-xl shadow-lg'
						>
							{stat.counters.map((counter, index) => (
								<motion.div
									key={index}
									className='text-4xl font-extrabold text-transparent bg-gradient-to-r from-[#0e62e4] via-[#7fb3ff] to-[#0e62e4] bg-[length:200%_auto] bg-clip-text animate-gradient'
									animate={{ opacity: 1 }}
								>
									<StatCounter {...counter} />
								</motion.div>
							))}
							<p className='text-lg text-muted-foreground'>{stat.title}</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='text-center md:text-left'
				>
					<h2 className='text-3xl font-extrabold tracking-wide'>
						Why We? Our team members are experts in developing high-quality
						software.
					</h2>
					<p className='text-lg text-muted-foreground my-4'>
						We are your dedicated partners in achieving online success, a
						company that has earned customers` trust over the years.
					</p>
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
