import useVideoSlowdown from '@/hooks/use-video-slowdown'

interface IVideo {
	path: string
	name: string
}

const Video = ({ path, name }: IVideo) => {
	const videoRef = useVideoSlowdown()
	return (
		<div className='relative w-full h-full aspect-square'>
			<video
				ref={videoRef}
				className='w-full h-full object-cover brightness-50 rounded-2xl shadow-video drop-shadow-xl'
				autoPlay
				muted
				loop
				playsInline
				id={name}
			>
				<source src={path} type='video/mp4' />
				Your browser does not support video playback.
			</video>
			<div className='absolute top-0 left-0 w-full h-full bg-bgVideo rounded-2xl' />
		</div>
	)
}

export { Video }
