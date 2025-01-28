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
		title: 'Custom Node.js Development',
		description:
			'We’ll craft a unique Node.js solution designed to align with your business objectives, ensuring optimal performance and scalability.',
	},
	{
		title: 'Serverless Node.js Microservices Development',
		description:
			'Reduce costs and streamline operations with serverless architecture, paying only for the resources utilized without constant server maintenance.',
	},
	{
		title: 'Development of dynamic Node.js plugins',
		description:
			'Build dynamic, reusable plugins that enhance your application’s adaptability, streamlining project development across diverse use cases.',
	},
	{
		title: 'Node.js Migration',
		description:
			'Seamlessly transition your existing software to Node.js, preserving data integrity and minimizing business disruptions.',
	},
	{
		title: 'Dedicated Node.js Team',
		description:
			'Our dedicated Node.js experts will integrate seamlessly with your team, delivering exceptional solutions while maintaining a deep understanding of your business goals.',
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
		icon: '/icons/tech/Solidity.svg',
		name: 'Solidity Development',
	},
	{
		icon: '/icons/tech/React.svg',
		name: 'React Native Development',
	},
]

const benefitsSection = [
	{
		headTitle: 'Benefits of Node.js',
		subTitle:
			'Revolutionize your web applications with Node.js — offering unmatched performance, scalability, and flexibility for modern businesses.',
		benefits: [
			{
				title: 'High Performance',
				description:
					'Node.js leverages its event-driven, non-blocking architecture to deliver exceptional performance for real-time applications.',
			},
			{
				title: 'Scalability',
				description:
					'Efficiently handle high user loads with Node.js, designed to scale applications horizontally and vertically with ease.',
			},
			{
				title: 'Cross-Platform Development',
				description:
					'With Node.js, build applications that work seamlessly across multiple platforms, ensuring broader reach and compatibility.',
			},
			{
				title: 'Rich Ecosystem',
				description:
					'Tap into a vast library of pre-built modules and tools available in the npm ecosystem to accelerate your development process.',
			},
			{
				title: 'Cost Efficiency',
				description:
					'Node.js allows for full-stack JavaScript development, reducing costs by enabling code reuse between frontend and backend.',
			},
			{
				title: 'Improved Developer Productivity',
				description:
					'Faster iterations and streamlined workflows empower developers to deliver robust solutions in less time.',
			},
		],
	},
]

const processSection = [
	{
		headTitle: 'Our Node.js Development process',
		subTitle:
			'Our seamless Node.js Development process ensures your project is delivered efficiently and tailored to your business goals.',
		processSteps: [
			{
				title: 'Requirement Analysis',
				description:
					'We collaborate closely with you to understand your project goals, technical requirements, and business challenges.',
			},
			{
				title: 'Design & Architecture',
				description:
					'Our team creates a scalable and maintainable architecture while designing user-friendly interfaces tailored to your audience.',
			},
			{
				title: 'Development',
				description:
					'Using best practices and the latest tools, we build robust, high-performing applications with clean, maintainable code.',
			},
			{
				title: 'Testing & Quality Assurance',
				description:
					'Our QA team rigorously tests every aspect of your application to ensure flawless performance and user experience.',
			},
			{
				title: 'Deployment',
				description:
					'We handle the deployment process, ensuring a smooth transition to production without downtime or disruptions.',
			},
			{
				title: 'Ongoing Support & Maintenance',
				description:
					'Our support team provides continuous assistance, updates, and improvements to keep your application running at its best.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Answers to your pressing questions about Node.js development at CLIX.',
		faqItems: [
			{
				question: 'What types of applications can be built with Node.js?',
				answer:
					'Node.js is ideal for building real-time applications, scalable APIs, streaming services, microservices, and complex web applications.',
			},
			{
				question: 'Why should I choose Node.js for my project?',
				answer:
					'Node.js offers exceptional performance, scalability, and developer productivity, making it a perfect choice for modern applications.',
			},
			{
				question: 'Can Node.js handle high traffic and complex workloads?',
				answer:
					'Absolutely. Node.js is designed to handle high-concurrency workloads with its non-blocking, event-driven architecture.',
			},
			{
				question: 'Does CLIX provide post-launch support for Node.js projects?',
				answer:
					'Yes, we offer comprehensive post-launch support and maintenance to ensure your application remains updated and performs optimally.',
			},
		],
	},
]

export default function NodejsDevPage() {
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
						src='/icons/tech/Nodejs.svg'
						alt='nodejs icon'
						width={100}
						height={100}
						className='absolute -top-5 left-0 -z-20 w-full h-[200px] opacity-20'
					/>
					<h1 className='text-4xl font-bold mb-4'>
						Node.js Development Company
					</h1>
					<p className='text-xl text-muted-foreground'>
						Empower your business with cutting-edge Node.js technology,
						delivering scalable, flexible, and efficient solutions tailored to
						your needs.
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
