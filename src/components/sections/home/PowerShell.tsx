"use client";
import CmdButton from "@/components/ui/button/cmdButton";
import { useState, useEffect } from "react";
import { Fira_Code } from "next/font/google";

interface PowerShellProps {
  className?: string;
}
const firaCode = Fira_Code({ subsets: ["latin"] });

export default function PowerShell({ className }: PowerShellProps) {
  const fullText = "C:\\Fullstack\\RakaNugraha>";
  const installText = [
    "Initializing setup...",
    "Installing RakaNugraha...",
    "Installing FullstackDev...",
    "Optimizing AI-Powered Apps...",
    "Setup complete!",
  ];
  const [showCursor, setShowCursor] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [installStep, setInstallStep] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const [showPath, setShowPath] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const text = "npm i rakanugraha fullstackdev ai-powered-apps";
  const [displayInstall, setDisplayInstall] = useState("");
  const [index, setIndex] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    // Animasi blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayInstall((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 10);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingDone(true); // Menandakan animasi pertama selesai
    }
  }, [index, text]);

  useEffect(() => {
    if (isTypingDone && installStep < installText.length) {
      // Cek apakah animasi pertama selesai
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + "\n" + installText[installStep]);
        setInstallStep((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    } else if (isTypingDone && installStep === installText.length) {
      setTimeout(() => setShowProfile(true), 200);
      setTimeout(() => setShowPath(true), 400);
      setTimeout(() => setShowButton(true), 800);
    }
  }, [isTypingDone, installStep]);

  return (
    <div
      className={`px-4 lg:py-4 m-2 mb-1 lg:mb-0 rounded-lg max-[400px]:text-[0.6rem] text-xs lg:text-sm ${firaCode.className}  ${className}`}
    >
      <p className="mb-4 hidden lg:block">
        Explore my projects, AI-powered tools, and latest innovations!{" "}
        <a href="https://rakanugrahadev.vercel.app" className="underline">
          https://rakanugrahadev.vercel.app
        </a>
      </p>

      {/* Typing Installasi */}
      <div className="flex mt-2">
        <span>
          {fullText} {displayInstall}
        </span>
      </div>

      {/* Simulasi Instalasi */}
      <div className="bg-black text-green-400 rounded-md whitespace-pre-wrap lg:block hidden">
        {displayText}
        {installStep < installText.length}
      </div>

      {/* Tampilan Profil Setelah Instalasi */}
      {showProfile && (
        <div className="mt-4 text-md font-bold">
          <p className="text-md">{`Hello 👋, I'm`}</p>
          <p
            className={`lg:text-6xl text-3xl  mb-1 text-[#14b8a6] ${firaCode.className}`}
          >
            Raka Nugraha
          </p>
          <p>
            {`// I Optimize & Build Fullstack`}{" "}
            <span className="text-blue-400">{"{Next.js}"}</span> &{" "}
            <span className="text-blue-400">{"{Expressjs}"}</span> Apps -
            Powered by <span className="text-yellow-400">{"{AI}"}</span>
          </p>
        </div>
      )}
      {/* Tampilkan Path */}
      {showPath && (
        <p className="mt-2">
          {fullText} {showCursor}
          {showCursor && <span className="animate-blink">|</span>}
        </p>
      )}

      {/* Tampilkan Button */}
      {showButton && (
        <div className="pr-4 py-3 mt-4 gap-3 flex lg:justify-start justify-center lg:mt-6 lg:mb-6">
          <CmdButton label="See My work" href="#projects" />
          <CmdButton theme="light" label="Contact me" href="#contact" />
        </div>
      )}
    </div>
  );
}
