'use client'

import useServicesSubmenu, {
	servicesSubmenu,
} from '@/hooks/use-services-submenu'
import useTechnologiesSubmenu, {
	technologiesSubmenu,
} from '@/hooks/use-technologies-submenu'
import { motion } from 'framer-motion'
import {
	ArrowRight,
	ChevronDown,
	Code2,
	ExternalLink,
	Menu,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from '../ui/button'

const navItems = [
	{ href: '/', label: 'Home' },
	{ label: 'Services', hasSubmenu: true },
	{ label: 'Technologies', hasSubmenu: true },
	{ href: '/portfolio', label: 'Portfolio' },
	{ href: '/about', label: 'About' },
	// { href: "/blog", label: "Blog" },
]

export default function Navbar() {
	const pathname = usePathname()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const {
		isServicesOpen,
		setIsServicesOpen,
		isMobileServicesOpen,
		setIsMobileServicesOpen,
		mobileGroupStates,
		desktopGroupStates,
		toggleGroupState,
	} = useServicesSubmenu()

	const {
		isTechnologiesOpen,
		setIsTechnologiesOpen,
		isMobileTechnologiesOpen,
		setIsMobileTechnologiesOpen,
	} = useTechnologiesSubmenu()

	return (
		<nav className='fixed w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:flex md:justify-center'>
			<div className='md:container flex h-16 items-center max-md:justify-between px-4'>
				<Link href='/' className='flex items-center space-x-2'>
					<Code2 className='h-8 w-8 text-primary' />
					<span className='font-bold text-2xl'>CLIX</span>
				</Link>

				{/* Desktop Navigation */}
				<div className='hidden md:flex items-baseline space-x-8 mx-8'>
					{navItems.map(item => (
						<div key={item.href} className='relative'>
							{item.hasSubmenu ? (
								item.label === 'Services' ? (
									<button
										onClick={() => {
											setIsServicesOpen(!isServicesOpen)
											setIsTechnologiesOpen(false)
										}}
										className={`text-sm font-medium flex items-center space-x-1 transition-colors hover:text-primary ${
											pathname.startsWith('/services')
												? 'text-primary'
												: 'text-muted-foreground'
										}`}
									>
										<span>{item.label}</span>
										<ChevronDown
											className='w-4 h-4 transition-transform'
											style={{
												transform: isServicesOpen
													? 'rotate(180deg)'
													: 'rotate(0deg)',
											}}
										/>
									</button>
								) : (
									<button
										onClick={() => {
											setIsTechnologiesOpen(!isTechnologiesOpen)
											setIsServicesOpen(false)
										}}
										className={`text-sm font-medium flex items-center space-x-1 transition-colors hover:text-primary ${
											pathname.startsWith('/technologies')
												? 'text-primary'
												: 'text-muted-foreground'
										}`}
									>
										<span>{item.label}</span>
										<ChevronDown
											className='w-4 h-4 transition-transform'
											style={{
												transform: isTechnologiesOpen
													? 'rotate(180deg)'
													: 'rotate(0deg)',
											}}
										/>
									</button>
								)
							) : (
								item.href && (
									<Link
										href={item.href}
										className={`text-sm font-medium transition-colors hover:text-primary ${
											pathname === item.href
												? 'text-primary'
												: 'text-muted-foreground'
										}`}
									>
										{item.label}
									</Link>
								)
							)}

							{item.hasSubmenu &&
								isServicesOpen &&
								item.label === 'Services' && (
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										className='absolute -left-16 w-[550px] mt-2 bg-white shadow-lg border rounded-md overflow-hidden'
									>
										<div className='flex w-full'>
											{servicesSubmenu.map((group, index) => (
												<div key={index} className='p-3 w-1/2'>
													<button
														className='flex items-center w-full text-sm text-start font-bold text-gray-700 hover:text-primary'
														onClick={() => toggleGroupState(index, true)}
													>
														{group.title}
														<ChevronDown
															className={`w-4 h-4 ml-3 transition-transform ${
																desktopGroupStates[index] ? 'rotate-180' : ''
															}`}
														/>
													</button>
													{desktopGroupStates[index] && (
														<div className='mt-2'>
															{group.links.map(link => (
																<Link
																	key={link.href}
																	href={link.href}
																	onClick={() => {
																		setIsServicesOpen(false)
																	}}
																	className='block text-sm text-gray-700 hover:bg-gray-200 p-2 rounded-md'
																>
																	{link.label}
																</Link>
															))}
														</div>
													)}
												</div>
											))}
										</div>
										<Link
											onClick={() => {
												setIsServicesOpen(false)
											}}
											href='/services'
											className='flex items-center p-3 text-sm text-start font-bold text-gray-700 hover:text-primary'
										>
											All services
											<ExternalLink className='w-4 h-4 ml-3' />
										</Link>
									</motion.div>
								)}

							{item.hasSubmenu &&
								isTechnologiesOpen &&
								item.label === 'Technologies' && (
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										className='absolute -left-4 w-[200px] mt-2 bg-white shadow-lg border rounded-md overflow-hidden'
									>
										<div className='w-full px-3 pb-2'>
											{technologiesSubmenu.map((group, index) => (
												<div key={index} className='mt-2'>
													<Link
														href={group.href}
														onClick={() => {
															setIsTechnologiesOpen(false)
														}}
														className='block text-sm text-gray-700 hover:bg-gray-200 p-2 rounded-md'
													>
														{group.label}
													</Link>
												</div>
											))}
										</div>
									</motion.div>
								)}
						</div>
					))}
				</div>

				<div className='max-[767px]:hidden ml-auto'>
					<Button asChild size='sm'>
						<Link href='/get-started'>
							Get Started <ArrowRight size={16} className='ml-2' />
						</Link>
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<Button
					variant='ghost'
					size='icon'
					className='md:hidden'
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					<Menu className='h-6 w-6' />
				</Button>
			</div>

			{/* Mobile Navigation */}
			{isMobileMenuOpen && (
				<div className='md:hidden fixed w-full h-screen border-t bg-background'>
					<div className='container overflow-y-auto h-screen py-4 space-y-4'>
						{navItems.map(item => (
							<div key={item.href} className='relative'>
								{item.hasSubmenu &&
								(item.label === 'Services' || item.label === 'Technologies') ? (
									<button
										onClick={() => {
											if (item.label === 'Services') {
												setIsMobileServicesOpen(!isMobileServicesOpen)
												setIsMobileTechnologiesOpen(false)
											} else {
												setIsMobileTechnologiesOpen(!isMobileTechnologiesOpen)
												setIsMobileServicesOpen(false)
											}
										}}
										className='flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-accent rounded-md'
									>
										{item.label}
										<ChevronDown
											className={`h-4 w-4 transition-transform ${
												(item.label === 'Services' && isMobileServicesOpen) ||
												(item.label === 'Technologies' &&
													isMobileTechnologiesOpen)
													? 'rotate-180'
													: ''
											}`}
										/>
									</button>
								) : item.href ? (
									<Link
										href={item.href}
										className='block px-4 py-2 text-sm hover:bg-accent rounded-md'
										onClick={() => setIsMobileMenuOpen(false)}
									>
										{item.label}
									</Link>
								) : (
									<div
										className='block px-4 py-2 text-sm hover:bg-accent rounded-md'
										onClick={() => setIsMobileMenuOpen(false)}
									>
										{item.label}
									</div>
								)}

								{isMobileServicesOpen && item.label === 'Services' && (
									<div className='pl-3 space-y-2'>
										{servicesSubmenu.map((group, index) => (
											<div key={index} className='p-3'>
												<button
													className='flex items-center w-full text-sm text-start font-bold text-gray-700 hover:text-primary'
													onClick={() => toggleGroupState(index, false)}
												>
													{group.title}
													<ChevronDown
														className={`w-4 h-4 ml-2 transition-transform ${
															mobileGroupStates[index] ? 'rotate-180' : ''
														}`}
													/>
												</button>
												{mobileGroupStates[index] && (
													<div className='mt-2 pl-4'>
														{group.links.map(link => (
															<Link
																key={link.href}
																href={link.href}
																onClick={() => {
																	setIsServicesOpen(false)
																	setIsMobileMenuOpen(false)
																}}
																className='block text-sm text-gray-700 hover:text-primary'
															>
																{link.label}
															</Link>
														))}
													</div>
												)}
											</div>
										))}
										<Link
											href='/services'
											onClick={() => {
												setIsServicesOpen(false)
												setIsMobileMenuOpen(false)
											}}
											className='flex items-center p-3 text-sm text-start font-bold text-gray-700 hover:text-primary'
										>
											All services
											<ExternalLink className='w-4 h-4 ml-3' />
										</Link>
									</div>
								)}

								{isMobileTechnologiesOpen && item.label === 'Technologies' && (
									<div className='pl-3 space-y-2'>
										{technologiesSubmenu.map((group, index) => (
											<div key={index} className='p-3'>
												<Link
													href={group.href}
													onClick={() => {
														setIsTechnologiesOpen(false)
														setIsMobileMenuOpen(false)
													}}
													className='block text-sm text-gray-700 hover:bg-gray-200 p-2 rounded-md'
												>
													{group.label}
												</Link>
											</div>
										))}
									</div>
								)}
							</div>
						))}

						<div className='md:hidden pl-4'>
							<Button asChild size='sm' className='mt-8'>
								<Link
									href='/get-started'
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Get Started <ArrowRight size={16} className='ml-2' />
								</Link>
							</Button>
						</div>
					</div>
				</div>
			)}
		</nav>
	)
}
