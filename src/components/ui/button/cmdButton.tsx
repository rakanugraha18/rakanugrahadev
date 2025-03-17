import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });

interface CmdButtonProps {
  label: string;
  onClick?: () => void;
  theme?: "light" | "dark";
}

export default function CmdButton({
  label,
  onClick,
  theme = "dark",
}: CmdButtonProps) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-mono shadow-md tracking-widest font-bold border-4 max-[400px]:text-[0.6rem] 
                  focus:outline-none focus:ring-1 transition-all cursor-pointer ${
                    firaCode.className
                  } 
                  ${
                    isDark
                      ? "bg-black text-white hover:text-black border-gray-700 hover:bg-[#14b8a6] active:bg-[#00423b] focus:ring-gray-500"
                      : "bg-white text-black hover:text-white border-gray-300 hover:bg-[#00423b] active:bg-[#14b8a6] focus:ring-gray-400"
                  }`}
      style={{
        imageRendering: "pixelated",
      }}
    >
      {label}
    </button>
  );
}
