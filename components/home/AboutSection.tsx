'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const highlights = [
	'10+ years of industry experience',
	'100+ successful projects delivered',
	'24/7 dedicated support',
	'Agile development methodology',
]

export default function AboutSection() {
	return (
		<section className='py-20 bg-accent/50'>
			<div className='container px-4'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6 }}
					className='grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center'
				>
					<div>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							className='text-3xl font-bold mb-6'
						>
							About CLIX
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.5 }}
							className='text-muted-foreground mb-6'
						>
							CLIX is a leading web development agency specializing in creating
							innovative digital solutions. We combine creativity with technical
							expertise to deliver exceptional results for our clients.
						</motion.p>
						<motion.ul
							initial='hidden'
							whileInView='visible'
							variants={{
								hidden: { opacity: 0 },
								visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
							}}
							className='space-y-4 mb-8'
						>
							{highlights.map(item => (
								<motion.li
									key={item}
									variants={{
										hidden: { opacity: 0, x: -20 },
										visible: { opacity: 1, x: 0 },
									}}
									className='flex items-center gap-3'
								>
									<CheckCircle2 className='h-5 w-5 text-primary' />
									<span>{item}</span>
								</motion.li>
							))}
						</motion.ul>
						<Button asChild>
							<Link href='/about'>Learn More About Us</Link>
						</Button>
					</div>
					<div className='relative w-full h-full aspect-square'>
						<Image
							src='/images/main.jpg'
							alt='earth'
							fill
							className='object-cover object-top brightness-50 rounded-2xl drop-shadow-xl'
						/>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
