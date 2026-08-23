import type { Metadata } from "next";

import { PageIntro } from "@/components/sections/page-intro";
import { pageContent } from "@/content/pages/page-content";

export const metadata: Metadata = {
  title: "Sobre",
  description: pageContent.about.description,
};

export default function AboutPage() {
  return <PageIntro {...pageContent.about} />;
}
