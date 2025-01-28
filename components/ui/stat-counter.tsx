import { useEffect, useState } from 'react'

export default function StatCounter({
	value,
	time,
}: {
	value: number
	time: number
}) {
	const [currValue, setCurrValue] = useState(0)

	useEffect(() => {
		let interval: NodeJS.Timeout

		if (currValue < value) {
			interval = setTimeout(() => setCurrValue(currValue + 1), time)
		}

		return () => clearTimeout(interval)
	}, [currValue, value, time])

	useEffect(() => {
		setCurrValue(0)
	}, [value])

	return (
		<div>
			{currValue}
			<span className='ml-2'>+</span>
		</div>
	)
}
