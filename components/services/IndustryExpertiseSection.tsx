'use client'

import { motion } from 'framer-motion'
import {
	Briefcase,
	DollarSign,
	Globe,
	Home,
	Leaf,
	Package,
	Shield,
	ShoppingCart,
	Umbrella,
} from 'lucide-react'

const expertise = [
	{
		icon: Briefcase,
		title: 'Healthcare',
		label:
			'We create cutting-edge healthcare solutions that streamline medical services, making interactions between patients and doctors more efficient and accessible.',
	},
	{
		icon: Globe,
		title: 'Travel & Hospitality',
		label:
			'Our team builds advanced travel platforms, booking systems, and AI-driven recommendations to enhance the tourism industry.',
	},
	{
		icon: DollarSign,
		title: 'Fintech',
		label:
			'We develop innovative financial software ensuring secure transactions, enhanced analytics, and seamless digital banking experiences.',
	},
	{
		icon: ShoppingCart,
		title: 'E-Commerce',
		label:
			'Building scalable and high-performing online stores, we enhance user experience with intuitive shopping flows and secure payment integrations.',
	},
	{
		icon: Shield,
		title: 'Blockchain & Crypto',
		label:
			'From crypto wallets to secure exchange platforms, we craft blockchain solutions that ensure transparency and reliability.',
	},
	{
		icon: Package,
		title: 'Retail & Logistics',
		label:
			'Optimizing inventory management, supply chain automation, and order tracking to enhance operational efficiency.',
	},
	{
		icon: Umbrella,
		title: 'Insurance Tech',
		label:
			'Delivering end-to-end insurance software solutions that simplify policy management and improve customer engagement.',
	},
	{
		icon: Leaf,
		title: 'Energy & Natural Resources',
		label:
			'Providing digital solutions for sustainable resource management, regulatory compliance, and environmental monitoring.',
	},
	{
		icon: Home,
		title: 'Real Estate',
		label:
			'Developing smart real estate platforms that facilitate property listings, virtual tours, and secure transactions.',
	},
]

export default function IndustryExpertiseSection() {
	return (
		<section className='max-w-5xl mx-auto py-12 px-6 text-center'>
			<motion.h2
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className='text-4xl font-bold mb-4'
			>
				Industry Expertise
			</motion.h2>
			<motion.p
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
				className='text-lg text-muted-foreground mb-10'
			>
				At Clix Agency, we develop tailored digital solutions for various
				industries, helping businesses overcome unique challenges and drive
				innovation.
			</motion.p>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{expertise.map((service, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
						className='bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 group'
					>
						<service.icon className='w-12 h-12 text-primary mb-4 group-hover:text-[#0e62e4] transition duration-300' />
						<h3 className='text-xl font-semibold mb-3'>{service.title}</h3>
						<p className='text-muted-foreground'>{service.label}</p>
					</motion.div>
				))}
			</div>
		</section>
	)
}
