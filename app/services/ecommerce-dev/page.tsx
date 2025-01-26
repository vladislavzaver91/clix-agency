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

const services = [
	{
		title: 'Custom e-Commerce & Marketplace Solutions',
		href: '/services/marketplace',
		description:
			"Whether it's a small online store or a large-scale e-Commerce platform, we create software perfectly tailored to your unique requirements.",
	},
	{
		title: 'SEO for e-Commerce',
		description:
			'We help you increase organic traffic from search engines and attract more customers through strategic content optimization, keywords, and other SEO solutions.',
	},
	{
		title: 'Integrations & API',
		description:
			'Our expertise includes integrating existing systems, developing APIs, and unifying multiple platforms into a seamless, user-friendly interface.',
	},
	{
		title: 'UX/UI design',
		href: '/services/web-design',
		description:
			'We design e-Commerce solutions that are not only visually appealing but also strategically focused on boosting your sales.',
	},
]

const processSection = [
	{
		headTitle: 'Our e-Commerce Web Development Process',
		subTitle:
			'From Idea to Launch: How CLIX Transforms Your e-Commerce Vision into Reality.',
		processSteps: [
			{
				title: 'Requirement Analysis',
				description:
					'We dive deep into understanding your business goals, target audience, and product requirements to create a tailored development plan.',
			},
			{
				title: 'Design and Prototyping',
				description:
					'Our designers craft user-friendly and visually appealing interfaces, ensuring your store aligns with your brand identity and engages your audience.',
			},
			{
				title: 'Development and Integration',
				description:
					'We build a robust e-commerce platform with custom features and seamless integration of third-party tools like payment gateways, CRMs, and APIs.',
			},
			{
				title: 'Testing and Quality Assurance',
				description:
					'We conduct thorough testing to identify and resolve any potential issues, ensuring a smooth and secure shopping experience for your customers.',
			},
			{
				title: 'Launch and Deployment',
				description:
					'Once everything is ready, we launch your e-Commerce platform, ensuring it performs seamlessly under real-world conditions.',
			},
			{
				title: 'Ongoing Support and Optimization',
				description:
					'Our team provides continuous support, updates, and optimizations to keep your online store competitive and user-friendly.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle: 'Answers to Your Key Questions About CLIX e-Commerce Solutions.',
		faqItems: [
			{
				question: 'How long does it take to develop an e-Commerce website?',
				answer:
					'The timeline varies based on the complexity of the project, but a typical e-Commerce website takes 4-8 weeks from design to launch.',
			},
			{
				question:
					'Can I integrate third-party tools like payment gateways or CRMs?',
				answer:
					"Absolutely! We specialize in seamless integration of third-party tools to enhance your platform's functionality and efficiency.",
			},
			{
				question: 'Will my e-Commerce site be optimized for search engines?',
				answer:
					'Yes, all our e-Commerce websites are built with SEO best practices to help your business rank higher in search engine results.',
			},
			{
				question: 'Do you offer post-launch support?',
				answer:
					'Yes, we provide ongoing support, updates, and optimizations to ensure your platform remains secure and performs flawlessly.',
			},
		],
	},
]

const technologies = [
	{ icon: '/icons/tech/CSS3.svg', name: 'CSS3' },
	{ icon: '/icons/tech/HTML5.svg', name: 'HTML5' },
	{ icon: '/icons/tech/PHP.svg', name: 'PHP' },
	{ icon: '/icons/tech/Nodejs.svg', name: 'Node.js' },
	{ icon: '/icons/tech/angular.svg', name: 'Angular' },
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

export default function EcommerceDevPage() {
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
						className='absolute right-7 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>
						Custom e-Commerce Web Development Services
					</h1>
					<p className='text-xl text-muted-foreground'>
						Enhance your e-Commerce presence with tailored solutions. Partner
						with us to elevate your business and achieve outstanding growth.
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
