interface WindowTabProps {
  width?: number | "full";
  height?: number | "full";
  label?: string;
  logo?: string;
  className?: string;
  bg?: string;
}

export default function WindowTab({
  className = "",
  width = "full",
  height = "full",
  label = "Tab",
  logo,
  bg,
}: WindowTabProps) {
  return (
    <div>
      <div
        className={`${bg} border-t-1 border-[#14b8a6] p-2 flex items-center space-x-2 ${className}`}
        style={{
          width: width === "full" ? "100%" : `${width}px`,
          height: height === "full" ? "100%" : `${height}px`,
        }}
      >
        {logo && <img src={logo} alt="Logo" className="w-6 h-6" />}
        <span className="">{label}</span>
      </div>
    </div>
  );
}
