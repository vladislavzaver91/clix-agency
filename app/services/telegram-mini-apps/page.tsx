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
import TypesOfSection from '@/components/services/TypesOfSection'
import WhyWe from '@/components/services/WhyWeSection'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { motion } from 'framer-motion'

const technologies = [
	{ icon: '/icons/tech/PHP.svg', name: 'PHP' },
	{ icon: '/icons/tech/Nodejs.svg', name: 'Node.js' },
	{ icon: '/icons/tech/python.svg', name: 'Python' },
	{ icon: '/icons/tech/React.svg', name: 'React.js' },
	{ icon: '/icons/tech/vuejs.svg', name: 'Vue.js' },
	{ icon: '/icons/tech/Solidity.svg', name: 'Solidity' },
]

const processSection = [
	{
		headTitle: 'Our telegram mini apps development process',
		subTitle:
			'Streamlining the development of your telegram mini apps: our proven.',
		processSteps: [
			{
				title: 'Consultation & Planning',
				description:
					'We begin by understanding your unique requirements and goals, providing expert consultation to outline the most efficient and effective approach to building your Telegram Mini App.',
			},
			{
				title: 'Design & Prototyping',
				description:
					'Our team designs intuitive and user-friendly interfaces, ensuring your app adheres to Telegram’s design principles, followed by the creation of interactive prototypes to visualize the user experience.',
			},
			{
				title: 'Development & Integration',
				description:
					'The development process begins with coding your Telegram Mini App, followed by seamless integration with Telegram’s APIs to ensure full functionality, smooth performance, and secure data management.',
			},
			{
				title: 'Testing & Quality Assurance',
				description:
					'We conduct thorough testing to ensure your Mini App is bug-free, stable, and performs as expected, with a focus on functionality, security, and compatibility across different devices and Telegram versions.',
			},
			{
				title: 'Deployment & Maintenance',
				description:
					'Once the app is fully developed and tested, we deploy it within Telegram and provide ongoing maintenance and updates to keep the app running smoothly and ensure it evolves with platform changes.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Everything you need to know about our Telegram Mini Apps Development Services Services',
		faqItems: [
			{
				question: 'What are Telegram Mini Apps?',
				answer:
					'Telegram Mini Apps are lightweight applications that run directly within the Telegram platform, offering a wide range of functionalities without the need for external apps or websites.',
			},
			{
				question:
					'How can CLIX help develop a custom Telegram Mini App for my business?',
				answer:
					'CLIX provides end-to-end development services for Telegram Mini Apps, from consultation and planning to design, coding, and deployment, ensuring the app is fully customized to meet your business needs.',
			},
			{
				question:
					'Can Telegram Mini Apps integrate with other services or platforms?',
				answer:
					'Yes, CLIX ensures that your Telegram Mini App can integrate seamlessly with other services, APIs, and platforms to enhance its functionality and provide a more robust user experience.',
			},
			{
				question:
					'What are the benefits of using Telegram Mini Apps for my business?',
				answer:
					'Telegram Mini Apps provide a seamless and engaging experience within Telegram itself, helping to reach a broader audience, reduce friction for users, and streamline business operations directly in the app.',
			},
			{
				question: 'How long does it take to develop a Telegram Mini App?',
				answer:
					'The development timeline varies based on the complexity of your project. CLIX works closely with clients to define the scope and deliver a fully functional Telegram Mini App within a reasonable timeframe, ensuring quality and performance.',
			},
		],
	},
]

const services = [
	{
		title: 'Consulting services',
		description:
			'At CLIX, we provide expert consulting to optimize your Telegram Mini Apps, ensuring that your app fully leverages Telegram’s features for optimal performance and engagement.',
	},
	{
		title: 'Custom Mini App development',
		description:
			'CLIX specializes in developing tailored Telegram Mini Apps, from custom decentralized exchanges (DEXes) to games, TON wallets, utilities, and other innovative solutions designed specifically for the Telegram platform.',
	},
	{
		title: 'Telegram bot creation',
		description:
			'CLIX’s Telegram Mini App development includes building interactive and intelligent chatbots, which are seamlessly integrated to provide a more personalized, engaging, and responsive user experience.',
	},
	{
		title: 'Migration to Mini Apps on Telegram',
		description:
			'CLIX can assist you in migrating your existing mobile app to Telegram, allowing you to tap into Telegram’s vast and active user base for greater visibility and interaction.',
	},
	{
		title: 'Outstanding UX/UI design',
		description:
			'Our design experts at CLIX create visually appealing and user-friendly interfaces that align with Telegram’s Mini Apps guidelines, ensuring both usability and a seamless user experience.',
	},
]

export default function TelegramMiniAppsPage() {
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
						Telegram Mini Apps Development
					</h1>
					<p className='text-xl text-muted-foreground'>
						Elevate Your Business with Custom Telegram Mini Apps by CLIX
					</p>
				</motion.div>

				<ServicesSection services={services} />
				<RevealOnScroll>
					<TypesOfSection />
				</RevealOnScroll>
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
