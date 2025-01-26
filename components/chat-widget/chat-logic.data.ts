export const initialMessage = `Hello, we provide web application development consultancy. Our team offers a full range of website development services: Frontend and Backend development, Web applications, Mobile-first design, Performance optimization, Custom solutions. For a consultation, please leave your details.`

export const thankYouMessage = `Thank you for submitting your data! We're happy to help you with your development questions.
You can leave a request in the Get Started section or message us on social media for more information.
`

export const handleSubmitData = async (formData: {
	name: string
	email: string
	phone: string
}) => {
	const response = await fetch('/api/chat-gpt', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(formData),
	})

	const data = await response.json()
	return data.message
}
