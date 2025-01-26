'use client'

import BenefitsHeadingSection from '@/components/services/BenefitsHeadingSection'
import CaseStudiesSection from '@/components/services/CaseStudiesSection'
import ContactUsBottomSection from '@/components/services/ContactUsBottomSection'
import ContactUsSection from '@/components/services/ContactUsSection'
import FAQSection from '@/components/services/reused-components/FAQSection'
import HowWeWorkSection from '@/components/services/reused-components/HowWeWorkSection'
import ServicesSection from '@/components/services/reused-components/ServicesSection'
import StepsSection from '@/components/services/reused-components/StepsSection'
import TechWeUseSection from '@/components/services/reused-components/TechWeUseSection'
import TestimonialsSection from '@/components/services/TestimonialsSection'
import WhyWe from '@/components/services/WhyWeSection'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { motion } from 'framer-motion'

const processSection = [
	{
		headTitle: 'Our Marketplace Development process',
		subTitle:
			'From concept to launch, we follow a structured process to create seamless and high-performance marketplace platforms.',
		processSteps: [
			{
				title: 'Discovery & Planning',
				description:
					'We begin by understanding your business needs, target audience, and marketplace objectives to define the project scope and strategy.',
			},
			{
				title: 'Design & Prototyping',
				description:
					'Our design team crafts user-friendly, visually appealing interfaces, while prototyping ensures seamless navigation and functionality.',
			},
			{
				title: 'Development & Testing',
				description:
					'We develop your marketplace using the latest technologies and conduct rigorous testing to ensure scalability, security, and optimal performance.',
			},
			{
				title: 'Launch & Optimization',
				description:
					'Once the platform is ready, we launch it and continuously monitor performance, providing ongoing optimization to meet evolving needs.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Got questions? Explore answers to common queries about marketplace development services.',
		faqItems: [
			{
				question: 'What type of marketplaces can you develop?',
				answer:
					'We specialize in developing B2B, B2C, and C2C marketplaces across various industries, ensuring the platform meets the specific needs of buyers and sellers.',
			},
			{
				question: 'How long does it take to develop a marketplace?',
				answer:
					'The development timeline varies depending on the complexity and features required, but we typically deliver a fully functional platform in 3-6 months.',
			},
			{
				question: 'Can you integrate third-party payment gateways?',
				answer:
					'Yes, we can integrate secure and popular payment gateways to ensure seamless transactions for both buyers and sellers.',
			},
		],
	},
]

const services = [
	{
		title: 'B2B marketplaces development',
		description:
			'Develop a dynamic digital platform that bridges the gap between suppliers, manufacturers, and consumers, enhancing efficiency and broadening market access.',
	},
	{
		title: 'B2C marketplaces development',
		description:
			'Craft a seamless, user-friendly marketplace for businesses and consumers to engage in secure transactions, offering convenience and reliability.',
	},
	{
		title: 'NFT marketplaces development',
		description:
			'Harness the power of blockchain technology to create platforms for trading and exchanging digital assets, providing fast, secure transactions with unlimited potential.',
	},
	{
		title: 'Mobile marketplaces development',
		href: '/services/mob-app',
		description:
			'Design a sleek, mobile-responsive marketplace that grows your audience and enhances user engagement, ensuring a consistent experience across devices.',
	},
]

const technologies = [
	{ icon: '/icons/tech/CSS3.svg', name: 'CSS3' },
	{ icon: '/icons/tech/HTML5.svg', name: 'HTML5' },
	{ icon: '/icons/tech/PHP.svg', name: 'PHP' },
	{ icon: '/icons/tech/Nodejs.svg', name: 'Node.js' },
	{ icon: '/icons/tech/angular.svg', name: 'Angular' },
	{ icon: '/icons/tech/django.svg', name: 'Django' },
	{ icon: '/icons/tech/Laravel.svg', name: 'Laravel' },
	{ icon: '/icons/tech/React.svg', name: 'React.js' },
	{ icon: '/icons/tech/yii.svg', name: 'Yii2' },
	{ icon: '/icons/tech/symfony.svg', name: 'Symfony' },
	{ icon: '/icons/tech/vuejs.svg', name: 'Vue.js' },
	{ icon: '/icons/tech/MongoDB.svg', name: 'MongoDB' },
	{ icon: '/icons/tech/MySQL.svg', name: 'MySQL' },
	{ icon: '/icons/tech/PostgresSQL.svg', name: 'PostgresSQL' },
	{ icon: '/icons/tech/redis.svg', name: 'Redis' },
]

export default function MarketplacePage() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			className='min-h-screen pt-24 pb-16'
		>
			<div className='container px-4'>
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='max-w-3xl mx-auto text-center mb-16 relative'
				>
					{/* gradient line */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: -40 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='absolute right-14 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>
						Marketplace Development Company
					</h1>
					<p className='text-xl text-muted-foreground'>
						Create a cutting-edge, scalable marketplace to connect buyers and
						sellers, driving business growth and market expansion.
					</p>
				</motion.div>

				<ServicesSection services={services} />
				<RevealOnScroll>
					<CaseStudiesSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<TestimonialsSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<ContactUsSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<WhyWe />
				</RevealOnScroll>
				<RevealOnScroll>
					<BenefitsHeadingSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<StepsSection process={processSection} />
				</RevealOnScroll>
				<RevealOnScroll>
					<HowWeWorkSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<TechWeUseSection technologies={technologies} />
				</RevealOnScroll>
				<RevealOnScroll>
					<FAQSection faq={faqSection} />
				</RevealOnScroll>
				<RevealOnScroll>
					<ContactUsBottomSection />
				</RevealOnScroll>
			</div>
		</motion.div>
	)
}
