'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const services = [
	{
		title: 'Сustom Mobile app development',
		description:
			'CLIX creates cutting-edge mobile applications for iOS and Android that align perfectly with your specific needs, integrating advanced features to meet your business objectives.',
	},
	{
		title: 'Marketplace development',
		href: '/services/marketplace',
		description:
			'Be it B2B, B2C, NFT, or niche marketplaces, our expert developers craft robust mobile platforms tailored to your industry and target audience.',
	},
	{
		title: 'E-Commerce development',
		href: 'services/ecommerce-dev',
		description:
			'We design visually appealing and highly scalable online stores that offer seamless user experiences while handling heavy traffic and facilitating smooth growth.',
	},
	{
		title: 'Blockchain development',
		href: '/services/blockchain-dev',
		description:
			'If you’re looking for secure and transparent decentralized mobile applications, our development team is ready to deliver innovative solutions.',
	},
	{
		title: 'Cryptocurrency development',
		href: '/services/cryptocurrency',
		description:
			'CLIX builds user-friendly platforms for effortless buying, selling, and trading of cryptocurrencies, ensuring security and reliability.',
	},
	{
		title: 'SaaS development',
		href: '/services/saas',
		description:
			'We specialize in creating cloud-powered mobile apps that ensure flawless data synchronization, cater to increasing demands, and prevent data loss.',
	},
	{
		title: 'Software Development for Startups',
		href: '/services/software-dev-for-startups',
		description:
			'Launch your product with a Minimum Viable Product (MVP), gather user insights, and iterate step-by-step to attract investors and build a successful app.',
	},
	{
		title: 'UX/UI design',
		href: '/services/web-design',
		description:
			'Our team focuses on delivering intuitive, user-friendly, and visually striking designs to enhance the experience and usability of your app.',
	},
	{
		title: 'Fintech software development',
		description:
			'From secure personal data storage to seamless transactions and currency exchanges, our FinTech apps offer comprehensive features integrated with financial systems, catering to both simple and complex requirements.',
	},
]

export default function MobileAppDevServices() {
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
