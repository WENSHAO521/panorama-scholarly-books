import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

// 1200px content width on desktop, 20px / 32px gutters below.
// `narrow` is the long-form reading column (~760px).
export default function Container({ children, className = "", narrow = false }: ContainerProps) {
  return (
    <div className={`site-container ${narrow ? "!max-w-[calc(760px+4rem)]" : ""} ${className}`}>
      {children}
    </div>
  );
}
