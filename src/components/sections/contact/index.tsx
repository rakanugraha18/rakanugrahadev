"use client";
import { RefObject, useRef } from "react";
import ChatCard from "./chatCard";
import useCurSection from "@/hooks/use-cur-section";
import ContactCard from "./contactCard";
import Image from "next/image";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  useCurSection(ref as RefObject<Element>, 0.1);
  return (
    <section className="flex flex-col items-center" ref={ref} id="contact">
      <Image
        src="/imgs/raka-bg.png"
        alt="Contact"
        width={150}
        height={150}
        className="my-4"
      />
      <h1 className="text-center text-2xl md:text-4xl  mb-12">
        <span className="text-gradient-primary">{"{ "}</span>
        Contact Me
        <span className="text-gradient-primary">{" }"}</span>
      </h1>
      <div className="lg:h-full items-center lg:w-full lg:mt-8 lg:mb-32 flex flex-col lg:flex-row lg:gap-11 lg:justify-around h-full">
        <ChatCard />
        <ContactCard />
      </div>
    </section>
  );
}
