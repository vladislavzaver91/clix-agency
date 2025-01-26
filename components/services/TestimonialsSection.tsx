'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const testimonials = [
	{
		name: 'Michael Carter',
		position: 'CEO at FinTech Solutions',
		company: 'FinTech Solutions',
		text: 'CLIX delivered an outstanding platform that transformed our business. Their expertise in UX/UI design and technical execution is truly impressive!',
		image: 'https://randomuser.me/api/portraits/men/32.jpg',
	},
	{
		name: 'Sophia Reynolds',
		position: 'Head of Marketing',
		company: 'CryptoEdge',
		text: 'Working with CLIX was a game-changer. Their deep understanding of digital solutions helped us scale our operations efficiently.',
		image: 'https://randomuser.me/api/portraits/women/44.jpg',
	},
	{
		name: 'James Oliver',
		position: 'CTO at BlockCore',
		company: 'BlockCore',
		text: 'The team at CLIX exceeded our expectations. The attention to detail and technical precision made our product launch seamless and successful.',
		image: 'https://randomuser.me/api/portraits/men/28.jpg',
	},
	{
		name: 'Emma Watson',
		position: 'Product Manager',
		company: 'NextGen Tech',
		text: 'A fantastic experience with CLIX. They truly understand our needs and delivered beyond expectations!',
		image: 'https://randomuser.me/api/portraits/women/50.jpg',
	},
	{
		name: 'Daniel White',
		position: 'Founder & CEO',
		company: 'InnovateHub',
		text: 'CLIX provided incredible support throughout our project, ensuring every detail was polished to perfection.',
		image: 'https://randomuser.me/api/portraits/men/45.jpg',
	},
	{
		name: 'Olivia Martinez',
		position: 'Lead Developer',
		company: 'SoftWave',
		text: 'The team at CLIX has a keen eye for detail and a deep understanding of modern technologies.',
		image: 'https://randomuser.me/api/portraits/women/35.jpg',
	},
]

export default function TestimonialsSection() {
	return (
		<section className='relative py-16 px-6 md:px-12 lg:px-20 bg-accent/50 text-primary'>
			{/* Заголовок и подзаголовок */}
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				viewport={{ once: true }}
				className='text-center mb-12'
			>
				<motion.h2
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='text-3xl md:text-4xl font-extrabold tracking-wide'
				>
					Feedback
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className='text-lg text-gray-400 mt-4'
				>
					Hear what our clients say about working with CLIX.
				</motion.p>
			</motion.div>

			<div className='relative max-w-[240px] sm:max-w-sm xl:max-w-3xl w-full mx-auto'>
				<Swiper
					modules={[Navigation, Autoplay]}
					spaceBetween={30}
					slidesPerView={1}
					navigation={{
						nextEl: '.custom-btn-next',
						prevEl: '.custom-btn-prev',
					}}
					autoplay={{ delay: 5000, disableOnInteraction: false }}
					className='relative'
				>
					{testimonials.map((testimonial, index) => (
						<SwiperSlide key={index}>
							<div className='relative p-8 bg-muted border border-border rounded-lg shadow-lg text-center flex flex-col items-center overflow-hidden'>
								<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/30 via-primary/10 to-transparent opacity-100 transition-all duration-500'></div>
								<Image
									src={testimonial.image}
									alt={testimonial.name}
									width={20}
									height={20}
									className='w-20 h-20 rounded-full mb-5'
								/>
								<p className='text-lg text-primary italic'>
									``{testimonial.text}``
								</p>
								<div className='mt-5'>
									<h4 className='mb-3 text-xl font-semibold'>
										{testimonial.name}
									</h4>
									<p className='mb-5 text-sm text-gray-400'>
										{testimonial.position} @ {testimonial.company}
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<button className='custom-btn-next'>
					<FaArrowRight size={20} />
				</button>
				<button className='custom-btn-prev'>
					<FaArrowLeft size={20} />
				</button>
			</div>
		</section>
	)
}
