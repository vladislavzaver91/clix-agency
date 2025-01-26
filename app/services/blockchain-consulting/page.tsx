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
		title: 'Strategic planning',
		description:
			'Leverage our expertise in blockchain development to craft strategies that align with your business vision and drive innovation in your industry.',
	},
	{
		title: 'Blockchain feasibility analysis',
		description:
			'Our team will evaluate the potential of blockchain technology for your unique use cases, ensuring it meets your industry-specific demands.',
	},
	{
		title: 'Technology selection',
		description:
			'With CLIX, you gain access to tailored advice for selecting the ideal blockchain platform and tools to ensure the success of your project.',
	},
	{
		title: 'Architecture design',
		description:
			'We provide recommendations for integration services that can enhance your startup or existing systems, boosting operational efficiency and scalability.',
	},
	{
		title: 'Integration services',
		description:
			'Rely on our team to assess and improve the security of your blockchain solutions, shielding them from vulnerabilities and cyber threats.',
	},
	{
		title: 'Security consulting',
		description:
			'Maximize the performance and scalability of your blockchain projects with our comprehensive optimization and enhancement services.',
	},
	{
		title: 'Performance optimization',
		description:
			'CLIX helps businesses stay ahead by delivering blockchain solutions designed to increase efficiency, reduce costs, and provide a competitive edge.',
	},
]

const benefitsSection = [
	{
		headTitle: 'Benefits of Blockchain Development Services',
		subTitle:
			'Unlock the full potential of Blockchain Technology to drive innovation, efficiency, and security.',
		benefits: [
			{
				title: 'Enhanced Security',
				description:
					"Blockchain's decentralized nature and cryptographic protocols offer robust security, reducing the risk of fraud and cyber attacks.",
			},
			{
				title: 'Transparency and Accountability',
				description:
					'Every transaction on the blockchain is publicly recorded and verified, ensuring transparency and trust in all operations.',
			},
			{
				title: 'Cost Efficiency',
				description:
					'By eliminating intermediaries and reducing transaction fees, blockchain technology can help reduce operational costs.',
			},
			{
				title: 'Decentralization',
				description:
					'Blockchain ensures no single point of control, promoting autonomy and reducing the risk of centralized failures or single points of attack.',
			},
			{
				title: 'Faster Transactions',
				description:
					'Blockchain can streamline processes, enabling faster and more efficient transactions, particularly in industries like finance and logistics.',
			},
			{
				title: 'Enhanced Data Integrity',
				description:
					"Blockchain's immutable ledger ensures data cannot be tampered with, guaranteeing the integrity of your business information.",
			},
			{
				title: 'Smart Contract Automation',
				description:
					'Automate business processes and transactions through blockchain-based smart contracts, improving efficiency and reducing human error.',
			},
			{
				title: 'Improved Supply Chain Management',
				description:
					'Blockchain allows for real-time tracking and transparency in the supply chain, enhancing visibility, efficiency, and reducing fraud.',
			},
			{
				title: 'Global Reach and Scalability',
				description:
					'Blockchain provides global interoperability and scalability, enabling your business to expand seamlessly across borders.',
			},
		],
	},
]

const processSection = [
	{
		headTitle: 'Blockchain technology consulting process',
		subTitle:
			'Guiding you through every step of your Blockchain journey for success',
		processSteps: [
			{
				title: 'Discovery & Assessment',
				description:
					'We start by understanding your business needs and assessing how blockchain technology can provide value to your specific goals.',
			},
			{
				title: 'Platform Selection',
				description:
					'We help you choose the right blockchain platform (e.g., Ethereum, Hyperledger, etc.) based on your project’s requirements.',
			},
			{
				title: 'Solution Design & Strategy',
				description:
					'Our experts design customized blockchain solutions and create a detailed implementation strategy for your project.',
			},
			{
				title: 'Development & Integration',
				description:
					'Our development team builds and integrates your blockchain solution, ensuring compatibility with your existing systems and infrastructure.',
			},
			{
				title: 'Testing & Security Auditing',
				description:
					'We rigorously test your blockchain solution and perform security audits to ensure robustness and resilience.',
			},
			{
				title: 'Deployment & Support',
				description:
					'Once your blockchain solution is ready, we assist with deployment and offer ongoing support to ensure seamless operations.',
			},
		],
	},
]

const technologies = [
	{ icon: '/icons/tech/CSS3.svg', name: 'CSS3' },
	{ icon: '/icons/tech/HTML5.svg', name: 'HTML5' },
	{ icon: '/icons/tech/PHP.svg', name: 'PHP' },
	{ icon: '/icons/tech/Nodejs.svg', name: 'Node.js' },

	{ icon: '/icons/tech/django.svg', name: 'Django' },
	{ icon: '/icons/tech/React.svg', name: 'React.js' },
	{ icon: '/icons/tech/yii.svg', name: 'Yii2' },
	{ icon: '/icons/tech/symfony.svg', name: 'Symfony' },
	{ icon: '/icons/tech/vuejs.svg', name: 'Vue.js' },
	{ icon: '/icons/tech/MongoDB.svg', name: 'MongoDB' },
	{ icon: '/icons/tech/MySQL.svg', name: 'MySQL' },
	{ icon: '/icons/tech/PostgresSQL.svg', name: 'PostgresSQL' },
	{ icon: '/icons/tech/redis.svg', name: 'Redis' },
]

const faqSection = [
	{
		subTitle:
			'Find answers to your most common questions about Blockchain Development.',
		faqItems: [
			{
				question: 'What is blockchain development?',
				answer:
					'Blockchain development involves creating decentralized systems using blockchain technology, ensuring data security, transparency, and efficiency in transactions.',
			},
			{
				question: 'How can blockchain benefit my business?',
				answer:
					'Blockchain can improve security, reduce costs, increase transparency, and automate processes, ultimately driving greater operational efficiency and trust.',
			},
			{
				question:
					'What types of businesses can benefit from blockchain technology?',
				answer:
					'Blockchain is beneficial for industries like finance, healthcare, logistics, supply chain management, and many more, where secure data management and automation are needed.',
			},
			{
				question:
					'How do I choose the right blockchain platform for my project?',
				answer:
					'Our consulting team will assess your business requirements, scalability needs, and industry demands to recommend the most suitable blockchain platform for your project.',
			},
		],
	},
]

export default function BlockchainConsultingPage() {
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
						Blockchain Development Consulting
					</h1>
					<p className='text-xl text-muted-foreground'>
						Expert Blockchain Consulting to Accelerate Innovation and Streamline
						Your Business Operations.
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
