"use client";

import { useState } from "react";
import { Send, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";

const QUICK_OPTIONS = [
  {
    text: "👩‍💻 Skills & Experience",
    message: "What are Raka's skills and experience?",
  },
  {
    text: "🚀 Project Collaboration",
    message: "How can I collaborate with Raka on a project?",
  },
  {
    text: "💼 Past Projects",
    message: "Can you share some projects Raka has worked on?",
  },
  {
    text: "⚡ AI Integration",
    message: "What AI features can Raka implement in a project?",
  },
];

export default function Chat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [
      {
        role: "assistant",
        content: "Hi! I'm an AI Chatbot. What would you like to ask?",
      },
    ]
  );
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [quickOptionsVisible, setQuickOptionsVisible] = useState(true);
  const API_URL = `${process.env.NEXT_PUBLIC_RAKABACKEND_URL}/api/groq/chat`;

  const sendMessage = async (message: string) => {
    if (!message.trim() || isLoading) return;

    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setInput("");
    setIsLoading(true);
    setQuickOptionsVisible(false);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) throw new Error("An error occurred.");

      const data = await response.json();
      const fixNumbering = (text: string) => {
        let count = 0;
        return text.replace(/^\d+\./gm, () => `${++count}.`);
      };
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: fixNumbering(data.response) },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Error: Unable to connect to the server.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickOptionClick = (option: {
    text: string;
    message: string;
  }) => {
    sendMessage(option.message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="lg:w-full min-h-[500px] max-h-[500px] lg:max-h-[650px] lg:h-[580px] justify-between flex flex-col mt-1 ml-1">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto lg:p-4 space-y-4 text-sm w-full">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-2 ${
              msg.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            {msg.role === "assistant" ? (
              <img src="/imgs/ai-bot.png" className="w-6 h-6" />
            ) : (
              <User size={24} />
            )}
            <div
              className={`rounded-2xl p-3 max-w-[80%] sm:max-w-[80%] ${
                msg.role === "assistant"
                  ? "bg-[#00423b] text-white "
                  : "bg-[#16cab5] text-black"
              }`}
            >
              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <p className="mb-2 last:mb-0">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc ml-4 mb-2">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="custom-ol ml-4 mb-2">{children}</ol>
                  ),
                  li: ({ children }) => <li className="mb-1">{children}</li>,
                  strong: ({ children }) => (
                    <strong className="font-semibold">{children}</strong>
                  ),
                  em: ({ children }) => <em className="italic">{children}</em>,
                  h1: ({ children }) => (
                    <h1 className="text-lg font-bold mb-2">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-base font-bold mb-2">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-sm font-bold mb-2">{children}</h3>
                  ),
                  code: ({ children }) => (
                    <code className="bg-background/50 rounded px-1">
                      {children}
                    </code>
                  ),
                }}
                remarkPlugins={[remarkGfm]}
              >
                {msg.content}
              </ReactMarkdown>

              {i === 0 && quickOptionsVisible && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 flex flex-col gap-2"
                >
                  {QUICK_OPTIONS.map((option) => (
                    <motion.button
                      key={option.text}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleQuickOptionClick(option)}
                      className="text-left px-3 py-2 rounded-md bg-[#00423b] hover:bg-[#16cab5] text-[#16cab5] hover:text-[#00423b] transition-colors text-sm cursor-pointer"
                      disabled={isLoading}
                    >
                      {option.text}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-2">
            <img src="/imgs/ai-bot.png" className="w-6 h-6" />
            <div className="rounded-lg p-3 animate-pulse text-2xl">...</div>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t w-full">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Raka..."
          className="flex-1 bg-background rounded-lg px-4 py-2 border text-sm lg:text-md"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="p-2 rounded-lg bg-[#00423b] text-white"
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}
