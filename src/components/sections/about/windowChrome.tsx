import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function GoogleSearchWindow() {
  const [searchText, setSearchText] = useState("");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const suggestions = ["Fullstack Developer?"];

  useEffect(() => {
    if (inView) {
      const text = "Raka Nugraha";
      let index = 1;
      const interval = setInterval(() => {
        setSearchText(text.slice(0, index));
        index++;
        if (index > text.length) clearInterval(interval);
      }, 1000);
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full mx-auto text-black">
      {/* Header Google */}
      <div className="p-4 flex flex-col items-start">
        <div className="flex items-center w-full max-w-2xl space-x-3 relative ">
          <img
            src="/imgs/google.png"
            alt="google"
            className="max-w-6 left-2 absolute"
          />
          <input
            type="text"
            className=" border border-gray-300 px-10 py-2 rounded-full text-sm w-full"
            value={searchText}
            readOnly
          />
          <Search className="absolute right-6 text-gray-500" size={18} />
        </div>

        {/* Suggestion Box */}
        {searchText === "Raka Nugraha" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-2xl mt-2 rounded-lg bg-white shadow-md"
          >
            {suggestions.map((suggestion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                Raka Nugraha {suggestion}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Search Results */}
      <div className="p-4 space-y-4 max-w-4xl">
        {[
          {
            title: "📌 Raka Nugraha Know a Lot About Making Websites",
            description: (
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Full-Stack Development</strong> – Building scalable,
                  efficient, and modern web applications using React.js,
                  Express.js, and MongoDB.
                </li>
                <li>
                  <strong>Manual QA & Testing</strong> – Ensuring web
                  applications run smoothly with structured test case reports
                  and rigorous bug tracking.
                </li>
                <li>
                  <strong>AI-Driven Features</strong> – Integrating AI-powered
                  capabilities into web apps, from chatbots to automated
                  processes.
                </li>
                <li>
                  <strong>Performance Optimization</strong> – Enhancing speed,
                  security, and scalability for web applications.
                </li>
                <li>
                  <strong>Debugging & Troubleshooting</strong> – Fixing issues,
                  refining APIs, and streamlining the development process.
                </li>
              </ul>
            ),
          },
          {
            title: "📌 You Can Work With Raka?",
            description: (
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>IT & Dev Experience Combined</strong> – Years of
                  hands-on troubleshooting experience make me great at
                  identifying and solving tech problems efficiently.
                </li>
                <li>
                  <strong>Project-Based Learning Approach</strong> – Worked on
                  real-world projects, including API development with Golang, AI
                  implementations, and full-stack applications.
                </li>
                <li>
                  <strong>Continuous Growth & Adaptability</strong> – Awarded a
                  JavaScript Expert scholarship and constantly learning the
                  latest in web development.
                </li>
                <li>
                  <strong>Internship Experience</strong> – Currently interning
                  as a Manual QA, testing and improving learning bootcamp
                  platforms while working on AI-powered projects.
                </li>
              </ul>
            ),
          },
          {
            title: "📌Connect With Raka",
            description:
              "If you need a developer who understands both IT infrastructure and full-stack development—or a keen Manual QA with an eye for detail—let’s talk!",
          },
        ].map((result, index) => (
          <div
            key={index}
            className="pb-4 border-b border-gray-300 last:border-none"
          >
            <a
              href="#"
              className="text-blue-700 text-lg font-semibold hover:underline"
            >
              {result.title}
            </a>
            <div className="text-gray-600 text-sm mt-1">
              {result.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
