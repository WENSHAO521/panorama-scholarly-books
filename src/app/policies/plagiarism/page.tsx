import type { Metadata } from "next";
import PlagiarismClient from "./PlagiarismClient";

export const metadata: Metadata = {
  title: "Plagiarism and Similarity Check Policy",
  description: "Plagiarism and text similarity policy of Panorama Scholarly Books.",
};

export default function PlagiarismPage() {
  return <PlagiarismClient />;
}
