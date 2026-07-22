import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllAuthors, getAuthorBySlug } from "@/data/books";
import AuthorDetailClient from "./AuthorDetailClient";

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

  return <AuthorDetailClient author={author} />;
}
