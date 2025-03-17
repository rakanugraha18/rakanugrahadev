"use client";

import WindowButton from "@/components/ui/window/windowButton";
import WindowCard from "@/components/ui/window/windowCard";
import WindowHeader from "@/components/ui/window/windowHeader";
import WindowTab from "@/components/ui/window/windowTab";
import WindowUrl from "@/components/ui/window/windowUrl";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type props = {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    githubLink?: string;
    previewLink: string;
  };
};

export default function ProjectCard({ project }: props) {
  return (
    <div className="sticky top-[100px]">
      <WindowCard
        height="full"
        label="About"
        theme="light"
        className="mt-12 lg:h-full lg:w-full lg:mt-0 font-mono min-w-[324px] max-[400px]:text-[0.6rem] text-xs lg:pb-0 relative"
      >
        <WindowHeader className="h-full justify-between">
          <WindowTab
            className="text-xs ml-6 text-black bg-white"
            width="full"
            height="full"
            label={project.title}
          />
          <WindowButton className="text-white" />
        </WindowHeader>
        <WindowUrl urlBrowser={project.previewLink} />
        <div className="p-4 group relative  lg:h-full overflow-hidden cursor-pointer rounded-lg m-2 border">
          <h2 className="text-xl capitalize font-bold my-3">{project.title}</h2>
          <p className="text-muted-foreground overflow-hidden whitespace-pre-line mb-2">
            {project.description}
          </p>
          <img
            className="w-full object-cover object-top"
            src={project.image}
            alt={project.title}
          />
          <Link
            href={project.previewLink}
            target="_blank"
            className="size-full bg-black/50 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity"
          />
          <ExternalLink
            size={24}
            className="absolute top-4 right-4 opacity-90 hidden group-hover:block"
          />
        </div>
      </WindowCard>
    </div>
  );
}
