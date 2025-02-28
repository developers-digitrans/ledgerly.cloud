import { ChatOpenAI } from "@langchain/openai";
import {
  HumanMessage,
  AIMessage,
  SystemMessage,
} from "@langchain/core/messages";

// Initialize the chat model with API key
export const initChatModel = (
  apiKey: string,
  modelName: string = "gpt-3.5-turbo",
) => {
  return new ChatOpenAI({
    openAIApiKey: apiKey,
    modelName: modelName,
    temperature: 0.7,
  });
};

// Function to get AI response
export const getAIResponse = async (
  userMessage: string,
  chatHistory: { role: string; content: string }[],
  apiKey: string,
  modelName: string = "gpt-3.5-turbo",
) => {
  try {
    if (!apiKey) {
      return "I'm a demo AI assistant. To enable full functionality, please configure your API key in the settings.";
    }

    const chatModel = initChatModel(apiKey, modelName);

    // Convert chat history to LangChain message format
    const messages = [
      new SystemMessage(
        "You are a helpful customer support assistant for a financial software company called FinanceFlow. " +
          "Your goal is to assist users with questions about the software's features, pricing, and how to use it. " +
          "Be concise, friendly, and helpful. If you don't know something, admit it and offer to connect them with a human agent.",
      ),
      ...chatHistory.map((msg) => {
        if (msg.role === "user") {
          return new HumanMessage(msg.content);
        } else {
          return new AIMessage(msg.content);
        }
      }),
      new HumanMessage(userMessage),
    ];

    // Call the model
    const response = await chatModel.invoke(messages);
    return response.content.toString();
  } catch (error) {
    console.error("Error in AI response:", error);
    return "I'm sorry, I encountered an error processing your request. Please try again later.";
  }
};

// Function to handle common financial software questions with predefined responses
export const getQuickResponse = (userMessage: string): string | null => {
  const message = userMessage.toLowerCase();

  // Common questions and predefined answers
  const quickResponses: Record<string, string> = {
    pricing:
      "Our pricing plans start at $19/month for the Basic plan, $39/month for the Pro plan, and $59/month for the Enterprise plan. Each plan comes with different features tailored to your business needs.",
    trial:
      "Yes, we offer a 14-day free trial for all our plans. No credit card required to start your trial.",
    features:
      "Our platform offers features like automated invoicing, financial reporting, inventory management, and multi-currency support. Would you like to know more about any specific feature?",
    support:
      "We offer 24/7 customer support via chat, email, and phone for all paid plans. Our Basic plan includes standard support during business hours.",
    refund:
      "We offer a 30-day money-back guarantee for all our paid plans if you're not satisfied with our service.",
    security:
      "We take security seriously. Our platform uses bank-level encryption, regular security audits, and complies with industry standards to keep your financial data safe.",
  };

  // Check if the message contains any of the keywords
  for (const [keyword, response] of Object.entries(quickResponses)) {
    if (message.includes(keyword)) {
      return response;
    }
  }

  return null; // No quick response available
};
