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

const processSection = [
	{
		headTitle: 'Our Dedicated Team Setup Process',
		subTitle:
			'Our Seamless Process for Setting Up Your Dedicated Development Team.',
		processSteps: [
			{
				title: 'Understanding Your Needs',
				description:
					'We begin by thoroughly understanding your project requirements, objectives, and challenges.',
			},
			{
				title: 'Team Selection',
				description:
					'We carefully select skilled professionals that best align with your project needs and business culture.',
			},
			{
				title: 'Integration and Onboarding',
				description:
					'We ensure smooth onboarding and seamless integration of your dedicated team into your workflow.',
			},
			{
				title: 'Ongoing Collaboration',
				description:
					'Continuous communication and collaboration to ensure the team is aligned with your vision and goals.',
			},
		],
	},
]

const benefitsSection = [
	{
		headTitle: 'Benefits of Having Dedicated Development Team',
		subTitle:
			'Unlock the Full Potential of Your Project with a Dedicated Team Focused on Your Success.',
		benefits: [
			{
				title: 'Full Project Focus',
				description:
					'A dedicated team works exclusively on your project, ensuring total commitment and faster progress.',
			},
			{
				title: 'Scalability and Flexibility',
				description:
					'Easily scale your team based on project requirements, adapting to changing business needs.',
			},
			{
				title: 'Cost Efficiency',
				description:
					'Outsource to skilled professionals at a lower cost than hiring an in-house team, without sacrificing quality.',
			},
			{
				title: 'Expertise and Innovation',
				description:
					'Benefit from top-tier talent with the right skills, bringing innovative solutions and ideas to your project.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Frequently Asked Questions About Our Dedicated Development Team.',
		faqItems: [
			{
				question: 'How do you select the right developers for my project?',
				answer:
					'We carefully assess your project needs and select developers with the relevant skills and experience.',
			},
			{
				question: 'Can I manage the dedicated team directly?',
				answer:
					'Yes, you can work closely with the team through regular meetings and updates to ensure alignment with your goals.',
			},
			{
				question: 'What if I need to scale my team up or down?',
				answer:
					'We offer flexible scaling, adjusting your team size based on the evolving needs of your project.',
			},
			{
				question: 'How do I ensure the quality of the work being done?',
				answer:
					'We maintain a rigorous quality control process with regular reviews and feedback loops to ensure high-quality results.',
			},
		],
	},
]

const services = [
	{
		title: 'Mobile App Development',
		href: '/services/mob-app',
		description:
			'We design and develop tailored iOS and Android applications that meet your specific needs, offering innovative features to propel your business success.',
	},
	{
		title: 'Web development',
		href: '/services/web-dev',
		description:
			'Our custom web development services are designed to accelerate your business growth by creating scalable, high-performance solutions.',
	},
	{
		title: 'Marketplace development',
		href: '/services/marketplace',
		description:
			"Let's develop a robust and scalable marketplace platform that connects businesses and customers, expanding your reach and boosting your profitability.",
	},
	{
		title: 'E-commerce development',
		href: '/services/ecommerce-dev',
		description:
			'Elevate your customer experience and drive sales growth with a custom e-commerce platform that perfectly matches your brand and objectives.',
	},
	{
		title: 'Cryptocurrency development',
		href: '/services/cryptocurrency',
		description:
			'Our cryptocurrency development services are tailored to ensure security, scalability, and innovation, helping you lead in this rapidly evolving sector.',
	},
	{
		title: 'SaaS development',
		href: 'services/saas',
		description:
			"Let's create a cloud-based solution that’s fast, cost-effective, and designed to help you meet your business goals with agility and innovation.",
	},
	{
		title: 'Software development for startups',
		href: '/services/software-dev-for-startups',
		description:
			'Whether it’s an MVP or a full-scale product, we build software solutions that attract investors and set you on the path to becoming an industry leader.',
	},
	{
		title: 'Web design',
		href: 'services/web-design',
		description:
			"Together, we'll design intuitive, engaging, and user-friendly interfaces that bring your software vision to life and captivate your users.",
	},
	{
		title: 'Fintech software development',
		href: '/services/fintech',
		description:
			'Stay ahead in the dynamic fintech landscape by leveraging cutting-edge software development tailored to your business requirements.',
	},
]

export default function DedicatedDevTeamPage() {
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
						className='absolute right-8 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>
						Dedicated Software Development Team
					</h1>
					<p className='text-xl text-muted-foreground'>
						Build a high-performing, dedicated team that aligns with your vision
						and propels your business forward.
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
