export const myProjects = [
  {
    id: 1,
    title: "MCP SERVER Langchain",
    description:
      "Built a modular MCP (Model Context Protocol) server system using LangChain, enabling dynamic tool discovery and invocation by LLM agents.",
    subDescription: [
      "This project showcases how LLMs can interact with real-world tools like calculators and weather fetchers via standardized MCP interfaces. It includes custom tool servers and a client app to demonstrate seamless LangChain integration for real-time agent tool-calling.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/cropped-mcp2.png",
    tags: [
      {
        id: 1,
        name: "MCP",
        path: "/assets/logos/mcp.png",
      },
      {
        id: 2,
        name: "Uvicorn",
        path: "/assets/logos/unicorn.jpeg",
      },
      {
        id: 3,
        name: "LangChain",
        path: "/assets/logos/langchain.jpeg",
      },
      {
        id: 4,
        name: "FastApi",
        path: "/assets/logos/fastapi.png",
      },
    ],
  },
  {
    id: 2,
    title: "Smart Multi-Tool Chatbot with LangGraph",
    description:
      "This project implements a multi-functional chatbot capable of handling diverse user queries by integrating multiple tools using LangChain and an agentic framework. It leverages modern language models to reason over tools such as web search, arXiv, Wikipedia, Python execution, and document interaction. The chatbot can autonomously select the appropriate tool based on user input, making it a powerful assistant for research, development, and general-purpose AI tasks.",
    subDescription: [
      "Automatically selects the right tool for the query.",
      "Supports structured output through agents or chains.",
      "Integrates sources like arXiv, Wikipedia, and web scraping.",
      "Executes code or math in Python through a REPL tool",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/langgraph.jpeg",
    tags: [
      {
        id: 1,
        name: "Langgraph",
        path: "/assets/logos/langgraph.png",
      },
      {
        id: 2,
        name: "Pydantic",
        path: "/assets/logos/pydantic.png",
      },
      {
        id: 3,
        name: "Python",
        path: "/assets/logos/python.png",
      },
      {
        id: 4,
        name: "Arxiv",
        path: "/assets/logos/arxiv.png",
      },
    ],
  },
  {
    id: 3,
    title: "SMART ATS SYSTEM",
    description:
      "I developed a smart resume evaluation tool designed to help job seekers optimize their resumes for ATS (Applicant Tracking Systems). In today’s competitive job market, it’s essential to ensure your resume matches the job description effectively, and this project aims to automate that process with high accuracy.",
    subDescription: [
      "🧠 AI-Driven Analysis: Powered by Google’s Gemini AI to assess resumes and compare them against job descriptions in the tech field, software engineering, data science, and big data engineering.",
      "📝 PDF Resume Parsing: Converts resume PDFs into text for analysis.",
      "📊 ATS Compatibility: Evaluates job description match percentages, identifies missing keywords, and offers personalized recommendations.",
      "💡 Streamlined Feedback: Provides strengths, weaknesses, and skill gap analysis to improve resumes for better job match success.",
      "📦 Dockerized for Easy Deployment: A Docker image was created for seamless deployment, ensuring that the application can be easily run and scaled across different environments."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/ats.jpeg",
    tags: [
      {
        id: 1,
        name: "Gemini",
        path: "/assets/logos/gemini.jpeg",
      },
      {
        id: 2,
        name: "NLP",
        path: "/assets/logos/nlp.png",
      },
      {
        id: 3,
        name: "Docker",
        path: "/assets/logos/docker.png",
      },
      {
        id: 4,
        name: "Streamlit",
        path: "/assets/logos/streamlit.png",
      },
    ],
  },
  {
    id: 4,
    title: "Enhance Your Coding Experience: Meet the Code Completion Assistant",
    description:
      "🎯 What is it? A smart Streamlit-powered tool designed to boost your coding productivity by providing real-time code suggestions, optimizations, and quality analysis.",
    subDescription: [
      "Supports Multiple Languages: Works with Python, Java, and TypeScript 💻",
      "Instant Code Suggestions: Get live code completion using OpenAI's GPT-3.5 API 🤖",
      "Code Quality Analysis: Receive tips on improving your code, from adding output statements to breaking down lengthy functions 📝",
      "Download Your Code: Download your optimized code snippets with a single click 📥",
      "User-Friendly Interface: Easy-to-use, with example snippets and placeholder code to kickstart your coding session 🎯",
      "💡 Whether you're working on a project or learning a new language, this tool helps you save time and enhance your coding experience."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/code.jpeg",
    tags: [
      {
        id: 1,
        name: "Prompt Engineering",
        path: "/assets/logos/prompt.png",
      },
      {
        id: 2,
        name: "Streamlit",
        path: "/assets/logos/streamlit.png",
      },
      {
        id: 3,
        name: "Python",
        path: "/assets/logos/python.png",
      },
      {
        id: 4,
        name: "OpenAI",
        path: "/assets/logos/openai.png",
      },
    ],
  },
  {
    id: 5,
    title: "Advanced RAG Q&A System with Multiple Data Sources Integration",
    description:
      "Developed a sophisticated AI-powered Q&A system leveraging multiple data sources like Wikipedia, Arxiv, and LangSmith documentation, ensuring high-accuracy responses to complex queries. The system utilizes LangChain, OpenAI GPT-3.5, and FAISS vector stores to create a robust knowledge retrieval pipeline, making it highly effective in retrieving and summarizing relevant information from diverse platforms.",
    subDescription: [
      "Integrated FAISS vector database for high-speed document retrieval.",
      "Harnessed ArxivAPIWrapper and WikipediaAPIWrapper to ensure real-time access to research papers and knowledge databases.",
      "Built a dynamic agent system using LangChain's Agent Executor, which enables precise information retrieval by interacting with diverse tools in real-time.",
      "Incorporated Google Colab and OpenAI APIs for efficient deployment and experimentation.",
      "This solution streamlines information retrieval across academic research and general knowledge, positioning it as an indispensable tool for users seeking well-rounded, multi-source insights."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/advance.jpeg",
    tags: [
      {
        id: 1,
        name: "Faiss",
        path: "/assets/logos/faiss.jpeg",
      },
      {
        id: 2,
        name: "LangChain",
        path: "/assets/logos/langchain.jpeg",
      },
      {
        id: 3,
        name: "NLP",
        path: "/assets/logos/nlp.png",
      },
      {
        id: 4,
        name: "OpenAi",
        path: "/assets/logos/openai.png",
      },
    ],
  },
  {
    id: 6,
    title: "Hybrid Search using langchain",
    description:
      "Hybrid Search System integrating LangChain and Pinecone",
    subDescription: [
      "🔍 Hybrid Search: Combining dense and sparse retrieval techniques using BM25 and HuggingFace sentence transformers for precise query results.",
      "🛠️ Advanced NLP Processing: Implementing NLTK for text preprocessing (stopword removal, lemmatization) to enhance data quality and retrieval accuracy.",
      "📊 Custom Embeddings: Using BM25 encoding for sparse vector embeddings and Sentence Transformers for dense embeddings, achieving a balance between semantic and keyword search.",
      "💡 Efficient Query Results: Optimizing the system to deliver accurate, high-quality search responses across diverse data sources.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/hybrid.jpeg",
    tags: [
      {
        id: 1,
        name: "Langchain",
        path: "/assets/logos/langchain1.png",
      },
      {
        id: 2,
        name: "Pinecone",
        path: "/assets/logos/pinecone.png",
      },
      {
        id: 3,
        name: "HuggingFace",
        path: "/assets/logos/huggingface.png",
      },
      {
        id: 4,
        name: "Python",
        path: "/assets/logos/python.png",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/souravnandi13/",
    icon: "/assets/socials/linkedIn.svg",
  }
];

export const experiences = [
  {
    title: "Intern",
    job: "HighRadius",
    date: "2019-2020",
    contents: [
      "📊 Developed a data-driven Analytics Module for the Collections Cloud product, enhancing reporting dashboards and improving debt recovery insights by 40%.",
      "🤖 Designed and deployed machine learning models using real-world financial datasets to predict invoice payment dates, reducing clients’ Daily Sales Outstanding (DSO) by up to 25%",
      "🧩 Integrated analytics into the Accounts Receivable workflows, optimizing cash flow forecasting and improving decision-making for enterprise clients.",
    ],
  },
  {
    title: "Software Developer",
    job: "Accenture",
    date: "2020-2024",
    contents: [
      "🧠 Led the development of an event-driven AI automation framework using Python, OpenAI, and Gradio for real-time data processing. Integrated with Docker for containerized deployment across APIs, web, and mobile—reducing manual testing by 57%.",
      "⚙️ Architected a GenAI-powered data pipeline using NLP (TF-IDF), K-Means clustering, and event-driven architecture. Enabled automated document processing and real-time entity extraction, improving workflow automation by 65%",
      "🧪 Automated backend API and web testing with Selenium, cutting manual QA effort by 62%",
      "🏆 Recognized with the Accenture Celebrate Excellence (ACE) award for consistently delivering complex client projects ahead of schedule and resolving critical bugs during high-stakes deployments",
    ],
  },
  {
    title: "Gen AI Developer",
    job: "PWC",
    date: "2025-Present",
    contents: [
      "🏗️ Designed and architected scalable Generative AI solutions on AWS using services like S3, SNS, SQS, OpenSearch, DynamoDB, EKS, KEDA, and ECR, enabling resilient, event-driven pipelines for LLM-based applications.",
      "👥 Led hiring for the Generative AI team, conducting technical interviews and onboarding developers to build a high-performing engineering group.",
    ],
  },
];

