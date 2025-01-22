import { useState } from 'react'

export const servicesSubmenu = [
	{
		title: 'Web3 Services',
		links: [
			{
				href: '/services/blockchain-dev',
				label: 'Blockchain Development',
			},
			{
				href: '/services/crypto-exchange',
				label: 'Crypto Exchange Development',
			},
			{ href: '/services/dex', label: 'DEX Development' },
			{ href: '/services/cryptocurrency', label: 'Cryptocurrency Development' },
			{
				href: '/services/p2p-crypto',
				label: 'P2P Crypto Exchange Development',
			},
			{ href: '/services/d-app', label: 'dApp Development' },
			{ href: '/services/web3', label: 'Web3 Development' },
			{
				href: '/services/crypto-wallet',
				label: 'Crypto Wallet Development',
			},
			{
				href: '/services/smart-contract',
				label: 'Smart Contract Development',
			},
			{ href: '/services/telegram-mini-apps', label: 'Telegram Mini Apps' },
			{
				href: '/services/nft-marketplace',
				label: 'NFT Marketplace Development',
			},
		],
	},
	{
		title: 'Software Development Services',
		links: [
			{ href: '/services/mob-app', label: 'Mobile App Development' },
			{
				href: '/services/custom-software',
				label: 'Custom Software Development',
			},
			{ href: '/services/saas', label: 'SaaS Development' },
			{ href: '/services/fintech', label: 'Fintech App Development' },
			{ href: '/services/web-dev', label: 'Web Development' },
			{ href: '/services/web-design', label: 'Web Design Services' },
			{ href: '/services/crm', label: 'CRM Development' },
			{ href: '/services/marketplace', label: 'Marketplace Development' },
			{ href: '/services/it-outstaffing', label: 'IT Outstaffing Services' },
			{
				href: '/services/dedicated-dev-team',
				label: 'Dedicated Development Team',
			},
		],
	},
]

const useServicesSubmenu = () => {
	const [isServicesOpen, setIsServicesOpen] = useState(false)
	const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
	const [mobileGroupStates, setMobileGroupStates] = useState(
		servicesSubmenu.map(() => false)
	)
	const [desktopGroupStates, setDesktopGroupStates] = useState(
		servicesSubmenu.map(() => true)
	)

	const toggleGroupState = (index: number, isDesktop: boolean = true) => {
		const groupStates = isDesktop
			? [...desktopGroupStates]
			: [...mobileGroupStates]
		groupStates[index] = !groupStates[index]
		isDesktop
			? setDesktopGroupStates(groupStates)
			: setMobileGroupStates(groupStates)
	}

	return {
		isServicesOpen,
		setIsServicesOpen,
		isMobileServicesOpen,
		setIsMobileServicesOpen,
		mobileGroupStates,
		desktopGroupStates,
		toggleGroupState,
	}
}

export default useServicesSubmenu
