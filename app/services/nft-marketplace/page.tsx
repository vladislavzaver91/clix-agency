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
import TopUseCasesSection from '@/components/services/TopUseCasesSection'
import WhyWe from '@/components/services/WhyWeSection'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { motion } from 'framer-motion'

const technologies = [
	{ icon: '/icons/tech/Nodejs.svg', name: 'Node.js' },
	{ icon: '/icons/tech/React.svg', name: 'React.js' },
	{ icon: '/icons/tech/vuejs.svg', name: 'Vue.js' },
	{ icon: '/icons/tech/web3js.svg', name: 'Web3.js' },
	{ icon: '/icons/tech/ethers.svg', name: 'Ethers.js' },
	{ icon: '/icons/tech/Solidity.svg', name: 'Solidity' },
	{ icon: '/icons/tech/openzeppelin.svg', name: 'OpenZeppelin' },
	{ icon: '/icons/tech/alchemy.svg', name: 'Alchemy' },
	{ icon: '/icons/tech/pinata.png', name: 'Pinata' },
]

const benefitsSection = [
	{
		headTitle: 'Benefits of the NFT marketplace development',
		subTitle:
			'Unlock the Power of NFT Marketplaces: Key Benefits for Your Business.',
		benefits: [
			{
				title: 'Increased Revenue Streams',
				description:
					'By creating an NFT marketplace, businesses can tap into new revenue streams through transaction fees, token sales, and other digital assets.',
			},
			{
				title: 'Enhanced User Control',
				description:
					'NFT marketplaces offer users complete ownership of their digital assets, giving them more control over their investments and trades.',
			},
			{
				title: 'Transparency and Security',
				description:
					'Blockchain technology ensures transparent and immutable records of all transactions, enhancing trust and security for users and creators.',
			},
			{
				title: 'Global Reach',
				description:
					'NFT marketplaces can attract a global audience, providing a platform for creators, collectors, and investors worldwide to engage and trade.',
			},
			{
				title: 'Customizable Features',
				description:
					'Developing an NFT marketplace tailored to your business allows you to integrate custom features such as auctions, bidding systems, and exclusive sales.',
			},
			{
				title: 'Innovative Monetization Models',
				description:
					'NFT marketplaces offer unique monetization opportunities through royalties, enabling creators to earn from secondary market sales.',
			},
			{
				title: 'Scalability and Flexibility',
				description:
					'NFT marketplaces can be easily scaled to accommodate increasing user demand, supporting a wide range of assets and features as your platform grows.',
			},
			{
				title: 'Decentralization',
				description:
					'Decentralized NFT marketplaces provide users with more autonomy, reducing the need for intermediaries and fostering a peer-to-peer ecosystem.',
			},
			{
				title: 'Ownership of Digital Assets',
				description:
					'NFTs empower users by providing verifiable ownership of digital assets, enhancing the value of collectibles, art, and other items.',
			},
			{
				title: 'Integration with Metaverse',
				description:
					'NFT marketplaces can be seamlessly integrated with Metaverse platforms, enabling the trade of virtual assets and enhancing the digital experience.',
			},
			{
				title: 'Efficient Transactions',
				description:
					'Blockchain technology ensures fast, secure, and low-cost transactions, making NFT trading more efficient for users and creators.',
			},
			{
				title: 'Community Engagement',
				description:
					'NFT marketplaces foster vibrant communities, allowing creators and users to interact, collaborate, and participate in exclusive events.',
			},
		],
	},
]

