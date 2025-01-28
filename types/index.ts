export type Services = {
	title: string
	href?: string
	description: string
}[]

export type Benefits = {
	title: string
	description: string
}[]

export type ProcessSteps = {
	title: string
	description: string
}[]

export type TechnologiesIcons = {
	name: string
	icon: string
}[]

export type FaqItems = {
	question: string
	answer: string
}[]

export type BenefitsSectionType = {
	headTitle: string
	subTitle: string
	benefits: Benefits
}

export type processSection = {
	headTitle: string
	subTitle: string
	processSteps: ProcessSteps
}

export type faqSection = {
	subTitle: string
	faqItems: FaqItems
}
