import WindowButton from "@/components/ui/window/windowButton";
import WindowCard from "@/components/ui/window/windowCard";
import WindowHeader from "@/components/ui/window/windowHeader";
import WindowNote from "./windowNote";

export default function WindowImage() {
  return (
    <WindowCard
      height="full"
      label="About"
      theme="light"
      className="font-mono lg:flex-1 max-[400px]:text-[0.6rem] text-xs sm:text-sm lg:pb-0 relative"
    >
      <WindowHeader className="h-full flex items-center justify-between relative">
        <p className="absolute inset-x-0 text-center text-white">
          Raka Nugraha.jpg
        </p>
        <WindowButton className="text-white ml-auto" />
      </WindowHeader>

      <div className="flex flex-wrap">
        <img
          src="/imgs/raka-bg.png"
          alt="Raka Nugraha"
          className="max-w-300px] mx-auto flex p-1.5"
        />
        <WindowNote />
      </div>
    </WindowCard>
  );
}
