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
		headTitle: 'Our Web3 development process',
		subTitle: 'Streamlined development to bring your Web3 vision to life.',
		processSteps: [
			{
				title: 'Discovery and Planning',
				description:
					'We analyze your project requirements, set clear goals, and craft a roadmap for your Web3 solution.',
			},
			{
				title: 'Smart Contract Development',
				description:
					'Our team develops secure and efficient smart contracts that form the foundation of your decentralized application.',
			},
			{
				title: 'dApp Design and Development',
				description:
					'We create visually appealing and user-friendly decentralized applications tailored to your business needs.',
			},
			{
				title: 'Integration and Testing',
				description:
					'Thoroughly integrating blockchain solutions with existing systems and conducting rigorous testing to ensure reliability.',
			},
			{
				title: 'Deployment and Support',
				description:
					'We deploy your Web3 solution and provide ongoing support to ensure optimal performance and scalability.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle: 'Everything you need to know about Web3 development.',
		faqItems: [
			{
				question: 'What is Web3?',
				answer:
					'Web3 is the next evolution of the internet, built on blockchain technology, enabling decentralized applications and user control over personal data.',
			},
			{
				question:
					'What are the advantages of Web3 over traditional web applications?',
				answer:
					'Web3 removes the need for central servers, giving users control over their data and enabling decentralized interactions without intermediaries, enhancing security and privacy.',
			},
			{
				question: 'How can CLIX assist in Web3 development?',
				answer:
					'CLIX offers Web3 development services, including blockchain integration, smart contract development, and decentralized app (DApp) design to create innovative, secure, and scalable solutions.',
			},
			{
				question: 'What technologies are used in Web3 development?',
				answer:
					'Web3 development typically involves blockchain platforms like Ethereum, smart contract languages such as Solidity, decentralized storage solutions, and Web3.js for integrating DApps with the blockchain.',
			},
			{
				question: 'What are smart contracts, and how do they work in Web3?',
				answer:
					'Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They run on the blockchain, ensuring transparency and automation of processes without third parties.',
			},
		],
	},
]

const services = [
	{
		title: 'dApps Development',
		href: '/services/d-app',
		description:
			'Develop tailored, scalable dApps for any industry, ensuring alignment with your unique project requirements, business objectives, and aspirations',
	},
	{
		title: 'Decentralized Finance (DeFi) Development',
		description:
			'Revolutionize traditional financial services like lending, borrowing, and trading with bespoke decentralized finance (DeFi) applications.',
	},
	{
		title: 'Cryptocurrency Wallet Development',
		href: '/services/crypto-wallet',
		description:
			'Design and build secure, multi-functional crypto wallets for managing, buying, exchanging, and staking Web3 assets—all in one intuitive platform.',
	},
	{
		title: 'NFT Development',
		description:
			'Our team delivers state-of-the-art NFT marketplaces, facilitating smooth trading and hosting live 3D auctions. Choose from our customizable, ready-to-deploy NFT marketplace solutions to fast-track your launch.',
	},
	{
		title: 'Web3 Smart Contract Development',
		href: '/services/smart-contract',
		description:
			'Leverage the expertise of our Web3 smart contract developers, who create secure and reliable contracts to form the backbone of your decentralized applications.',
	},
	{
		title: 'Decentralized Autonomous Organization (DAO) Development',
		description:
			'Establish blockchain-driven organizations managed by smart contracts, enabling a decentralized community to participate in governance and decision-making.',
	},
	{
		title: 'Web 3 Metaverse Development',
		description:
			'Create captivating metaverse platforms tailored to industries like gaming, real estate, fashion, social media, and more, driving immersive digital experiences.',
	},
	{
		title: 'Web3 Game Development',
		description:
			'Our Web3 development specialists combine advanced tools like Unreal Engine 5 and Unity to deliver next-gen games, setting new standards in the gaming industry.',
	},
]

export default function Web3Page() {
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
						className='absolute right-32 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>Web3 Development Services</h1>
					<p className='text-xl text-muted-foreground'>
						Empowering your vision with innovative Web3 development solutions.
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
