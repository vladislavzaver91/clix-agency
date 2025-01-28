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
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { motion } from 'framer-motion'

const benefitsSection = [
	{
		headTitle: 'Benefits of SaaS development',
		subTitle:
			'Discover the advantages of scalable and cost-effective SaaS solutions tailored to elevate your business with CLIX.',
		benefits: [
			{
				title: 'Cost-Effective Solutions',
				description:
					'Reduce operational expenses with scalable SaaS applications that eliminate the need for costly hardware and maintenance.',
			},
			{
				title: 'Seamless Scalability',
				description:
					'Easily adapt to changing business demands by scaling your SaaS solution up or down without compromising performance.',
			},
			{
				title: 'Enhanced Accessibility',
				description:
					'Provide your team with 24/7 access to critical tools and data from anywhere, ensuring uninterrupted workflows.',
			},
			{
				title: 'Rapid Deployment',
				description:
					'Launch your SaaS product quickly and efficiently with our streamlined development process, reducing time-to-market.',
			},
			{
				title: 'Advanced Data Security',
				description:
					'Protect sensitive information with cutting-edge security protocols, ensuring compliance and safeguarding your data.',
			},
		],
	},
]

const processSection = [
	{
		headTitle: 'Our SaaS development process',
		subTitle:
			'Step into the future with our proven SaaS development approach tailored to your business needs at CLIX',
		processSteps: [
			{
				title: 'Initial Consultation',
				description:
					'We start by understanding your business goals and challenges to create a clear roadmap for your SaaS solution.',
			},
			{
				title: 'Strategic Planning',
				description:
					'Our team crafts a detailed development strategy, focusing on scalability, functionality, and user experience.',
			},
			{
				title: 'Custom Development',
				description:
					'We develop a tailored SaaS product using advanced technologies to ensure high performance and reliability.',
			},
			{
				title: 'Quality Assurance',
				description:
					'Rigorous testing ensures your SaaS platform is bug-free, secure, and ready to handle real-world scenarios.',
			},
			{
				title: 'Deployment & Support',
				description:
					'After a smooth launch, we provide ongoing maintenance and support to keep your SaaS platform running optimally.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle: 'Got questions about SaaS development? CLIX has the answers!',
		faqItems: [
			{
				question: 'What types of SaaS solutions can CLIX develop?',
				answer:
					'We specialize in creating diverse SaaS platforms, including CRM systems, project management tools, e-commerce solutions, and custom cloud-based applications tailored to your business needs.',
			},
			{
				question: 'How long does it take to develop a SaaS platform?',
				answer:
					'The timeline depends on the complexity of your project. On average, it takes 3-6 months to deliver a fully functional SaaS solution, including planning, development, and testing.',
			},
			{
				question: 'Can you ensure the scalability of my SaaS platform?',
				answer:
					'Absolutely! Scalability is a core focus in our development process. We design your platform to handle increased demand and ensure seamless performance as your user base grows.',
			},
			{
				question: 'What technologies does CLIX use for SaaS development?',
				answer:
					'Our team employs cutting-edge technologies like Node.js, React, AWS, and PostgreSQL to build reliable, efficient, and high-performing SaaS platforms.',
			},
		],
	},
]

const services = [
	{
		title: 'SaaS web development',
		description:
			'Build scalable and efficient cloud solutions tailored to your specific business needs, ensuring optimal performance and flexibility.',
	},
	{
		title: 'SaaS mobile development',
		description:
			'Leverage our SaaS development expertise to minimize maintenance costs and deliver cross-platform compatibility effortlessly.',
	},
	{
		title: 'Enterprise SaaS development',
		description:
			'Transform your operations with cutting-edge cloud solutions that provide secure data storage, enhanced workflows, and long-term scalability.',
	},
	{
		title: 'SaaS prototyping and design',
		description:
			'Prototype-driven development: create intuitive designs and a seamless user interface to elevate your software experience.',
	},
	{
		title: 'SaaS migration',
		description:
			'Experience a seamless cloud migration process that safeguards your data and ensures uninterrupted operations during the transition.',
	},
]

export default function SaaSPage() {
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
						className='absolute right-32 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>SaaS Development Services</h1>
					<p className='text-xl text-muted-foreground'>
						Tailored software solutions to elevate your business to new heights
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
					<BenefitsSection benefits={benefitsSection} />
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
