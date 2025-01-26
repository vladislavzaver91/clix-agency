import dotenv from 'dotenv'
import OpenAI from 'openai'

dotenv.config()

const openAIKey = process.env.OPENAI_KEY

const openai = new OpenAI({
	apiKey: openAIKey,
})

export default openai
