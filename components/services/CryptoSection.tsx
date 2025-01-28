'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function CryptoSection() {
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
							Crypto Exchange Solution
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.5 }}
							className='text-muted-foreground mb-6'
						>
							CLIX offers a Ready-Made White Label Crypto Exchange Solution,
							designed with expertise refined over years of industry experience.
							Our solution provides a secure, scalable, and customizable
							platform tailored to your business needs.
						</motion.p>
						<Button asChild>
							<Link
								href='/services/crypto-exchange'
								className='flex items-center gap-2'
							>
								Read More <ExternalLink className='ml-2 h-4 w-4' />
							</Link>
						</Button>
					</div>
					<div className='relative w-full h-full aspect-square'>
						<Image
							src='/images/stock-market.jpg'
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
