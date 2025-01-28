'use client'

import BenefitsHeadingSection from '@/components/services/BenefitsHeadingSection'
import CaseStudiesSection from '@/components/services/CaseStudiesSection'
import ContactUsBottomSection from '@/components/services/ContactUsBottomSection'
import ContactUsSection from '@/components/services/ContactUsSection'
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
	{ icon: '/icons/tech/CSS3.svg', name: 'CSS3' },
	{ icon: '/icons/tech/HTML5.svg', name: 'HTML5' },
	{ icon: '/icons/tech/PHP.svg', name: 'PHP' },
	{ icon: '/icons/tech/Nodejs.svg', name: 'Node.js' },
	{ icon: '/icons/tech/swift.svg', name: 'Swift' },
	{ icon: '/icons/tech/java.svg', name: 'Java' },
	{ icon: '/icons/tech/objectivec.svg', name: 'Objective-c' },
	{ icon: '/icons/tech/rust.svg', name: 'Rust' },
	{ icon: '/icons/tech/python.svg', name: 'Python' },
	{ icon: '/icons/tech/angular.svg', name: 'Angular' },
	{ icon: '/icons/tech/django.svg', name: 'Django' },
	{ icon: '/icons/tech/Laravel.svg', name: 'Laravel' },
	{ icon: '/icons/tech/React.svg', name: 'React.js' },
	{ icon: '/icons/tech/yii.svg', name: 'Yii2' },
	{ icon: '/icons/tech/symfony.svg', name: 'Symfony' },
	{ icon: '/icons/tech/vuejs.svg', name: 'Vue.js' },
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
	{ icon: '/icons/tech/MongoDB.svg', name: 'MongoDB' },
	{ icon: '/icons/tech/MySQL.svg', name: 'MySQL' },
	{ icon: '/icons/tech/PostgresSQL.svg', name: 'PostgresSQL' },
	{ icon: '/icons/tech/redis.svg', name: 'Redis' },
]

const processSection = [
	{
		headTitle: 'Software development for startups process',
		subTitle:
			'Step-by-step development tailored to startups: from concept to launch.',
		processSteps: [
			{
				title: 'Discovery & Ideation',
				description:
					'We start by understanding your vision, business goals, and target audience, ensuring a strong foundation for your project.',
			},
			{
				title: 'Proof of Concept Development',
				description:
					'Our team crafts a minimum viable product or prototype to validate your idea and gather real user feedback.',
			},
			{
				title: 'Custom Design & Development',
				description:
					'We create tailored solutions with intuitive designs and cutting-edge technology to address your unique needs.',
			},
			{
				title: 'Testing & Iteration',
				description:
					'Thorough quality assurance and iterative improvements ensure your product meets the highest standards before launch.',
			},
			{
				title: 'Launch & Continuous Support',
				description:
					'We help you deploy your software seamlessly and provide ongoing support to ensure smooth operation and scalability.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle: 'Your questions about startup software development—answered.',
		faqItems: [
			{
				question: 'How long does it take to develop software for a startup?',
				answer:
					'The timeline depends on the complexity of your project. Typically, it takes 2-6 months to develop a minimum viable product (MVP).',
			},
			{
				question: 'Can you help us refine our startup idea?',
				answer:
					'Absolutely! We offer discovery workshops and research to help shape your idea into a viable, market-ready concept.',
			},
			{
				question: 'Do you provide post-launch support?',
				answer:
					'Yes, we offer continuous support, including updates, bug fixes, and performance optimization, so you can focus on growing your business.',
			},
			{
				question:
					'What industries do you specialize in for startup software development?',
				answer:
					'We have experience across various industries, including fintech, healthcare, e-commerce, and SaaS, providing tailored solutions for each.',
			},
		],
	},
]

const services = [
	{
		title: 'Cloud Development',
		description:
			'Leverage our cloud expertise to create cutting-edge solutions on platforms like AWS, Azure, and GCP, ensuring reliability and scalability.',
	},
	{
		title: 'Mobile App Development',
		href: '/services/mob-app',
		description:
			'Deliver engaging and scalable mobile apps with seamless user experiences, helping your startup stand out and build a loyal customer base.',
	},
	{
		title: 'Concept Exploration',
		description:
			'Our strategic research process enables you to build a strong foundation for your startup’s business model and innovative product concepts.',
	},
	{
		title: 'MVP and Proof of Concept (PoC) Development',
		description:
			'Start small, iterate quickly, and use real user feedback to guide your investment toward a full-scale software solution.',
	},
	{
		title: 'Custom Software Solutions for Startups',
		description:
			'With a deep understanding of startup dynamics, we provide custom software tailored to your unique goals and growth trajectory.',
	},
	{
		title: 'Maintenance and Support',
		description:
			'Focus on growing your business while we handle ongoing support, from bug fixes and updates to optimizing performance.',
	},
]

export default function SoftwareDevForStartupsPage() {
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
						className='absolute right-14 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>
						Software Development For Startups
					</h1>
					<p className='text-xl text-muted-foreground'>
						Empowering Startups with Tailored Software Solutions to Fuel Growth
						and Innovation.
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
