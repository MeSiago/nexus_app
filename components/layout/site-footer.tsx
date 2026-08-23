import { siteContent } from "@/content/shared/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>{siteContent.description}</p>
        <p>{siteContent.location}</p>
      </div>
    </footer>
  );
}
