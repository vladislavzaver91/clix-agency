'use client'

import BenefitsHeadingSection from '@/components/services/BenefitsHeadingSection'
import CaseStudiesSection from '@/components/services/CaseStudiesSection'
import ContactUsBottomSection from '@/components/services/ContactUsBottomSection'
import ContactUsSection from '@/components/services/ContactUsSection'
import FAQSection from '@/components/services/reused-components/FAQSection'
import HowWeWorkSection from '@/components/services/reused-components/HowWeWorkSection'
import ServicesSection from '@/components/services/reused-components/ServicesSection'
import StepsSection from '@/components/services/reused-components/StepsSection'
import TestimonialsSection from '@/components/services/TestimonialsSection'
import WhyWe from '@/components/services/WhyWeSection'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { motion } from 'framer-motion'

const processSection = [
	{
		headTitle: 'Our Mobile App Development process',
		subTitle:
			'Streamlined mobile app development crafted for innovation and excellence',
		processSteps: [
			{
				title: 'Discovery & Planning',
				description:
					'We start by understanding your business needs, analyzing requirements, and creating a comprehensive development plan to align with your goals.',
			},
			{
				title: 'Design & Prototyping',
				description:
					'Our designers craft intuitive, user-centric interfaces and interactive prototypes to ensure your app’s usability and visual appeal.',
			},
			{
				title: 'Development & Testing',
				description:
					'Our developers leverage the latest technologies to build high-performing apps, conducting rigorous testing to ensure quality and reliability.',
			},
			{
				title: 'Launch & Support',
				description:
					'We handle the deployment process and provide ongoing maintenance and updates to keep your app optimized and competitive.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Answers to your questions about our mobile app development services.',
		faqItems: [
			{
				question: 'How long does it take to develop a mobile app?',
				answer:
					'The development timeline depends on the complexity of the app and its features. On average, it can take 3 to 9 months, from concept to deployment.',
			},
			{
				question: 'Do you provide post-launch support for mobile apps?',
				answer:
					'Yes, we offer comprehensive post-launch support, including maintenance, updates, and improvements to ensure your app stays competitive.',
			},
			{
				question: 'Can you develop apps for both iOS and Android platforms?',
				answer:
					'Absolutely! We specialize in creating high-performing apps for both platforms using native and cross-platform development approaches.',
			},
			{
				question: 'How much does it cost to develop a mobile app?',
				answer:
					"The cost varies based on the app's complexity, features, and platform. Contact us for a personalized quote tailored to your project requirements.",
			},
		],
	},
]

const services = [
	{
		title: 'Сustom Mobile app development',
		description:
			'CLIX creates cutting-edge mobile applications for iOS and Android that align perfectly with your specific needs, integrating advanced features to meet your business objectives.',
	},
	{
		title: 'Marketplace development',
		href: '/services/marketplace',
		description:
			'Be it B2B, B2C, NFT, or niche marketplaces, our expert developers craft robust mobile platforms tailored to your industry and target audience.',
	},
	{
		title: 'E-Commerce development',
		href: '/services/ecommerce-dev',
		description:
			'We design visually appealing and highly scalable online stores that offer seamless user experiences while handling heavy traffic and facilitating smooth growth.',
	},
	{
		title: 'Blockchain development',
		href: '/services/blockchain-dev',
		description:
			'If you’re looking for secure and transparent decentralized mobile applications, our development team is ready to deliver innovative solutions.',
	},
	{
		title: 'Cryptocurrency development',
		href: '/services/cryptocurrency',
		description:
			'CLIX builds user-friendly platforms for effortless buying, selling, and trading of cryptocurrencies, ensuring security and reliability.',
	},
	{
		title: 'SaaS development',
		href: '/services/saas',
		description:
			'We specialize in creating cloud-powered mobile apps that ensure flawless data synchronization, cater to increasing demands, and prevent data loss.',
	},
	{
		title: 'Software Development for Startups',
		href: '/services/software-dev-for-startups',
		description:
			'Launch your product with a Minimum Viable Product (MVP), gather user insights, and iterate step-by-step to attract investors and build a successful app.',
	},
	{
		title: 'UX/UI design',
		href: '/services/web-design',
		description:
			'Our team focuses on delivering intuitive, user-friendly, and visually striking designs to enhance the experience and usability of your app.',
	},
	{
		title: 'Fintech software development',
		description:
			'From secure personal data storage to seamless transactions and currency exchanges, our FinTech apps offer comprehensive features integrated with financial systems, catering to both simple and complex requirements.',
	},
]

export default function MobAppPage() {
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
						className='absolute right-20 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>
						Mobile App Development Services
					</h1>
					<p className='text-xl text-muted-foreground'>
						Tailored mobile app development solutions designed to elevate your
						business performance
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
					<FAQSection faq={faqSection} />
				</RevealOnScroll>
				<RevealOnScroll>
					<ContactUsBottomSection />
				</RevealOnScroll>
			</div>
		</motion.div>
	)
}
