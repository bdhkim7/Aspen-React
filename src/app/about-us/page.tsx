import type { Metadata } from "next";
import { AboutPageView } from "@/components/pages/AboutPageView";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Aspen Imaging Healthcare manufactures next-generation medical imaging equipment from Plano, Texas.",
};

export default function AboutPage() {
  return <AboutPageView />;
}
