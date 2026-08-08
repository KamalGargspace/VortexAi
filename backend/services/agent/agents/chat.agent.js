import { getModel } from "../config/llmModels.js"

export const chatAgent = async(state)=>{
   const llm = getModel("chat")

   const systemPrompt = "You are VortexAi, an intelligent AI assistant"
   const response = (await llm).invoke([
    {
        "role":"system",
        "content":systemPrompt
    },
    {
        "role":"user",
        "content":state.prompt
    }
   ])

   return {
    ... state,
    aiResponse:response.content
   }
}