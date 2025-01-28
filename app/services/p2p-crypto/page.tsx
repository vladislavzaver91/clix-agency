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
	{ icon: '/icons/tech/Nodejs.svg', name: 'Node.js' },
	{ icon: '/icons/tech/React.svg', name: 'React.js' },
	{ icon: '/icons/tech/vuejs.svg', name: 'Vue.js' },
	{ icon: '/icons/tech/web3js.svg', name: 'Web3.js' },
	{ icon: '/icons/tech/ethers.svg', name: 'Ethers.js' },
	{ icon: '/icons/tech/alchemy.svg', name: 'Alchemy' },
]

const benefitsSection = [
	{
		headTitle: 'Benefits of the P2P exchange development',
		subTitle:
			'Unleashing the potential of peer-to-peer trading with innovative, secure, and user-centric solutions.',
		benefits: [
			{
				title: 'Enhanced Security',
				description:
					'Protect transactions with advanced encryption protocols, decentralized architecture, and escrow mechanisms for maximum user trust.',
			},
			{
				title: 'Cost-Efficiency',
				description:
					'Minimize operational expenses by eliminating intermediaries, ensuring cost-effective transactions for users and operators.',
			},
			{
				title: 'Global Accessibility',
				description:
					'Empower users worldwide with a decentralized platform that supports multi-currency trading and seamless cross-border transactions.',
			},
			{
				title: 'Full Transparency',
				description:
					'Utilize blockchain technology to ensure transaction traceability, fostering trust and accountability between trading parties.',
			},
			{
				title: 'Customizable Features',
				description:
					'Build a tailored solution with CLIX, integrating unique functionalities like automated KYC, dispute resolution, and real-time analytics.',
			},
			{
				title: 'Scalable Infrastructure',
				description:
					'Future-proof your platform with a robust architecture designed to handle increasing user demand and transaction volumes effortlessly.',
			},
		],
	},
]

const processSection = [
	{
		headTitle: 'P2P crypto exchange development process',
		subTitle:
			'From concept to launch: Our streamlined approach to P2P crypto exchange development.',
		processSteps: [
			{
				title: 'Requirement Analysis',
				description:
					"Collaborate with our team to identify your platform's specific needs, target audience, and desired features for a seamless trading experience.",
			},
			{
				title: 'Design & Prototyping',
				description:
					'Create intuitive and visually appealing UI/UX designs that enhance user engagement and simplify the trading process.',
			},
			{
				title: 'Custom Development',
				description:
					'Develop a fully customized P2P exchange platform, integrating essential features like escrow services, digital wallets, and secure payment gateways.',
			},
			{
				title: 'Quality Assurance',
				description:
					'Perform rigorous testing to ensure platform security, reliability, and scalability, eliminating potential vulnerabilities.',
			},
			{
				title: 'Launch & Support',
				description:
					'Deploy your P2P exchange and provide ongoing maintenance and updates to keep your platform running efficiently.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Answers to your key questions about P2P crypto exchange development.',
		faqItems: [
			{
				question: 'What is a P2P crypto exchange?',
				answer:
					'A P2P crypto exchange allows users to trade cryptocurrencies directly with one another without intermediaries, using an escrow system to ensure transaction security.',
			},
			{
				question:
					'How long does it take to develop a P2P crypto exchange platform?',
				answer:
					'The development timeline typically ranges from 4 to 6 months, depending on the complexity of the features and customizations required.',
			},
			{
				question: 'What features are essential for a P2P crypto exchange?',
				answer:
					'Key features include an escrow mechanism, user authentication, digital wallets, secure payment gateways, multi-currency support, and an intuitive interface.',
			},
			{
				question: 'How do you ensure the security of the platform?',
				answer:
					'We implement advanced security measures such as end-to-end encryption, two-factor authentication, and robust smart contract development to safeguard user assets and data.',
			},
			{
				question:
					'Can the platform support both fiat and cryptocurrency transactions?',
				answer:
					'Yes, we integrate payment gateways to enable smooth fiat-to-crypto conversions alongside traditional cryptocurrency transactions.',
			},
			{
				question: 'What post-launch support do you provide?',
				answer:
					'We offer ongoing support, including maintenance, updates, and the addition of new features to keep your platform competitive and secure.',
			},
		],
	},
]

const services = [
	{
		title: 'Blockchain Development Consulting',
		href: '/services/blockchain-consulting',
		description:
			'Expert blockchain consulting to accelerate development, cut costs, and gain a competitive advantage.',
	},
	{
		title: 'Mobile App Development',
		href: '/services/mob-app',
		description:
			'We develop iOS and Android mobile applications focused on usability, speed, and maximum user engagement.',
	},
	{
		title: 'Web Development',
		href: '/services/web-dev',
		description:
			'We create modern, responsive, and high-performance websites for any purpose — from landing pages to complex web applications.',
	},
	{
		title: 'Smart Contract development',
		href: '/services/smart-contract',
		description:
			'Leverage cutting-edge technology to ensure fast, transparent, and efficient crypto transactions for your users.',
	},
	{
		title: 'Escrow system integration',
		description:
			'Incorporate a robust escrow system into your platform to ensure the security of digital assets during transactions, building trust among users.',
	},
	{
		title: 'Digital wallets',
		href: '/services/crypto-wallet',
		description:
			'Seamlessly integrate digital wallets and payment gateways to enable hassle-free fiat-to-crypto conversions and safe asset storage.',
	},
	{
		title: 'IT Outstaffing Services',
		href: '/services/it-outstaffing',
		description:
			'Enhance your team with top-tier IT specialists from Clix Agency, seamlessly integrating skilled professionals into your projects.',
	},
	{
		title: 'Outsourcing Software Development',
		href: '/services/outsourcing',
		description:
			'We provide access to a team of professional developers who can help bring your project to life quickly and efficiently.',
	},
]

export default function P2PCryptoPage() {
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
						className='absolute right-16 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>
						P2P crypto exchange development
					</h1>
					<p className='text-xl text-muted-foreground'>
						Revolutionize peer-to-peer cryptocurrency trading with custom
						solutions tailored for seamless transactions.
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
