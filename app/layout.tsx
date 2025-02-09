import { BackgroundWrapper } from '@/components/ui/background-wrapper'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientLayout from './client-layout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'CLIX - Modern Web Development Agency',
	description:
		'CLIX is a leading web development agency specializing in React, Next.js, TypeScript, and modern backend technologies. We create fast, scalable, and SEO-optimized web applications.',
	keywords:
		'CLIX, web development, React, Next.js, TypeScript, PostgreSQL, MySQL, frontend development, backend development',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<BackgroundWrapper />
				<ClientLayout>{children}</ClientLayout> {/* Используем ClientLayout */}
				{/* <ChatWidget /> */}
				<Toaster />
			</body>
		</html>
	)
}
