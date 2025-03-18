import * as React from "react";

import { cn } from "@/lib/utils";

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

function TextAreaField({
  label,
  name,
  value,
  onChange,
  className,
}: TextareaProps) {
  return (
    <div>
      <label>{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      ></textarea>
    </div>
  );
}

export { TextAreaField };
