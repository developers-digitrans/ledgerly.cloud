import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SupportChatProps {
  whatsappNumber?: string;
  defaultMessage?: string;
}

const SupportChat = ({
  whatsappNumber = "+1234567890", // Replace with your actual WhatsApp business number
  defaultMessage = "Hello, I need help with Ledgerly.",
}: SupportChatProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(defaultMessage);
  const [messages, setMessages] = useState<
    { text: string; isUser: boolean; time: string }[]
  >([
    {
      text: "Hi there! How can we help you today?",
      isUser: false,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add user message to chat
      const newMessage = {
        text: message,
        isUser: true,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);

      // Clear input
      setMessage("");

      // Simulate response after a short delay
      setTimeout(() => {
        const responseMessage = {
          text: "Thanks for your message. Our team will get back to you shortly. For immediate assistance, please click the WhatsApp button below to continue this conversation.",
          isUser: false,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, responseMessage]);
      }, 1000);
    }
  };

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message || defaultMessage);
    window.open(
      `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`,
      "_blank",
    );
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
        aria-label="Open support chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col transition-all duration-300 border border-gray-200">
          {/* Header */}
          <div className="bg-primary p-4 text-white">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Customer Support</h3>
              <button
                onClick={toggleChat}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-xs text-primary-100 mt-1">
              We typically reply within minutes
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-80 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex ${msg.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${msg.isUser ? "bg-primary text-white" : "bg-white border border-gray-200 text-gray-800"}`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <span
                    className={`text-xs mt-1 block ${msg.isUser ? "text-primary-100" : "text-gray-500"}`}
                  >
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* WhatsApp option */}
          <div className="p-3 bg-gray-50 border-t border-gray-200">
            <button
              onClick={openWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors"
            >
              <MessageCircle size={18} />
              Continue on WhatsApp
            </button>
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
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-primary text-white rounded-md hover:bg-primary-600 transition-colors"
                aria-label="Send message"
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

export default SupportChat;
