"use client";
import { RefObject, useRef } from "react";
import ChatCard from "./chatCard";
import useCurSection from "@/hooks/use-cur-section";
import ContactCard from "./contactCard";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  useCurSection(ref as RefObject<Element>, 0.1);
  return (
    <section
      ref={ref}
      id="contact"
      className="lg:h-full items-center lg:w-full lg:mt-8 lg:mb-32 flex flex-col lg:flex-row lg:gap-11 lg:justify-around h-full "
    >
      <ChatCard />
      <ContactCard />
    </section>
  );
}
