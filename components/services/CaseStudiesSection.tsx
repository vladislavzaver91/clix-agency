'use client'

import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { RevealOnScroll } from '../ui/reveal-on-scroll'

const cases = [
	{
		title: 'CLIX Exchange',
		subTitle: 'Secure Digital Asset Trading',
		label:
			'CLIX Exchange is a high-performance platform for cryptocurrency trading, offering real-time analytics, secure transactions, and a seamless user experience.',
		technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
		image: '/images/projects/clix-exchange.jpg',
	},
	{
		title: 'CLIX Wallet',
		subTitle: 'Next-Gen Mobile Crypto Wallet',
		label:
			"CLIX Wallet provides a secure and convenient way to store and manage digital assets. With multi-currency support and offline transactions, it's the perfect solution for traders on the go.",
		technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
		image: '/images/projects/clix-wallet.jpg',
	},
	{
		title: 'CLIX Trader',
		subTitle: 'Smart Trading for Professionals',
		label:
			'CLIX Trader is a mobile and web application designed for crypto traders. It offers advanced charting tools, automated trading strategies, and real-time market updates.',
		technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
		image: '/images/projects/clix-trader.jpg',
	},
]

export default function CaseStudiesSection() {
	return (
		<section className='relative py-16 px-6 md:px-12 lg:px-20'>
			{/* Заголовок и подзаголовок */}
			<div className='text-center mb-12'>
				<motion.h2
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='text-3xl md:text-4xl font-extrabold tracking-wide'
				>
					Case Studies
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className='text-lg text-muted-foreground mt-4'
				>
					Discover how CLIX empowers businesses with cutting-edge digital
					solutions.
				</motion.p>
			</div>

			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{cases.map((caseItem, index) => (
					<RevealOnScroll key={caseItem.title} delay={index * 0.15}>
						<Card
							key={caseItem.title}
							className='overflow-hidden bg-white shadow-md hover:-translate-y-0 h-full'
						>
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, ease: 'easeOut' }}
								className='h-48 bg-cover bg-center'
								style={{ backgroundImage: `url(${caseItem.image})` }}
							/>
							<motion.div className='p-6'>
								<Badge className='mb-2'>{caseItem.subTitle}</Badge>
								<h3 className='text-xl font-semibold mb-2'>{caseItem.title}</h3>
								<p className='text-muted-foreground mb-4'>{caseItem.label}</p>
								<div className='flex flex-wrap gap-2 mb-4'>
									{caseItem.technologies.map(tech => (
										<motion.div
											key={tech}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.5, ease: 'easeOut' }}
										>
											<Badge key={tech} variant='outline'>
												{tech}
											</Badge>
										</motion.div>
									))}
								</div>
							</motion.div>
						</Card>
					</RevealOnScroll>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className='flex justify-center mt-10'
			>
				<Button asChild>
					<Link href='/' className='flex items-center gap-2'>
						See More <ExternalLink className='ml-2 h-4 w-4' />
					</Link>
				</Button>
			</motion.div>

			{/* <div className='grid gap-12 lg:gap-16'>
				{cases.map((caseItem, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.6,
							ease: 'easeOut',
							delay: index * 0.1,
						}}
						viewport={{ once: true }}
						className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'
					>

						<div className='w-full max-md:h-80 md:h-full bg-gray-200 rounded-lg shadow-lg flex items-center justify-center relative'>
							<Image
								src={caseItem.image}
								alt={caseItem.title}
								fill
								className='object-cover object-top brightness-50 rounded-2xl drop-shadow-xl'
							/>
						</div>

						<div className='space-y-4'>
							<h3 className='text-2xl font-bold'>{caseItem.title}</h3>
							<p className='text-primary text-lg font-semibold'>
								{caseItem.subTitle}
							</p>
							<p className='text-muted-foreground'>{caseItem.label}</p>

							<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
								{caseItem.icons.map((icon, index) => (
									<motion.div
										key={index}
										variants={{
											hidden: { opacity: 0, y: 30 },
											visible: { opacity: 1, y: 0 },
										}}
										transition={{ duration: 0.6, ease: 'easeOut' }}
									>
										<div className='p-3 flex flex-col items-center group hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 border rounded-lg'>
											<div className='relative'>
												<Image
													src={icon.icon}
													alt={icon.name}
													width={32}
													height={32}
													className='transition duration-300 filter grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 min-w-[32px] min-h-[32px]'
												/>
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				))}
			</div> */}
		</section>
	)
}
