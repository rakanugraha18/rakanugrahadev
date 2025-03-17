"use client";
import { motion } from "framer-motion";
import WindowCard from "@/components/ui/window/windowCard";
import WindowTab from "@/components/ui/window/windowTab";
import WindowHeader from "@/components/ui/window/windowHeader";
import WindowButton from "@/components/ui/window/windowButton";
import { useEffect, useState } from "react";
import ChatAssistant from "./chat-assistant";

export default function ChatCard() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="mx-2 lg:h-[650px] lg:w-[600px] max-h-[500px] lg:max-h-[650px] my-8">
      {/* Animasi kemunculan WindowCard dan turunannya */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <WindowCard
          label="Contact"
          width="full"
          theme="light"
          className="font-mono max-[700px]:text-[0.6rem] text-xs sm:text-sm lg:pb-0 relative"
        >
          <WindowHeader className="h-full justify-between">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <WindowTab
                className="text-xs ml-6 text-black bg-white"
                width="full"
                height="full"
                label="C:\Fullstack\RakaNugraha>"
                logo="imgs/powershell.png"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <WindowButton className="text-xs ml-6 text-white" />
            </motion.div>
          </WindowHeader>
          <div className="w-full h-full relative gap-4 items-start z-10">
            {showAnimation && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ChatAssistant />
              </motion.div>
            )}
          </div>
        </WindowCard>
      </motion.div>
    </div>
  );
}
