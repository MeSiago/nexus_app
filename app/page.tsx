import type { Metadata } from "next";

import { HomePage } from "@/components/sections/home/home-page";
import { homeContent } from "@/content/pages/home-content";

export const metadata: Metadata = homeContent.metadata;

export default function Page() {
  return <HomePage />;
}
