'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { BarChart, DollarSign, FileCheck, Settings } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

type Currency = 'USD' | 'EUR' | 'UAH'

type ExchangeRate = {
	currency: string
	rate: number
}

export default function Dashboard() {
	const [stats, setStats] = useState({
		monthlyEarnings: 0,
		yearlyEarnings: 0,
		activeOrdersValue: 0,
		completedOrders: 0,
	})
	const [currency, setCurrency] = useState<Currency>('USD')
	const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({
		USD: 1,
		EUR: 0.85,
		UAH: 37.5,
	})
	const [isRateDialogOpen, setIsRateDialogOpen] = useState(false)

	// useEffect(() => {
	//   Promise.all([
	//     fetch("/api/stats").then((res) => res.json()),
	//     fetch("/api/exchange-rates").then((res) => res.json()),
	//   ]).then(([statsData, ratesData]) => {
	//     setStats(statsData);
	//     const rates = ratesData.reduce(
	//       (acc: Record<string, number>, rate: ExchangeRate) => {
	//         acc[rate.currency] = rate.rate;
	//         return acc;
	//       },
	//       { USD: 1 }
	//     );
	//     setExchangeRates(rates);
	//   });
	// }, []);

	const formatAmount = (amount: number) => {
		const convertedAmount = amount * (exchangeRates[currency] || 1)
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: currency,
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(convertedAmount)
	}

	const updateRate = async (currency: string, rate: number) => {
		await fetch('/api/exchange-rates', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ currency, rate }),
		})
		setExchangeRates(prev => ({ ...prev, [currency]: rate }))
	}

	return (
		<div className='min-h-screen bg-gray-50 p-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='flex justify-between items-center mb-8'>
					<h1 className='text-4xl font-bold text-gray-900'>Dashboard</h1>
					<div className='flex items-center gap-4'>
						<Select
							value={currency}
							onValueChange={(value: Currency) => setCurrency(value)}
						>
							<SelectTrigger className='w-[120px]'>
								<SelectValue placeholder='Currency' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='USD'>USD</SelectItem>
								<SelectItem value='EUR'>EUR</SelectItem>
								<SelectItem value='UAH'>UAH</SelectItem>
							</SelectContent>
						</Select>

						<Dialog open={isRateDialogOpen} onOpenChange={setIsRateDialogOpen}>
							<DialogTrigger asChild>
								<Button variant='outline' size='icon'>
									<Settings className='h-4 w-4' />
								</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Exchange Rates (vs USD)</DialogTitle>
								</DialogHeader>
								<div className='space-y-4 pt-4'>
									<div className='space-y-2'>
										<Label>EUR Rate</Label>
										<Input
											type='number'
											step='0.01'
											value={exchangeRates.EUR}
											onChange={e =>
												updateRate('EUR', parseFloat(e.target.value))
											}
										/>
									</div>
									<div className='space-y-2'>
										<Label>UAH Rate</Label>
										<Input
											type='number'
											step='0.01'
											value={exchangeRates.UAH}
											onChange={e =>
												updateRate('UAH', parseFloat(e.target.value))
											}
										/>
									</div>
								</div>
							</DialogContent>
						</Dialog>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
					<Card className='p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow'>
						<div className='flex items-center space-x-4'>
							<div className='p-3 bg-blue-100 rounded-full'>
								<DollarSign className='h-6 w-6 text-blue-600' />
							</div>
							<div>
								<p className='text-sm text-gray-500'>Monthly Earnings</p>
								<h3 className='text-2xl font-bold'>
									{formatAmount(stats.monthlyEarnings)}
								</h3>
							</div>
						</div>
					</Card>

					<Card className='p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow'>
						<div className='flex items-center space-x-4'>
							<div className='p-3 bg-green-100 rounded-full'>
								<BarChart className='h-6 w-6 text-green-600' />
							</div>
							<div>
								<p className='text-sm text-gray-500'>Yearly Earnings</p>
								<h3 className='text-2xl font-bold'>
									{formatAmount(stats.yearlyEarnings)}
								</h3>
							</div>
						</div>
					</Card>

					<Card className='p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow'>
						<div className='flex items-center space-x-4'>
							<div className='p-3 bg-purple-100 rounded-full'>
								<FileCheck className='h-6 w-6 text-purple-600' />
							</div>
							<div>
								<p className='text-sm text-gray-500'>Active Orders Value</p>
								<h3 className='text-2xl font-bold'>
									{formatAmount(stats.activeOrdersValue)}
								</h3>
							</div>
						</div>
					</Card>

					{/* <Link href='/admin/completed-orders'>
						<Card className='p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow'>
							<div className='flex items-center space-x-4'>
								<div className='p-3 bg-orange-100 rounded-full'>
									<Users className='h-6 w-6 text-orange-600' />
								</div>
								<div>
									<p className='text-sm text-gray-500'>Completed Orders</p>
									<h3 className='text-2xl font-bold'>
										{stats.completedOrders}
									</h3>
								</div>
							</div>
						</Card>
					</Link> */}
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<Link href='/admin/clients' className='block'>
						<Card className='p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow'>
							<h2 className='text-2xl font-semibold mb-4'>Clients</h2>
							<p className='text-gray-600'>
								Manage your client list and information
							</p>
						</Card>
					</Link>

					<Link href='/admin/orders' className='block'>
						<Card className='p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow'>
							<h2 className='text-2xl font-semibold mb-4'>Orders</h2>
							<p className='text-gray-600'>Track and manage all your orders</p>
						</Card>
					</Link>

					<Link href='/admin/workers' className='block'>
						<Card className='p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow'>
							<h2 className='text-2xl font-semibold mb-4'>Workers</h2>
							<p className='text-gray-600'>Track and manage all your workers</p>
						</Card>
					</Link>
				</div>
			</div>
		</div>
	)
}
