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

const services = [
	{
		title: 'Crypto Wallet Development Services',
		href: '/services/crypto-wallet',
		description:
			'Enhance your business with a custom-built crypto wallet tailored to your specific needs, ensuring security and efficiency.',
	},
	{
		title: 'Cryptocurrency Exchange Development Services',
		href: '/services/crypto-exchange',
		description:
			'Develop innovative software for seamless cryptocurrency transactions, enabling users to buy, sell, exchange, and trade with ease.',
	},
	{
		title: 'Smart Contract Development Services',
		href: '/services/smart-contract',
		description:
			'Take your business to the next level with cutting-edge solutions that ensure transparent and efficient financial transactions.',
	},
	{
		title: 'Blockchain Development Consulting',
		href: '/services/blockchain-consulting',
		description:
			'Gain a competitive advantage with expert blockchain consulting, reducing R&D costs and accelerating innovation.',
	},
	{
		title: 'Decentralized Exchange Development',
		href: '/services/dex',
		description:
			'Create a fully functional Decentralized Exchange (DEX) with the expertise of our blockchain specialists, backed by deep industry knowledge.',
	},
	{
		title: 'Web3 Development Services',
		href: '/services/web3',
		description:
			'Leverage Web3 technology to build secure, accountable, and transparent digital solutions for your project.',
	},
]

const processSection = [
	{
		headTitle: 'Our Blockchain Development Process',
		subTitle:
			'From concept to deployment, we ensure a seamless blockchain integration tailored to your business needs.',
		processSteps: [
			{
				title: 'Discovery & Planning',
				description:
					'We analyze business needs, identify blockchain opportunities, and create a roadmap for development.',
			},
			{
				title: 'Architecture Design',
				description:
					'We define the system structure, select the best blockchain platform, and establish security protocols.',
			},
			{
				title: 'Smart Contracts Development',
				description:
					'Our team builds secure and efficient smart contracts to automate and streamline business processes.',
			},
			{
				title: 'Integration & Testing',
				description:
					'We integrate blockchain solutions into your existing system and conduct rigorous security testing.',
			},
			{
				title: 'Deployment & Maintenance',
				description:
					'We ensure smooth deployment and provide ongoing support for optimal performance and scalability.',
			},
		],
	},
]

const technologies = [
	{ icon: '/icons/tech/rust.svg', name: 'Rust' },
	{ icon: '/icons/tech/python.svg', name: 'Python' },
	{ icon: '/icons/tech/web3js.svg', name: 'Web3.js' },
	{ icon: '/icons/tech/ethers.svg', name: 'Ethers.js' },
	{ icon: '/icons/tech/Solidity.svg', name: 'Solidity' },
	{ icon: '/icons/tech/openzeppelin.svg', name: 'OpenZeppelin' },
	{ icon: '/icons/tech/truffle.svg', name: 'Truffle' },
	{ icon: '/icons/tech/Hardhat.svg', name: 'HardHat' },
	{ icon: '/icons/tech/infura.svg', name: 'Infura' },
	{ icon: '/icons/tech/alchemy.svg', name: 'Alchemy' },
	{ icon: '/icons/tech/quicknode.svg', name: 'Quicknode' },
	{ icon: '/icons/tech/ganache.svg', name: 'Ganache' },
	{ icon: '/icons/tech/ethereum.svg', name: 'Geth' },
	{ icon: '/icons/tech/chainlink.svg', name: 'Chainlink' },
	{ icon: '/icons/tech/pinata.png', name: 'Pinata' },
	{ icon: '/icons/tech/metamask.svg', name: 'Metamask' },
	{ icon: '/icons/tech/walletconnect.svg', name: 'Walletconnect' },
]

const benefitsSection = [
	{
		headTitle: 'Benefits of Blockchain Development Solutions',
		subTitle:
			'Discover the key advantages of implementing blockchain technology into your business.',
		benefits: [
			{
				title: 'Enhanced Security',
				description:
					'Blockchain ensures data integrity, reducing fraud and unauthorized access.',
			},
			{
				title: 'Decentralization',
				description:
					'Eliminate intermediaries, enhancing transparency and control over transactions.',
			},
			{
				title: 'Cost Efficiency',
				description:
					'Automated processes and smart contracts lower operational expenses.',
			},
			{
				title: 'Improved Traceability',
				description:
					'Track transactions and data flows with immutable blockchain records.',
			},
			{
				title: 'Faster Transactions',
				description:
					'Eliminate delays with real-time processing of cross-border payments.',
			},
			{
				title: 'Smart Contracts',
				description:
					'Enable self-executing agreements without third-party involvement.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Get clear insights into our blockchain development process and solutions.',
		faqItems: [
			{
				question: 'How long does it take to develop a blockchain solution?',
				answer:
					'The development timeline depends on the project’s complexity. On average, an MVP can be launched in 3–6 months, while a full-scale solution may take 6 months or longer.',
			},
			{
				question: 'Can blockchain be integrated into an existing system?',
				answer:
					'Yes! We customize blockchain solutions to fit your existing business processes, ensuring compatibility and security.',
			},
			{
				question: 'What technologies do you use for blockchain development?',
				answer:
					'We work with Ethereum, Hyperledger, Solana, Binance Smart Chain, and other leading platforms. The choice depends on your specific requirements.',
			},
			{
				question: 'How much does blockchain development cost?',
				answer:
					'The cost depends on the scale and functionality of the project. We offer flexible pricing models, including fixed-rate and hourly billing.',
			},
		],
	},
]

export default function BlockchainDevPage() {
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
						Blockchain Development Services
					</h1>
					<p className='text-xl text-muted-foreground'>
						Empowering businesses with cutting-edge software solutions tailored
						for diverse industries.
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
