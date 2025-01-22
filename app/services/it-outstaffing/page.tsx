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

const benefitsSection = [
	{
		headTitle: 'Benefits of IT Outstaffing Services',
		subTitle:
			'Maximize efficiency and reduce overhead with IT outstaffing services tailored to your business needs.',
		benefits: [
			{
				title: 'Access to Top Talent',
				description:
					'Gain immediate access to a pool of highly skilled professionals to meet your specific technical requirements.',
			},
			{
				title: 'Cost Efficiency',
				description:
					'Optimize your budget by leveraging external expertise without the burden of long-term hiring and training costs.',
			},
			{
				title: 'Scalability and Flexibility',
				description:
					'Scale your team quickly as per project demands and adjust team size based on evolving business needs.',
			},
			{
				title: 'Reduced Time-to-Market',
				description:
					'Enhance development speed with experienced professionals who can hit the ground running and deliver results faster.',
			},
			{
				title: 'Focus on Core Business',
				description:
					'Offload time-consuming tasks to experts, enabling your in-house team to focus on strategic and core business objectives.',
			},
		],
	},
]

const processSection = [
	{
		headTitle: 'Our IT Outstaffing process',
		subTitle:
			'Streamlined IT outstaffing process to integrate talent seamlessly into your project and drive success.',
		processSteps: [
			{
				title: 'Understanding Your Needs',
				description:
					'We start by deeply understanding your project requirements, goals, and challenges to align the right talent with your needs.',
			},
			{
				title: 'Talent Sourcing and Screening',
				description:
					'We source and screen top-tier professionals from a global network, ensuring they have the right skills and experience for your project.',
			},
			{
				title: 'Seamless Integration',
				description:
					'Once the talent is selected, we ensure smooth integration into your team, facilitating collaboration and productivity from day one.',
			},
			{
				title: 'Ongoing Support and Optimization',
				description:
					'We provide continuous support, monitoring progress, and making necessary adjustments to ensure high-quality delivery.',
			},
			{
				title: 'Flexible Engagement Models',
				description:
					'Choose from a variety of flexible engagement models that best fit your project and business requirements.',
			},
		],
	},
]
const faqSection = [
	{
		subTitle:
			'Got questions? Find answers to all your inquiries about our IT outstaffing services.',
		faqItems: [
			{
				question: 'What is IT outstaffing?',
				answer:
					'IT outstaffing allows you to augment your development team by hiring skilled professionals from an external agency, without having to manage them directly.',
			},
			{
				question: 'How do you select the right professionals for my project?',
				answer:
					'We carefully analyze your project needs, screen candidates based on their skills and experience, and ensure they align with your company culture and goals.',
			},
			{
				question: 'Can I scale the team up or down during the project?',
				answer:
					'Yes, our outstaffing services are highly flexible, allowing you to scale your team according to project requirements.',
			},
			{
				question: 'What is the typical engagement model for IT outstaffing?',
				answer:
					'We offer a range of engagement models, from full-time to part-time or hourly arrangements, depending on your needs and budget.',
			},
		],
	},
]

const services = [
	{
		title: 'Business Requirements Analysis Outstaffing',
		description:
			'Need guidance on defining your business objectives and tasks? Our experts will help clarify your goals and align your project with your vision from the start.',
	},
	{
		title: 'Startup Development Outstaffing',
		href: '/services/software-dev-for-startups',
		description:
			'Boost your product quality, speed up delivery, and attract investment by augmenting your team with highly skilled professionals who bring real value.',
	},
	{
		title: 'Dedicated Team Outstaffing',
		href: '/services/dedicated-dev-team',
		description:
			'We provide more than just individual experts. Our outstaffing services enable you to assemble a dedicated team that will integrate seamlessly into your project, ensuring its success.',
	},
	{
		title: 'Full-cycle Software Development Outstaffing',
		description:
			'From idea validation to post-launch support, our specialists are here to augment your team, ensuring that your project achieves its goals at every step of the development process.',
	},
]

export default function ITOutstaffingPage() {
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
						className='absolute right-44 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>IT Outstaffing Services</h1>
					<p className='text-xl text-muted-foreground'>
						Expand your capabilities with our expert IT outstaffing services.
						Unlock top-tier talent and drive your business forward.
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
