'use client'

import BenefitsHeadingSection from '@/components/services/BenefitsHeadingSection'
import CaseStudiesSection from '@/components/services/CaseStudiesSection'
import ContactUsBottomSection from '@/components/services/ContactUsBottomSection'
import ContactUsSection from '@/components/services/ContactUsSection'
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

const processSection = [
	{
		headTitle: 'Our web development process',
		subTitle:
			'Our structured approach to web development ensures your project is delivered on time, within budget, and with exceptional results.',
		processSteps: [
			{
				title: 'Discovery and Planning',
				description:
					'We start by understanding your business needs and goals. This phase involves research, planning, and creating a strategy that aligns with your objectives, ensuring the right foundation for the project.',
			},
			{
				title: 'Design and Prototyping',
				description:
					'Our design team creates intuitive and user-friendly interfaces, followed by interactive prototypes to ensure the user experience is seamless before development begins.',
			},
			{
				title: 'Development and Testing',
				description:
					'Our developers turn the design into a functional website while performing rigorous testing to ensure smooth performance, security, and responsiveness across all devices and browsers.',
			},
			{
				title: 'Launch and Optimization',
				description:
					'Once the website is fully developed and tested, we prepare for launch. Post-launch, we continue to optimize performance, monitor user feedback, and make improvements as needed.',
			},
			{
				title: 'Continuous Support and Maintenance',
				description:
					'After the website goes live, we provide ongoing support to ensure that it remains up-to-date, secure, and continuously aligned with your business needs.',
			},
		],
	},
]

const faqSection = [
	{
		subTitle: 'Have questions about web development? We`re here to help!',
		faqItems: [
			{
				question: 'What is the typical timeline for web development projects?',
				answer:
					'The timeline varies depending on the complexity of the project. On average, it takes 4-12 weeks to build a website, with additional time for ongoing support and maintenance after launch.',
			},
			{
				question: 'Do you provide website maintenance and updates?',
				answer:
					'Yes, we offer ongoing maintenance and updates to ensure your website stays current, secure, and fully functional.',
			},
			{
				question: 'Can you help with SEO and digital marketing?',
				answer:
					'Absolutely! Our team can integrate SEO best practices into your website and provide digital marketing services to help you attract more traffic and grow your business.',
			},
			{
				question: 'Will my website be mobile-friendly?',
				answer:
					'Yes, we prioritize responsive design to ensure that your website performs well across all devices, providing an optimal experience for your users.',
			},
		],
	},
]

const services = [
	{
		title: 'Website development',
		description:
			'Our web development team brings your ideas to life by creating websites that are visually stunning, highly functional, and easy to navigate, ensuring your business stands out online.',
	},
	{
		title: 'Web app development',
		description:
			'Expand your reach by developing web applications that are optimized for any device, ensuring seamless accessibility and a smooth user experience across all platforms.',
	},
	{
		title: 'Marketplace development',
		description:
			'We build custom marketplace websites that are scalable, flexible, and secure, allowing you to cater to a growing customer base and drive high-level engagement.',
	},
	{
		title: 'E-Commerce web development',
		description:
			"Boost your customer loyalty and expand your business reach with an online store that's accessible from anywhere, ensuring your customers enjoy a convenient shopping experience on the go.",
	},
	{
		title: 'Fintech software development',
		href: '/services/fintech-software-dev',
		description:
			'Stay ahead of the curve in the ever-evolving financial sector with cutting-edge web solutions that help you enhance services and build lasting customer relationships.',
	},
	{
		title: 'IT Outstaffing services',
		href: '/services/it-outstaffing',
		description:
			"Tap into the expertise of our top-tier developers to take your business to the next level. Whether you need a team to work alongside yours or full project development, we've got you covered.",
	},
	{
		title: 'Outsourcing software development',
		href: '/services/outsourcing',
		description:
			'Looking for additional resources or specialized expertise? Our web development outsourcing services are here to provide you with the support you need to streamline your software development.',
	},
]

export default function WebDevPage() {
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
						className='absolute right-32 top-0 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-pink-500 bg-[length:200%_200%] animate-gradientFlow w-16 h-24 -z-10'
					/>
					<h1 className='text-4xl font-bold mb-4'>Web Development Services</h1>
					<p className='text-xl text-muted-foreground'>
						Crafting bespoke web solutions that elevate your business and drive
						online success
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
					<WhyWe />
				</RevealOnScroll>
				<RevealOnScroll>
					<BenefitsHeadingSection />
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
