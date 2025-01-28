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
		headTitle: 'Our smart contract development process',
		subTitle:
			'CLIX smart contract development process: Secure, Transparent, and Efficient',
		processSteps: [
			{
				title: 'Requirement Analysis & Consultation',
				description:
					'We begin by thoroughly understanding your business needs and goals, discussing the specific requirements, and determining the most suitable blockchain platform for your smart contract.',
			},
			{
				title: 'Smart Contract Design & Architecture',
				description:
					'Our team designs the structure of your smart contract, ensuring its scalability, security, and functionality. We architect the contract to meet your precise needs while minimizing risks.',
			},
			{
				title: 'Development & Coding',
				description:
					'After finalizing the design, we proceed with the development phase, where our developers write clean, secure, and optimized code for your smart contract, ensuring it’s ready for deployment.',
			},
			{
				title: 'Security Audits & Testing',
				description:
					'We perform comprehensive security audits, including code reviews and penetration testing, to identify potential vulnerabilities and ensure the smart contract is secure and performs as expected.',
			},
			{
				title: 'Deployment & Monitoring',
				description:
					'Once testing is completed, we deploy the smart contract to the blockchain. We also provide continuous monitoring and maintenance to ensure its optimal performance and address any potential issues.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Everything you need to know about our Smart Contract Development Services.',
		faqItems: [
			{
				question: 'What is a smart contract and why do I need one?',
				answer:
					'A smart contract is a self-executing contract with terms directly written into code. It automates processes and ensures secure, transparent transactions without intermediaries, making it a valuable tool for businesses seeking efficiency and trust.',
			},
			{
				question: 'How secure are the smart contracts developed by CLIX?',
				answer:
					'At CLIX, we prioritize security by conducting thorough audits, using industry-standard best practices, and employing automated testing to identify and eliminate potential vulnerabilities in the smart contracts.',
			},
			{
				question:
					'What blockchain platforms can CLIX develop smart contracts for?',
				answer:
					'CLIX specializes in developing smart contracts for various blockchain platforms, including Ethereum, Binance Smart Chain, Solana, and others, based on the specific requirements and goals of your project.',
			},
			{
				question: 'How long does it take to develop a smart contract?',
				answer:
					'The development time varies depending on the complexity and features of the contract. On average, it can take anywhere from a few weeks to a couple of months to develop, test, and deploy a fully functional smart contract.',
			},
			{
				question: 'Can CLIX help with existing smart contract issues?',
				answer:
					'Yes, CLIX can review, audit, and optimize your existing smart contracts. We identify and resolve any performance issues, security vulnerabilities, or functionality concerns to ensure your contract operates smoothly and securely.',
			},
		],
	},
]

const services = [
	{
		title: 'Smart Contract Architecture Development',
		description:
			'At CLIX, we meticulously design the structure, logic, core functions, and data management of your smart contracts, ensuring they provide a solid foundation for smooth performance, user-friendly operation, and seamless scalability.',
	},
	{
		title: 'Сustom Smart Contract Development',
		description:
			'CLIX offers customized smart contract solutions that are crafted to align with your unique business requirements and objectives, ensuring that the smart contracts are designed to support your specific processes without any unnecessary complexity.',
	},
	{
		title: 'Smart Contract Audit',
		description:
			'Our expert smart contract developers at CLIX conduct rigorous testing and audits to identify and address any potential security risks or vulnerabilities, ensuring that your contracts are robust and safe from exploitation.',
	},
	{
		title: 'Smart Contract Optimization',
		description:
			'By leveraging the latest optimization techniques, CLIX’s certified smart contract developers ensure your contracts are highly efficient, reducing gas fees and lowering computational demands, resulting in faster and more cost-effective transactions.',
	},
]

export default function SmartContractPage() {
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
						className='absolute right-10 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>
						Smart Contract Development Services
					</h1>
					<p className='text-xl text-muted-foreground'>
						Empowering Your Business with Secure and Scalable Smart Contracts
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
