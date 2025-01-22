'use client'

import { TechnologiesBlock } from '@/types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ITechLinksProps {
	technologies: TechnologiesBlock
}

export default function TechLinks({ technologies }: ITechLinksProps) {
	return (
		<motion.div
			initial='hidden'
			animate='visible'
			variants={{
				hidden: { opacity: 0 },
				visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
			}}
			className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 mb-16'
		>
			{technologies.map(tech => (
				<motion.div
					key={tech.name}
					variants={{
						hidden: { opacity: 0, y: 30 },
						visible: { opacity: 1, y: 0 },
					}}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					<Link
						href={tech.href}
						className='p-6 h-full flex flex-col items-center justify-between group hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 border rounded-lg'
					>
						<div className='relative'>
							<Image
								src={tech.icon}
								alt={tech.name}
								width={48}
								height={48}
								className='mb-4 transition duration-300 filter grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 min-w-[48px] min-h-[48px]'
							/>
						</div>
						<span className='font-medium text-center'>{tech.name}</span>
					</Link>
				</motion.div>
			))}
		</motion.div>
	)
}
