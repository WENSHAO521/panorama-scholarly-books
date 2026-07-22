import type { Metadata } from "next";
import CopyrightClient from "./CopyrightClient";

export const metadata: Metadata = {
  title: "Copyright and Licensing Policy",
  description: "Copyright and licensing policy of Panorama Scholarly Books.",
};

export default function CopyrightPage() {
  return <CopyrightClient />;
}
