"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import WindowCard from "@/components/ui/window/windowCard";
import WindowHeader from "@/components/ui/window/windowHeader";
import WindowTab from "@/components/ui/window/windowTab";
import WindowButton from "@/components/ui/window/windowButton";

const defaultProps = {
  theme: themes.oneLight,
};

interface PowerShellProps {
  className?: string;
}

const codeSnippet = `// Welcome to my AI-Powered Portfolio! 🚀
import { NextDeveloper, ExpressDeveloper } from 'rakanugraha';
import { AIExpertise } from '@/skills';

function createAmazingWebsite() {
  const mySkills = {
    webDev: ["Next.js", "React", "TS", "Expressjs"],
    aiTools: ["ChatGPT", "ML"],
    passion: "Building AI web apps"
  };

  return {
    message: "Let's work together!",
    services: ["Web Apps", "AI Features"],
    contact: "Scroll down to connect →"
  };
};`;

export default function CodeTyping({ className }: PowerShellProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>(
    Array(codeSnippet.split("\n").length).fill("")
  );
  const [currentLine, setCurrentLine] = useState(0);
  const [cursorPosition, setCursorPosition] = useState(0);
  const lines = codeSnippet.split("\n");

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const currentText = lines[currentLine];
    const timeout = setTimeout(() => {
      if (cursorPosition < currentText.length) {
        setDisplayedLines((prev) =>
          prev.map((line, i) =>
            i === currentLine ? currentText.slice(0, cursorPosition + 1) : line
          )
        );
        setCursorPosition(cursorPosition + 1);
      } else {
        setCurrentLine(currentLine + 1);
        setCursorPosition(0);
      }
    }, Math.random() * 50 + 30);

    return () => clearTimeout(timeout);
  }, [currentLine, cursorPosition]);

  return (
    <div className={`lg:relative lg:max-w-[600px] my-5 ${className}`}>
      {showAnimation && (
        <WindowCard
          height="full"
          width="full"
          label="Terminal"
          className="relative lg:m-0 max-w-[600px] font-mono text-xs sm:text-sm lg:pb-0"
          theme="light"
        >
          <WindowHeader className="h-full justify-between">
            <div className="flex items-center">
              <div>
                <img
                  src="imgs/notepad.png"
                  className="w-6 h-6 p-0.5 mx-2"
                  alt=""
                />
              </div>
              <WindowTab
                className="text-xs text-black bg-white"
                width="full"
                height="full"
                label="..\RakaNugraha\index.tsx"
              />
            </div>
            <WindowButton className="text-white" />
          </WindowHeader>

          {/* Code Highlighting Section */}
          <div className="space-y-2 text-gray-800 text-left pb-2">
            <AnimatePresence>
              <Highlight
                {...defaultProps}
                code={displayedLines.join("\n")}
                language="tsx"
              >
                {({ tokens, getLineProps, getTokenProps }) => (
                  <>
                    {tokens.map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        {...getLineProps({ line })}
                        className="flex"
                      >
                        <span className="mr-4 select-none opacity-50 w-6 text-right">
                          {i + 1}
                        </span>
                        <span
                          className="relative flex-1"
                          style={{ whiteSpace: "pre-wrap" }}
                        >
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                          {i === currentLine && (
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: [0, 1, 1, 0] }}
                              transition={{ repeat: Infinity, duration: 0.5 }}
                              className="absolute inline-block h-[1.2em] w-[2px] bg-white"
                              style={{
                                left: `${cursorPosition * 0.6}em`,
                                top: 0,
                              }}
                            />
                          )}
                        </span>
                      </motion.div>
                    ))}
                  </>
                )}
              </Highlight>
            </AnimatePresence>
          </div>
        </WindowCard>
      )}
    </div>
  );
}
