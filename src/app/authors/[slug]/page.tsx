import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllAuthors, getAuthorBySlug } from "@/data/books";
import Container from "@/components/Container";
import BookCard from "@/components/BookCard";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export async function generateStaticParams() {
  return getAllAuthors().map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return {};

  return {
    title: author.name,
    description: author.bio
      ? author.bio.slice(0, 160)
      : `Titles by ${author.name}, published by Panorama Scholarly Books.`,
    alternates: {
      canonical: `https://books.panorama-sg.com/authors/${author.slug}/`,
    },
  };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  return (
    <>
      <div className="border-b border-[#e2e2e2] py-4">
        <Container>
          <Link
            href="/authors"
            className="font-serif text-sm text-[#888888] hover:text-[#111111] transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={14} weight="light" />
            Back to Authors
          </Link>
        </Container>
      </div>

      <Container narrow>
        <div className="py-12 lg:py-16">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            Author
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-[#111111] font-medium leading-[1.15] mb-8">
            {author.name}
          </h1>

          {author.bio && (
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-12">
              {author.bio}
            </p>
          )}

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <h2 className="font-serif text-xl text-[#111111] font-medium mb-6">
            {author.books.length === 1 ? "Title" : "Titles"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {author.books.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
