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
	{ icon: '/icons/tech/angular.svg', name: 'Angular' },
	{ icon: '/icons/tech/django.svg', name: 'Django' },
	{ icon: '/icons/tech/Laravel.svg', name: 'Laravel' },
	{ icon: '/icons/tech/React.svg', name: 'React.js' },
	{ icon: '/icons/tech/yii.svg', name: 'Yii2' },
	{ icon: '/icons/tech/symfony.svg', name: 'Symfony' },
	{ icon: '/icons/tech/vuejs.svg', name: 'Vue.js' },
	{ icon: '/icons/tech/MongoDB.svg', name: 'MongoDB' },
	{ icon: '/icons/tech/MySQL.svg', name: 'MySQL' },
	{ icon: '/icons/tech/PostgresSQL.svg', name: 'PostgresSQL' },
	{ icon: '/icons/tech/redis.svg', name: 'Redis' },
]

const processSection = [
	{
		headTitle: 'Our Cryptocurrency Development Process',
		subTitle:
			'A structured approach to building secure and scalable cryptocurrency solutions.',
		processSteps: [
			{
				title: 'Strategic Planning',
				description:
					'We analyze your business needs, define objectives, and craft a roadmap for seamless cryptocurrency development.',
			},
			{
				title: 'Blockchain Architecture Design',
				description:
					"We design a secure and scalable blockchain infrastructure tailored to your project's unique requirements.",
			},
			{
				title: 'Smart Contract Development',
				description:
					'Our experts build and test secure smart contracts to ensure automated, tamper-proof, and efficient transactions.',
			},
			{
				title: 'Crypto Wallet & Exchange Integration',
				description:
					'We develop and integrate secure crypto wallets and trading platforms to enhance user accessibility and experience.',
			},
			{
				title: 'Deployment & Ongoing Support',
				description:
					'We launch your cryptocurrency solution and provide continuous optimization, security updates, and maintenance.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Answers to common questions about cryptocurrency development and its business impact.',
		faqItems: [
			{
				question:
					'What are the key benefits of developing a cryptocurrency for my business?',
				answer:
					'A custom cryptocurrency can enhance transaction security, reduce fees, enable global reach, and provide greater financial control for your business.',
			},
			{
				question: 'How long does it take to develop a cryptocurrency?',
				answer:
					"The development timeline depends on the project's complexity, features, and security requirements. On average, it can take anywhere from a few weeks to several months.",
			},
			{
				question: 'What is the difference between a token and a coin?',
				answer:
					'A coin operates on its own blockchain (e.g., Bitcoin, Ethereum), while a token is built on an existing blockchain and often used for specific applications, such as DeFi or gaming.',
			},
			{
				question:
					'Can you integrate a cryptocurrency into an existing financial system?',
				answer:
					'Yes, we can develop and integrate cryptocurrency solutions into your existing banking, e-commerce, or financial infrastructure to streamline transactions.',
			},
			{
				question:
					'What security measures do you implement in cryptocurrency development?',
				answer:
					'We apply advanced encryption, multi-signature authentication, smart contract audits, and other security protocols to ensure the safety and integrity of your cryptocurrency.',
			},
		],
	},
]

const services = [
	{
		title: 'Сrypto wallet development (custodial and noncustodial)',
		href: '/services/crypto-wallet',
		description:
			'Enhance your business with a customized crypto wallet built to meet your specific needs.',
	},
	{
		title: 'Cryptocurrency Exchange Development',
		href: '/services/crypto-exchange',
		description:
			'Develop seamless software for secure cryptocurrency transactions, including buying, selling, exchanging, and trading.',
	},
	{
		title: 'CEX / DEX Development',
		description:
			'Whether you need a centralized (CEX) or decentralized (DEX) exchange, our specialists will transform your vision into reality.',
	},
	{
		title: 'Smart Contract development',
		href: '/services/smart-contract',
		description:
			'Leverage cutting-edge technology to ensure fast, transparent, and efficient crypto transactions for your users.',
	},
	{
		title: 'Blockchain Development Consulting',
		href: '/services/blockchain-consulting',
		description:
			'Expert blockchain consulting to accelerate development, cut costs, and gain a competitive advantage.',
	},
	{
		title: 'Web3 development',
		href: '/services/web3',
		description:
			'Utilize Web3 technology to create a highly secure, transparent, and trust-driven crypto solution.',
	},
	{
		title: 'Creation of crypto coins',
		description:
			'Shape the future of digital finance by launching your own cryptocurrency with our expert development team.',
	},
	{
		title: 'Development of a unique cryptocurrency',
		description:
			'Innovate the next generation of digital assets with a unique and scalable cryptocurrency solution.',
	},
	{
		title: 'Bots for cryptocurrency',
		description:
			'Automate trading strategies and maximize profits with AI-powered crypto trading solutions.',
	},
]

export default function CryptocurrencyPage() {
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
						Cryptocurrency Development Services
					</h1>
					<p className='text-xl text-muted-foreground'>
						Innovative cryptocurrency solutions tailored for your business
						success.
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
