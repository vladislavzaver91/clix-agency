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
		headTitle: 'Benefits of Medical & Healthcare Website Development',
		subTitle:
			'Empower your healthcare practice with a cutting-edge online presence that delivers trust, convenience, and patient engagement.',
		benefits: [
			{
				title: 'Enhanced Patient Engagement',
				description:
					'Connect with patients seamlessly through online appointment booking, health blogs, and interactive tools.',
			},
			{
				title: 'Improved Accessibility',
				description:
					'Ensure your services are accessible to everyone with responsive design and ADA-compliant websites.',
			},
			{
				title: 'Streamlined Appointment Management',
				description:
					'Simplify scheduling with integrated booking systems that save time for both patients and staff.',
			},
			{
				title: 'Increased Credibility',
				description:
					'Build trust with a professional, modern website that reflects the quality of your healthcare services.',
			},
			{
				title: 'Custom Patient Portals',
				description:
					'Offer secure and personalized portals for patients to access medical records, prescriptions, and test results.',
			},
			{
				title: 'Search Engine Optimization',
				description:
					'Boost your online visibility with an SEO-optimized website tailored to attract local and global audiences.',
			},
			{
				title: 'Telemedicine Integration',
				description:
					'Enable remote consultations with secure telehealth platforms integrated into your website.',
			},
			{
				title: 'Data Security and Compliance',
				description:
					'Protect sensitive patient data with HIPAA-compliant solutions and advanced cybersecurity protocols.',
			},
			{
				title: 'Scalability for Growth',
				description:
					'Build a website that grows with your practice, supporting new services and expanded patient bases.',
			},
			{
				title: 'Analytics and Insights',
				description:
					'Monitor performance with integrated analytics to make data-driven decisions and improve services.',
			},
		],
	},
]

const processSection = [
	{
		headTitle: 'Medical & healthcare website development process',
		subTitle:
			'From concept to care: our proven process ensures your healthcare website meets every need with precision.',
		processSteps: [
			{
				title: 'Discovery and Planning',
				description:
					'We begin by understanding your goals, audience, and specific healthcare requirements to create a tailored strategy.',
			},
			{
				title: 'UX/UI Design',
				description:
					'Our designers craft a user-friendly interface focused on accessibility, professionalism, and patient engagement.',
			},
			{
				title: 'Custom Development',
				description:
					'We build a secure, scalable, and fully functional website with features tailored to your healthcare services.',
			},
			{
				title: 'Integration of Medical Tools',
				description:
					'We seamlessly integrate appointment scheduling, telemedicine platforms, patient portals, and other tools.',
			},
			{
				title: 'Compliance and Security Testing',
				description:
					'Each website undergoes rigorous testing to ensure HIPAA compliance, data security, and flawless performance.',
			},
			{
				title: 'Launch and Support',
				description:
					'After a smooth launch, we provide ongoing maintenance, updates, and support to keep your website at its best.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle:
			'Get answers to the most common questions about building impactful healthcare websites with CLIX.',
		faqItems: [
			{
				question:
					'How does CLIX ensure compliance with healthcare regulations?',
				answer:
					'We design websites that meet HIPAA and other regional healthcare regulations, ensuring data security and legal compliance.',
			},
			{
				question: 'Can you integrate telemedicine features into my website?',
				answer:
					'Yes, we can incorporate secure telemedicine platforms, enabling remote consultations and better patient care.',
			},
			{
				question: 'How long does it take to develop a healthcare website?',
				answer:
					'The timeline depends on the complexity of your requirements. Typically, it ranges from 8 to 16 weeks, including design, development, and testing.',
			},
			{
				question: 'What post-launch support do you provide?',
				answer:
					'We offer continuous support, including performance monitoring, updates, security patches, and new feature integrations.',
			},
		],
	},
]

const services = [
	{
		title: 'Custom Healthcare Website Development',
		description:
			'Create a personalized, feature-rich website tailored to your medical practice or healthcare organization’s unique needs, ensuring a user-friendly and secure platform.',
	},
	{
		title: 'Telemedicine Platform Integration',
		description:
			'Enable virtual consultations and remote patient monitoring by integrating telemedicine features into your healthcare website.',
	},
	{
		title: 'HIPAA-Compliant Solutions',
		description:
			'Develop secure healthcare websites that comply with HIPAA regulations to ensure patient data confidentiality and protection.',
	},
	{
		title: 'Online Appointment Booking Systems',
		description:
			'Simplify scheduling for patients and staff with seamless online appointment booking and calendar management tools.',
	},
	{
		title: 'Healthcare Content Management Systems (CMS)',
		description:
			'Implement a scalable CMS to manage medical articles, patient education materials, and other healthcare content efficiently.',
	},
	{
		title: 'Patient Portals and Dashboards',
		description:
			'Build interactive patient portals that allow users to access medical records, track appointments, and communicate with healthcare providers securely.',
	},
]

export default function MedicalHealthcareWebDevPage() {
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
						className='absolute right-28 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>
						Medical & Healthcare Website Development
					</h1>
					<p className='text-xl text-muted-foreground'>
						Empower your business with elite professionals to unlock new
						opportunities and scale unprecedented heights.
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
