'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const services = [
	{
		title: 'Mobile App Development',
		href: '/services/mob-app',
		description:
			'We design and develop tailored iOS and Android applications that meet your specific needs, offering innovative features to propel your business success.',
	},
	{
		title: 'Web development',
		href: '/services/web-dev',
		description:
			'Our custom web development services are designed to accelerate your business growth by creating scalable, high-performance solutions.',
	},
	{
		title: 'Marketplace development',
		href: '/services/marketplace',
		description:
			"Let's develop a robust and scalable marketplace platform that connects businesses and customers, expanding your reach and boosting your profitability.",
	},
	{
		title: 'E-commerce development',
		href: 'services/ecommerce-dev',
		description:
			'Elevate your customer experience and drive sales growth with a custom e-commerce platform that perfectly matches your brand and objectives.',
	},
	{
		title: 'Cryptocurrency development',
		href: '/services/cryptocurrency',
		description:
			'Our cryptocurrency development services are tailored to ensure security, scalability, and innovation, helping you lead in this rapidly evolving sector.',
	},
	{
		title: 'SaaS development',
		href: 'services/saas',
		description:
			"Let's create a cloud-based solution that’s fast, cost-effective, and designed to help you meet your business goals with agility and innovation.",
	},
	{
		title: 'Software development for startups',
		href: '/services/software-dev-for-startups',
		description:
			'Whether it’s an MVP or a full-scale product, we build software solutions that attract investors and set you on the path to becoming an industry leader.',
	},
	{
		title: 'Web design',
		href: 'services/web-design',
		description:
			"Together, we'll design intuitive, engaging, and user-friendly interfaces that bring your software vision to life and captivate your users.",
	},
	{
		title: 'Fintech software development',
		href: '/services/fintech',
		description:
			'Stay ahead in the dynamic fintech landscape by leveraging cutting-edge software development tailored to your business requirements.',
	},
]

export default function DedicatedDevTeamServices() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleDescription = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className='py-14 bg-background'>
			<div className='container max-w-3xl mx-auto px-4'>
				<div className='flex flex-col gap-4'>
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							className='relative border border-border rounded-lg overflow-hidden group'
						>
							{/* number */}
							<div className='absolute -top-1 -left-1 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
								{String(index + 1).padStart(2, '0')}
							</div>
							<div
								className='flex items-center justify-between p-6 cursor-pointer hover:bg-accent transition-all'
								onClick={() => toggleDescription(index)}
							>
								<h2 className='text-lg font-semibold group-hover:text-transparent text-primary group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:bg-clip-text group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
									{service.title}
								</h2>
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
										{service.href && (
											<Link
												href={service.href}
												className='flex items-center gap-2 text-sm font-medium transition-colors text-muted-foreground hover:text-primary'
											>
												Read More <ExternalLink className='ml-2 h-4 w-4' />
											</Link>
										)}
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
