interface LogoProps {
  variant?: "mark" | "full" | "nav";
  className?: string;
  height?: number;
}

export function LogoMark({ height = 40, className = "" }: { height?: number; className?: string }) {
  return (
    <svg
      width={Math.round(height * (180 / 220))}
      height={height}
      viewBox="100 80 180 220"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="100" y="80" width="120" height="160" fill="#1A1A1A" />
      <rect x="130" y="110" width="120" height="160" fill="#4A4A4A" opacity="0.8" />
      <rect x="160" y="140" width="120" height="160" fill="#8E8E8E" opacity="0.6" />
    </svg>
  );
}

export function LogoFull({ height = 120, className = "" }: { height?: number; className?: string }) {
  return (
    <svg
      width={Math.round(height * (200 / 300))}
      height={height}
      viewBox="100 80 200 300"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="100" y="80" width="120" height="160" fill="#1A1A1A" />
      <rect x="130" y="110" width="120" height="160" fill="#4A4A4A" opacity="0.8" />
      <rect x="160" y="140" width="120" height="160" fill="#8E8E8E" opacity="0.6" />
      <line x1="100" y1="310" x2="300" y2="310" stroke="#1A1A1A" strokeWidth="2" />
      <text
        x="200"
        y="340"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="22"
        fill="#1A1A1A"
        textAnchor="middle"
        letterSpacing="2"
      >
        PANORAMA
      </text>
      <text
        x="200"
        y="365"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="300"
        fontSize="13"
        fill="#4A4A4A"
        textAnchor="middle"
        letterSpacing="3"
      >
        SCHOLARLY BOOKS
      </text>
    </svg>
  );
}

export default function Logo({ variant = "nav", height = 40, className = "" }: LogoProps) {
  if (variant === "mark") return <LogoMark height={height} className={className} />;
  if (variant === "full") return <LogoFull height={height} className={className} />;
  return <LogoMark height={height} className={className} />;
}
