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
		currValue !== value && setTimeout(setCurrValue, time, currValue + 1)
	}, [currValue, time, value])

	return (
		<div>
			{currValue}
			<span className='ml-2'>+</span>
		</div>
	)
}
