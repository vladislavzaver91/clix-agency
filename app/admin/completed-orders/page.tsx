// 'use client'

// import { Button } from '@/components/ui/button'
// import { Card } from '@/components/ui/card'
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from '@/components/ui/select'
// import { format } from 'date-fns'
// import { ArrowLeft } from 'lucide-react'
// import Link from 'next/link'
// import { useState } from 'react'

// type Currency = 'USD' | 'EUR' | 'UAH'

// type Order = {
// 	id: string
// 	clientId: string
// 	status: 'COMPLETED'
// 	amount: number
// 	description: string | null
// 	createdAt: string
// 	client: {
// 		name: string | null
// 	}
// }

// export default function CompletedOrdersPage() {
// 	const [orders, setOrders] = useState<Order[]>([])
// 	const [currency, setCurrency] = useState<Currency>('USD')
// 	const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({
// 		USD: 1,
// 		EUR: 0.85,
// 		UAH: 37.5,
// 	})

// 	// useEffect(() => {
// 	//   Promise.all([
// 	//     fetch("/api/completed-orders").then(res => res.json()),
// 	//     fetch("/api/exchange-rates").then(res => res.json())
// 	//   ]).then(([ordersData, ratesData]) => {
// 	//     setOrders(ordersData);
// 	//     const rates = ratesData.reduce((acc: Record<string, number>, rate: { currency: string; rate: number }) => {
// 	//       acc[rate.currency] = rate.rate;
// 	//       return acc;
// 	//     }, { USD: 1 });
// 	//     setExchangeRates(rates);
// 	//   });
// 	// }, []);

// 	const formatAmount = (amount: number) => {
// 		const convertedAmount = amount * (exchangeRates[currency] || 1)
// 		return new Intl.NumberFormat('en-US', {
// 			style: 'currency',
// 			currency: currency,
// 			minimumFractionDigits: 0,
// 			maximumFractionDigits: 0,
// 		}).format(convertedAmount)
// 	}

// 	return (
// 		<div className='min-h-screen bg-gray-50 p-8'>
// 			<div className='max-w-7xl mx-auto'>
// 				<div className='flex justify-between items-center mb-8'>
// 					<div className='flex items-center gap-4'>
// 						<Link href='/'>
// 							<Button variant='ghost' size='icon'>
// 								<ArrowLeft className='h-4 w-4' />
// 							</Button>
// 						</Link>
// 						<h1 className='text-4xl font-bold text-gray-900'>
// 							Completed Orders
// 						</h1>
// 					</div>
// 					<Select
// 						value={currency}
// 						onValueChange={(value: Currency) => setCurrency(value)}
// 					>
// 						<SelectTrigger className='w-[120px]'>
// 							<SelectValue placeholder='Currency' />
// 						</SelectTrigger>
// 						<SelectContent>
// 							<SelectItem value='USD'>USD</SelectItem>
// 							<SelectItem value='EUR'>EUR</SelectItem>
// 							<SelectItem value='UAH'>UAH</SelectItem>
// 						</SelectContent>
// 					</Select>
// 				</div>

// 				<div className='space-y-6'>
// 					{orders.map(order => (
// 						<Card
// 							key={order.id}
// 							className='p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow'
// 						>
// 							<div className='flex flex-col gap-4'>
// 								<div className='flex justify-between items-start'>
// 									<div>
// 										<h3 className='text-xl font-semibold mb-2'>
// 											{order.client.name || 'Unnamed Client'}
// 										</h3>
// 										<p className='text-gray-600 mb-1'>
// 											Amount: {formatAmount(order.amount)}
// 										</p>
// 										{order.description && (
// 											<p className='text-gray-600 mb-1'>
// 												Description: {order.description}
// 											</p>
// 										)}
// 										<p className='text-sm text-gray-500'>
// 											Completed on: {format(new Date(order.createdAt), 'PPP')}
// 										</p>
// 									</div>
// 									<div className='px-3 py-1 rounded-full text-sm bg-green-100 text-green-800'>
// 										COMPLETED
// 									</div>
// 								</div>
// 							</div>
// 						</Card>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
