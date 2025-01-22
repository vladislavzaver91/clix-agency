'use client'

import { usePathname } from 'next/navigation'
import { BackgroundAnimated } from './background-animated'

const BackgroundWrapper = () => {
	const pathname = usePathname()
	return pathname !== '/get-started' ? <BackgroundAnimated /> : null
}

export { BackgroundWrapper }
