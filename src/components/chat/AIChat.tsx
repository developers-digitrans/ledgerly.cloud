import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAIResponse, getQuickResponse } from "@/lib/ai-chat";

interface Message {
  content: string;
  role: "user" | "assistant";
  timestamp: string;
}

interface AIChatProps {
  apiKey?: string;
  welcomeMessage?: string;
  modelName?: string;
}

const AIChat = ({
  apiKey = "",
  welcomeMessage = "Hi there! I'm your AI assistant. How can I help you today?",
  modelName = "gpt-3.5-turbo",
}: AIChatProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      content: welcomeMessage,
      role: "assistant",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (message.trim()) {
      // Add user message to chat
      const userMessage: Message = {
        content: message,
        role: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, userMessage]);
      setMessage("");
      setIsLoading(true);

      try {
        // Check for quick responses first
        const quickResponse = getQuickResponse(message);

        let aiResponseText;
        if (quickResponse) {
          // Use predefined response for common questions
          aiResponseText = quickResponse;
        } else {
          // Convert messages to format expected by AI service
          const chatHistory = messages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          }));

          // Get response from AI service
          aiResponseText = await getAIResponse(
            message,
            chatHistory,
            apiKey,
            modelName,
          );
        }

        const assistantMessage: Message = {
          content: aiResponseText,
          role: "assistant",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (error) {
        console.error("Error getting AI response:", error);
        const errorMessage: Message = {
          content: "Sorry, I encountered an error. Please try again later.",
          role: "assistant",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };

        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="bg-primary hover:bg-primary-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        aria-label="Open AI support chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col transition-all duration-300 border border-gray-200">
          {/* Header */}
          <div className="bg-primary p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <h3 className="font-semibold">AI Support Assistant</h3>
              </div>
              <button
                onClick={toggleChat}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-xs text-primary-100 mt-1">
              Ask me anything about our services
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-80 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${msg.role === "user" ? "bg-primary text-white" : "bg-white border border-gray-200 text-gray-800"}`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  <span
                    className={`text-xs mt-1 block ${msg.role === "user" ? "text-primary-100" : "text-gray-500"}`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-3">
                <div className="bg-white border border-gray-200 text-gray-800 rounded-lg p-3 max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse delay-75"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex items-center gap-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none max-h-20"
                rows={1}
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                className={`p-2 ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary-600"} text-white rounded-md transition-colors`}
                aria-label="Send message"
                disabled={isLoading}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
