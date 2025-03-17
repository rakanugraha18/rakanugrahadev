interface WindowCardProps {
  width?: number | "full";
  height?: number | "full";
  label?: string;
  logo?: string;
  theme?: "light" | "dark" | "yellow" | string;
  className?: string;
}

export default function WindowCard({
  width = "full",
  height = "full",
  label = "Tab",
  logo,
  theme = "dark",
  children,
  className,
}: WindowCardProps & { children: React.ReactNode }) {
  const themeClasses: Record<string, string> = {
    dark: "bg-black text-white border-[#14b8a6]",
    light: "bg-white text-black border-[#14b8a6]",
    yellow: "bg-amber-100 text-black border-amber-200",
  };

  return (
    <div
      className={`${className} justify-center items-center rounded-xl border-2 drop-shadow-lg shadow ${
        themeClasses[theme] ?? theme
      }`}
      style={{
        width: width === "full" ? "100%" : `${width}px`,
        height: height === "full" ? "100%" : `${height}px`,
      }}
    >
      {children}
    </div>
  );
}
