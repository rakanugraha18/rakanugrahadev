"use client";
import { motion } from "framer-motion";
import WindowCard from "@/components/ui/window/windowCard";
import CodeTyping from "./cmd-typing";
import PowerShell from "./PowerShell";
import WindowTab from "@/components/ui/window/windowTab";
import WindowHeader from "@/components/ui/window/windowHeader";
import WindowButton from "@/components/ui/window/windowButton";
import { RefObject, useEffect, useRef, useState } from "react";
import useCurSection from "@/hooks/use-cur-section";

export default function HomeSection() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  useCurSection(ref as RefObject<Element>, 0.1);
  return (
    <section
      ref={ref}
      id="home"
      className="relative lg:h-full items-center lg:w-full min-w-[324px] mt-2 mb-7 lg:mt-8 lg:mb-32 pt-20"
    >
      {/* Animasi kemunculan WindowCard dan turunannya */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <WindowCard
          width="full"
          label="PowerShell"
          className="font-mono min-md:h-screen min-h-[80vh] lg:min-h-[80vh] max-[400px]:text-[0.6rem] text-xs sm:text-sm lg:pb-0 relative"
        >
          <WindowHeader className="h-full justify-between">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <WindowTab
                className="text-xs ml-6 text-white bg-black"
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
              <WindowButton />
            </motion.div>
          </WindowHeader>
          <div className="w-full h-full relative lg:grid lg:grid-cols-2 gap-4 items-start z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <PowerShell className="w-full" />
            </motion.div>
            {showAnimation && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <CodeTyping className="lg:block lg:mb-20 mx-4" />
              </motion.div>
            )}
          </div>
        </WindowCard>
      </motion.div>
    </section>
  );
}
