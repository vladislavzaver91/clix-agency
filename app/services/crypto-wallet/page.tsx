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

const faqSection = [
	{
		subTitle:
			'Everything you need to know about our Crypto Wallet Development Services.',
		faqItems: [
			{
				question:
					'What is the difference between custodial and non-custodial crypto wallets?',
				answer:
					"Custodial wallets store users' private keys on a third-party platform, while non-custodial wallets give users full control over their private keys, providing increased security and ownership.",
			},
			{
				question: 'How secure are the crypto wallets developed by CLIX?',
				answer:
					"CLIX ensures top-notch security for crypto wallets by implementing encryption, multi-signature functionality, two-factor authentication (2FA), and regular security audits to safeguard users' digital assets.",
			},
			{
				question:
					'Can CLIX develop wallets that support multiple cryptocurrencies?',
				answer:
					'Yes, CLIX can develop multi-currency wallets that support a wide range of cryptocurrencies, including Bitcoin, Ethereum, Ripple, and more, allowing users to manage multiple assets in one place.',
			},
			{
				question: 'How long does it take to develop a custom crypto wallet?',
				answer:
					'The development timeline depends on the complexity and features of the wallet. On average, it takes 4-6 months to develop a fully functional, secure, and user-friendly crypto wallet.',
			},
			{
				question: 'What features should a crypto wallet include?',
				answer:
					'A crypto wallet should include features such as private key management, multi-currency support, transaction history, user authentication (PIN, biometric), and secure backup and recovery options.',
			},
		],
	},
]

const processSection = [
	{
		headTitle: 'Crypto Wallet Development Process',
		subTitle:
			'Streamlined Process for Developing Secure and Reliable Crypto Wallets.',
		processSteps: [
			{
				title: 'Requirement Gathering & Analysis',
				description:
					'We begin by understanding your needs and objectives, analyzing the target audience, and defining the features and functionalities required for your crypto wallet.',
			},
			{
				title: 'Wallet Design & Architecture',
				description:
					'Our team designs a user-friendly interface and a scalable architecture for your crypto wallet, ensuring ease of use and robust performance across platforms.',
			},
			{
				title: 'Development & Integration',
				description:
					'We build the wallet with secure coding practices, integrating essential features such as multi-currency support, private key management, and blockchain connectivity.',
			},
			{
				title: 'Security Testing & Audits',
				description:
					'We conduct thorough security testing, including vulnerability assessments and penetration tests, to ensure the wallet is resistant to threats and attacks.',
			},
			{
				title: 'Deployment & Maintenance',
				description:
					'Once the wallet is developed and tested, we deploy it to the chosen platform(s) and provide ongoing maintenance and updates to ensure smooth functionality and security.',
			},
		],
	},
]

const services = [
	{
		title: 'Custodial Wallets Development',
		description:
			'These wallets store users` private keys on secure, trusted third-party platforms, offering a user-friendly experience while providing a convenient solution for managing assets, though they sacrifice some degree of control over the funds.',
	},
	{
		title: 'Non-custodial Wallets Development',
		description:
			'Non-custodial wallets enable users to retain full control over their private keys, enhancing security and ensuring complete ownership of their digital assets.',
	},
	{
		title: 'Cold storage',
		description:
			'Offline storage wallets store private keys in a secure, disconnected environment, safeguarding them from online threats and providing a robust defense against cyberattacks.',
	},
	{
		title: 'Hot storage',
		description:
			'Online storage wallets keep private keys readily accessible for quick transactions and active trading, although they are more exposed to potential cyber threats and security risks.',
	},
	{
		title: 'Hardware wallets Development',
		description:
			'Hardware wallets are physical devices designed to store private keys securely, offering enhanced protection for digital assets against hacking and unauthorized access.',
	},
	{
		title: 'Coin-Specific Wallets Development',
		description:
			'Cryptocurrency wallets can be tailored to support specific coins like Bitcoin, Ethereum, and Ripple, offering seamless transactions for users dedicated to one blockchain ecosystem.',
	},
	{
		title: 'Multi-Currency Wallets Development',
		description:
			'Multi-currency wallets allow users to manage several cryptocurrencies in a single app, providing flexibility and convenience for those with diversified digital portfolios.',
	},
	{
		title: 'Single-Signature (Singlesig) Wallets Development',
		description:
			'Personal wallets are designed for individual users who control their private keys, enabling them to manage their digital assets independently and securely.',
	},
	{
		title: 'Multi-Signature (Multisig, Shared) Wallets Development',
		description:
			'Enterprise wallets cater to businesses with multi-user access, requiring shared approval for transactions, ensuring enhanced security and accountability in corporate asset management.',
	},
	{
		title: 'Multi-party Computation (MPC) Wallets',
		description:
			'This advanced technology offers security for a wide range of users, including individuals, businesses, financial institutions, and government entities managing digital assets, ensuring comprehensive protection for all.',
	},
]

export default function CryptoWalletPage() {
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
						Crypto Wallet Development Services
					</h1>
					<p className='text-xl text-muted-foreground'>
						Your Trusted Partner in Crypto Wallet Development
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
