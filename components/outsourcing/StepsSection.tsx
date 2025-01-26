'use client'

import { motion } from 'framer-motion'

const processSteps = [
	{
		title: 'Initial Consultation',
		description:
			'We begin by understanding your unique business needs, challenges, and objectives to tailor our IT outsourcing services to your requirements.',
	},
	{
		title: 'Team Selection',
		description:
			"We carefully select the most suitable IT professionals based on your project's scope, ensuring that the team has the right skills and expertise.",
	},
	{
		title: 'Project Planning & Roadmap',
		description:
			'A detailed plan and timeline are developed to guide the project from start to finish, ensuring clear communication and set expectations.',
	},
	{
		title: 'Execution & Development',
		description:
			'Our team begins working on the project, providing regular updates, adhering to deadlines, and ensuring quality at every stage of development.',
	},
	{
		title: 'Quality Assurance',
		description:
			'We conduct thorough testing and quality assurance to ensure that all solutions meet your business requirements and industry standards.',
	},
	{
		title: 'Ongoing Support & Maintenance',
		description:
			'Once the project is completed, we continue to offer support and maintenance services to ensure the long-term success and smooth operation of your solution.',
	},
]

export default function StepsSection() {
	return (
		<section className='relative py-16 px-6 md:px-12 lg:px-20'>
			{/* line */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary/10 via-primary/30 to-transparent'></div>
			</div>

			{/* title */}
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className='text-center mb-12'
			>
				<h2 className='text-3xl font-extrabold tracking-wide'>
					IT Outsourcing process
				</h2>
				<p className='text-lg text-muted-foreground mt-4'>
					Our streamlined IT outsourcing process ensures a smooth, transparent,
					and efficient collaboration to drive your business forward.
				</p>
			</motion.div>

			{/* steps */}
			<div className='flex flex-col gap-12 relative max-w-4xl mx-auto'>
				{processSteps.map((step, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
						className='relative p-6 bg-muted border border-border rounded-xl shadow-lg overflow-hidden group'
					>
						{/* number */}
						<div className='absolute -top-1 -left-1 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
							{String(index + 1).padStart(2, '0')}
						</div>

						{/* line */}
						{index !== processSteps.length - 1 && (
							<div className='absolute left-6 top-full h-12 w-0.5 bg-border'></div>
						)}

						{/* content */}
						<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
						<h3 className='text-xl font-bold group-hover:text-transparent text-primary group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:bg-clip-text group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
							{step.title}
						</h3>
						<p className='text-muted-foreground mt-2'>{step.description}</p>
					</motion.div>
				))}
			</div>
		</section>
	)
}
