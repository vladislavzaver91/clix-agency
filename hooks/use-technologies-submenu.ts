import { useState } from 'react'

export const technologiesSubmenu = [
	{
		href: '/technologies/laravel-dev',
		label: 'Laravel Development',
	},
	{
		href: '/technologies/react-dev',
		label: 'React Development',
	},
	{
		href: '/technologies/react-native-dev',
		label: 'React Native Development',
	},
	{
		href: '/technologies/nodejs-dev',
		label: 'Node.js Development',
	},
	{
		href: '/technologies/solidity-dev',
		label: 'Solidity Development',
	},
]

const useTechnologiesSubmenu = () => {
	const [isTechnologiesOpen, setIsTechnologiesOpen] = useState(false)
	const [isMobileTechnologiesOpen, setIsMobileTechnologiesOpen] =
		useState(false)

	return {
		isTechnologiesOpen,
		setIsTechnologiesOpen,
		isMobileTechnologiesOpen,
		setIsMobileTechnologiesOpen,
	}
}

export default useTechnologiesSubmenu
