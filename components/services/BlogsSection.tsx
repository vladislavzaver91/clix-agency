'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const blogs = [
	{
		title: 'How UX Impacts Business Growth',
		date: 'January 10, 2025',
		image: '/images/blogs/ux.jpg',
	},
	{
		title: 'Top Trends in Web Design for 2025',
		date: 'December 28, 2024',
		image: '/images/blogs/web-design.jpg',
	},
	{
		title: 'The Power of AI in Digital Marketing',
		date: 'December 15, 2024',
		image: '/images/blogs/digital-marketing.jpg',
	},
]

export default function BlogSection() {
	return (
		<section className='relative py-16 px-6 md:px-12 lg:px-2'>
			{/* absolute elements */}
			<div className='absolute inset-0 pointer-events-none'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className='absolute right-0 bottom-0 w-60 h-60 bg-gradient-to-tl from-primary/20 to-transparent'
				></motion.div>
				<div className='absolute left-1/2 transform -translate-x-1/2 top-1/4 w-0.5 h-3/4 bg-gradient-to-b from-primary/30 to-transparent'></div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-14 items-center'>
				{/* blog`s carts */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='space-y-6'
				>
					{blogs.map((blog, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.6,
								ease: 'easeOut',
								delay: index * 0.1,
							}}
							className='relative bg-muted border border-border rounded-lg shadow-lg overflow-hidden group'
						>
							<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
							<Image
								src={blog.image}
								alt={blog.title}
								width={400}
								height={200}
								className='w-full h-52 object-cover transition-opacity duration-300 group-hover:opacity-75'
							/>
							<div className='backdrop-blur-md bg-slate-200 p-4 flex flex-col justify-end'>
								<p className='text-sm text-gray-400'>{blog.date}</p>
								<h3 className='text-lg font-semibold mt-2 group-hover:text-transparent text-primary group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:bg-clip-text group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
									{blog.title}
								</h3>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* title section */}
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='text-center md:text-left'
				>
					<h2 className='text-3xl md:text-4xl font-extrabold tracking-wide'>
						Our Insights
					</h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className='text-lg text-gray-400 mt-4'
					>
						Stay ahead in the digital world. Read our latest articles on UX,
						design, and technology trends.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						className='mt-10'
					>
						<Button asChild>
							<Link href='/' className='flex items-center gap-2'>
								See All Posts <ExternalLink className='ml-2 h-4 w-4' />
							</Link>
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
