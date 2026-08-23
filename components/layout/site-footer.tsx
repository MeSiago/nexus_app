import { siteContent } from "@/content/shared/site";

export function SiteFooter() {
  return (
    <footer className="bg-surface-subtle">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-8 text-sm text-muted-ink sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>{siteContent.description}</p>
        <p>{siteContent.location}</p>
      </div>
    </footer>
  );
}
