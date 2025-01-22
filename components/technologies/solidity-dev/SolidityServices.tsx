'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const services = [
	{
		title: 'Smart contract development',
		description:
			'At CLIX, we design secure and tailored Solidity smart contracts to bring your blockchain project to life with reliability and precision.',
	},
	{
		title: 'Token creation',
		description:
			'We go beyond basic token minting by providing full-scale services, including custom upgrades, seamless transfers, and support for standards like ERC-20 and ERC-721.',
	},
	{
		title: 'Crypto exchange development',
		description:
			'Our team creates scalable and secure exchange platforms built on robust Solidity foundations, tailored to meet niche-specific needs.',
	},
	{
		title: 'Crypto wallet creation',
		description:
			'CLIX delivers user-friendly, secure crypto wallets that enable seamless transactions while offering features to elevate your business potential.',
	},
	{
		title: 'dApp development',
		description:
			'We build decentralized applications that stand out in a competitive market, ensuring smooth functionality and high user engagement.',
	},
	{
		title: 'DeFi development',
		description:
			'Our Solidity developers create robust and secure smart contracts to drive innovation and automation in your DeFi ecosystem.',
	},
	{
		title: 'Full-stack services',
		description:
			'CLIX offers end-to-end development, including web and mobile apps, with seamless integration of Solidity-powered blockchain technology.',
	},
	{
		title: 'Solidity integration',
		description:
			'We integrate Solidity solutions into your existing workflows, ensuring blockchain functionality complements your business operations seamlessly.',
	},
	{
		title: 'Smart contracts in gaming',
		description:
			'Elevate your gaming projects with expertly developed Solidity smart contracts, enhancing security and player experience.',
	},
]

export default function SolidityServices() {
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
