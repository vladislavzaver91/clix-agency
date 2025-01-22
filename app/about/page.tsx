'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import useVideoSlowdown from '@/hooks/use-video-slowdown'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Trophy, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const stats = [
	{ label: 'Projects Completed', value: '100+' },
	{ label: 'Team Members', value: '20+' },
	{ label: 'Years Experience', value: '10+' },
	{ label: 'Client Satisfaction', value: '98%' },
]

const values = [
	{
		icon: Users,
		title: 'Client-Focused',
		description:
			'We put our clients first, ensuring their needs and goals drive every decision we make.',
	},
	{
		icon: Trophy,
		title: 'Excellence',
		description:
			'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.',
	},
	{
		icon: Clock,
		title: 'Timeliness',
		description:
			'We respect deadlines and ensure projects are delivered on time without compromising quality.',
	},
]

export default function AboutPage() {
	const videoRef = useVideoSlowdown()

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			className='min-h-screen pt-24 pb-16'
		>
			<div className='container px-4'>
				<motion.div
					className='max-w-3xl mx-auto text-center mb-16 relative'
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					{/* gradient line */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: -40 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='absolute right-64 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>About CLIX</h1>
					<p className='text-xl text-muted-foreground'>
						Building the future of web development, one project at a time
					</p>
				</motion.div>

				<motion.div
					className='grid md:grid-cols-4 gap-8 mb-16'
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					viewport={{ once: true, amount: 0.2 }}
				>
					{stats.map(stat => (
						<Card key={stat.label} className='p-6 text-center'>
							<div className='text-3xl font-bold text-primary mb-2'>
								{stat.value}
							</div>
							<div className='text-sm text-muted-foreground'>{stat.label}</div>
						</Card>
					))}
				</motion.div>

				<motion.div
					className='grid md:grid-cols-2 gap-12 items-center mb-16'
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					viewport={{ once: true, amount: 0.2 }}
				>
					<div>
						<h2 className='text-3xl font-bold mb-4'>Our Story</h2>
						<p className='text-muted-foreground mb-6'>
							Founded in 2014, CLIX has grown from a small team of passionate
							developers into a full-service web development agency. We
							specialize in creating modern, efficient, and scalable web
							solutions using cutting-edge technologies.
						</p>
						<p className='text-muted-foreground mb-6'>
							Our mission is to help businesses succeed in the digital age by
							providing them with powerful, custom-built web solutions that
							drive growth and enhance user experience.
						</p>
						<Button asChild>
							<Link href='/contact'>
								Work With Us <ArrowRight className='ml-2 h-4 w-4' />
							</Link>
						</Button>
					</div>
					<div className='relative w-full h-full aspect-square'>
						<Image
							src='/images/about.jpg'
							alt='computer'
							fill
							className='object-cover object-top brightness-50 rounded-2xl drop-shadow-xl'
						/>
					</div>
				</motion.div>

				<motion.div
					className='grid md:grid-cols-3 gap-8'
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					viewport={{ once: true, amount: 0.2 }}
				>
					{values.map(value => (
						<Card key={value.title} className='p-6'>
							<value.icon className='h-12 w-12 text-primary mb-4' />
							<h3 className='text-xl font-semibold mb-2'>{value.title}</h3>
							<p className='text-muted-foreground'>{value.description}</p>
						</Card>
					))}
				</motion.div>
			</div>
		</motion.div>
	)
}
