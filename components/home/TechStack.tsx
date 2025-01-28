'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const technologies = [
	{ icon: '/icons/tech/CSS3.svg', name: 'CSS3' },
	{ icon: '/icons/tech/HTML5.svg', name: 'HTML5' },
	{ icon: '/icons/tech/PHP.svg', name: 'PHP' },
	{ icon: '/icons/tech/Nodejs.svg', name: 'Node.js' },
	{ icon: '/icons/tech/swift.svg', name: 'Swift' },
	{ icon: '/icons/tech/java.svg', name: 'Java' },
	{ icon: '/icons/tech/objectivec.svg', name: 'Objective-c' },
	{ icon: '/icons/tech/rust.svg', name: 'Rust' },
	{ icon: '/icons/tech/python.svg', name: 'Python' },
	{ icon: '/icons/tech/React.svg', name: 'React Native' },
	{ icon: '/icons/tech/flutterio.svg', name: 'Flutter' },
	{ icon: '/icons/tech/visual_base.svg', name: 'Visual Basic' },
	{ icon: '/icons/tech/angular.svg', name: 'Angular' },
	{ icon: '/icons/tech/django.svg', name: 'Django' },
	{ icon: '/icons/tech/Laravel.svg', name: 'Laravel' },
	{ icon: '/icons/tech/React.svg', name: 'React.js' },
	{ icon: '/icons/tech/yii.svg', name: 'Yii2' },
	{ icon: '/icons/tech/symfony.svg', name: 'Symfony' },
	{ icon: '/icons/tech/vuejs.svg', name: 'Vue.js' },
	{ icon: '/icons/tech/web3js.svg', name: 'Web3.js' },
	{ icon: '/icons/tech/ethers.svg', name: 'Ethers.js' },
	{ icon: '/icons/tech/Redux.svg', name: 'Redux' },
	{ icon: '/icons/tech/TypeScript.svg', name: 'TypeScript' },
	{ icon: '/icons/tech/nuxtjs.svg', name: 'Nuxt.js' },
	{ icon: '/icons/tech/Next.svg', name: 'Next.js' },
	{ icon: '/icons/tech/Nest.svg', name: 'Nest.js' },
	{ icon: '/icons/tech/JavaScript.svg', name: 'JavaScript' },
	{ icon: '/icons/tech/Express.svg', name: 'Express' },
	{ icon: '/icons/tech/Prisma.svg', name: 'Prisma' },
	{ icon: '/icons/tech/TanstackQuery.svg', name: 'TanStackQuery' },
	{ icon: '/icons/tech/Solidity.svg', name: 'Solidity' },
	{ icon: '/icons/tech/openzeppelin.svg', name: 'OpenZeppelin' },
	{ icon: '/icons/tech/truffle.svg', name: 'Truffle' },
	{ icon: '/icons/tech/Hardhat.svg', name: 'HardHat' },
	{ icon: '/icons/tech/tact.svg', name: 'Tact' },
	{ icon: '/icons/tech/uniswap.svg', name: 'Uniswap V3' },
	{ icon: '/icons/tech/swc.svg', name: 'SWC' },
	{ icon: '/icons/tech/foundry.svg', name: 'Foundry' },
	{ icon: '/icons/tech/Axios.svg', name: 'Axios' },
	{ icon: '/icons/tech/Chart.svg', name: 'Chart.js' },
	{ icon: '/icons/tech/Zod.svg', name: 'Zod' },
	{ icon: '/icons/tech/Cypress.svg', name: 'Cypress' },
	{ icon: '/icons/tech/infura.svg', name: 'Infura' },
	{ icon: '/icons/tech/alchemy.svg', name: 'Alchemy' },
	{ icon: '/icons/tech/quicknode.svg', name: 'Quicknode' },
	{ icon: '/icons/tech/ganache.svg', name: 'Ganache' },
	{ icon: '/icons/tech/ethereum.svg', name: 'Geth' },
	{ icon: '/icons/tech/chainlink.svg', name: 'Chainlink' },
	{ icon: '/icons/tech/pinata.png', name: 'Pinata' },
	{ icon: '/icons/tech/pancakeswap.svg', name: 'Pancakeswap' },
	{ icon: '/icons/tech/coinmarketcap.svg', name: 'Coinmarketcap' },
	{ icon: '/icons/tech/toncenter.jpg', name: 'Toncenter' },
	{ icon: '/icons/tech/nownodes.jpeg', name: 'Nownodes' },
	{ icon: '/icons/tech/arbitrum.svg', name: 'Arbitrum' },
	{ icon: '/icons/tech/ethereum.svg', name: 'Ethereum' },
	{ icon: '/icons/tech/optimism.svg', name: 'Optimism' },
	{ icon: '/icons/tech/Polygon.svg', name: 'Polygon' },
	{ icon: '/icons/tech/Fireblocks.svg', name: 'Fireblocks' },
	{ icon: '/icons/tech/bnb.svg', name: 'BNB Chain' },
	{ icon: '/icons/tech/ton.svg', name: 'TON' },
	{ icon: '/icons/tech/solana.svg', name: 'Solana' },
	{ icon: '/icons/tech/Base.png', name: 'Base' },
	{ icon: '/icons/tech/hyperledger.svg', name: 'Hyperledger Besu' },
	{ icon: '/icons/tech/evm.svg', name: 'EVM-compatible' },
	{ icon: '/icons/tech/metamask.svg', name: 'Metamask' },
	{ icon: '/icons/tech/walletconnect.svg', name: 'Walletconnect' },
	{ icon: '/icons/tech/ton.svg', name: 'Ton Connect' },
	{ icon: '/icons/tech/google_cloud.svg', name: 'Google Cloud' },
	{ icon: '/icons/tech/AWS.svg', name: 'AWS' },
	{ icon: '/icons/tech/GitHub-Actions.svg', name: 'GitHub Actions' },
	{ icon: '/icons/tech/hetzner.svg', name: 'Hetzner' },
	{ icon: '/icons/tech/Docker.svg', name: 'Docker' },
	{ icon: '/icons/tech/Kubernetes.svg', name: 'Kubernetes' },
	{ icon: '/icons/tech/Jenkins.svg', name: 'Jenkins' },
	{ icon: '/icons/tech/Azure.svg', name: 'Azure' },
	{ icon: '/icons/tech/Figma.svg', name: 'Figma' },
	{ icon: '/icons/tech/lottie.png', name: 'Lottie Animations' },
	{ icon: '/icons/tech/Canva.svg', name: 'Canva' },
	{ icon: '/icons/tech/Adobe-Photoshop.svg', name: 'Adobe Photoshop' },
	{ icon: '/icons/tech/MongoDB.svg', name: 'MongoDB' },
	{ icon: '/icons/tech/MySQL.svg', name: 'MySQL' },
	{ icon: '/icons/tech/PostgresSQL.svg', name: 'PostgresSQL' },
	{ icon: '/icons/tech/redis.svg', name: 'Redis' },
	{ icon: '/icons/tech/RabbitMQ.svg', name: 'RabbitMQ' },
]

export default function TechStack() {
	return (
		<section className='py-20 bg-background'>
			<div className='container px-4'>
				<motion.h2
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.7 }}
					className='text-3xl font-bold text-center mb-4'
				>
					Our Tech Stack
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.8 }}
					className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'
				>
					We use the latest and most powerful technologies to build scalable,
					performant, and maintainable applications.
				</motion.p>

				<motion.div
					initial='hidden'
					animate='visible'
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
					}}
					className='grid grid-cols-2 min-[420px]:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 gap-6'
				>
					{technologies.map(tech => (
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
								<span className='font-normal text-center text-sm'>
									{tech.name}
								</span>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
