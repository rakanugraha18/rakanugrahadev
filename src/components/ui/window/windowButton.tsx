import { Minus, Square, X } from "lucide-react";

interface WindowButtonProps {
  className?: string;
}

export default function WindowButton({ className }: WindowButtonProps) {
  return (
    <div className={` ${className} flex items-center gap-1.5 mb-3 mr-3`}>
      <Minus className="w-4 h-4 hidden lg:flex" />
      <Square className="w-4 h-4 " />
      <X className="w-4 h-4 lg:flex" />
    </div>
  );
}
