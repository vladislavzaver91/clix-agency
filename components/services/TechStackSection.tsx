'use client'

import { motion } from 'framer-motion'
import { Computer, LockKeyhole, Puzzle } from 'lucide-react'
import Image from 'next/image'

const techBlocks = [
	{
		title: 'Programming Languages',
		icon: Computer,
		techItems: [
			{ icon: '/icons/CSS3.svg', name: 'CSS3' },
			{ icon: '/icons/HTML5.svg', name: 'HTML5' },
			{ icon: '/icons/PHP.svg', name: 'PHP' },
			{ icon: '/icons/Nodejs.svg', name: 'Node.js' },
			{ icon: '/icons/swift.svg', name: 'Swift' },
			{ icon: '/icons/java.svg', name: 'Java' },
			{ icon: '/icons/objectivec.svg', name: 'Objective-c' },
			{ icon: '/icons/rust.svg', name: 'Rust' },
			{ icon: '/icons/python.svg', name: 'Python' },
			{ icon: '/icons/React.svg', name: 'React Native' },
			{ icon: '/icons/flutterio.svg', name: 'Flutter' },
			{ icon: '/icons/visual_base.svg', name: 'Visual Basic' },
		],
	},
	{
		title: 'Frameworks',
		icon: Puzzle,
		techItems: [
			{ icon: '/icons/angular.svg', name: 'Angular' },
			{ icon: '/icons/django.svg', name: 'Django' },
			{ icon: '/icons/Laravel.svg', name: 'Laravel' },
			{ icon: '/icons/React.svg', name: 'React.js' },
			{ icon: '/icons/yii.svg', name: 'Yii2' },
			{ icon: '/icons/symfony.svg', name: 'Symfony' },
			{ icon: '/icons/vuejs.svg', name: 'Vue.js' },
			{ icon: '/icons/web3js.svg', name: 'Web3.js' },
			{ icon: '/icons/ethers.svg', name: 'Ethers.js' },
			{ icon: '/icons/Redux.svg', name: 'Redux' },
			{ icon: '/icons/TypeScript.svg', name: 'TypeScript' },
			{ icon: '/icons/nuxtjs.svg', name: 'Nuxt.js' },
			{ icon: '/icons/Next.svg', name: 'Next.js' },
			{ icon: '/icons/Nest.svg', name: 'Nest.js' },
		],
	},
	{
		title: 'Smart Contracts',
		icon: LockKeyhole,
		techItems: [
			{ icon: '/icons/Solidity.svg', name: 'Solidity' },
			{ icon: '/icons/openzeppelin.svg', name: 'OpenZeppline' },
			{ icon: '/icons/truffle.svg', name: 'Truffle' },
			{ icon: '/icons/Hardhat.svg', name: 'HardHat' },
			{ icon: '/icons/tact.svg', name: 'Tact' },
			{ icon: '/icons/uniswap.svg', name: 'Uniswap V3' },
			{ icon: '/icons/swc.svg', name: 'SWC' },
			{ icon: '/icons/foundry.svg', name: 'Foundry' },
		],
	},
	// {
	// 	title: 'Blockchain Tools',
	// 	icon: '🌐',
	// 	techItems: ['Ethereum', 'Binance Smart Chain', 'Polygon', 'Avalanche'],
	// },
	// {
	// 	title: 'Wallets',
	// 	icon: '💳',
	// 	techItems: [
	// 		'MetaMask',
	// 		'Trust Wallet',
	// 		'Coinbase Wallet',
	// 		'Ledger',
	// 		'Trezor',
	// 	],
	// },
	// {
	// 	title: 'Infrastructure',
	// 	icon: '⚙️',
	// 	techItems: ['AWS', 'Azure', 'Google Cloud', 'IPFS', 'Docker'],
	// },
	// {
	// 	title: 'Design',
	// 	icon: '🎨',
	// 	techItems: ['Figma', 'Sketch', 'Adobe XD', 'Zeplin'],
	// },
	// {
	// 	title: 'Databases',
	// 	icon: '💾',
	// 	techItems: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
	// },
]

export default function TechStackSection() {
	return (
		<section className='max-w-5xl mx-auto py-12 px-6 text-center'>
			<motion.h2
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className='text-4xl font-bold mb-4'
			>
				Tech Stack
			</motion.h2>
			<motion.p
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
				className='text-lg text-muted-foreground mb-10'
			>
				Custom tech solutions tailored for exceptional results At CLIX, we use a
				wide range of cutting-edge technologies to deliver innovative, scalable,
				and robust software solutions for your business.
			</motion.p>
			{techBlocks.map((block, index) => (
				<div key={index} className='grid grid-cols-2 gap-5 mb-5'>
					<div className='relative border border-border rounded-lg overflow-hidden flex flex-col items-center p-4 group'>
						<block.icon className='w-12 h-12 text-primary mb-4 group-hover:text-[#0e62e4] transition duration-300' />
						<h3 className='text-2xl font-extrabold tracking-widest group-hover:text-transparent text-primary group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:bg-clip-text group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
							{block.title}
						</h3>
					</div>

					<motion.div
						initial='hidden'
						animate='visible'
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
						}}
						className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'
					>
						{block.techItems.map(tech => (
							<motion.div
								key={tech.name}
								variants={{
									hidden: { opacity: 0, y: 30 },
									visible: { opacity: 1, y: 0 },
								}}
								transition={{ duration: 0.6, ease: 'easeOut' }}
							>
								<div className='p-3 h-full flex flex-col items-center justify-between group hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 border rounded-lg'>
									<div className='relative'>
										<Image
											src={tech.icon}
											alt={tech.name}
											width={36}
											height={36}
											className='mb-4 transition duration-300 filter grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 min-w-[36px] min-h-[36px]'
										/>
									</div>
									<span className='font-medium text-sm'>{tech.name}</span>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			))}
		</section>
	)
}
