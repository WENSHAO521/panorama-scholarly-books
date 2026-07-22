import type { Metadata } from "next";
import AIUsePolicyClient from "./AIUsePolicyClient";

export const metadata: Metadata = {
  title: "AI Use Policy",
  description: "Policy on the use of artificial intelligence tools in manuscripts submitted to Panorama Scholarly Books.",
};

export default function AIUsePolicyPage() {
  return <AIUsePolicyClient />;
}
