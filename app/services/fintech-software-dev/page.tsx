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
	{ icon: '/icons/tech/swift.svg', name: 'Swift' },
	{ icon: '/icons/tech/java.svg', name: 'Java' },
	{ icon: '/icons/tech/objectivec.svg', name: 'Objective-c' },
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

const processSection = [
	{
		headTitle: 'Fintech software development process',
		subTitle:
			'Step into the future of finance with a seamless and innovative development process tailored to your unique goals.',
		processSteps: [
			{
				title: 'Understanding Your Vision',
				description:
					'We begin with a deep dive into your business objectives and customer needs to craft a solution that aligns perfectly with your goals.',
			},
			{
				title: 'Prototyping and Design',
				description:
					'Our team creates user-centric designs and prototypes to ensure your fintech application is intuitive, engaging, and visually appealing.',
			},
			{
				title: 'Secure and Scalable Development',
				description:
					'We implement robust security measures and scalable architecture to deliver a future-proof fintech solution.',
			},
			{
				title: 'Rigorous Testing',
				description:
					'Every feature undergoes thorough testing to ensure flawless performance, compliance, and a seamless user experience.',
			},
			{
				title: 'Launch and Beyond',
				description:
					'From deployment to ongoing support, we’re with you every step of the way, ensuring your solution adapts to evolving market demands.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Find answers to the most common questions about creating secure, innovative, and efficient fintech solutions.',
		faqItems: [
			{
				question:
					'How does CLIX ensure the security of my fintech application?',
				answer:
					'We employ advanced security protocols such as encryption, multi-factor authentication, and AI-driven fraud detection to safeguard sensitive financial data.',
			},
			{
				question: 'Can you integrate blockchain technology into my project?',
				answer:
					'Absolutely! Our team has extensive experience with blockchain development, including smart contracts, NFT creation, and cryptocurrency exchange integration.',
			},
			{
				question:
					'What industries do you cater to with your fintech solutions?',
				answer:
					'We provide tailored fintech solutions for various sectors, including banking, insurance, investment, and personal finance management.',
			},
			{
				question: 'What post-launch support does CLIX offer?',
				answer:
					'We offer comprehensive post-launch support, including regular updates, bug fixes, performance optimization, and feature enhancements.',
			},
		],
	},
]

const services = [
	{
		title: 'Complex authentication systems',
		description:
			'Implement multi-layered security protocols with cutting-edge technologies like biometric authentication and AI-driven fraud detection to protect sensitive financial data.',
	},
	{
		title: 'Crypto and DeFi applications',
		description:
			'Empower your customers with blockchain capabilities—ranging from crypto borrowing and lending to smart contracts, NFT creation, and secure cryptocurrency exchanges.',
	},
	{
		title: 'Calculators for managing loans, taxes, mortgages',
		description:
			'Provide users with intuitive tools to manage budgets effectively, track spending, and cultivate healthy financial habits for better long-term outcomes.',
	},
	{
		title: 'Payment automation systems',
		description:
			'Streamline payment operations with the latest technologies, ensuring fast, secure, and user-friendly transactions for all parties involved.',
	},
	{
		title: 'Financial management solutions',
		description:
			'Equip your users with powerful solutions for planning, tracking, optimizing, and forecasting their financial activities—be it for personal finance or corporate needs.',
	},
	{
		title: 'Digital wallets',
		description:
			'Give users a secure and versatile wallet to store electronic money, payment cards, loyalty points, and more, all accessible from a single platform.',
	},
	{
		title: 'Stock trading software',
		description:
			'Open the door to global financial markets with real-time trading solutions, offering a seamless and secure investing experience for users.',
	},
	{
		title: 'Lending software',
		description:
			'From peer-to-peer lending to comprehensive business loan management, our software delivers modern financing tools for a competitive edge.',
	},
	{
		title: 'Mobile banking',
		description:
			'Develop neobanking platforms that offer secure and effortless financial management, enabling users to access their accounts and transactions from any device.',
	},
	{
		title: 'Data analytics',
		description:
			'Harness the power of big data and advanced analytics to conduct in-depth investigations, improving the efficiency, reliability, and security of your fintech app.',
	},
]

export default function FintechSoftwareDevPage() {
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
						Fintech software development services
					</h1>
					<p className='text-xl text-muted-foreground'>
						Transform the future of finance with tailored software solutions
						that enhance security, scalability, and user experience.
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
