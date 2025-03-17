import WindowButton from "@/components/ui/window/windowButton";
import WindowCard from "@/components/ui/window/windowCard";
import WindowHeader from "@/components/ui/window/windowHeader";
import { Plus } from "lucide-react";

export default function WindowNote() {
  return (
    <WindowCard
      height="full"
      label="About"
      theme="yellow"
      className="font-mono lg:flex-1 max-[400px]:text-[0.6rem] text-xs sm:text-sm lg:pb-0 relative shadow-md"
    >
      <WindowHeader className="h-full flex bg-amber-200 items-center justify-between relative">
        <Plus size={24} className="text-gray-600 ml-2" />
        <WindowButton className="text-gray-600 ml-auto" />
      </WindowHeader>

      <div>
        {[
          {
            title: "Who is Raka Nugraha?",
            description:
              "Hey, I'm Raka Nugraha, a full-stack developer in the making with a solid IT background. With over 4 years of experience in IT support and networking, I’m now transitioning into full-stack development, bringing a mix of problem-solving skills and technical expertise to the table.",
          },
        ].map((result, index) => (
          <div
            key={index}
            className=" border-b ml-2 border-gray-300 last:border-none pt-2 pb-2 lg:pb-8"
          >
            <a
              href="#"
              className="text-blue-700 text-lg font-semibold hover:underline"
            >
              {result.title}
            </a>
            <div className="text-gray-600 text-sm mt-1 ">
              {result.description}
            </div>
          </div>
        ))}
      </div>
    </WindowCard>
  );
}
