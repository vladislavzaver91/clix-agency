'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { motion } from 'framer-motion'

const projects = [
	{
		title: 'E-Commerce Platform',
		description:
			'A full-featured e-commerce platform with real-time inventory management',
		image:
			'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
		technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
		category: 'E-Commerce',
	},
	{
		title: 'Healthcare Dashboard',
		description:
			'Analytics dashboard for healthcare providers with patient management',
		image:
			'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
		technologies: ['React', 'TypeScript', 'MySQL', 'Chart.js'],
		category: 'Healthcare',
	},
	{
		title: 'Learning Management System',
		description:
			'Online learning platform with video courses and progress tracking',
		image:
			'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
		technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
		category: 'Education',
	},
]

export default function PortfolioPage() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			className='min-h-screen pt-24 pb-16'
		>
			<div className='container px-4'>
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='max-w-3xl mx-auto text-center mb-16 relative'
				>
					{/* gradient line */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: -40 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='absolute right-64 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>Our Portfolio</h1>
					<p className='text-xl text-muted-foreground'>
						Showcasing our best work and successful projects
					</p>
				</motion.div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project, index) => (
						<RevealOnScroll key={project.title} delay={index * 0.15}>
							<Card
								key={project.title}
								className='overflow-hidden bg-white shadow-md'
							>
								<motion.div
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, ease: 'easeOut' }}
									className='h-48 bg-cover bg-center'
									style={{ backgroundImage: `url(${project.image})` }}
								/>
								<motion.div className='p-6'>
									<Badge className='mb-2'>{project.category}</Badge>
									<h3 className='text-xl font-semibold mb-2'>
										{project.title}
									</h3>
									<p className='text-muted-foreground mb-4'>
										{project.description}
									</p>
									<div className='flex flex-wrap gap-2 mb-4'>
										{project.technologies.map(tech => (
											<motion.div
												key={tech}
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.5, ease: 'easeOut' }}
											>
												<Badge key={tech} variant='outline'>
													{tech}
												</Badge>
											</motion.div>
										))}
									</div>
								</motion.div>
							</Card>
						</RevealOnScroll>
					))}
				</div>
			</div>
		</motion.div>
	)
}
