import { useEffect, useRef } from 'react'

const useVideoSlowdown = () => {
	const videoRef = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		const videoElement = videoRef.current

		if (videoElement) {
			videoElement.playbackRate = 0.6 // Замедление видео
		}
	}, [])

	return videoRef
}

export default useVideoSlowdown
