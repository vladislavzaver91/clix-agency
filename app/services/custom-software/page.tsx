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

const processSection = [
	{
		headTitle: 'Our Custom Development Process',
		subTitle:
			'From concept to deployment — a structured approach to your unique software solution.',
		processSteps: [
			{
				title: 'Initial Consultation',
				description:
					'We start by understanding your business requirements, challenges, and goals to create a comprehensive development strategy tailored to your needs.',
			},
			{
				title: 'Planning and Prototyping',
				description:
					"Our team designs wireframes and prototypes to visualize the software's functionality and ensure alignment with your vision before moving to development.",
			},
			{
				title: 'Agile Development',
				description:
					'Using an agile methodology, we develop your custom solution in iterative cycles, incorporating your feedback to deliver a high-quality product.',
			},
			{
				title: 'Testing and Optimization',
				description:
					'We rigorously test the software to ensure its reliability, performance, and security, making any necessary adjustments for optimal functionality.',
			},
			{
				title: 'Deployment and Support',
				description:
					'Once deployed, we provide continuous support and updates to keep your software running smoothly and meeting your evolving business needs.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Answers to your questions about custom software development with CLIX',
		faqItems: [
			{
				question:
					'What industries do you specialize in for custom software development?',
				answer:
					'At CLIX, we work with a wide range of industries, including healthcare, finance, e-commerce, education, and more. Our expertise allows us to create solutions tailored to the specific needs of any business domain.',
			},
			{
				question: 'How long does it take to develop custom software?',
				answer:
					'The development timeline varies depending on the complexity of the project. On average, it takes between 3 to 12 months, including design, development, testing, and deployment phases.',
			},
			{
				question:
					'Can you integrate custom software with our existing systems?',
				answer:
					'Yes, we ensure seamless integration with your current infrastructure, including CRMs, ERPs, and third-party APIs, to enhance your operations without disruptions.',
			},
			{
				question: 'How do you ensure the security of the software you develop?',
				answer:
					'We implement robust security measures such as data encryption, regular audits, and compliance with industry standards to protect your software from vulnerabilities and unauthorized access.',
			},
			{
				question: 'Do you offer post-deployment support and updates?',
				answer:
					'Absolutely. We provide ongoing support, maintenance, and updates to ensure your software continues to meet your evolving business needs and remains reliable over time.',
			},
		],
	},
]

const services = [
	{
		title: 'Custom CRM Development Services',
		href: '/services/crm',
		description:
			'We design custom software to streamline your business operations and ensure seamless process automation, perfectly aligned with your goals.',
	},
	{
		title: 'Fintech software development services',
		href: '/services/fintech-software-dev',
		description:
			'Leverage the expertise of our skilled professionals to propel your business forward and unlock its full potential.',
	},
	{
		title: 'Blockchain development services',
		href: '/services/blockchain-dev',
		description:
			'Harness the power of blockchain technology with our cutting-edge solutions tailored to your specific needs.',
	},
	{
		title: 'IT Outstaffing services',
		href: '/services/it-outstaffing',
		description:
			'Collaborate with our seasoned specialists to optimize team performance and achieve outstanding results.',
	},
	{
		title: 'Outsourcing software development',
		href: '/services/outsourcing',
		description:
			'Delegate your software development tasks to us and gain valuable time, reduce costs, and maximize efficiency.',
	},
	{
		title: 'Medical & Healthcare Website Development',
		href: '/services/medical-healthcare-web-dev',
		description:
			'Let us develop secure, dependable software for your healthcare initiatives, ensuring data protection and smooth operational workflows.',
	},
	{
		title: 'Custom Ecommerce Web Development Services',
		href: '/services/ecommerce-dev',
		description:
			'Enhance your sales pipeline and attract more customers with intuitive, user-centric software solutions.',
	},
]

export default function CustomSoftwarePage() {
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
						Custom Software Development Services
					</h1>
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
