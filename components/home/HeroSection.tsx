'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.05, duration: 0.6, ease: 'easeOut' },
		}),
	}

	return (
		<section className='relative flex items-center pt-16 to-primary/5'>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: 'easeOut' }}
				className='container px-10 py-7'
			>
				<div className='max-w-3xl relative'>
					<motion.h1
						initial='hidden'
						animate='visible'
						className='text-5xl sm:text-6xl font-bold mb-6 leading-tight'
					>
						{/* gradient line */}
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: -40 }}
							transition={{ duration: 0.8, ease: 'easeOut' }}
							className='absolute left-1/2 top-8 transform -translate-y-1/2 w-16 h-32 -z-10 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow'
						/>
						{['Crafting Digital', 'Excellence'].map((word, i) => (
							<span key={i} className='block'>
								{word.split('').map((char, j) => (
									<motion.span
										key={j}
										variants={textVariants}
										initial='hidden'
										animate='visible'
										custom={j}
										className='inline-block'
									>
										{char}
									</motion.span>
								))}
							</span>
						))}
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 1 }}
						className='text-xl text-muted-foreground mb-8 max-w-2xl'
					>
						CLIX is your partner in digital transformation. We build exceptional
						web experiences using cutting-edge technologies that drive business
						growth.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7, duration: 1 }}
						className='flex flex-col sm:flex-row gap-4'
					>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button asChild size='lg'>
								<Link href='/get-started'>
									Get Started <ArrowRight className='ml-2' />
								</Link>
							</Button>
						</motion.div>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button asChild size='lg' variant='outline'>
								<Link href='/portfolio'>View Our Work</Link>
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	)
}
