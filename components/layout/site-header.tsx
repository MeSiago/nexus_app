import Link from "next/link";

import { siteContent } from "@/content/shared/site";

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex min-h-20 max-w-6xl flex-col justify-center gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-0 lg:px-8">
        <Link
          className="w-fit text-lg font-semibold tracking-[0.16em] text-slate-950 uppercase"
          href="/"
        >
          {siteContent.name}
        </Link>

        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            {siteContent.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="transition-colors hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
