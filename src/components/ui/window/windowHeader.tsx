interface windowHeaderProps {
  className?: string;
}

export default function WindowHeader({
  children,
  className,
}: windowHeaderProps & {
  children: React.ReactNode;
}) {
  return (
    <div
      className={` ${className} w-full pt-2.5 mb-2 bg-[#00423b] flex rounded-t-lg `}
    >
      {children}
    </div>
  );
}
