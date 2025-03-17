"use client";

import WindowButton from "@/components/ui/window/windowButton";
import WindowCard from "@/components/ui/window/windowCard";
import WindowHeader from "@/components/ui/window/windowHeader";
import WindowTab from "@/components/ui/window/windowTab";
import { useRef } from "react";
import WindowChrome from "./windowChrome";
import WindowUrl from "@/components/ui/window/windowUrl";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WindowImage from "./windowImage";
export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden flex-wrap lg:flex gap-6 lg:my-32 lg:mt-20 "
    >
      <WindowImage className="p-4 mb-2" />
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <WindowCard
            height="full"
            label="About"
            theme="light"
            className="mt-6 lg:h-screen lg:mt-0 font-mono min-w-[324px] lg:w-1/3 max-[400px]:text-[0.6rem] text-xs sm:text-sm lg:pb-0 relative"
          >
            <WindowHeader className="h-full justify-between">
              <WindowTab
                className="text-xs ml-6 text-black bg-white"
                width="full"
                height="full"
                label="C:\Fullstack\RakaNugraha>"
              />
              <WindowButton className="text-white" />
            </WindowHeader>
            <WindowUrl urlBrowser="https://google.com/search/q=RakaNugraha" />
            <WindowChrome />
          </WindowCard>
        </motion.div>
      </div>
    </section>
  );
}
