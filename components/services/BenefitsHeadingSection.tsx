'use client'

import { motion } from 'framer-motion'

const benefits = [
	{
		headTitle: 'Agility',
		title: 'Accelerated Time to Market',
		label:
			'In a fast-paced world, speed matters. Our streamlined development process helps you launch faster and gain a competitive edge.',
	},
	{
		headTitle: 'Efficiency',
		title: 'Optimized Workflow',
		label:
			'Our team ensures a smooth and structured development cycle, eliminating bottlenecks and enhancing operational efficiency.',
	},
	{
		headTitle: 'Excellence',
		title: 'Premium-Quality Solutions',
		label:
			'With meticulous attention to detail, we craft robust, high-performance solutions tailored to your business needs.',
	},
	{
		headTitle: 'Control',
		title: 'Transparent Development',
		label:
			'Stay in the loop with real-time progress updates, ensuring full visibility and control over your project’s evolution.',
	},
	{
		headTitle: 'Recognition',
		title: 'Proven Track Record',
		label:
			'Our experience and client success stories speak for themselves. We build reliable and scalable digital products.',
	},
	{
		headTitle: 'Innovation',
		title: 'Future-Proof Technology',
		label:
			'We leverage cutting-edge technologies to build solutions that are scalable, secure, and ready for the future.',
	},
]

export default function BenefitsHeadingSection() {
	return (
		<section className='max-w-5xl mx-auto my-16 px-6'>
			<motion.h2
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className='text-4xl font-bold text-center'
			>
				Why Choose CLIX?
			</motion.h2>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.5 }}
				className='text-lg text-muted-foreground text-center mt-4'
			>
				At CLIX, we simplify the development process, delivering seamless,
				high-quality digital solutions. Our expertise ensures efficiency,
				innovation, and a streamlined journey from concept to launch.
			</motion.p>

			<div className='flex flex-col gap-8 mt-12'>
				{benefits.map((benefit, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
						className='relative p-6 bg-muted border border-border rounded-lg shadow-lg overflow-hidden group'
					>
						<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
						<h3 className='text-2xl font-extrabold tracking-widest group-hover:text-transparent text-primary group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:bg-clip-text group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
							{benefit.headTitle}
						</h3>
						<h4 className='text-lg font-bold my-2'>{benefit.title}</h4>
						<p className='text-muted-foreground'>{benefit.label}</p>
					</motion.div>
				))}
			</div>
		</section>
	)
}
