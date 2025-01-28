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

const services = [
	{
		title: 'Mobile App Development',
		href: '/services/mob-app',
		description:
			'We provide custom mobile app development solutions designed to elevate your business and reach your target audience more effectively.',
	},
	{
		title: 'Web Development',
		href: '/services/web-dev',
		description:
			'Our expert team delivers scalable and customized web solutions that will take your business to the next level in the digital world.',
	},
	{
		title: 'Marketplace Development',
		href: '/services/marketplace',
		description:
			'We build flexible, secure, and scalable marketplace platforms, helping you grow your audience and enhance your revenue.',
	},
	{
		title: 'e-Commerce Development',
		href: '/services/ecommerce-dev',
		description:
			'Transform your eCommerce strategy with personalized solutions that improve the customer journey and boost your sales potential.',
	},
	{
		title: 'Blockchain Development',
		href: '/services/blockchain-dev',
		description:
			'Leverage our blockchain expertise to deliver secure, decentralized solutions that revolutionize your business operations.',
	},
	{
		title: 'Cryptocurrency Development',
		href: '/services/cryptocurrency',
		description:
			'Our cryptocurrency development services will help you create secure, innovative platforms tailored to your business needs, ensuring growth and scalability.',
	},
	{
		title: 'SaaS Development',
		href: '/services/saas',
		description:
			'Let’s work together to build cutting-edge cloud-based solutions that accelerate your business goals with high efficiency and cost-effectiveness.',
	},
	{
		title: 'Software Development for Startups',
		href: '/services/software-dev-for-startups',
		description:
			'We help startups create their MVP or full-scale software products, laying a strong foundation for growth, investment, and market success.',
	},
	{
		title: 'UX/UI Design',
		href: '/services/web-design',
		description:
			'Our UX/UI designers will create intuitive, visually appealing designs that ensure a smooth user experience and drive engagement.',
	},
	{
		title: 'Fintech Software Development',
		href: '/services/fintech-software-dev',
		description:
			'We provide end-to-end fintech software development services that address the challenges of the financial industry while improving efficiency and security.',
	},
]

const benefitsSection = [
	{
		headTitle: 'Benefits of IT Outsourcing',
		subTitle:
			'Maximize your business potential by leveraging the advantages of outsourcing IT services with CLIX!',
		benefits: [
			{
				title: 'Cost Efficiency',
				description:
					'Outsourcing IT services reduces operational costs, allowing you to invest in other areas of your business while maintaining high-quality results.',
			},
			{
				title: 'Access to Expert Talent',
				description:
					'Gain access to a global pool of highly skilled IT professionals, ensuring your projects are handled by specialists with up-to-date knowledge and expertise.',
			},
			{
				title: 'Scalability and Flexibility',
				description:
					'Outsourcing allows you to quickly scale your team up or down based on project requirements, providing the flexibility needed for growing businesses.',
			},
			{
				title: 'Focus on Core Business Functions',
				description:
					'By outsourcing IT tasks, you can free up internal resources to focus on your core business functions, improving overall efficiency and performance.',
			},
			{
				title: 'Risk Mitigation',
				description:
					'Outsourcing provides a safety net by transferring certain risks to experienced third-party providers who are well-equipped to handle IT challenges.',
			},
		],
	},
]

const processSection = [
	{
		headTitle: 'IT Outsourcing process',
		subTitle:
			'Our streamlined IT outsourcing process ensures a smooth, transparent, and efficient collaboration to drive your business forward.',
		processSteps: [
			{
				title: 'Initial Consultation',
				description:
					'We begin by understanding your unique business needs, challenges, and objectives to tailor our IT outsourcing services to your requirements.',
			},
			{
				title: 'Team Selection',
				description:
					"We carefully select the most suitable IT professionals based on your project's scope, ensuring that the team has the right skills and expertise.",
			},
			{
				title: 'Project Planning & Roadmap',
				description:
					'A detailed plan and timeline are developed to guide the project from start to finish, ensuring clear communication and set expectations.',
			},
			{
				title: 'Execution & Development',
				description:
					'Our team begins working on the project, providing regular updates, adhering to deadlines, and ensuring quality at every stage of development.',
			},
			{
				title: 'Quality Assurance',
				description:
					'We conduct thorough testing and quality assurance to ensure that all solutions meet your business requirements and industry standards.',
			},
			{
				title: 'Ongoing Support & Maintenance',
				description:
					'Once the project is completed, we continue to offer support and maintenance services to ensure the long-term success and smooth operation of your solution.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Got questions? Find answers to common queries about IT outsourcing services and how they can benefit your business.',
		faqItems: [
			{
				question: 'What are the main benefits of outsourcing IT services?',
				answer:
					'Outsourcing IT services offers cost savings, access to expert talent, scalability, flexibility, and the ability to focus on core business operations.',
			},
			{
				question: 'How do you ensure the quality of outsourced IT projects?',
				answer:
					'We maintain a strict quality control process, including regular updates, detailed project plans, and thorough testing to ensure top-quality results.',
			},
			{
				question:
					'How do you select the right outsourcing team for my project?',
				answer:
					'We carefully evaluate your project needs and select professionals who have the specific skills, expertise, and experience required to deliver success.',
			},
			{
				question:
					'What happens if I need to scale the project during development?',
				answer:
					"Our outsourcing model is flexible, allowing us to scale resources up or down based on your project's evolving needs, ensuring smooth adjustments at any stage.",
			},
		],
	},
]

export default function OutsourcingPage() {
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
						Outsourcing Software Development
					</h1>
					<p className='text-xl text-muted-foreground'>
						Looking for additional resources or expertise to accelerate your
						software development? Our outsourcing services are tailored to meet
						your needs!
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
