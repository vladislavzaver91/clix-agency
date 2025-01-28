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

const technologies = [
	{ icon: '/icons/tech/CSS3.svg', name: 'CSS3' },
	{ icon: '/icons/tech/HTML5.svg', name: 'HTML5' },
]

const processSection = [
	{
		headTitle: 'Our web design process',
		subTitle:
			'A seamless and strategic approach to creating beautiful, user-centric designs.',
		processSteps: [
			{
				title: 'Research & Discovery',
				description:
					'We start by deeply understanding your target audience, market trends, and business objectives to ensure our designs are relevant and impactful.',
			},
			{
				title: 'Wireframing & Prototyping',
				description:
					'We create wireframes and interactive prototypes to visually map out the user journey and define the structure of the design before development begins.',
			},
			{
				title: 'UI/UX Design',
				description:
					'Our team focuses on designing intuitive and engaging user interfaces, ensuring that the final design is both visually appealing and easy to navigate.',
			},
			{
				title: 'Testing & Iteration',
				description:
					'We rigorously test our designs on different devices and screen sizes, making necessary improvements to ensure a smooth user experience.',
			},
			{
				title: 'Final Delivery & Support',
				description:
					'Once the design is finalized, we provide all necessary assets and offer ongoing support to ensure that your design evolves alongside your business.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle: 'Got questions? We`ve got answers about our web design services.',
		faqItems: [
			{
				question: 'How long does the web design process take?',
				answer:
					'The timeline varies depending on the complexity of the project, but generally, it takes 4 to 6 weeks from initial research to final delivery.',
			},
			{
				question: 'Do you design for both desktop and mobile devices?',
				answer:
					'Yes, all of our designs are responsive and optimized for both desktop and mobile devices to ensure a seamless experience across all platforms.',
			},
			{
				question: 'Can you redesign an existing website?',
				answer:
					'Absolutely! We specialize in redesigning websites to improve user experience, performance, and aesthetics, while maintaining your brand identity.',
			},
			{
				question: 'Do you offer ongoing support after the design is completed?',
				answer:
					'Yes, we provide ongoing support and maintenance to ensure your website continues to perform well and stays up-to-date with the latest trends.',
			},
		],
	},
]

const services = [
	{
		title: 'Wireframing and prototyping',
		description:
			'We design intuitive and user-centered digital experiences, ensuring that the design aligns with your business objectives while offering seamless interactions to your users.',
	},
	{
		title: 'Product Design Research',
		description:
			'By studying your target audience, market trends, and user preferences, we create tailored design solutions that meet the needs of your customers and enhance overall usability.',
	},
	{
		title: 'Mobile App UI/UX Design',
		description:
			'Our team specializes in responsive, mobile-first designs that provide an optimal experience across all devices, delivering both functionality and an engaging brand presence.',
	},
	{
		title: 'UI/UX Design',
		description:
			'We focus on creating beautiful, easy-to-navigate interfaces that prioritize the user journey, improving conversions and helping you build long-term customer relationships.',
	},
	{
		title: 'Website redesign services',
		description:
			'Our design services go beyond aesthetics — we help you define your brand’s visual identity and build a design system that elevates your website or application.',
	},
	{
		title: 'Custom Web Design',
		description:
			'We offer custom design solutions that take your software to the next level, enhancing your brand recognition and setting you apart from the competition.',
	},
]

export default function WebDesignPage() {
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
						className='absolute right-48 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>Web Design Services</h1>
					<p className='text-xl text-muted-foreground'>
						Let`s craft visually engaging, user-friendly designs that elevate
						your brand and enhance user experience
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
