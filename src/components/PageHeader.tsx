import type { ReactNode } from "react";
import Container from "@/components/Container";

/** Standard page opening: eyebrow, title, lede, optional extra content. */
export default function PageHeader({
  eyebrow,
  title,
  lede,
  children,
  narrow = false,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  narrow?: boolean;
}) {
  return (
    <section className="pt-12 pb-10 lg:pt-20 lg:pb-14 border-b border-line">
      <Container narrow={narrow}>
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="type-h1 max-w-[22ch]">{title}</h1>
        {lede && <p className="lede mt-5 max-w-[62ch]">{lede}</p>}
        {children}
      </Container>
    </section>
  );
}
