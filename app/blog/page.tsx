'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Link from 'next/link'

const posts = [
	{
		title: 'The Future of Web Development with Next.js',
		excerpt:
			'Explore how Next.js is revolutionizing web development with its powerful features and optimizations.',
		date: '2024-03-15',
		category: 'Technology',
		readTime: '5 min read',
	},
	{
		title: 'Building Scalable Applications with TypeScript',
		excerpt:
			'Learn best practices for building large-scale applications using TypeScript and modern development tools.',
		date: '2024-03-10',
		category: 'Development',
		readTime: '7 min read',
	},
	{
		title: 'Optimizing Database Performance in Web Applications',
		excerpt:
			'Tips and techniques for improving database performance in modern web applications.',
		date: '2024-03-05',
		category: 'Database',
		readTime: '6 min read',
	},
]

export default function BlogPage() {
	return (
		<motion.div
			className='min-h-screen pt-24 pb-16'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className='container px-4'>
				<div className='max-w-3xl mx-auto text-center mb-16'>
					<motion.h1
						className='text-4xl font-bold mb-4'
						initial={{ y: -50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						Our Blog
					</motion.h1>
					<motion.p
						className='text-xl text-muted-foreground'
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						Insights, tutorials, and updates from our team
					</motion.p>
				</div>

				<motion.div
					className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.5 }}
				>
					{posts.map(post => (
						<Card key={post.title} className='overflow-hidden'>
							<div className='p-6'>
								<div className='flex items-center justify-between mb-4'>
									<Badge>{post.category}</Badge>
									<span className='text-sm text-muted-foreground'>
										{post.readTime}
									</span>
								</div>
								<motion.h2
									className='text-xl font-semibold mb-2'
									initial={{ y: 50, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.5 }}
								>
									<Link
										href='#'
										className='hover:text-primary transition-colors'
									>
										{post.title}
									</Link>
								</motion.h2>
								<p className='text-muted-foreground mb-4'>{post.excerpt}</p>
								<div className='text-sm text-muted-foreground'>
									{new Date(post.date).toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									})}
								</div>
							</div>
						</Card>
					))}
				</motion.div>
			</div>
		</motion.div>
	)
}
