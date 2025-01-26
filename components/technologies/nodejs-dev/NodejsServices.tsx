'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const services = [
	{
		title: 'Custom Node.js Development',
		description:
			'We’ll craft a unique Node.js solution designed to align with your business objectives, ensuring optimal performance and scalability.',
	},
	{
		title: 'Serverless Node.js Microservices Development',
		description:
			'Reduce costs and streamline operations with serverless architecture, paying only for the resources utilized without constant server maintenance.',
	},
	{
		title: 'Development of dynamic Node.js plugins',
		description:
			'Build dynamic, reusable plugins that enhance your application’s adaptability, streamlining project development across diverse use cases.',
	},
	{
		title: 'Node.js Migration',
		description:
			'Seamlessly transition your existing software to Node.js, preserving data integrity and minimizing business disruptions.',
	},
	{
		title: 'Dedicated Node.js Team',
		description:
			'Our dedicated Node.js experts will integrate seamlessly with your team, delivering exceptional solutions while maintaining a deep understanding of your business goals.',
	},
]

export default function NodejsServices() {
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
