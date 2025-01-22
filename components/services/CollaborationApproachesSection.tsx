'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const collaborationApproaches = [
	{
		title: 'Flexible Payment Model',
		label:
			'We offer a phased payment structure, allowing you to pay in stages. This ensures complete transparency and confidence in the progress of your project.',
		icon: '/icons/payment.png',
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

export default function CollaborationApproachesSection() {
	return (
		<section className='relative py-16 px-6 md:px-12 lg:px-20'>
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute -top-10 left-1/2 w-32 h-32 bg-gradient-to-r from-primary/30 to-transparent blur-3xl opacity-50'></div>
				<div className='absolute -bottom-10 right-1/2 w-40 h-40 bg-gradient-to-l from-primary/20 to-transparent blur-3xl opacity-50'></div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
				<div className='flex flex-col gap-6'>
					{collaborationApproaches.map((approach, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								ease: 'easeOut',
								delay: index * 0.1,
							}}
							className='relative p-6 bg-muted border border-border rounded-xl shadow-lg overflow-hidden group'
						>
							<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
							<h3 className='text-2xl font-extrabold tracking-widest group-hover:text-transparent text-primary group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:bg-clip-text group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
								{approach.title}
							</h3>
							<p className='text-muted-foreground mt-2'>{approach.label}</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='space-y-6'
				>
					<h2 className='text-3xl font-extrabold tracking-wide'>
						Collaboration Approaches
					</h2>
					<p className='text-lg text-muted-foreground'>
						At CLIX, we tailor our collaboration to suit your unique business
						needs. Our goal is to ensure cost-effectiveness and flexibility
						while maintaining full transparency.
					</p>

					<motion.div
						initial='hidden'
						animate='visible'
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
						}}
						className='grid grid-cols-2 lg:grid-cols-3 gap-4'
					>
						{collaborationApproaches.map((approach, index) => (
							<motion.div
								key={index}
								variants={{
									hidden: { opacity: 0, y: 30 },
									visible: { opacity: 1, y: 0 },
								}}
								transition={{ duration: 0.6, ease: 'easeOut' }}
							>
								<div className='p-2 sm:p-6 flex flex-col items-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 border rounded-lg'>
									<div className='relative'>
										<Image
											src={approach.icon}
											alt={approach.title}
											width={48}
											height={48}
											className='mb-4 transition min-w-[48px] min-h-[48px]'
										/>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
