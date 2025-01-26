'use client'

import BenefitsSection from '@/components/services/BenefitsHeadingSection'
import CaseStudiesSection from '@/components/services/CaseStudiesSection'
import ContactUsBottomSection from '@/components/services/ContactUsBottomSection'
import ContactUsSection from '@/components/services/ContactUsSection'
import HowWeWorkSection from '@/components/services/reused-components/HowWeWorkSection'
import TechWeUseSection from '@/components/services/reused-components/TechWeUseSection'
import TestimonialsSection from '@/components/services/TestimonialsSection'
import WhyWe from '@/components/services/WhyWeSection'
import FAQSection from '@/components/software-dev-for-startups/FAQSection'
import SoftwareDevForStartupsServices from '@/components/software-dev-for-startups/SoftwareDevForStartupsServices'
import StepsSection from '@/components/software-dev-for-startups/StepsSection'
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
						className='absolute right-64 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>
						Software Development For Startups
					</h1>
					<p className='text-xl text-muted-foreground'>
						Empowering Startups with Tailored Software Solutions to Fuel Growth
						and Innovation.
					</p>
				</motion.div>

				<SoftwareDevForStartupsServices />
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
					<BenefitsSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<StepsSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<HowWeWorkSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<TechWeUseSection technologies={technologies} />
				</RevealOnScroll>
				<RevealOnScroll>
					<FAQSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<ContactUsBottomSection />
				</RevealOnScroll>
			</div>
		</motion.div>
	)
}
