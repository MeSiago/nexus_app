import Link from "next/link";

import { siteContent } from "@/content/shared/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle bg-background">
      <div className="mx-auto grid w-full max-w-content gap-16 px-6 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)] lg:gap-24 lg:px-10 lg:py-24">
        <div className="max-w-sm">
          <Link
            className="inline-flex rounded-sm text-[1.45rem] font-semibold tracking-[-0.065em] text-ink outline-none hover:text-primary-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring active:text-primary-500"
            href="/"
          >
            {siteContent.name}
          </Link>
          <p className="mt-6 text-sm leading-6 text-muted-ink">
            {siteContent.description}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-ink">
            {siteContent.location}
          </p>
        </div>

        <nav aria-label={siteContent.footer.navigationLabel}>
          <div className="grid grid-cols-2 gap-8">
            {siteContent.footer.navigationGroups.map((group) => {
              const items = siteContent.navigation.filter((item) =>
                group.hrefs.includes(item.href),
              );

              return (
                <div key={group.label}>
                  <h2 className="font-mono text-[0.6875rem] leading-4 tracking-[0.12em] text-muted-ink uppercase">
                    {group.label}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {items.map((item) => (
                      <li key={item.href}>
                        <Link
                          className="inline-flex rounded-sm py-1 text-sm text-ink outline-none hover:text-primary-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring active:text-primary-500"
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </footer>
  );
}
