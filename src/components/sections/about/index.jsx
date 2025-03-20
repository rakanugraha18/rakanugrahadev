"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import WindowImage from "./windowImage";
import WindowChrome from "./windowChrome";

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const [showAnimation, setShowWindowImage] = useState(false);

  useEffect(() => {
    if (inView) {
      const timeout1 = setTimeout(() => {
        setShowWindowImage(true);
      }, 300);
      return () => {
        clearTimeout(timeout1);
      };
    }
  }, [inView]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden flex-wrap lg:flex gap-6 lg:my-32 lg:mt-20 sm:flex-col lg:flex-row md:flex-col "
    >
      {/* Animasi kemunculan WindowCard dan turunannya */}
      <WindowImage className="lg:max-w-[27rem] md:max-w-full lg:max-h-[780px] lg:min-h-[780px] my-4" />

      <WindowChrome className="lg:ax-w-4xl lg:max-h-[780px] lg:min-h-[780px] my-4 min-h-screen" />
    </section>
  );
}
