'use client'

import CaseStudiesSection from '@/components/services/CaseStudiesSection'
import ContactUsBottomSection from '@/components/services/ContactUsBottomSection'
import ContactUsSection from '@/components/services/ContactUsSection'
import BenefitsSection from '@/components/services/reused-components/BenefitsSection'
import FAQSection from '@/components/services/reused-components/FAQSection'
import HowWeWorkSection from '@/components/services/reused-components/HowWeWorkSection'
import ServicesSection from '@/components/services/reused-components/ServicesSection'
import StepsSection from '@/components/services/reused-components/StepsSection'
import TestimonialsSection from '@/components/services/TestimonialsSection'
import WhyWe from '@/components/services/WhyWeSection'
import TechLinks from '@/components/technologies/TechLinks'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
	{
		title: 'Smart contract development',
		description:
			'At CLIX, we design secure and tailored Solidity smart contracts to bring your blockchain project to life with reliability and precision.',
	},
	{
		title: 'Token creation',
		description:
			'We go beyond basic token minting by providing full-scale services, including custom upgrades, seamless transfers, and support for standards like ERC-20 and ERC-721.',
	},
	{
		title: 'Crypto exchange development',
		description:
			'Our team creates scalable and secure exchange platforms built on robust Solidity foundations, tailored to meet niche-specific needs.',
	},
	{
		title: 'Crypto wallet creation',
		description:
			'CLIX delivers user-friendly, secure crypto wallets that enable seamless transactions while offering features to elevate your business potential.',
	},
	{
		title: 'dApp development',
		description:
			'We build decentralized applications that stand out in a competitive market, ensuring smooth functionality and high user engagement.',
	},
	{
		title: 'DeFi development',
		description:
			'Our Solidity developers create robust and secure smart contracts to drive innovation and automation in your DeFi ecosystem.',
	},
	{
		title: 'Full-stack services',
		description:
			'CLIX offers end-to-end development, including web and mobile apps, with seamless integration of Solidity-powered blockchain technology.',
	},
	{
		title: 'Solidity integration',
		description:
			'We integrate Solidity solutions into your existing workflows, ensuring blockchain functionality complements your business operations seamlessly.',
	},
	{
		title: 'Smart contracts in gaming',
		description:
			'Elevate your gaming projects with expertly developed Solidity smart contracts, enhancing security and player experience.',
	},
]

const technologies = [
	{
		icon: '/icons/tech/Laravel.svg',
		name: 'Laravel Development',
	},
	{
		icon: '/icons/tech/React.svg',
		name: 'React Development',
	},
	{
		icon: '/icons/tech/Nodejs.svg',
		name: 'Node.js Development',
	},
	{
		icon: '/icons/tech/React.svg',
		name: 'React Native Development',
	},
]

const benefitsSection = [
	{
		headTitle: 'Benefits of Solidity',
		subTitle:
			'Unlock blockchain`s full potential with CLIX`s Solidity solutions for secure, scalable, and innovative applications.',
		benefits: [
			{
				title: 'Security-first development',
				description:
					'Solidity enables the creation of secure and tamper-proof smart contracts, ensuring your blockchain applications remain reliable and protected.',
			},
			{
				title: 'Decentralized innovation',
				description:
					'Solidity powers decentralized applications (dApps), giving you the tools to innovate in industries from finance to gaming.',
			},
			{
				title: 'Customizable solutions',
				description:
					'Create tailored blockchain solutions with Solidity’s flexibility, from unique token standards to business-specific workflows.',
			},
			{
				title: 'Efficient resource management',
				description:
					"Optimize your blockchain operations with Solidity's lightweight and efficient smart contracts, reducing costs and increasing performance.",
			},
			{
				title: 'Community-driven ecosystem',
				description:
					'Benefit from a vibrant developer community and extensive libraries that ensure continuous improvement and support for your projects.',
			},
			{
				title: 'Cross-industry applications',
				description:
					"Whether it's DeFi, gaming, or supply chain, Solidity provides the versatility to address a variety of business needs.",
			},
		],
	},
]

const processSection = [
	{
		headTitle: 'Our Solidity Development process',
		subTitle:
			'Transforming ideas into blockchain excellence through our streamlined Solidity development process.',
		processSteps: [
			{
				title: 'Requirement analysis',
				description:
					'We collaborate to understand your business needs and blockchain goals, ensuring every solution aligns with your vision.',
			},
			{
				title: 'Smart contract architecture',
				description:
					'Our team designs secure and scalable smart contract structures tailored to your project requirements.',
			},
			{
				title: 'Development and testing',
				description:
					'We develop robust smart contracts and rigorously test them to ensure reliability, security, and performance.',
			},
			{
				title: 'Integration and deployment',
				description:
					'Our developers integrate smart contracts seamlessly into your existing systems and deploy them on the blockchain of your choice.',
			},
			{
				title: 'Ongoing support',
				description:
					'We provide post-deployment support, including updates, audits, and optimizations, to keep your solution running smoothly.',
			},
			{
				title: 'Scaling and enhancements',
				description:
					'As your needs grow, we help scale your solution and add new features, ensuring your blockchain application evolves with your business.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Answers to your key questions about Solidity and blockchain development.',
		faqItems: [
			{
				question: 'What is Solidity, and why is it important?',
				answer:
					'Solidity is a programming language specifically designed for writing smart contracts on Ethereum and other blockchain platforms. It ensures security, scalability, and precision in decentralized applications.',
			},
			{
				question: 'Can Solidity be used for projects beyond Ethereum?',
				answer:
					'Yes, Solidity supports various Ethereum Virtual Machine (EVM)-compatible blockchains like Binance Smart Chain, Polygon, and Avalanche, enabling versatile use cases.',
			},
			{
				question: 'How does CLIX ensure the security of smart contracts?',
				answer:
					'Our team employs rigorous testing, code reviews, and industry-standard audit practices to identify and mitigate vulnerabilities in Solidity smart contracts.',
			},
			{
				question: 'What industries can benefit from Solidity solutions?',
				answer:
					'Solidity solutions are ideal for industries such as finance (DeFi), gaming, supply chain, healthcare, and any sector seeking secure and decentralized systems.',
			},
		],
	},
]

export default function SolidityDevPage() {
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
					<Image
						src='/icons/tech/Solidity.svg'
						alt='solidity icon'
						width={100}
						height={100}
						className='absolute -top-5 left-0 -z-20 w-full h-[200px] opacity-20'
					/>
					<h1 className='text-4xl font-bold mb-4'>
						Solidity development Company
					</h1>
					<p className='text-xl text-muted-foreground'>
						Empowering your blockchain journey with custom Solidity solutions,
						from dApps to smart contracts.
					</p>
				</motion.div>

				<TechLinks technologies={technologies} />
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
					<FAQSection faq={faqSection} />
				</RevealOnScroll>
				<RevealOnScroll>
					<ContactUsBottomSection />
				</RevealOnScroll>
			</div>
		</motion.div>
	)
}
