'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const services = [
	{
		title: 'Mobile app development',
		href: '/services/mob-app',
		description:
			'We design and deliver intuitive, scalable, and performance-driven mobile applications using React Native to provide seamless user experiences across platforms.',
	},
	{
		title: 'Marketplace development',
		description:
			'Unlock the potential of your eCommerce business with dynamic marketplaces that attract customers, streamline operations, and enable rapid growth.',
	},
	{
		title: 'eCommerce development',
		description:
			'Build a robust online store with our modern eCommerce solutions, ensuring a smooth and engaging shopping experience for your customers.',
	},
	{
		title: 'Blockchain development',
		description:
			'Leverage secure, decentralized technologies to create reliable blockchain-based applications, enhancing transparency and trust for your business operations.',
	},
	{
		title: 'Cryptocurrency development',
		href: '/services/cryptocurrency',
		description:
			'From custom token creation to implementing advanced transaction mechanisms, we bring your cryptocurrency ideas to life with secure solutions.',
	},
	{
		title: 'Software Development for Startups',
		href: '/services/software-dev-for-startups',
		description:
			'Transform ideas into reality with MVPs, attract investors, and launch innovative applications to establish a strong market presence.',
	},
	{
		title: 'Fintech development',
		href: '/services/fintech',
		description:
			'Build secure, compliant, and user-friendly fintech solutions using advanced technologies to redefine financial processes for your users.',
	},
	{
		title: 'SaaS Development',
		href: '/services/saas',
		description:
			'Develop cloud-based software tailored to your business, delivering powerful tools to improve efficiency and scalability.',
	},
]

export default function ReactNativeServices() {
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
