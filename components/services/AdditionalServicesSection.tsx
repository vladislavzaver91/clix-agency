'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
	ChevronDown,
	Code,
	ExternalLink,
	LayoutGrid,
	Settings,
	ShoppingCart,
	UsersRound,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const additionalServices = [
	{
		icon: ShoppingCart,
		title: 'Marketplace Development',
		href: '/services/marketplace',
		description:
			'Clix Agency develops feature-rich online marketplaces that enhance user engagement and facilitate smooth transactions between buyers and sellers.',
	},
	{
		icon: Settings,
		title: 'DevOps Services',
		href: '/services/devops',
		description:
			'We optimize your software delivery pipeline by automating deployments, monitoring performance, and enhancing team collaboration.',
	},
	{
		icon: LayoutGrid,
		title: 'UI/UX Design',
		href: '/services/web-design',
		description:
			'Our design team creates intuitive user experiences and visually compelling interfaces to maximize user engagement and satisfaction.',
	},
	{
		icon: Code,
		title: 'Custom Software Development',
		href: '/services/custom-software',
		description:
			'We develop tailored software solutions designed for performance, security, and scalability to match your unique business requirements.',
	},
	{
		icon: UsersRound,
		title: 'IT Outstaffing Services',
		href: '/services/it-outstaffing',
		description:
			'Enhance your team with top-tier IT specialists from Clix Agency, seamlessly integrating skilled professionals into your projects.',
	},
]

export default function AdditionalServicesSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleDescription = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className='py-20 bg-background'>
			<div className='container px-4'>
				<div className='max-w-3xl mx-auto text-center mb-10  overflow-hidden'>
					<motion.h2
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						className='text-4xl font-bold mb-4'
					>
						Additional Services
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
						className='text-xl text-muted-foreground'
					>
						Clix Agency has dedicated professional teams ready to deliver
						tailored solutions to meet your unique business needs.
					</motion.p>
				</div>

				<div className='flex flex-col gap-6'>
					{additionalServices.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							className='border border-border rounded-lg'
						>
							<div
								className='flex items-center justify-between p-4 cursor-pointer hover:bg-accent transition-all'
								onClick={() => toggleDescription(index)}
							>
								<div className='flex items-center gap-4'>
									<service.icon className='w-8 h-8 text-primary' />
									<h2 className='text-lg font-semibold'>{service.title}</h2>
								</div>
								<motion.div
									animate={{ rotate: openIndex === index ? 180 : 0 }}
									transition={{ duration: 0.3 }}
								>
									<ChevronDown className='w-6 h-6 text-muted-foreground' />
								</motion.div>
							</div>
							<AnimatePresence>
								{openIndex === index && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: '100px' }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.4, ease: 'easeInOut' }}
										className='overflow-hidden bg-muted px-4'
									>
										<p className='text-muted-foreground mb-3'>
											{service.description}
										</p>
										<Link
											href={service.href}
											className='flex items-center gap-2 text-sm font-medium transition-colors text-muted-foreground hover:text-primary'
										>
											Read More <ExternalLink className='ml-2 h-4 w-4' />
										</Link>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
