'use client'

import CaseStudiesSection from '@/components/services/CaseStudiesSection'
import ContactUsBottomSection from '@/components/services/ContactUsBottomSection'
import ContactUsSection from '@/components/services/ContactUsSection'
import BenefitsSection from '@/components/services/reused-components/BenefitsSection'
import FAQSection from '@/components/services/reused-components/FAQSection'
import HowWeWorkSection from '@/components/services/reused-components/HowWeWorkSection'
import ServicesSection from '@/components/services/reused-components/ServicesSection'
import StepsSection from '@/components/services/reused-components/StepsSection'
import TestimonialsSection from '@/components/services/TestimonialsSection'
import WhyWe from '@/components/services/WhyWeSection'
import TechLinks from '@/components/technologies/TechLinks'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
	{
		title: 'Progressive Web Apps (PWAs)',
		description:
			'Deliver an engaging, app-like experience with PWAs that offer offline capabilities, seamless interactions, and enhanced user engagement.',
	},
	{
		title: 'Web Application Development',
		description:
			'From scalable enterprise systems to interactive portals, CLIX builds high-performing web applications that meet diverse business needs.',
	},
	{
		title: 'Front-End Development',
		description:
			'We create visually appealing, responsive, and efficient interfaces that ensure exceptional user experiences on all devices.',
	},
	{
		title: 'Single Page Applications (SPAs)',
		description:
			'Maximize performance with SPAs that dynamically update content, eliminating delays and creating a fast, smooth user journey.',
	},
	{
		title: 'Maintenance and Support',
		description:
			'At CLIX, we ensure your React projects remain robust and future-ready through consistent maintenance, updates, and feature optimization.',
	},
]

const technologies = [
	{
		icon: '/icons/tech/Laravel.svg',
		name: 'Laravel Development',
	},
	{
		icon: '/icons/tech/React.svg',
		name: 'React Native Development',
	},
	{
		icon: '/icons/tech/Nodejs.svg',
		name: 'Node.js Development',
	},
	{
		icon: '/icons/tech/Solidity.svg',
		name: 'Solidity Development',
	},
]

const benefitsSection = [
	{
		headTitle: 'Benefits of React',
		subTitle:
			'Discover why React.js is the preferred framework for building fast, scalable, and interactive web applications.',
		benefits: [
			{
				title: 'Reusable Components',
				description:
					"React's component-based structure enables developers to reuse code, speeding up the development process and ensuring consistency.",
			},
			{
				title: 'High Performance',
				description:
					'React’s Virtual DOM optimizes rendering processes, making applications lightning-fast and highly efficient.',
			},
			{
				title: 'Rich Ecosystem',
				description:
					'From state management tools like Redux to a vast array of libraries, React offers endless possibilities for customization.',
			},
			{
				title: 'SEO-Friendly',
				description:
					'React supports server-side rendering, improving search engine visibility and boosting your application’s organic reach.',
			},
			{
				title: 'Scalability',
				description:
					'React is perfect for both small projects and large-scale applications, offering unmatched flexibility and scalability.',
			},
			{
				title: 'Strong Community Support',
				description:
					'With an extensive community, regular updates, and robust documentation, React ensures you’re always backed by a wealth of resources.',
			},
		],
	},
]

const processSection = [
	{
		headTitle: 'Our React Development process',
		subTitle:
			'Our proven approach ensures seamless development and delivery of exceptional React.js applications.',
		processSteps: [
			{
				title: 'Requirement Analysis',
				description:
					'We start by understanding your business needs, objectives, and target audience to design the best solution.',
			},
			{
				title: 'UI/UX Design',
				description:
					'Our designers craft intuitive, engaging, and user-friendly interfaces tailored to your brand identity.',
			},
			{
				title: 'Agile Development',
				description:
					'Using agile methodologies, we build robust React applications with iterative testing and improvements.',
			},
			{
				title: 'Integration',
				description:
					'We seamlessly integrate third-party APIs, tools, and services to enhance the functionality of your application.',
			},
			{
				title: 'Quality Assurance',
				description:
					'Our QA team ensures your React application is free of bugs, highly performant, and ready for deployment.',
			},
			{
				title: 'Ongoing Support',
				description:
					'Post-launch, we provide continuous support to optimize performance and implement new features as your needs evolve.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle: 'Answers to common questions about React development at CLIX.',
		faqItems: [
			{
				question: 'What types of applications can be built with React.js?',
				answer:
					'React.js is highly versatile and can be used to build SPAs, PWAs, eCommerce platforms, social networks, dashboards, and more.',
			},
			{
				question: 'How does React ensure high performance?',
				answer:
					'React uses a Virtual DOM to minimize direct interactions with the real DOM, optimizing updates and rendering processes for better performance.',
			},
			{
				question: 'Can you migrate my existing application to React?',
				answer:
					'Yes, we specialize in migrating legacy applications to React while preserving existing functionality and improving overall performance.',
			},
			{
				question: 'What support do you offer after project completion?',
				answer:
					'We provide ongoing maintenance, updates, and feature enhancements to ensure your React application stays competitive and efficient.',
			},
		],
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
						src='/icons/tech/React.svg'
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
					<FAQSection faq={faqSection} />
				</RevealOnScroll>
				<RevealOnScroll>
					<ContactUsBottomSection />
				</RevealOnScroll>
			</div>
		</motion.div>
	)
}
