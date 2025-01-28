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

const technologies = [
	{
		icon: '/icons/tech/React.svg',
		name: 'React Development',
	},
	{
		icon: '/icons/tech/React.svg',
		name: 'React Native Development',
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
		headTitle: 'Benefits of Laravel',
		subTitle: 'Unlock the advantages of Laravel for seamless and Scalable Web',
		benefits: [
			{
				title: 'Fast Development',
				description:
					"Laravel's elegant syntax and built-in tools accelerate the development process, allowing us to deliver projects quickly without compromising quality.",
			},
			{
				title: 'Scalability',
				description:
					"Whether you're building a simple website or an enterprise-level application, Laravel provides the flexibility to scale your project as your business grows.",
			},
			{
				title: 'Security',
				description:
					'With built-in protection against common security threats such as SQL injection, CSRF, and XSS, Laravel ensures your applications remain secure and resilient.',
			},
			{
				title: 'MVC Architecture',
				description:
					'Laravel follows the Model-View-Controller architecture, which promotes clean, well-structured, and maintainable code, making it easy to manage your project as it evolves.',
			},
			{
				title: 'Comprehensive Ecosystem',
				description:
					'Laravel’s ecosystem, including tools like Laravel Forge, Horizon, and Nova, empowers developers to streamline deployments, monitor performance, and manage administrative tasks.',
			},
		],
	},
]

const processSection = [
	{
		headTitle: 'Our Laravel Development process',
		subTitle:
			'A streamlined process for building high-performance Laravel applications.',
		processSteps: [
			{
				title: 'Project Planning and Consultation',
				description:
					'We start by understanding your business needs and goals, collaborating with you to outline a clear roadmap for the Laravel development process.',
			},
			{
				title: 'Custom Design and Prototyping',
				description:
					'Our team crafts custom user interfaces and experiences based on your requirements, followed by prototyping to ensure the design meets your expectations.',
			},
			{
				title: 'Development and Coding',
				description:
					'Our Laravel experts begin building the application with clean, maintainable code, adhering to industry best practices and using Laravel’s powerful features.',
			},
			{
				title: 'Testing and Quality Assurance',
				description:
					'We conduct rigorous testing across various stages of development, ensuring your application is bug-free, secure, and performs at its best before launch.',
			},
			{
				title: 'Deployment and Support',
				description:
					'After thorough testing, we deploy your application to the live environment and offer ongoing support and maintenance to keep everything running smoothly.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle: 'Frequently asked questions about Laravel Development at CLIX.',
		faqItems: [
			{
				question: 'Why should I choose Laravel for my project?',
				answer:
					'Laravel is a highly flexible, scalable, and secure framework, making it ideal for building a wide range of web applications—from simple websites to complex enterprise systems.',
			},
			{
				question: 'How long does it take to develop a Laravel application?',
				answer:
					'The development time for a Laravel application depends on the complexity of the project. We work closely with our clients to define the project scope and timelines to ensure timely delivery.',
			},
			{
				question: 'Can you migrate my existing project to Laravel?',
				answer:
					'Yes, we specialize in migrating existing PHP or MySQL-based projects to Laravel, ensuring a smooth transition without disrupting your app’s core functionality.',
			},
			{
				question:
					'What kind of support do you provide after the project is complete?',
				answer:
					'We offer ongoing support and maintenance to ensure your application stays up-to-date, secure, and performs optimally, providing peace of mind long after launch.',
			},
		],
	},
]

const services = [
	{
		title: 'Custom Laravel Web development',
		description:
			'Our expert team specializes in creating custom Laravel solutions that are perfectly tailored to meet your business goals and ensure you stay ahead of the competition.',
	},
	{
		title: 'Laravel Development Outsourcing & Outstaffing',
		description:
			'Enhance your project with our dedicated Laravel developers. Whether you need senior-level experts or developers with a specific skill set, we provide the right talent to bring your vision to life.',
	},
	{
		title: 'Migration to Laravel',
		description:
			'We specialize in migrating your existing PHP/MySQL websites to Laravel. Our team ensures a seamless transition by carefully refactoring your app structure to leverage Laravel’s powerful features while preserving your site`s core functionality.',
	},
	{
		title: 'Third-Party Integration',
		description:
			'Our experts are highly skilled in integrating third-party services into your Laravel applications, with support for popular platforms like AWS, Stripe, Mailchimp, and PayPal, helping you enhance your project’s functionality.',
	},
	{
		title: 'Laravel Сloud Development',
		description:
			'Leveraging Laravel`s powerful capabilities, we specialize in developing cloud-native applications, helping businesses build robust, scalable solutions on platforms such as Google Drive, Salesforce, and Dropbox.',
	},
	{
		title: 'Laravel Enterprise Solutions',
		description:
			'Laravel`s versatility and scalability make it the ideal framework for enterprise-level solutions. As your business grows, our Laravel-based systems can easily handle high traffic and evolving user demands while providing a seamless experience.',
	},
]

export default function LaravelDevPage() {
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
						src='/icons/tech/Laravel.svg'
						alt='laravel icon'
						width={100}
						height={100}
						className='absolute -top-5 left-0 -z-20 w-full h-[200px] opacity-20'
					/>
					<h1 className='text-4xl font-bold mb-4'>
						Laravel Development Company
					</h1>
					<p className='text-xl text-muted-foreground'>
						Unlock the full potential of your web project with our skilled
						Laravel developers at CLIX!
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
