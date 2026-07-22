import type { Metadata } from "next";
import AuthorshipClient from "./AuthorshipClient";

export const metadata: Metadata = {
  title: "Authorship and Contributorship Policy",
  description: "Authorship and contributorship policy of Panorama Scholarly Books.",
};

export default function AuthorshipPage() {
  return <AuthorshipClient />;
}
