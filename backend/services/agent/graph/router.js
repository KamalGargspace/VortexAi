import { getModel } from "../config/llmModels.js";

export const router = async (state) => {
  const llm = await getModel("router");

  const prompt = `You are a highly precise routing agent. Your task is to analyze the user's input and route it to the single most appropriate specialized agent.

<agents>
- chat: General conversation, conceptual explanations, learning, and generic questions. Use this as the default fallback if no other agent applies.
- search: Internet lookups, current events, real-time information, news, and recent developments.
- coding: Generating or debugging code, software architecture, building projects, and API design.
- pdf: Generating PDF files or answering questions based on PDF document context.
- ppt: Generating PowerPoint (PPT) presentations or answering questions based on PPT context.
- vision: Generating, creating, or manipulating visual images.
</agents>

<rules>
1. Analyze the user's request and match it to the best agent in the <agents> list.
2. You must return EXACTLY ONE WORD corresponding to the agent name.
3. No explanations, no punctuation, no markdown formatting, and no introductory text.
</rules>

User Query:
 ${state.prompt}
`;

  const response = await llm.invoke(prompt);

  console.log(response);

  return {
    ...state,
    agent: response.content.trim().toLowerCase(),
  };
};
