import { PageIntro } from "@/components/sections/page-intro";
import { pageContent } from "@/content/pages/page-content";

export default function HomePage() {
  return <PageIntro {...pageContent.home} />;
}
