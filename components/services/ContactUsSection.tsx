'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function ContactUsSection() {
	return (
		<section className='py-20 bg-accent/50'>
			<div className='container px-4'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6 }}
					className='grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto'
				>
					<div className='relative w-full h-full aspect-square'>
						<Image
							src='/images/team.jpg'
							alt='earth'
							fill
							className='object-cover object-top brightness-50 rounded-2xl drop-shadow-xl'
						/>
					</div>
					<div>
						<motion.h2
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							className='text-3xl font-bold mb-6'
						>
							Got an idea in mind?
							<br />
							Let`s bring it to life — get in touch with us!
						</motion.h2>
						<Button asChild>
							<Link href='/' className='flex items-center gap-2'>
								Contact Us <ExternalLink className='ml-2 h-4 w-4' />
							</Link>
						</Button>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
