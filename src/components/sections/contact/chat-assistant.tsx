"use client";

import { useState, useRef } from "react";
import { Send, Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

const QUICK_OPTIONS = [
  {
    text: "👩‍💻 Skills & Experience",
    message: "Apa keahlian dan pengalaman Raka?",
  },
  {
    text: "🚀 Project Collaboration",
    message: "Bagaimana cara kerja sama dengan Raka dalam proyek?",
  },
  {
    text: "💼 Past Projects",
    message: "Bisa kasih tahu beberapa proyek yang pernah dikerjakan Raka?",
  },
  {
    text: "⚡ AI Integration",
    message: "Apa saja fitur AI yang bisa diterapkan Raka dalam proyek?",
  },
];

const API_URL = `${process.env.NEXT_PUBLIC_RAKABACKEND_URL}/api/groq/chat`;

export default function Chat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [
      {
        role: "assistant",
        content: "Hi! Saya AI Chatbot. Apa yang ingin kamu tanyakan?",
      },
    ]
  );
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = async (message: string) => {
    if (!message.trim() || isLoading) return;

    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) throw new Error("Terjadi kesalahan.");

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Error: Tidak dapat menghubungi server.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="flex flex-col h-[500px] max-h-[500px] bg-muted border rounded-2xl overflow-hidden m-8">
      {/* Header Chat */}
      <div className="flex items-center gap-2 px-4 py-2 border-b bg-muted">
        <Bot size={18} />
        <span>AI Assistant</span>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-2 ${
              msg.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            {msg.role === "assistant" ? <Bot size={24} /> : <User size={24} />}
            <div
              className={`rounded-2xl p-3 max-w-[80%] ${
                msg.role === "assistant" ? "bg-secondary/15" : "bg-primary/50"
              }`}
            >
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-2">
            <Bot size={24} />
            <div className="bg-muted rounded-lg p-3">...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      <div className="border-t p-4">
        <div className="flex flex-col gap-2">
          {QUICK_OPTIONS.map((option) => (
            <button
              key={option.text}
              onClick={() => sendMessage(option.message)}
              className="text-left px-3 py-2 rounded-md bg-background/50 hover:bg-background/80 text-sm"
            >
              {option.text}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tanyakan tentang Raka..."
            className="flex-1 bg-background rounded-lg px-4 py-2 border"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-2 rounded-lg bg-primary text-primary-foreground"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
