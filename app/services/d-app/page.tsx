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
		title: 'Consulting',
		href: '/services/blockchain-consulting',
		description:
			'We deliver tailored DApp development solutions, aligning blockchain capabilities with your unique business requirements to drive innovation and growth.',
	},
	{
		title: 'Smart contract development',
		href: '/services/smart-contract',
		description:
			'Our team crafts secure and highly efficient smart contracts that streamline operations, foster transparency, and enhance transaction trust.',
	},
	{
		title: 'Decentralized exchanges (DEXs)',
		href: '/services/dex',
		description:
			'At CLIX, we develop decentralized platforms for seamless and secure peer-to-peer crypto trading without the need for intermediaries.',
	},
	{
		title: 'Decentralized games apps',
		description:
			'Leverage blockchain technology with our expertly designed interactive gaming applications, combining security and an exceptional user experience.',
	},
	{
		title: 'Decentralized marketplaces',
		description:
			'We create scalable, decentralized marketplaces where users can directly buy and sell goods or services in a secure and transparent environment.',
	},
	{
		title: 'Decentralized autonomous organizations (DAOs)',
		description:
			'Our developers specialize in building autonomous blockchain systems governed by smart contracts and community-driven consensus.',
	},
	{
		title: 'Decentralized crypto asset management',
		description:
			'Empower your business with tools and platforms designed to manage and track digital assets securely within a decentralized framework.',
	},
	{
		title: 'Decentralized crypto wallets',
		description:
			'With CLIX, you`ll get a secure, feature-rich DApp wallet to efficiently store, manage, and transfer cryptocurrencies and tokens.',
	},
	{
		title: 'Ethereum DApp development services',
		description:
			'"Our experts can develop robust Ethereum-based solutions tailored to harness the full potential of this powerful blockchain network.',
	},
]

const technologies = [
	{ icon: '/icons/tech/Nodejs.svg', name: 'Node.js' },
	{ icon: '/icons/tech/React.svg', name: 'React.js' },
	{ icon: '/icons/tech/vuejs.svg', name: 'Vue.js' },
	{ icon: '/icons/tech/Solidity.svg', name: 'Solidity' },
	{ icon: '/icons/tech/openzeppelin.svg', name: 'OpenZeppelin' },
]

const processSection = [
	{
		headTitle: 'DApp Development Process',
		subTitle:
			'Our streamlined approach to DApp development ensures innovation, efficiency, and seamless execution.',
		processSteps: [
			{
				title: 'Ideation and Requirement Analysis',
				description:
					'We collaborate with you to understand your vision, define key features, and align the DApp concept with your business goals.',
			},
			{
				title: 'Design and Prototyping',
				description:
					'Our team creates intuitive UI/UX designs and interactive prototypes to ensure a user-friendly and visually appealing interface.',
			},
			{
				title: 'Smart Contract Development',
				description:
					'We develop secure and efficient smart contracts tailored to automate processes and enhance reliability.',
			},
			{
				title: 'DApp Integration and Testing',
				description:
					'Our experts integrate blockchain networks, perform extensive testing, and ensure your DApp functions seamlessly.',
			},
			{
				title: 'Deployment and Maintenance',
				description:
					'We launch your DApp on your preferred blockchain network and provide ongoing support to maintain optimal performance.',
			},
		],
	},
]

const benefitsSection = [
	{
		headTitle: 'Benefits of the DApp Development',
		subTitle:
			'Unlock the potential of decentralized applications to transform your operations and enhance user trust.',
		benefits: [
			{
				title: 'Enhanced Security',
				description:
					"Leverage blockchain's immutable ledger to ensure robust security and prevent unauthorized access or tampering.",
			},
			{
				title: 'Decentralized Control',
				description:
					'Operate without central authorities, providing users with direct access and greater control over their data and transactions.',
			},
			{
				title: 'Transparency and Trust',
				description:
					"Build user confidence with transparent processes powered by blockchain's distributed and auditable architecture.",
			},
			{
				title: 'Cost Efficiency',
				description:
					'Eliminate intermediaries and reduce operational costs by automating workflows with smart contracts.',
			},
			{
				title: 'Scalability and Flexibility',
				description:
					'Design DApps to scale seamlessly with your growing user base and adapt to diverse business needs.',
			},
			{
				title: 'Global Accessibility',
				description:
					'Enable users worldwide to access your services securely and without restrictions through decentralized networks.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Your questions answered: Insights into our DApp development services.',
		faqItems: [
			{
				question: 'What industries can benefit from DApp development?',
				answer:
					'DApps are versatile and can be applied to industries such as finance, healthcare, gaming, real estate, and supply chain management, among others.',
			},
			{
				question: 'How does a DApp differ from a traditional application?',
				answer:
					'Unlike traditional applications, DApps operate on decentralized networks, ensuring enhanced security, transparency, and resistance to censorship.',
			},
			{
				question: 'Can CLIX help with smart contract audits?',
				answer:
					'Yes, our team conducts thorough smart contract audits to ensure they are secure, efficient, and free of vulnerabilities.',
			},
			{
				question:
					'What blockchain platforms do you support for DApp development?',
				answer:
					'We specialize in platforms like Ethereum, Binance Smart Chain, Polygon, and others, depending on the project requirements.',
			},
			{
				question: 'How long does it take to develop a DApp?',
				answer:
					'The timeline depends on the complexity and features of the DApp, typically ranging from a few weeks to several months.',
			},
			{
				question: 'Does CLIX provide post-deployment support for DApps?',
				answer:
					'Absolutely! We offer ongoing maintenance, updates, and scalability enhancements to keep your DApp running smoothly.',
			},
		],
	},
]

export default function DAppPage() {
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
					<h1 className='text-4xl font-bold mb-4'>DApp Development Services</h1>
					<p className='text-xl text-muted-foreground'>
						Revolutionize your business with custom DApps that combine
						blockchain innovation and seamless user experiences.
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
