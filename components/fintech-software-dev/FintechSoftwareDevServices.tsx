'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const services = [
	{
		title: 'Complex authentication systems',
		description:
			'Implement multi-layered security protocols with cutting-edge technologies like biometric authentication and AI-driven fraud detection to protect sensitive financial data.',
	},
	{
		title: 'Crypto and DeFi applications',
		description:
			'Empower your customers with blockchain capabilities—ranging from crypto borrowing and lending to smart contracts, NFT creation, and secure cryptocurrency exchanges.',
	},
	{
		title: 'Calculators for managing loans, taxes, mortgages',
		description:
			'Provide users with intuitive tools to manage budgets effectively, track spending, and cultivate healthy financial habits for better long-term outcomes.',
	},
	{
		title: 'Payment automation systems',
		description:
			'Streamline payment operations with the latest technologies, ensuring fast, secure, and user-friendly transactions for all parties involved.',
	},
	{
		title: 'Financial management solutions',
		description:
			'Equip your users with powerful solutions for planning, tracking, optimizing, and forecasting their financial activities—be it for personal finance or corporate needs.',
	},
	{
		title: 'Digital wallets',
		description:
			'Give users a secure and versatile wallet to store electronic money, payment cards, loyalty points, and more, all accessible from a single platform.',
	},
	{
		title: 'Stock trading software',
		description:
			'Open the door to global financial markets with real-time trading solutions, offering a seamless and secure investing experience for users.',
	},
	{
		title: 'Lending software',
		description:
			'From peer-to-peer lending to comprehensive business loan management, our software delivers modern financing tools for a competitive edge.',
	},
	{
		title: 'Mobile banking',
		description:
			'Develop neobanking platforms that offer secure and effortless financial management, enabling users to access their accounts and transactions from any device.',
	},
	{
		title: 'Data analytics',
		description:
			'Harness the power of big data and advanced analytics to conduct in-depth investigations, improving the efficiency, reliability, and security of your fintech app.',
	},
]

export default function FintechSoftwareDevServices() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleDescription = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className='py-14 bg-background'>
			<div className='container max-w-3xl mx-auto px-4'>
				<div className='flex flex-col gap-4'>
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							className='relative border border-border rounded-lg overflow-hidden group'
						>
							{/* number */}
							<div className='absolute -top-1 -left-1 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
								{String(index + 1).padStart(2, '0')}
							</div>
							<div
								className='flex items-center justify-between p-6 cursor-pointer hover:bg-accent transition-all'
								onClick={() => toggleDescription(index)}
							>
								<h2 className='text-lg font-semibold group-hover:text-transparent text-primary group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:bg-clip-text group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
									{service.title}
								</h2>
								<motion.div
									animate={{ rotate: openIndex === index ? 180 : 0 }}
									transition={{ duration: 0.3 }}
								>
									<ChevronDown className='w-6 h-6 text-muted-foreground' />
								</motion.div>
							</div>
							<AnimatePresence>
								{openIndex === index && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: '100px' }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.4, ease: 'easeInOut' }}
										className='overflow-hidden bg-muted px-4'
									>
										<p className='text-muted-foreground mb-3'>
											{service.description}
										</p>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
