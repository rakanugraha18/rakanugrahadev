"use client";
import React, { RefObject, useRef } from "react";
import Image from "next/image";

import LaptopAnimation from "./laptop-animation";

import ProjectCard from "./project-card";
import useCurSection from "@/hooks/use-cur-section";
import data from "@/data";

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  useCurSection(ref as RefObject<Element>, 0.1);
  return (
    <section
      ref={ref}
      id="projects"
      className="w-full bg-[#00423b] p-6 flex justify-between flex-col items-center lg:flex-row lg:items-stretch gap-20 my-8 lg:my-32 text-sm md:text-base lg:min-w-[600px]"
    >
      <div>
        <div className="sticky top-24 text-center md:text-left">
          {/* grid image behind */}
          <Image
            className="absolute -top-4 -left-5 -z-10 text-transparent opacity-30 w-full h-1/2 object-cover"
            src="/svgs/grid.svg"
            alt="grid image"
            width={0}
            height={0}
          />
          <h1 className="text-3xl md:text-4xl text-gradient-primary">
            <span>{"//"}</span>
            Recent Projects
          </h1>
          <LaptopAnimation className="w-[300px] -scale-x-100 scale-y-100 mx-auto md:mx-0" />
          <p className="w-[324x] lg:w-[400px]">
            Building, Fixing & Scaling Next.js & AI Apps That Actually Work
          </p>
        </div>
      </div>
      <div className="space-y-[10vh]">
        {data.projects.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
