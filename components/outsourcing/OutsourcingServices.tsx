'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const services = [
	{
		title: 'Mobile App Development',
		href: '/services/mob-app',
		description:
			'We provide custom mobile app development solutions designed to elevate your business and reach your target audience more effectively.',
	},
	{
		title: 'Web Development',
		href: '/services/web-dev',
		description:
			'Our expert team delivers scalable and customized web solutions that will take your business to the next level in the digital world.',
	},
	{
		title: 'Marketplace Development',
		href: '/services/marketplace',
		description:
			'We build flexible, secure, and scalable marketplace platforms, helping you grow your audience and enhance your revenue.',
	},
	{
		title: 'e-Commerce Development',
		href: '/services/ecommerce-dev',
		description:
			'Transform your eCommerce strategy with personalized solutions that improve the customer journey and boost your sales potential.',
	},
	{
		title: 'Blockchain Development',
		href: '/services/blockchain-dev',
		description:
			'Leverage our blockchain expertise to deliver secure, decentralized solutions that revolutionize your business operations.',
	},
	{
		title: 'Cryptocurrency Development',
		href: '/services/cryptocurrency',
		description:
			'Our cryptocurrency development services will help you create secure, innovative platforms tailored to your business needs, ensuring growth and scalability.',
	},
	{
		title: 'SaaS Development',
		href: '/services/saas',
		description:
			'Let’s work together to build cutting-edge cloud-based solutions that accelerate your business goals with high efficiency and cost-effectiveness.',
	},
	{
		title: 'Software Development for Startups',
		href: '/services/software-dev-for-startups',
		description:
			'We help startups create their MVP or full-scale software products, laying a strong foundation for growth, investment, and market success.',
	},
	{
		title: 'UX/UI Design',
		href: '/services/web-design',
		description:
			'Our UX/UI designers will create intuitive, visually appealing designs that ensure a smooth user experience and drive engagement.',
	},
	{
		title: 'Fintech Software Development',
		href: '/services/fintech-software-dev',
		description:
			'We provide end-to-end fintech software development services that address the challenges of the financial industry while improving efficiency and security.',
	},
]

export default function OutsourcingServices() {
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
