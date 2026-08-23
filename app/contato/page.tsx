import type { Metadata } from "next";

import { PageIntro } from "@/components/sections/page-intro";
import { pageContent } from "@/content/pages/page-content";

export const metadata: Metadata = {
  title: "Contato",
  description: pageContent.contact.description,
};

export default function ContactPage() {
  return <PageIntro {...pageContent.contact} />;
}
