'use client'

import AboutSection from '@/components/home/AboutSection'
import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
// import TechStack from '@/components/home/TechStack'

import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'

export default function Home() {
	return (
		<main>
			<HeroSection />
			<RevealOnScroll>
				<ServicesSection />
			</RevealOnScroll>
			{/* <RevealOnScroll>
				<TechStack />
			</RevealOnScroll> */}
			<RevealOnScroll>
				<AboutSection />
			</RevealOnScroll>
		</main>
	)
}
