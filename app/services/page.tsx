'use client'

import AdditionalServicesSection from '@/components/services/AdditionalServicesSection'
import BenefitsSection from '@/components/services/BenefitsHeadingSection'
import BlogSection from '@/components/services/BlogsSection'
import CaseStudiesSection from '@/components/services/CaseStudiesSection'
import CollaborationApproachesSection from '@/components/services/CollaborationApproachesSection'
import ContactUsBottomSection from '@/components/services/ContactUsBottomSection'
import ContactUsSection from '@/components/services/ContactUsSection'
import CryptoSection from '@/components/services/CryptoSection'
import HeadingServicesSection from '@/components/services/HeadingServicesSection'
import IndustryExpertiseSection from '@/components/services/IndustryExpertiseSection'
import StepsSection from '@/components/services/StepsSection'
import TechStackSection from '@/components/services/TechStackSection'
import TestimonialsSection from '@/components/services/TestimonialsSection'
import WhyWeSection from '@/components/services/WhyWeSection'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { motion } from 'framer-motion'

export default function ServicesPage() {
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
					<h1 className='text-4xl font-bold mb-4'>Our Services</h1>
					<p className='text-xl text-muted-foreground'>
						Comprehensive web development solutions tailored to your needs
					</p>
				</motion.div>

				<HeadingServicesSection />
				<RevealOnScroll>
					<AdditionalServicesSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<CryptoSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<IndustryExpertiseSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<ContactUsSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<BenefitsSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<CollaborationApproachesSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<TechStackSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<StepsSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<WhyWeSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<CaseStudiesSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<TestimonialsSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<BlogSection />
				</RevealOnScroll>
				<RevealOnScroll>
					<ContactUsBottomSection />
				</RevealOnScroll>
			</div>
		</motion.div>
	)
}
