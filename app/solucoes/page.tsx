import type { Metadata } from "next";

import { PageIntro } from "@/components/sections/page-intro";
import { pageContent } from "@/content/pages/page-content";

export const metadata: Metadata = {
  title: "Soluções",
  description: pageContent.solutions.description,
};

export default function SolutionsPage() {
  return <PageIntro {...pageContent.solutions} />;
}
