'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const services = [
	{
		title: 'Website development',
		description:
			'Our web development team brings your ideas to life by creating websites that are visually stunning, highly functional, and easy to navigate, ensuring your business stands out online.',
	},
	{
		title: 'Web app development',
		description:
			'Expand your reach by developing web applications that are optimized for any device, ensuring seamless accessibility and a smooth user experience across all platforms.',
	},
	{
		title: 'Marketplace development',
		description:
			'We build custom marketplace websites that are scalable, flexible, and secure, allowing you to cater to a growing customer base and drive high-level engagement.',
	},
	{
		title: 'E-Commerce web development',
		description:
			"Boost your customer loyalty and expand your business reach with an online store that's accessible from anywhere, ensuring your customers enjoy a convenient shopping experience on the go.",
	},
	{
		title: 'Fintech software development',
		href: '/services/fintech-software-dev',
		description:
			'Stay ahead of the curve in the ever-evolving financial sector with cutting-edge web solutions that help you enhance services and build lasting customer relationships.',
	},
	{
		title: 'IT Outstaffing services',
		href: '/services/it-outstaffing',
		description:
			"Tap into the expertise of our top-tier developers to take your business to the next level. Whether you need a team to work alongside yours or full project development, we've got you covered.",
	},
	{
		title: 'Outsourcing software development',
		href: '/services/outsourcing',
		description:
			'Looking for additional resources or specialized expertise? Our web development outsourcing services are here to provide you with the support you need to streamline your software development.',
	},
]

export default function WebDevServices() {
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
