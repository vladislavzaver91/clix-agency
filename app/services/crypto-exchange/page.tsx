'use client'

import BenefitsHeadingSection from '@/components/services/BenefitsHeadingSection'
import CaseStudiesSection from '@/components/services/CaseStudiesSection'
import ContactUsBottomSection from '@/components/services/ContactUsBottomSection'
import ContactUsSection from '@/components/services/ContactUsSection'
import FAQSection from '@/components/services/reused-components/FAQSection'
import HowWeWorkSection from '@/components/services/reused-components/HowWeWorkSection'
import ServicesSection from '@/components/services/reused-components/ServicesSection'
import StepsSection from '@/components/services/reused-components/StepsSection'
import TestimonialsSection from '@/components/services/TestimonialsSection'
import WhyWe from '@/components/services/WhyWeSection'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { motion } from 'framer-motion'

const services = [
	{
		title: 'Centralized Exchange Development',
		description:
			'Develop an intuitive platform tailored for traders who value simplicity, ease of use, and high liquidity',
	},
	{
		title: 'Decentralized Exchange Development',
		href: '/services/dex',
		description:
			'Launch your own DEX with a strong focus on user control, privacy, and top-tier security.',
	},
	{
		title: 'P2P Exchange Development',
		description:
			'Build a decentralized Peer-to-Peer platform for seamless cryptocurrency trading without intermediaries.',
	},
	{
		title: 'Binance-Like Exchange Development',
		description:
			'Design and develop a cutting-edge exchange platform with advanced features, inspired by industry leaders like Binance.',
	},
	{
		title: 'White Label Crypto Exchange Development',
		description:
			'Create a ready-to-deploy solution that enables you to quickly launch your crypto exchange without starting from scratch.',
	},
	{
		title: 'Security Token Exchange Development',
		description:
			'Empower your business with a secure, compliant, and high-performance trading infrastructure for maximum potential.',
	},
]

const faqSection = [
	{
		subTitle:
			'Everything you need to know about launching a secure and scalable cryptocurrency exchange with CLIX.',
		faqItems: [
			{
				question: 'What types of cryptocurrency exchanges can you develop?',
				answer:
					'We build various types of exchanges, including centralized (CEX), decentralized (DEX), peer-to-peer (P2P), and hybrid models tailored to your business needs.',
			},
			{
				question:
					'How do you ensure the security of a cryptocurrency exchange?',
				answer:
					'We implement multi-layer security measures, including encryption, two-factor authentication, cold storage, and anti-DDoS protection to safeguard assets and transactions.',
			},
			{
				question: 'Can you integrate fiat payment gateways into the exchange?',
				answer:
					'Yes, we can integrate multiple fiat payment gateways, allowing users to buy and sell cryptocurrencies using traditional banking methods.',
			},
			{
				question: 'How long does it take to develop a cryptocurrency exchange?',
				answer:
					'The development timeline depends on the complexity of the project, but on average, it takes between 3 to 6 months for a fully functional exchange.',
			},
			{
				question: 'Do you offer post-launch support and maintenance?',
				answer:
					'Absolutely! We provide continuous support, updates, security enhancements, and scalability improvements to ensure smooth operations.',
			},
		],
	},
]

const processSection = [
	{
		headTitle: 'Our Development Process',
		subTitle:
			'From concept to deployment, we transform your vision into scalable and secure blockchain solutions.',
		processSteps: [
			{
				title: 'Strategic Planning',
				description:
					'We analyze your business needs and craft a tailored blockchain strategy to maximize efficiency and innovation.',
			},
			{
				title: 'Architecture & Design',
				description:
					'Our experts define the system architecture, ensuring security, scalability, and seamless integration with your ecosystem.',
			},
			{
				title: 'Blockchain Development',
				description:
					'We build and implement secure smart contracts, DApps, and blockchain infrastructures tailored to your requirements.',
			},
			{
				title: 'Testing & Optimization',
				description:
					'Rigorous testing and performance optimization guarantee stability, security, and smooth operation.',
			},
			{
				title: 'Deployment & Support',
				description:
					'We ensure a seamless launch and provide ongoing maintenance, updates, and scalability enhancements.',
			},
		],
	},
]

export default function CryptoExchangePage() {
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
						className='absolute right-8 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>
						Cryptocurrency Exchange Development Services
					</h1>
					<p className='text-xl text-muted-foreground'>
						Build seamless and secure software for effortless crypto
						transactions—buy, sell, exchange, and trade with confidence.
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
					<FAQSection faq={faqSection} />
				</RevealOnScroll>
				<RevealOnScroll>
					<ContactUsBottomSection />
				</RevealOnScroll>
			</div>
		</motion.div>
	)
}
