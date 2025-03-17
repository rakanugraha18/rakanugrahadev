// "use client";

// import { useState, useRef } from "react";
// import { Send, Bot, User } from "lucide-react";
// import ReactMarkdown from "react-markdown";

// const QUICK_OPTIONS = [
//   {
//     text: "👩‍💻 Skills & Experience",
//     message: "Apa keahlian dan pengalaman Raka?",
//   },
//   {
//     text: "🚀 Project Collaboration",
//     message: "Bagaimana cara kerja sama dengan Raka dalam proyek?",
//   },
//   {
//     text: "💼 Past Projects",
//     message: "Bisa kasih tahu beberapa proyek yang pernah dikerjakan Raka?",
//   },
//   {
//     text: "⚡ AI Integration",
//     message: "Apa saja fitur AI yang bisa diterapkan Raka dalam proyek?",
//   },
// ];

// export default function Chat() {
//   const [messages, setMessages] = useState<{ role: string; content: string }[]>(
//     [
//       {
//         role: "assistant",
//         content: "Hi! Saya AI Chatbot. Apa yang ingin kamu tanyakan?",
//       },
//     ]
//   );
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement | null>(null);
//   const API_URL = `${process.env.NEXT_PUBLIC_RAKABACKEND_URL}/api/groq/chat`;

//   const sendMessage = async (message: string) => {
//     if (!message.trim() || isLoading) return;

//     setMessages((prev) => [...prev, { role: "user", content: message }]);
//     setInput("");
//     setIsLoading(true);

//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message }),
//       });

//       if (!response.ok) throw new Error("Terjadi kesalahan.");

//       const data = await response.json();
//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: data.response },
//       ]);
//     } catch (error) {
//       console.error(error);
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           content: "Error: Tidak dapat menghubungi server.",
//         },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     sendMessage(input);
//   };

//   return (
//     <div className="w-full h-full flex flex-col">
//       {/* Chat Messages */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm w-full">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={`flex gap-2 ${
//               msg.role === "user" ? "flex-row-reverse" : ""
//             }`}
//           >
//             {msg.role === "assistant" ? <Bot size={24} /> : <User size={24} />}
//             <div
//               className={`rounded-2xl p-3 max-w-full sm:max-w-[80%] ${
//                 msg.role === "assistant"
//                   ? "bg-[#14b8a6] text-black"
//                   : "bg-[#00423b] text-white"
//               }`}
//             >
//               <ReactMarkdown>{msg.content}</ReactMarkdown>
//             </div>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="flex gap-2">
//             <Bot size={24} />
//             <div className="bg-muted rounded-lg p-3">...</div>
//           </div>
//         )}
//         <div ref={messagesEndRef} />
//       </div>

//       {/* Quick Questions */}
//       <div className="border-t p-4 w-full">
//         <div className="mt-4 flex flex-col gap-2">
//           {QUICK_OPTIONS.map((option) => (
//             <button
//               key={option.text}
//               onClick={() => sendMessage(option.message)}
//               className="text-left px-3 py-2 rounded-md bg-background/50 hover:bg-background/80 text-sm"
//             >
//               {option.text}
//             </button>
//           ))}
//         </div>

//         {/* Input Form */}
//         <form onSubmit={handleSubmit} className="flex gap-2 mt-2 w-full">
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Tanyakan tentang Raka..."
//             className="flex-1 bg-background rounded-lg px-4 py-2 border"
//             disabled={isLoading}
//           />
//           <button
//             type="submit"
//             disabled={isLoading || !input.trim()}
//             className="p-2 rounded-lg bg-primary text-primary-foreground"
//           >
//             <Send size={20} />
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useRef } from "react";
import { Send, Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

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
  const [quickOptionsVisible, setQuickOptionsVisible] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
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

      if (!response.ok) throw new Error("Terjadi kesalahan.");

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      console.error(error);
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

  const handleQuickOptionClick = (option: {
    text: string;
    message: string;
  }) => {
    sendMessage(option.message);
    setQuickOptionsVisible(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="lg:w-[600px] max-h-[500px] lg:max-h-[650px] lg:h-[650px] flex flex-col pr-4 ">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm w-full">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-2 ${
              msg.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            {msg.role === "assistant" ? <Bot size={24} /> : <User size={24} />}
            <div
              className={`rounded-2xl p-3 max-w-full sm:max-w-[80%] ${
                msg.role === "assistant"
                  ? "bg-[#14b8a6] text-black"
                  : "bg-[#00423b] text-white"
              }`}
            >
              <ReactMarkdown>{msg.content}</ReactMarkdown>
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
                      className="text-left px-3 py-2 rounded-md bg-background/50 hover:bg-background/80 transition-colors text-sm"
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
            <Bot size={24} />
            <div className="bg-muted rounded-lg p-3">...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t w-full">
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
  );
}
