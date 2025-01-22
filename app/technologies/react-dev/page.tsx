'use client'

// page without tech

import CaseStudiesSection from '@/components/services/CaseStudiesSection'
import ContactUsBottomSection from '@/components/services/ContactUsBottomSection'
import ContactUsSection from '@/components/services/ContactUsSection'
import HowWeWorkSection from '@/components/services/reused-components/HowWeWorkSection'
import TestimonialsSection from '@/components/services/TestimonialsSection'
import WhyWe from '@/components/services/WhyWeSection'
import TechLinks from '@/components/technologies/laravel-dev/TechLinks'
import BenefitsSection from '@/components/technologies/react-dev/BenefitsSection'
import FAQSection from '@/components/technologies/react-dev/FAQSection'
import ReactServices from '@/components/technologies/react-dev/ReactServices'
import StepsSection from '@/components/technologies/react-dev/StepsSection'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { motion } from 'framer-motion'
import Image from 'next/image'

const technologies = [
	{
		href: '/technologies/laravel-dev',
		icon: '/icons/Laravel.svg',
		name: 'Laravel Development',
	},
	{
		href: '/technologies/react-native-dev',
		icon: '/icons/React.svg',
		name: 'React Native Development',
	},
	{
		href: '/technologies/nodejs-dev',
		icon: '/icons/Nodejs.svg',
		name: 'Node.js Development',
	},
	{
		href: '/technologies/solidity-dev',
		icon: '/icons/Solidity.svg',
		name: 'Solidity Development',
	},
]

export default function ReactDevPage() {
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
						src='/icons/React.svg'
						alt='react icon'
						width={100}
						height={100}
						className='absolute -top-5 left-0 -z-20 w-full h-[200px] opacity-20'
					/>
					<h1 className='text-4xl font-bold mb-4'>React Development Company</h1>
					<p className='text-xl text-muted-foreground'>
						We use the power of React.js to develop cutting-edge solutions,
						including SPAs, PWAs, dynamic platforms, and complex enterprise
						applications.
					</p>
				</motion.div>

				<TechLinks technologies={technologies} />

				<ReactServices />
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
					<BenefitsSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<WhyWe />
				</RevealOnScroll>
				<RevealOnScroll>
					<StepsSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<HowWeWorkSection />
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
