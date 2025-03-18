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
      className="lg:h-full items-center lg:w-full mt-2 mb-7 lg:mt-8 lg:mb-32 pt-8 flex flex-col flex-wrap lg:flex-row gap-11 justify-around pb-4 my-4"
    >
      <ChatCard />
      <ContactCard />
    </section>
  );
}
