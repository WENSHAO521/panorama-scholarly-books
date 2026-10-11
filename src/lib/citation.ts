import type { Book } from "@/data/books";
import { nameRomanizations } from "@/data/books";

const PUBLISHER = "Panorama Scholarly Group Limited";

function isLatin(name: string) {
  return /^[\p{Script=Latin}\s.'’-]+$/u.test(name);
}

function apaName(name: string): string {
  if (!isLatin(name)) return name;
  const parts = name.trim().split(/\s+/);
  if (parts.length < 2) return name;
  const surname = parts.pop()!;
  const initials = parts.map((p) => `${p[0].toUpperCase()}.`).join(" ");
  return `${surname}, ${initials}`;
}

function joinApa(names: string[]): string {
  const formatted = names.map(apaName);
  if (formatted.length <= 1) return formatted.join("");
  if (formatted.length === 2) return `${formatted[0]}, & ${formatted[1]}`;
  return `${formatted.slice(0, -1).join(", ")}, & ${formatted[formatted.length - 1]}`;
}

function fullTitle(book: Book) {
  return book.subtitle ? `${book.title}: ${book.subtitle}` : book.title;
}

export function apaCitation(book: Book): string {
  const names = book.isEdited ? book.editors : book.authors;
  const who = joinApa(names) + (book.isEdited ? (names.length === 1 ? " (Ed.)." : " (Eds.).") : "");
  const sep = who.endsWith(".") ? " " : ". ";
  const doi = book.doi ? ` https://doi.org/${book.doi}` : "";
  return `${who}${sep}(${book.publicationYear}). ${fullTitle(book)}. ${PUBLISHER}.${doi}`;
}

export function bibtexCitation(book: Book): string {
  const names = book.isEdited ? book.editors : book.authors;
  const firstName = names[0] ?? "anon";
  const keyName = (nameRomanizations[firstName] ?? firstName).split(/\s+/).pop()!.toLowerCase().replace(/[^a-z]/g, "") || "psb";
  const key = `${keyName}${book.publicationYear}`;
  const lines = [
    `  ${book.isEdited ? "editor" : "author"} = {${names.join(" and ")}}`,
    `  title = {${book.title}${book.subtitle ? `: ${book.subtitle}` : ""}}`,
    `  publisher = {${PUBLISHER}}`,
    `  address = {${book.placeOfPublication}}`,
    `  year = {${book.publicationYear}}`,
    ...(/^\d/.test(book.isbn) ? [`  isbn = {${book.isbn}}`] : []),
    ...(book.doi ? [`  doi = {${book.doi}}`] : []),
  ];
  return `@book{${key},\n${lines.join(",\n")}\n}`;
}
