'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

const benefits = [
	{
		title: 'Enhanced Patient Engagement',
		description:
			'Connect with patients seamlessly through online appointment booking, health blogs, and interactive tools.',
	},
	{
		title: 'Improved Accessibility',
		description:
			'Ensure your services are accessible to everyone with responsive design and ADA-compliant websites.',
	},
	{
		title: 'Streamlined Appointment Management',
		description:
			'Simplify scheduling with integrated booking systems that save time for both patients and staff.',
	},
	{
		title: 'Increased Credibility',
		description:
			'Build trust with a professional, modern website that reflects the quality of your healthcare services.',
	},
	{
		title: 'Custom Patient Portals',
		description:
			'Offer secure and personalized portals for patients to access medical records, prescriptions, and test results.',
	},
	{
		title: 'Search Engine Optimization',
		description:
			'Boost your online visibility with an SEO-optimized website tailored to attract local and global audiences.',
	},
	{
		title: 'Telemedicine Integration',
		description:
			'Enable remote consultations with secure telehealth platforms integrated into your website.',
	},
	{
		title: 'Data Security and Compliance',
		description:
			'Protect sensitive patient data with HIPAA-compliant solutions and advanced cybersecurity protocols.',
	},
	{
		title: 'Scalability for Growth',
		description:
			'Build a website that grows with your practice, supporting new services and expanded patient bases.',
	},
	{
		title: 'Analytics and Insights',
		description:
			'Monitor performance with integrated analytics to make data-driven decisions and improve services.',
	},
]

export default function BenefitsSection() {
	return (
		<section className='py-20 bg-background'>
			<div className='container px-4'>
				<div className='max-w-3xl mx-auto text-center mb-16'>
					<motion.h2
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						className='text-4xl font-bold mb-4'
					>
						Benefits of Medical & Healthcare Website Development
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className='text-lg text-muted-foreground'
					>
						Empower your healthcare practice with a cutting-edge online presence
						that delivers trust, convenience, and patient engagement.
					</motion.p>
				</div>

				{/* cards */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{benefits.map((benefit, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='relative p-6 bg-muted border border-border rounded-lg shadow-lg overflow-hidden group'
						>
							<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
							<h3 className='text-xl font-semibold mb-2 tracking-widest group-hover:text-transparent text-primary group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:bg-clip-text group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
								{benefit.title}
							</h3>
							<p className='text-muted-foreground'>{benefit.description}</p>
						</motion.div>
					))}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						className='flex justify-center items-center'
					>
						<Button asChild>
							<Link href='/' className='flex items-center gap-2'>
								Contact Us <ExternalLink className='ml-2 h-4 w-4' />
							</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
