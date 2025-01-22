'use client'

import { motion } from 'framer-motion'
import { HiOutlineBookOpen, HiOutlinePaintBrush } from 'react-icons/hi2'
import { IoIosFootball, IoMdCube } from 'react-icons/io'
import { IoDiamond, IoHomeOutline, IoMusicalNotes } from 'react-icons/io5'
import { LuGamepad2 } from 'react-icons/lu'
import { PiFileLockFill } from 'react-icons/pi'

const useCases = [
	{
		title: 'Art',
		description:
			'Our NFT platform allows users to own, buy, and sell exclusive digital artworks, including illustrations, animations, and digital sculptures, offering artists new revenue streams.',
		icon: HiOutlinePaintBrush,
	},
	{
		title: 'Music',
		description:
			"CLIX's NFT marketplace enables musicians to release exclusive tracks as NFTs, allowing fans to support them directly while owning a unique piece of music history.",
		icon: IoMusicalNotes,
	},
	{
		title: 'Collectibles',
		description:
			'Users can explore unique digital collectibles, from limited edition trading cards to rare in-game items, creating an exclusive marketplace for enthusiasts.',
		icon: IoDiamond,
	},
	{
		title: 'Sports',
		description:
			'Our NFT marketplace helps sports fans buy and sell exclusive digital memorabilia, including trading cards, match highlights, and other collectibles, fostering community engagement.',
		icon: IoIosFootball,
	},
	{
		title: 'Intellectual Property',
		description:
			'CLIX offers a secure platform for buying and selling digital copyrights and patents, ensuring easy access to intellectual property ownership through NFTs.',
		icon: PiFileLockFill,
	},
	{
		title: 'Real Estate',
		description:
			'Our platform enables users to invest in real estate through tokenized properties, offering fractional ownership and simplifying property transactions in the digital world.',
		icon: IoHomeOutline,
	},
	{
		title: 'Games',
		description:
			'Players can trade in-game items, skins, and characters as NFTs, adding value to their digital assets and integrating them into a thriving gaming ecosystem.',
		icon: LuGamepad2,
	},
	{
		title: 'Real-world Assets',
		description:
			"CLIX's NFT marketplace facilitates the tokenization of physical goods, allowing users to buy, sell, and trade real-world assets like antiques, luxury items, or equipment.",
		icon: IoMdCube,
	},
	{
		title: 'E-learning',
		description:
			'Educational institutions and content creators can monetize exclusive content by offering online courses, tutorials, and learning materials as NFTs, providing access to premium resources.',
		icon: HiOutlineBookOpen,
	},
]

export default function TopUseCasesSection() {
	return (
		<section className='max-w-5xl mx-auto py-16 px-6 text-center'>
			<motion.h2
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className='text-4xl font-bold mb-8'
			>
				Top Use Cases of the NFT Marketplace
			</motion.h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{useCases.map((useCase, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
						className='bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 group'
					>
						<useCase.icon className='w-12 h-12 text-primary mb-4 group-hover:text-[#0e62e4] transition duration-300' />
						<h3 className='text-xl font-semibold mb-3'>{useCase.title}</h3>
						<p className='text-muted-foreground'>{useCase.description}</p>
					</motion.div>
				))}
			</div>
		</section>
	)
}
