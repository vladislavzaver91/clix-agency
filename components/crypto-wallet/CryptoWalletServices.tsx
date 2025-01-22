'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const services = [
	{
		title: 'Custodial Wallets Development',
		description:
			'These wallets store users` private keys on secure, trusted third-party platforms, offering a user-friendly experience while providing a convenient solution for managing assets, though they sacrifice some degree of control over the funds.',
	},
	{
		title: 'Non-custodial Wallets Development',
		description:
			'Non-custodial wallets enable users to retain full control over their private keys, enhancing security and ensuring complete ownership of their digital assets.',
	},
	{
		title: 'Cold storage',
		description:
			'Offline storage wallets store private keys in a secure, disconnected environment, safeguarding them from online threats and providing a robust defense against cyberattacks.',
	},
	{
		title: 'Hot storage',
		description:
			'Online storage wallets keep private keys readily accessible for quick transactions and active trading, although they are more exposed to potential cyber threats and security risks.',
	},
	{
		title: 'Hardware wallets Development',
		description:
			'Hardware wallets are physical devices designed to store private keys securely, offering enhanced protection for digital assets against hacking and unauthorized access.',
	},
	{
		title: 'Coin-Specific Wallets Development',
		description:
			'Cryptocurrency wallets can be tailored to support specific coins like Bitcoin, Ethereum, and Ripple, offering seamless transactions for users dedicated to one blockchain ecosystem.',
	},
	{
		title: 'Multi-Currency Wallets Development',
		description:
			'Multi-currency wallets allow users to manage several cryptocurrencies in a single app, providing flexibility and convenience for those with diversified digital portfolios.',
	},
	{
		title: 'Single-Signature (Singlesig) Wallets Development',
		description:
			'Personal wallets are designed for individual users who control their private keys, enabling them to manage their digital assets independently and securely.',
	},
	{
		title: 'Multi-Signature (Multisig, Shared) Wallets Development',
		description:
			'Enterprise wallets cater to businesses with multi-user access, requiring shared approval for transactions, ensuring enhanced security and accountability in corporate asset management.',
	},
	{
		title: 'Multi-party Computation (MPC) Wallets',
		description:
			'This advanced technology offers security for a wide range of users, including individuals, businesses, financial institutions, and government entities managing digital assets, ensuring comprehensive protection for all.',
	},
]

export default function CryptoWalletServices() {
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
