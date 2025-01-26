'use client'

import CaseStudiesSection from '@/components/services/CaseStudiesSection'
import ContactUsBottomSection from '@/components/services/ContactUsBottomSection'
import ContactUsSection from '@/components/services/ContactUsSection'
import BenefitsSection from '@/components/services/reused-components/BenefitsSection'
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

const benefitsSection = [
	{
		headTitle: 'Benefits of Fintech App Development',
		subTitle:
			'Unlock the potential of financial technology with a custom app designed to enhance your business operations and customer experience.',
		benefits: [
			{
				title: 'Improved Efficiency',
				description:
					'Fintech apps automate complex financial processes, reducing manual work and increasing the speed and accuracy of transactions.',
			},
			{
				title: 'Enhanced Security',
				description:
					'Our fintech apps integrate the latest security protocols, including encryption, multi-factor authentication, and secure APIs to protect sensitive data.',
			},
			{
				title: 'Cost Reduction',
				description:
					'By automating workflows and simplifying financial management, fintech apps help reduce operational costs for businesses.',
			},
			{
				title: 'Better User Experience',
				description:
					'Our apps are designed with a user-first approach, ensuring that your customers enjoy an intuitive, seamless experience when using your financial services.',
			},
			{
				title: 'Scalability',
				description:
					'Fintech apps are built to grow with your business, allowing you to easily scale up your offerings as your customer base and service demands expand.',
			},
		],
	},
]

const processSection = [
	{
		headTitle: 'Fintech app development process',
		subTitle:
			'From concept to launch, we ensure every step of your fintech app development is seamless, secure, and optimized',
		processSteps: [
			{
				title: 'Understanding Your Needs',
				description:
					'We start by thoroughly understanding your business goals, target audience, and financial requirements to tailor the most effective fintech solution for you.',
			},
			{
				title: 'Design & Prototyping',
				description:
					'Our design team creates intuitive and user-friendly prototypes that are fully aligned with your business objectives, ensuring a smooth user experience.',
			},
			{
				title: 'Development & Security Integration',
				description:
					'Our developers build your fintech app using the latest technologies, integrating robust security measures like encryption, authentication, and data protection.',
			},
			{
				title: 'Testing & Optimization',
				description:
					'We perform rigorous testing to ensure that your app is secure, functional, and efficient, optimizing performance across all devices and platforms.',
			},
			{
				title: 'Deployment & Support',
				description:
					'Once your fintech app is ready, we ensure a smooth deployment and provide ongoing support to maintain and update the app as needed.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Answers to common questions about fintech app development and how our services can support your financial business',
		faqItems: [
			{
				question: 'What features can be included in a fintech app?',
				answer:
					'Our fintech apps can include features like secure payments, digital wallets, fraud detection, AI-powered analytics, and more, tailored to your business needs.',
			},
			{
				question: 'How secure are your fintech apps?',
				answer:
					'We implement state-of-the-art security measures, such as end-to-end encryption, multi-factor authentication, and secure APIs, to protect user data and ensure safe transactions.',
			},
			{
				question: 'Can you integrate a fintech app with my existing system?',
				answer:
					'Yes, we can integrate your fintech app with your existing systems, ensuring a seamless experience and data flow between all your business tools and platforms.',
			},
			{
				question: 'How long does it take to develop a fintech app?',
				answer:
					'The development time depends on the complexity of the app and the features you require. We work with you to set a realistic timeline based on your needs.',
			},
		],
	},
]

const services = [
	{
		title: 'Custom Fintech Solutions',
		description:
			'Tailor-made financial technology applications designed to address your business challenges and deliver exceptional user experiences.',
	},
	{
		title: 'Payment Gateway Integration',
		description:
			'Seamlessly integrate secure and efficient payment processing solutions into your fintech applications, ensuring smooth transactions.',
	},
	{
		title: 'Robo-Advisory Platforms',
		description:
			'Develop intelligent platforms that provide automated, data-driven financial advice to your customers, enhancing decision-making.',
	},
	{
		title: 'Fraud Detection and Prevention',
		description:
			'Utilize advanced AI and machine learning algorithms to build systems that detect and mitigate fraudulent activities in real-time.',
	},
	{
		title: 'Digital Wallet Development',
		description:
			'Empower your users with secure, feature-rich digital wallets that support multiple currencies and seamless financial transactions.',
	},
	{
		title: 'RegTech Solutions',
		description:
			'Simplify compliance processes and ensure regulatory adherence with innovative RegTech applications tailored to your industry.',
	},
]

export default function FintechPage() {
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
						className='absolute right-36 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>Fintech app development</h1>
					<p className='text-xl text-muted-foreground'>
						Empowering your financial services with innovative, secure, and
						scalable fintech solutions
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
