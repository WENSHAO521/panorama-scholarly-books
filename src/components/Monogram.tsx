/** Typographic stand-in for a portrait. Never a generated or stock photo. */
export default function Monogram({ name, size = "md" }: { name: string; size?: "md" | "lg" }) {
  const trimmed = name.trim();
  const isLatin = /^[\p{Script=Latin}\s.'’-]+$/u.test(trimmed);
  const letters = isLatin
    ? trimmed
        .split(/\s+/)
        .filter((p) => /^[\p{L}]/u.test(p) && !/^(dr|prof)\.?$/i.test(p))
        .map((p) => p[0].toUpperCase())
        .filter((_, i, arr) => i === 0 || i === arr.length - 1)
        .join("")
    : Array.from(trimmed).slice(-2).join("");
  const dims = size === "lg" ? "w-24 h-24 text-[34px]" : "w-14 h-14 text-[20px]";
  return (
    <span
      aria-hidden="true"
      className={`${dims} inline-flex items-center justify-center rounded-full bg-brand-tint text-brand font-serif tracking-wide border border-line select-none`}
    >
      {letters}
    </span>
  );
}
