'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Gauge, Globe, Laptop, Smartphone } from 'lucide-react'

const services = [
	{
		icon: Code2,
		title: 'Frontend Development',
		description:
			'Building responsive and interactive user interfaces with React and Next.js',
	},
	{
		icon: Database,
		title: 'Backend Development',
		description:
			'Robust server-side solutions with PostgreSQL and MySQL integration',
	},
	{
		icon: Globe,
		title: 'Web Applications',
		description:
			'Full-stack web applications that scale with your business needs',
	},
	{
		icon: Smartphone,
		title: 'Mobile-First Design',
		description: 'Responsive designs that work perfectly on all devices',
	},
	{
		icon: Gauge,
		title: 'Performance Optimization',
		description:
			'Speed optimization and performance tuning for better user experience',
	},
	{
		icon: Laptop,
		title: 'Custom Solutions',
		description:
			'Tailored development solutions for your specific requirements',
	},
]

export default function ServicesSection() {
	return (
		<section className='py-20 bg-background'>
			<div className='container px-4'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='text-center mb-12'
				>
					<motion.h2
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.7 }}
						className='text-3xl font-bold mb-4'
					>
						Our Services
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						className='text-muted-foreground max-w-2xl mx-auto'
					>
						We offer a comprehensive range of web development services to help
						your business succeed in the digital world.
					</motion.p>
				</motion.div>

				<motion.div
					initial='hidden'
					animate='visible'
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
					}}
					className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
				>
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: { opacity: 1, y: 0 },
							}}
							transition={{ duration: 0.6, ease: 'easeOut' }}
						>
							<motion.div className='p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 border rounded-lg h-full group'>
								<service.icon className='h-12 w-12 text-primary mb-4 group-hover:text-[#0e62e4] transition duration-300' />
								<h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
								<p className='text-muted-foreground'>{service.description}</p>
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
