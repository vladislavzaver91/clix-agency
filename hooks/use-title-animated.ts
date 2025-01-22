import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const useTitleAnimated = () => {
	const titleRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		// GSAP анимация букв для h1
		if (titleRef.current) {
			gsap.fromTo(
				titleRef.current.children,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					stagger: 0.08, // Эффект набора текста
					ease: 'power3.out',
					duration: 0.4,
				}
			)
		}
	}, [])

	return titleRef
}

export default useTitleAnimated
