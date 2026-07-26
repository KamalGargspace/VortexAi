# VortexAi 🌪️

VortexAi is an advanced, microservices-driven Multi-Agent AI ecosystem. It leverages LangChain, LangGraph, and RAG to route queries to specialized agents (Chat, Web Search, Code Generation, PDF/PPT Creation, Image Gen). Built on the MERN stack with Redis, Docker, AWS, and Razorpay integration for credit-based usage.

## 🏗️ Architecture & Structure

```mermaid
graph TD
    Client[Client App / React Frontend]
    API_Gateway[API Gateway]
    
    Client --> API_Gateway
    
    subgraph Microservices
        AuthService[Auth Service]
        ChatService[Chat Service]
        AgentRouter[AI Agent Router]
    end
    
    API_Gateway --> AuthService
    API_Gateway --> ChatService
    API_Gateway --> AgentRouter
    
    subgraph Specialized AI Agents
        ChatAgent[Chat Agent]
        WebSearchAgent[Web Search Agent]
        CodeGenAgent[Code Generation Agent]
        DocGenAgent[PDF/PPT Creation Agent]
        ImageGenAgent[Image Gen Agent]
    end
    
    AgentRouter --> ChatAgent
    AgentRouter --> WebSearchAgent
    AgentRouter --> CodeGenAgent
    AgentRouter --> DocGenAgent
    AgentRouter --> ImageGenAgent
    
    subgraph Infrastructure
        MongoDB[(MongoDB)]
        Redis[(Redis Cache/PubSub)]
        AWS[AWS Services]
        Razorpay[Razorpay Gateway]
    end
    
    Microservices -.-> Infrastructure
```

### Key Components:
* **Frontend:** React application built with Vite, utilizing Redux for state management and Tailwind CSS for styling.
* **Backend (Microservices):**
  * **API Gateway:** Central entry point handling routing, CORS, and proxying requests to internal services.
  * **Auth Service:** Manages user authentication (Firebase), registration, and sessions.
  * **Chat Service:** Handles real-time conversation state and history.
* **AI Ecosystem:** Utilizing LangChain, LangGraph, and RAG architectures to route user queries intelligently to the appropriate agent.
* **Infrastructure:** 
  * **MongoDB:** Primary database for storing users, conversations, and agent metadata.
  * **Redis:** Caching and Pub/Sub mechanism for real-time capabilities.
  * **Docker & AWS:** Containerized deployment for scalable cloud hosting.
  * **Razorpay:** Payment integration for credit-based API usage limits.

## 🚀 Getting Started

*(Further instructions on local setup, Docker deployment, and environment variables will be added here as the project evolves.)*
