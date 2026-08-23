import Link from "next/link";

import { siteContent } from "@/content/shared/site";

export function SiteHeader() {
  return (
    <header className="border-b border-border-subtle bg-background/94 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-content items-center justify-between px-6 lg:px-10">
        <Link
          className="inline-flex rounded-md text-[1.45rem] font-semibold tracking-[-0.065em] text-ink outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          href="/"
        >
          <span>Ne</span>
          <span className="text-primary-600">x</span>
          <span>us</span>
        </Link>

        <div className="flex items-center gap-3">
          <nav aria-label="Navegação principal" className="hidden md:block">
            <ul className="flex items-center gap-1 text-[0.8125rem] font-medium text-muted-ink">
              {siteContent.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="inline-flex h-8 items-center rounded-pill px-3 transition-colors duration-100 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:bg-ink/[0.06] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            className="inline-flex h-10 items-center justify-center rounded-pill bg-primary-600 px-4 text-[0.8125rem] font-semibold text-ink-on-primary transition-[transform,background-color,color] duration-160 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring active:scale-x-[0.96]"
            href="/contato"
          >
            Contato
          </Link>

          <details className="group relative md:hidden">
            <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-md border border-border bg-surface text-ink transition-colors hover:bg-surface-subtle focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Abrir menu de navegação</span>
              <span aria-hidden="true" className="grid gap-1">
                <span className="h-px w-4 bg-current" />
                <span className="h-px w-4 bg-current" />
              </span>
            </summary>
            <nav
              aria-label="Navegação móvel"
              className="absolute top-[calc(100%+0.75rem)] right-0 z-10 w-52 rounded-lg border border-border bg-surface p-2 shadow-floating"
            >
              <ul className="space-y-1">
                {siteContent.navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-ink transition-colors hover:bg-primary-50 hover:text-primary-700 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-focus-ring"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
