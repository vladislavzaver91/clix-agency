'use client'

import { TechnologiesIcons } from '@/types'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ITechnologiesProps {
	technologies: TechnologiesIcons
}

export default function TechWeUseSection({ technologies }: ITechnologiesProps) {
	return (
		<section className='py-20 bg-background'>
			<div className='container px-4'>
				<motion.h2
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='text-4xl text-center font-bold mb-10'
				>
					Technologies we use
				</motion.h2>

				<motion.div
					initial='hidden'
					animate='visible'
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
					}}
					className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-6'
				>
					{technologies.map((tech, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className='p-3 h-full flex flex-col items-center justify-between group hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 border rounded-lg'>
								<div className='relative'>
									<Image
										src={tech.icon}
										alt={tech.name}
										width={36}
										height={36}
										className='mb-4 transition duration-300 filter grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 min-w-[36px] min-h-[36px]'
									/>
								</div>
								<span className='font-medium text-sm'>{tech.name}</span>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
