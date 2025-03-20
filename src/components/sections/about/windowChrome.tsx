import WindowButton from "@/components/ui/window/windowButton";
import WindowCard from "@/components/ui/window/windowCard";
import WindowHeader from "@/components/ui/window/windowHeader";
import GoogleSearch from "./googleSearch";
import WindowUrl from "@/components/ui/window/windowUrl";
import WindowTab from "@/components/ui/window/windowTab";
interface WindowCardProps {
  className?: string;
}

export default function WindowChrome({ className }: WindowCardProps) {
  return (
    <WindowCard
      height="full"
      label="About"
      theme="light"
      className={`font-mono lg:flex-1 max-[400px]:text-[0.6rem] text-xs sm:text-sm lg:pb-0 relative min-w-52 ${className}`}
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
      <GoogleSearch />
    </WindowCard>
  );
}
