import type { Metadata } from "next";
import AIUsePolicyClient from "@/app/_pages/policies/ai-use-policy/AIUsePolicyClient";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI Use Policy",
  description: "Policy on the use of artificial intelligence tools in manuscripts submitted to Panorama Scholarly Books.",
  alternates: localeAlternates("/policies/ai-use-policy", "en"),
};

export default function AIUsePolicyPage() {
  return <AIUsePolicyClient locale="en" />;
}
