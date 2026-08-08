import { ChatGroq } from "@langchain/groq";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export const getModel = async (agent) => {
  const groq = new ChatGroq({
    model: "llama-3.3-70b-versatile",
    apiKey: process.env.GROQ_API_KEY,
  });

  const gemini = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    apiKey: process.env.GOOGLE_API_KEY,
  });

  switch (agent) {
    case "chat":
      return groq;
    case "search":
      return groq;
    case "coding":
      return gemini;
    default:
      return groq;
  }
};
