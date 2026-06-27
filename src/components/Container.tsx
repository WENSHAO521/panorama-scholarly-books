import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({ children, className = "", narrow = false }: ContainerProps) {
  return (
    <div
      className={`mx-auto px-6 xl:px-12 ${
        narrow ? "max-w-4xl" : "max-w-[1400px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
