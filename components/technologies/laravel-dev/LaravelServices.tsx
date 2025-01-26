'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const services = [
	{
		title: 'Custom Laravel Web development',
		description:
			'Our expert team specializes in creating custom Laravel solutions that are perfectly tailored to meet your business goals and ensure you stay ahead of the competition.',
	},
	{
		title: 'Laravel Development Outsourcing & Outstaffing',
		description:
			'Enhance your project with our dedicated Laravel developers. Whether you need senior-level experts or developers with a specific skill set, we provide the right talent to bring your vision to life.',
	},
	{
		title: 'Migration to Laravel',
		description:
			'We specialize in migrating your existing PHP/MySQL websites to Laravel. Our team ensures a seamless transition by carefully refactoring your app structure to leverage Laravel’s powerful features while preserving your site`s core functionality.',
	},
	{
		title: 'Third-Party Integration',
		description:
			'Our experts are highly skilled in integrating third-party services into your Laravel applications, with support for popular platforms like AWS, Stripe, Mailchimp, and PayPal, helping you enhance your project’s functionality.',
	},
	{
		title: 'Laravel Сloud Development',
		description:
			'Leveraging Laravel`s powerful capabilities, we specialize in developing cloud-native applications, helping businesses build robust, scalable solutions on platforms such as Google Drive, Salesforce, and Dropbox.',
	},
	{
		title: 'Laravel Enterprise Solutions',
		description:
			'Laravel`s versatility and scalability make it the ideal framework for enterprise-level solutions. As your business grows, our Laravel-based systems can easily handle high traffic and evolving user demands while providing a seamless experience.',
	},
]

export default function LaravelServices() {
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
