# VortexAi - Agent Service Architecture & Flow

This document outlines the setup, architectural decisions, and technical flow for the `agent` microservice created for the VortexAi platform. It serves as a reference for future development and provides key talking points for technical interviews.

## 1. What Was Achieved

- **Microservice Initialization**: Set up a new standalone Node.js/Express service (`agent` service) listening on port `8003`.
- **Database Integration**: Configured a connection to MongoDB using `mongoose` (`config/db.js`) to ensure the agent service can persist data independently (e.g., chat histories, agent memory).
- **LLM Foundation**: Installed and configured the **LangChain** ecosystem.
- **Multi-Model Setup**: Created a centralized configuration (`config/lllmModels.js`) that initializes clients for both **Groq** (for fast, open-source models) and **Google Gemini** (for advanced reasoning).
- **Agent Scaffolding**: Created the `agents/` and `graph/` directories, stubbing out the initial `chat.agent.js` to prepare for stateful LangGraph workflows.

---

## 2. Architecture & Technical Flow

The `agent` service acts as the dedicated brain of the VortexAi application. 

### Why a Separate Microservice?
By isolating the AI orchestration from the core services (Auth, Chat, Gateway), you achieve:
1. **Separation of Concerns**: The main application routing remains lightweight and isn't bogged down by heavy LangChain dependencies or long-running AI generation processes.
2. **Independent Scalability**: AI generation is resource-intensive and often has higher latency than standard CRUD operations. You can scale the `agent` service independently based on LLM traffic.
3. **Resilience**: If an LLM provider goes down or the agent service crashes due to a memory issue, the rest of the application (like user authentication or basic messaging) remains fully operational.

### Directory Intent & Flow
1. **`index.js`**: The entry point. It sets up the Express server, parses JSON, and connects to the database. It will eventually expose API endpoints that the `chat` service or `gateway` calls to trigger AI workflows.
2. **`config/lllmModels.js`**: Acts as a **Model Factory**. By defining `ChatGroq` and `ChatGoogleGenerativeAI` here and exporting them, you ensure that instances are reused across the service, avoiding unnecessary instantiation overhead.
3. **`agents/`**: Contains the specific logic for different types of agents (e.g., `chat.agent.js`). This is where you'll define the prompt templates and how the agent reacts to user input.
4. **`graph/`**: Prepared for `@langchain/langgraph`. Instead of simple, linear LLM calls, this folder will house **stateful, cyclical workflows** where an agent can loop, think, use tools, and evaluate its own output before responding to the user.

---

## 3. Technology Stack

- **Node.js & Express**: Fast, non-blocking I/O, perfect for handling concurrent network requests to external LLM APIs.
- **Mongoose**: For structured data modeling in MongoDB.
- **@langchain/core**: The foundational abstractions for prompts, tools, and output parsers.
- **@langchain/groq**: Connects to Groq's LPU (Language Processing Unit) inference engine. This is ideal for tasks requiring ultra-low latency using open-source models like Llama 3.
- **@langchain/google-genai**: Integrates Google's Gemini models (like `gemini-2.5-flash`), which are powerful for complex reasoning, long-context windows, and multimodal inputs.
- **@langchain/langgraph**: Enables the creation of complex agent architectures (like ReAct or multi-agent systems) by treating the workflow as a graph with persistent state.

---

## 4. Interview Guide: How to Explain Your Work

When asked about your recent backend work or architectural decisions in an interview, you can use these structured talking points:

### On System Design & Microservices
> *"For VortexAi, I designed the backend using a microservices architecture. I intentionally separated the AI generation logic into its own dedicated `agent` service. Because LLM interactions can be high-latency and resource-intensive, keeping them isolated means they don't block the event loop of our core API (like user auth or real-time sockets). This allows us to scale the AI workers independently as user demand grows."*

### On Model Selection & Strategy
> *"Instead of relying on a single provider, I implemented a multi-model strategy using the Factory pattern in my configuration. I integrated **Groq** to leverage open-source models with blazing-fast inference times for simpler, high-speed tasks, and **Google Gemini** for complex reasoning and larger context requirements. This gives the application the flexibility to route prompts to the most cost-effective and performant model based on the specific use case."*

### On Building Agents with LangGraph
> *"To handle the agent logic, I used LangChain and specifically set up the foundation for **LangGraph**. I chose LangGraph over standard chains because it allows for cyclical, stateful agent workflows. Instead of just answering a prompt, the agent can loop—it can think, execute a tool, observe the result, and decide if it needs to use another tool or if it has the final answer. This creates much more autonomous and capable AI features within the app."*
