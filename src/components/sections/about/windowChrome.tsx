import WindowButton from "@/components/ui/window/windowButton";
import WindowCard from "@/components/ui/window/windowCard";
import WindowHeader from "@/components/ui/window/windowHeader";
import GoogleSearch from "./googleSearch";
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
      <WindowHeader className="h-full flex items-center justify-between relative">
        <p className="absolute inset-x-0 text-center text-white">
          Raka Nugraha.jpg
        </p>
        <WindowButton className="text-white ml-auto" />
      </WindowHeader>
      <GoogleSearch />
    </WindowCard>
  );
}
