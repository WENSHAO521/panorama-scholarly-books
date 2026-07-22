import type { Metadata } from "next";
import OpenAccessClient from "./OpenAccessClient";

export const metadata: Metadata = {
  title: "Open Access Books Policy",
  description: "Open access books policy of Panorama Scholarly Books.",
};

export default function OpenAccessPage() {
  return <OpenAccessClient />;
}
