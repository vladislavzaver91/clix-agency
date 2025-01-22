'use client'

import { useEffect, useRef } from 'react'

const BackgroundAnimated = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		const particles: {
			x: number
			y: number
			size: number
			speedX: number
			speedY: number
			color: string
		}[] = []
		const particleCount = 100
		const colors = ['#190547', '#000105', '#df12bf', '#282827']

		const resizeCanvas = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		}

		const createParticles = () => {
			particles.length = 0
			for (let i = 0; i < particleCount; i++) {
				particles.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					size: Math.random() * 3 + 1,
					speedX: Math.random() * 2 - 1,
					speedY: Math.random() * 2 - 1,
					color: colors[Math.floor(Math.random() * colors.length)], // Устанавливаем цвет при создании частицы
				})
			}
		}

		const drawParticles = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			particles.forEach(particle => {
				ctx.fillStyle = particle.color // Используем заранее установленный цвет
				ctx.beginPath()
				ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
				ctx.closePath()
				ctx.fill()
			})
		}

		const updateParticles = () => {
			particles.forEach(particle => {
				particle.x += particle.speedX
				particle.y += particle.speedY

				if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
				if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
			})
		}

		const animate = () => {
			drawParticles()
			updateParticles()
			requestAnimationFrame(animate)
		}

		resizeCanvas()
		createParticles()
		animate()

		window.addEventListener('resize', () => {
			resizeCanvas()
			createParticles()
		})

		return () => {
			window.removeEventListener('resize', resizeCanvas)
		}
	}, [])

	return <canvas ref={canvasRef} className='fixed inset-0 z-[-1]' />
}

export { BackgroundAnimated }
