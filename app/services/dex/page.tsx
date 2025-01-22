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

const processSection = [
	{
		headTitle: 'Our DEX Development Process',
		subTitle:
			'Step-by-step development of your decentralized exchange for secure and efficient trading.',
		processSteps: [
			{
				title: 'Strategic Planning & Research',
				description:
					'We analyze your business goals, define key features, and outline the best blockchain architecture for your DEX.',
			},
			{
				title: 'Smart Contract Development',
				description:
					'Our experts create secure, transparent, and efficient smart contracts to automate transactions and enforce trading rules.',
			},
			{
				title: 'DEX Platform Design & Development',
				description:
					'We design an intuitive and user-friendly interface, ensuring smooth navigation and an engaging trading experience.',
			},
			{
				title: 'Security Audits & Testing',
				description:
					'Comprehensive security checks, including vulnerability assessments and penetration testing, to ensure platform integrity.',
			},
			{
				title: 'Deployment & Ongoing Support',
				description:
					'After launch, we provide continuous monitoring, updates, and technical support to keep your DEX running efficiently.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Everything you need to know about launching and scaling your decentralized exchange.',
		faqItems: [
			{
				question: 'What is a Decentralized Exchange (DEX)?',
				answer:
					'A decentralized exchange (DEX) is a blockchain-powered trading platform that allows users to trade cryptocurrencies directly, without intermediaries, ensuring greater security and privacy.',
			},
			{
				question: 'How does a DEX differ from a centralized exchange?',
				answer:
					'Unlike centralized exchanges, DEX platforms operate without a middleman, providing users with full control over their funds and transactions through smart contracts.',
			},
			{
				question: 'What are the key benefits of launching a DEX?',
				answer:
					"A DEX offers enhanced security, user anonymity, lower transaction fees, and protection against hacks, as funds remain in users' wallets rather than on a centralized server.",
			},
			{
				question: 'How long does it take to develop a decentralized exchange?',
				answer:
					'The timeline depends on the complexity of the features. A basic DEX can be developed in a few months, while a custom-built solution with advanced integrations may take longer.',
			},
			{
				question: 'Can you integrate liquidity solutions into my DEX?',
				answer:
					'Yes, we offer liquidity integration services to ensure seamless trading, competitive pricing, and efficient order matching on your decentralized exchange.',
			},
		],
	},
]

const services = [
	{
		title: 'DEX Development',
		description:
			'At CLIX, we provide end-to-end DEX development solutions, combining cutting-edge blockchain technology with industry-leading expertise.',
	},
	{
		title: 'White-Label DEX',
		description:
			'Accelerate your launch with our customizable white-label DEX platform, reducing development costs and time while ensuring a seamless trading experience.',
	},
	{
		title: 'Crypto Exchange Scripts',
		description:
			'Quickly deploy your peer-to-peer crypto exchange with our ready-to-use decentralized exchange scripts, inspired by top-tier DEX platforms.',
	},
	{
		title: 'P2P Smart Contract Creation',
		description:
			'Enhance speed, security, and transparency with our smart contract-powered P2P trading solutions, eliminating reliance on third-party intermediaries.',
	},
	{
		title: 'DEX Integration',
		description:
			'Leverage blockchain’s full potential by integrating decentralized exchange capabilities into your existing business infrastructure with our expert DEX solutions.',
	},
	{
		title: 'Hybrid Exchange Development',
		description:
			'Already operating a centralized exchange? CLIX can integrate decentralized trading functionalities, providing a seamless hybrid exchange solution.',
	},
]

export default function DEXPage() {
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
						className='absolute right-12 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>
						Decentralized Exchange Development Services
					</h1>
					<p className='text-xl text-muted-foreground'>
						Building next-generation decentralized exchanges for secure,
						transparent, and autonomous trading experiences.
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
