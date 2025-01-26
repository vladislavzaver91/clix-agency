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

const services = [
	{
		title: 'Custom CRM Development',
		description:
			'Build a tailored CRM solution designed to streamline your sales, marketing, and customer support processes, ensuring a seamless user experience.',
	},
	{
		title: 'CRM Integration Services',
		description:
			'Integrate your CRM with third-party tools like ERP systems, payment gateways, and marketing platforms to create a unified ecosystem.',
	},
	{
		title: 'Cloud-Based CRM Solutions',
		description:
			'Develop scalable and secure cloud CRM systems that allow your team to access data anytime, anywhere, enhancing productivity and collaboration.',
	},
	{
		title: 'Mobile CRM Development',
		description:
			'Enable your team to manage customer relationships on the go with custom mobile CRM applications for iOS and Android platforms.',
	},
	{
		title: 'CRM Data Migration',
		description:
			'Seamlessly migrate your existing data to a new CRM system without data loss or disruptions to your business operations.',
	},
	{
		title: 'CRM Analytics and Reporting',
		description:
			'Empower decision-making with advanced analytics and reporting tools that provide real-time insights into customer behavior and business performance.',
	},
]

const processSection = [
	{
		headTitle: 'Custom CRM Development process',
		subTitle:
			'A strategic approach to developing CRM systems that drive business efficiency and customer satisfaction.',
		processSteps: [
			{
				title: 'Discovery & Requirements Gathering',
				description:
					'We begin by understanding your business needs and objectives to ensure the CRM system is aligned with your goals and delivers value from day one.',
			},
			{
				title: 'System Design & Architecture',
				description:
					'Our team designs a scalable and flexible CRM architecture, considering factors like user roles, workflows, and integration requirements to ensure long-term success.',
			},
			{
				title: 'Customization & Development',
				description:
					'We customize the CRM to suit your unique processes, adding features and functionality that enhance productivity and streamline operations.',
			},
			{
				title: 'Integration with Existing Tools',
				description:
					'Our CRM solutions integrate seamlessly with your existing systems and third-party tools, ensuring a smooth transition and uninterrupted business operations.',
			},
			{
				title: 'Testing & Quality Assurance',
				description:
					'We rigorously test the CRM system to ensure it functions as expected, providing bug-free performance and an intuitive user experience.',
			},
			{
				title: 'Deployment & Ongoing Support',
				description:
					'Once deployed, we provide continuous support to ensure that your CRM system evolves with your business and remains up-to-date with industry trends.',
			},
		],
	},
]

const benefitsSection = [
	{
		headTitle: 'Benefits of Custom CRM Development',
		subTitle:
			'Unlock the full potential of your business with a CRM system tailored to your specific needs and goals',
		benefits: [
			{
				title: 'Increased Efficiency',
				description:
					'Custom CRM solutions automate manual processes, streamline workflows, and boost productivity, enabling your team to focus on high-value tasks.',
			},
			{
				title: 'Enhanced Customer Relationships',
				description:
					'A CRM built to your needs provides deeper insights into customer behavior, improving communication and fostering stronger relationships.',
			},
			{
				title: 'Scalability & Flexibility',
				description:
					'As your business grows, a custom CRM can evolve with it, adding new features and integrations without compromising performance.',
			},
			{
				title: 'Data-Driven Insights',
				description:
					'With tailored analytics and reporting tools, a custom CRM helps you gain actionable insights into customer preferences and business performance.',
			},
			{
				title: 'Streamlined Collaboration',
				description:
					'Custom CRM systems improve cross-departmental collaboration by centralizing data and communication, ensuring everyone is on the same page.',
			},
			{
				title: 'Better Data Security',
				description:
					'Custom CRMs provide more control over sensitive customer information, implementing robust security features to protect your data.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Got questions? Find the answers to all your queries about custom CRM development services.',
		faqItems: [
			{
				question:
					'What is the difference between custom CRM and off-the-shelf CRM systems?',
				answer:
					'Custom CRMs are designed to meet your unique business needs, offering tailored features and flexibility. Off-the-shelf CRMs are general-purpose solutions that may not fully align with your specific requirements.',
			},
			{
				question: 'How long does it take to develop a custom CRM?',
				answer:
					'The timeline for developing a custom CRM depends on the complexity of your requirements, integrations, and desired features. On average, it can take anywhere from a few weeks to several months.',
			},
			{
				question: 'Can a custom CRM integrate with my existing tools?',
				answer:
					'Yes, custom CRMs can be integrated with a variety of existing tools and systems, such as email platforms, marketing software, and accounting tools, ensuring a seamless workflow.',
			},
			{
				question: 'What support will I receive after my CRM is developed?',
				answer:
					'We offer ongoing support and maintenance services to ensure your CRM stays up-to-date, secure, and aligned with your evolving business needs.',
			},
			{
				question: 'Is a custom CRM solution scalable as my business grows?',
				answer:
					'Yes, one of the key benefits of a custom CRM is its scalability. As your business grows, the system can be expanded with new features and capabilities to accommodate your changing needs.',
			},
		],
	},
]

const technologies = [
	{ icon: '/icons/tech/PHP.svg', name: 'PHP' },
	{ icon: '/icons/tech/Nodejs.svg', name: 'Node.js' },
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

export default function CRMPage() {
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
						className='absolute right-16 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>
						Custom CRM Development Services
					</h1>
					<p className='text-xl text-muted-foreground'>
						Tailored CRM solutions designed to streamline your business
						operations and enhance customer relationships
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
