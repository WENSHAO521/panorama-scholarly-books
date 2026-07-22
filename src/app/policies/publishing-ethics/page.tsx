import type { Metadata } from "next";
import PublishingEthicsClient from "./PublishingEthicsClient";

export const metadata: Metadata = {
  title: "Publishing Ethics",
  description: "Publishing ethics policy of Panorama Scholarly Books.",
};

export default function PublishingEthicsPage() {
  return <PublishingEthicsClient />;
}
