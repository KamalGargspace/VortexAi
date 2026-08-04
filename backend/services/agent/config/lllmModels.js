import { ChatGroq } from "@langchain/groq"
import { ChatGoogleGenerativeAI } from "@langchain/google-genai"

const groq = new ChatGroq({
    model: "openai/gpt-oss-120b",
    // temperature: 0,
    // maxTokens: undefined,
    // maxRetries: 2,
    // // other params...
})

const gemini= new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    
})

