'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const technologies = [
	{ icon: '/icons/React.svg', name: 'React' },
	{ icon: '/icons/Next.svg', name: 'Next.js' },
	{ icon: '/icons/TypeScript.svg', name: 'TypeScript' },
	{ icon: '/icons/PostgresSQL.svg', name: 'PostgreSQL' },
	{ icon: '/icons/MySQL.svg', name: 'MySQL' },
	{ icon: '/icons/JavaScript.svg', name: 'JavaScript' },
	{ icon: '/icons/CSS3.svg', name: 'CSS3' },
	{ icon: '/icons/HTML5.svg', name: 'HTML5' },
	{ icon: '/icons/Redux.svg', name: 'Redux' },
	{ icon: '/icons/Express.svg', name: 'Express' },
	{ icon: '/icons/Prisma.svg', name: 'Prisma' },
	{ icon: '/icons/Nest.svg', name: 'NestJS' },
	{ icon: '/icons/TanstackQuery.svg', name: 'TanStackQuery' },
	{ icon: '/icons/Docker.svg', name: 'Docker' },
	{ icon: '/icons/Axios.svg', name: 'Axios' },
	{ icon: '/icons/Chart.svg', name: 'Chart.js' },
	{ icon: '/icons/Zod.svg', name: 'Zod' },
	{ icon: '/icons/Cypress.svg', name: 'Cypress' },
]

export default function TechStack() {
	return (
		<section className='py-20 bg-background'>
			<div className='container px-4'>
				<motion.h2
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.7 }}
					className='text-3xl font-bold text-center mb-4'
				>
					Our Tech Stack
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.8 }}
					className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'
				>
					We use the latest and most powerful technologies to build scalable,
					performant, and maintainable applications.
				</motion.p>

				<motion.div
					initial='hidden'
					animate='visible'
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
					}}
					className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'
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
							<div className='p-6 flex flex-col items-center group hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 border rounded-lg'>
								<div className='relative'>
									<Image
										src={tech.icon}
										alt={tech.name}
										width={48}
										height={48}
										className='mb-4 transition duration-300 filter grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 min-w-[48px] min-h-[48px]'
									/>
								</div>
								<span className='font-medium'>{tech.name}</span>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