const processSection = [
	{
		headTitle: 'NFT Marketplace development process',
		subTitle: 'Streamlining success: our NFT marketplace development process',
		processSteps: [
			{
				title: 'Requirements Gathering',
				description:
					'We begin by understanding your business needs and goals to create a customized NFT marketplace that meets your vision and technical requirements.',
			},
			{
				title: 'Platform Design and Development',
				description:
					'Our team designs a user-friendly, scalable, and secure NFT marketplace, incorporating features like wallet integration, auction systems, and tokenization.',
			},
			{
				title: 'Smart Contract Development and Integration',
				description:
					'We build and deploy secure smart contracts, ensuring your marketplace runs on a reliable and transparent blockchain, empowering users to trade NFTs seamlessly.',
			},
			{
				title: 'Testing and Launch',
				description:
					'We rigorously test the platform to ensure it functions flawlessly. After final optimizations, we launch the marketplace, ensuring smooth onboarding for users.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle: 'Frequently Asked Questions about NFT Marketplace Development',
		faqItems: [
			{
				question: 'What is an NFT marketplace?',
				answer:
					'An NFT marketplace is a platform where users can create, buy, sell, and trade Non-Fungible Tokens (NFTs), which represent ownership of digital assets like art, music, or collectibles.',
			},
			{
				question: 'How long does it take to develop an NFT marketplace?',
				answer:
					'The development time for an NFT marketplace depends on the complexity of the project, the features required, and the blockchain platform chosen. Typically, it can take from a few months to several months.',
			},
			{
				question:
					'Which blockchain platform should I choose for my NFT marketplace?',
				answer:
					'The most popular blockchains for NFT marketplaces are Ethereum, Solana, and Binance Smart Chain. The choice depends on factors like transaction speed, fees, and the specific needs of your project.',
			},
			{
				question: 'How secure is an NFT marketplace?',
				answer:
					'Security is a top priority in our NFT marketplace development process. We implement advanced security protocols, including smart contract audits, wallet integration, and encryption to protect user data and assets.',
			},
			{
				question: 'Can I create a custom NFT marketplace for my business?',
				answer:
					'Yes, our team at CLIX specializes in developing fully customizable NFT marketplaces that align with your business goals, providing tailored features and seamless integration.',
			},
		],
	},
]

const services = [
	{
		title: 'Decentralized NFT marketplace',
		description:
			'Our NFT marketplace development services empower your platform users with greater autonomy, while enhancing transparency and control over their digital assets.',
	},
	{
		title: 'Metaverse NFT marketplace',
		description:
			"Elevate your NFT marketplace with CLIX's bespoke solutions for creating interactive and immersive Metaverse NFT marketplaces, tailored to meet modern user demands.",
	},
	{
		title: 'Smart contracts for NFTs',
		description:
			'Trust our expertise in smart contract development and security audits to ensure a safe and reliable NFT ecosystem, where all transactions are secure and transparent.',
	},
	{
		title: 'Non-fungible tokens creation',
		description:
			'Our NFT marketplace developers will incorporate token creation capabilities into your platform, allowing users to tokenize their assets effortlessly and manage their digital collectibles.',
	},
	{
		title: 'Decentralized NFT wallet',
		href: '/services/crypto-wallet',
		description:
			'We offer decentralized NFT storage solutions that streamline the management of NFT data, including media like videos, audio, and images, while maintaining full security and ownership.',
	},
	{
		title: 'Ethereum NFT marketplace development',
		description:
			'As Ethereum remains the dominant platform for NFTs, CLIX specializes in Ethereum NFT marketplace development, providing a thriving, user-friendly space for your digital assets.',
	},
	{
		title: 'Smart contract development',
		href: '/services/smart-contract',
		description:
			'Our experienced developers build secure and efficient Solidity smart contracts that unlock the full potential of your NFT project, ensuring scalability and reliability.',
	},
	{
		title: 'Solana NFT marketplace development',
		description:
			"With Solana's rapid transaction speeds and low fees, CLIX offers top-tier Solana NFT marketplace development services, enabling you to create a fast and cost-efficient platform for your NFT ecosystem.",
	},
]

export default function NFTMarketplacePage() {
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
						NFT marketplace development services
					</h1>
					<p className='text-xl text-muted-foreground'>
						Build a Profitable and Scalable NFT Marketplace with CLIX Expertise
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
					<TopUseCasesSection />
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
