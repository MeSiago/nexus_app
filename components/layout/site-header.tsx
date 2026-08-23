"use client";

import Link from "next/link";
import { useState } from "react";

import { siteContent } from "@/content/shared/site";

export function SiteHeader() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isSolutionsMounted, setIsSolutionsMounted] = useState(false);
  const primaryNavigation = siteContent.navigation.filter(
    (item) => item.href !== "/solucoes",
  );
  const openSolutions = () => {
    setIsSolutionsMounted(true);
    setIsSolutionsOpen(true);
  };
  const closeSolutions = () => setIsSolutionsOpen(false);

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
          <nav
            aria-label="Navegação principal"
            className="hidden md:block"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                closeSolutions();
              }
            }}
          >
            <ul className="flex items-center gap-1 text-[0.8125rem] font-medium text-muted-ink">
              {primaryNavigation.slice(0, 1).map((item) => (
                <li key={item.href}>
                  <Link
                    className="inline-flex h-8 items-center rounded-pill px-3 transition-colors duration-100 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:bg-ink/[0.06] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li
                className="relative"
                onMouseEnter={openSolutions}
                onMouseLeave={closeSolutions}
              >
                <button
                  aria-controls="solutions-menu"
                  aria-expanded={isSolutionsOpen}
                  aria-haspopup="menu"
                  className="inline-flex h-8 items-center rounded-pill px-3 transition-colors duration-100 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:bg-ink/[0.06] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                  onClick={openSolutions}
                  onFocus={openSolutions}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      closeSolutions();
                    }
                  }}
                  type="button"
                >
                  Soluções
                </button>

                {isSolutionsMounted ? (
                  <div className="absolute top-full right-[-10.75rem] z-20 w-[min(52rem,calc(100vw-3rem))] pt-3">
                    <div
                      className={`origin-top-right rounded-[0.875rem] border border-border bg-surface/90 p-2 shadow-floating backdrop-blur-[32px] ${
                        isSolutionsOpen
                          ? "animate-[nexus-menu-in_180ms_cubic-bezier(0.455,0.03,0.515,0.955)_both]"
                          : "animate-[nexus-menu-out_180ms_cubic-bezier(0.455,0.03,0.515,0.955)_both]"
                      }`}
                      onAnimationEnd={(event) => {
                        if (!isSolutionsOpen && event.target === event.currentTarget) {
                          setIsSolutionsMounted(false);
                        }
                      }}
                    >
                      <div
                        className="overflow-hidden rounded-md border border-border-subtle bg-surface"
                        id="solutions-menu"
                        role="menu"
                      >
                        <div className="grid grid-cols-3 p-3">
                          {siteContent.solutionNavigation.map((item, index) => (
                            <Link
                              className={`group/menu-item min-h-28 rounded-md px-4 py-3 outline-none transition-colors duration-100 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:bg-ink/[0.04] focus-visible:bg-primary-50 focus-visible:outline-none ${
                                index > 0 ? "border-l border-border-subtle" : ""
                              }`}
                              href={item.href}
                              key={item.label}
                              onClick={closeSolutions}
                              role="menuitem"
                            >
                              <span className="block text-[0.8125rem] text-muted-ink">
                                Solução
                              </span>
                              <span className="mt-1.5 block text-sm leading-5 font-medium text-ink transition-colors duration-100 group-hover/menu-item:text-primary-700">
                                {item.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="flex items-center justify-between border-t border-border-subtle px-4 pt-4 pb-3 text-sm">
                          <p className="text-muted-ink">Conheça as soluções da Nexus</p>
                          <Link
                            className="font-medium text-primary-600 transition-colors duration-100 hover:text-primary-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
                            href="/solucoes"
                            onClick={closeSolutions}
                          >
                            Ver soluções →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </li>
              {primaryNavigation.slice(1).map((item) => (
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
                    {item.href === "/solucoes" ? (
                      <ul className="ml-3 border-l border-border-subtle pl-2">
                        {siteContent.solutionNavigation.map((solution) => (
                          <li key={solution.label}>
                            <Link
                              className="block rounded-md px-3 py-2 text-sm text-muted-ink transition-colors hover:bg-primary-50 hover:text-primary-700 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-focus-ring"
                              href={solution.href}
                            >
                              {solution.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
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
