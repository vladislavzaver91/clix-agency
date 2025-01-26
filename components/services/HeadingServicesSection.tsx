'use client'

import { motion } from 'framer-motion'
import {
	Banknote,
	Cloud,
	ExternalLink,
	Globe2,
	ShieldCheck,
	TabletSmartphone,
	Users,
} from 'lucide-react'
import Link from 'next/link'
import { Card } from '../ui/card'
import { RevealOnScroll } from '../ui/reveal-on-scroll'

const services = [
	{
		icon: Globe2,
		title: 'Web Development',
		href: '/services/web-dev',
		description:
			'We create modern, responsive, and high-performance websites for any purpose — from landing pages to complex web applications.',
	},
	{
		icon: ShieldCheck,
		title: 'Blockchain Development',
		href: '/services/blockchain-dev',
		description:
			'Clix Agency develops decentralized applications, smart contracts, and blockchain-based solutions to enhance data security and automate processes.',
	},
	{
		icon: Users,
		title: 'Outsourcing Software Development',
		href: '/services/outsourcing',
		description:
			'We provide access to a team of professional developers who can help bring your project to life quickly and efficiently.',
	},
	{
		icon: TabletSmartphone,
		title: 'Mobile App Development',
		href: '/services/mob-app',
		description:
			'We develop iOS and Android mobile applications focused on usability, speed, and maximum user engagement.',
	},
	{
		icon: Banknote,
		title: 'Cryptocurrency Exchange Development',
		href: '/services/crypto-exchange',
		description:
			'We build reliable and secure cryptocurrency exchange platforms that comply with modern security standards and ensure a seamless user experience.',
	},
	{
		icon: Cloud,
		title: 'SaaS Development',
		href: '/services/saas',
		description:
			'We develop cloud-based solutions that help businesses automate processes and provide services to customers in a convenient format.',
	},
]

export default function HeadingServicesSection() {
	return (
		<section className='py-20 bg-background'>
			<div className='container px-4'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
				>
					{services.map((service, index) => (
						<RevealOnScroll key={service.title} delay={index * 0.15}>
							<Card
								key={service.title}
								className='p-8 h-full flex flex-col justify-between hover:-translate-y-0 group'
							>
								<div className='flex flex-col flex-1'>
									<service.icon className='h-12 w-12 text-primary mb-4 group-hover:text-[#0e62e4] transition duration-300' />
									<h2 className='text-2xl font-semibold mb-4'>
										{service.title}
									</h2>
									<p className='text-muted-foreground mb-6 flex-grow'>
										{service.description}
									</p>
								</div>
								<div className='flex justify-end items-center gap-2'>
									<Link
										href={service.href}
										className='flex items-center gap-2 text-sm font-medium transition-colors text-muted-foreground hover:text-primary'
									>
										Read More <ExternalLink className='ml-2 h-4 w-4' />
									</Link>
								</div>
							</Card>
						</RevealOnScroll>
					))}
				</motion.div>
			</div>
		</section>
	)
}
