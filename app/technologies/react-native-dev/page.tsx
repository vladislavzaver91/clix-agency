'use client'

import CaseStudiesSection from '@/components/services/CaseStudiesSection'
import ContactUsBottomSection from '@/components/services/ContactUsBottomSection'
import ContactUsSection from '@/components/services/ContactUsSection'
import BenefitsSection from '@/components/services/reused-components/BenefitsSection'
import FAQSection from '@/components/services/reused-components/FAQSection'
import HowWeWorkSection from '@/components/services/reused-components/HowWeWorkSection'
import ServicesSection from '@/components/services/reused-components/ServicesSection'
import StepsSection from '@/components/services/reused-components/StepsSection'
import TestimonialsSection from '@/components/services/TestimonialsSection'
import WhyWe from '@/components/services/WhyWeSection'
import TechLinks from '@/components/technologies/TechLinks'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
	{
		title: 'Mobile app development',
		href: '/services/mob-app',
		description:
			'We design and deliver intuitive, scalable, and performance-driven mobile applications using React Native to provide seamless user experiences across platforms.',
	},
	{
		title: 'Marketplace development',
		description:
			'Unlock the potential of your eCommerce business with dynamic marketplaces that attract customers, streamline operations, and enable rapid growth.',
	},
	{
		title: 'eCommerce development',
		description:
			'Build a robust online store with our modern eCommerce solutions, ensuring a smooth and engaging shopping experience for your customers.',
	},
	{
		title: 'Blockchain development',
		description:
			'Leverage secure, decentralized technologies to create reliable blockchain-based applications, enhancing transparency and trust for your business operations.',
	},
	{
		title: 'Cryptocurrency development',
		href: '/services/cryptocurrency',
		description:
			'From custom token creation to implementing advanced transaction mechanisms, we bring your cryptocurrency ideas to life with secure solutions.',
	},
	{
		title: 'Software Development for Startups',
		href: '/services/software-dev-for-startups',
		description:
			'Transform ideas into reality with MVPs, attract investors, and launch innovative applications to establish a strong market presence.',
	},
	{
		title: 'Fintech development',
		href: '/services/fintech',
		description:
			'Build secure, compliant, and user-friendly fintech solutions using advanced technologies to redefine financial processes for your users.',
	},
	{
		title: 'SaaS Development',
		href: '/services/saas',
		description:
			'Develop cloud-based software tailored to your business, delivering powerful tools to improve efficiency and scalability.',
	},
]

const technologies = [
	{
		icon: '/icons/tech/Laravel.svg',
		name: 'Laravel Development',
	},
	{
		icon: '/icons/tech/React.svg',
		name: 'React Development',
	},
	{
		icon: '/icons/tech/Nodejs.svg',
		name: 'Node.js Development',
	},
	{
		icon: '/icons/tech/Solidity.svg',
		name: 'Solidity Development',
	},
]

const benefitsSection = [
	{
		headTitle: 'Benefits of React Native',
		subTitle:
			'Harness the power of React Native for cost-effective, high-performing, and scalable cross-platform solutions.',
		benefits: [
			{
				title: 'Cross-Platform Development',
				description:
					'Build applications for iOS and Android simultaneously, reducing development time and cost while maintaining high performance.',
			},
			{
				title: 'Hot Reloading',
				description:
					'Accelerate development by instantly viewing changes in the code without restarting the entire application.',
			},
			{
				title: 'Rich Ecosystem',
				description:
					"Leverage a vast library of third-party plugins and components to enhance your app's functionality and user experience.",
			},
			{
				title: 'Cost-Effectiveness',
				description:
					'Save resources with a single codebase for multiple platforms, making React Native an efficient choice for businesses of all sizes.',
			},
			{
				title: 'High Performance',
				description:
					'React Native ensures a smooth user experience with fast rendering and optimized performance across devices.',
			},
			{
				title: 'Strong Community Support',
				description:
					'Benefit from a thriving community of developers and extensive documentation to ensure seamless project execution.',
			},
		],
	},
]

const processSection = [
	{
		headTitle: 'Our React Native Development process',
		subTitle:
			'Our streamlined process ensures the delivery of top-quality React Native applications tailored to your goals.',
		processSteps: [
			{
				title: 'Requirement Analysis',
				description:
					'We collaborate closely with you to understand your business needs and define project goals and requirements.',
			},
			{
				title: 'UI/UX Design',
				description:
					'Our design team creates intuitive and visually appealing interfaces tailored to your target audience.',
			},
			{
				title: 'Development',
				description:
					'Our developers build the app using the latest React Native tools and best practices for optimal performance.',
			},
			{
				title: 'Quality Assurance',
				description:
					'Rigorous testing ensures your app runs smoothly on all devices and meets the highest quality standards.',
			},
			{
				title: 'Deployment',
				description:
					'We launch your application on iOS and Android platforms, ensuring a seamless user experience from the start.',
			},
			{
				title: 'Post-Launch Support',
				description:
					'Our team provides ongoing maintenance and support to enhance app performance and add new features as needed.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Find answers to common questions about our React Native development',
		faqItems: [
			{
				question: 'What types of applications can be built with React Native?',
				answer:
					'React Native can be used to build a wide range of apps, including eCommerce platforms, social media apps, on-demand services, and more.',
			},
			{
				question: 'Is React Native suitable for large-scale applications?',
				answer:
					'Yes, React Native is highly scalable and can handle large-scale applications with complex features, provided it is implemented with best practices.',
			},
			{
				question:
					'Can you integrate third-party plugins into React Native apps?',
				answer:
					'Absolutely! We can integrate a variety of third-party plugins and APIs to enhance the functionality of your app.',
			},
			{
				question: 'How long does it take to develop a React Native app?',
				answer:
					"The timeline depends on the complexity and features of the app, but React Native's cross-platform nature typically speeds up the process compared to native development.",
			},
		],
	},
]

export default function ReactNativeDevPage() {
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
					<Image
						src='/icons/tech/React.svg'
						alt='react icon'
						width={100}
						height={100}
						className='absolute -top-5 left-0 -z-20 w-full h-[200px] opacity-20'
					/>
					<h1 className='text-4xl font-bold mb-4'>
						React Native Development Company
					</h1>
					<p className='text-xl text-muted-foreground'>
						Empowering businesses with cutting-edge React Native mobile
						solutions tailored to their unique needs.
					</p>
				</motion.div>

				<TechLinks technologies={technologies} />

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
					<BenefitsSection benefits={benefitsSection} />
				</RevealOnScroll>
				<RevealOnScroll>
					<WhyWe />
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
