import * as stylex from "@stylexjs/stylex";

import { colors } from "@/styles/tokens/theme.stylex";
import type { PageContent } from "@/types/content";

const styles = stylex.create({
  frame: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: "1.5rem",
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: "0 1.5rem 4rem rgba(19, 34, 31, 0.08)",
    color: colors.ink,
  },
  eyebrow: {
    color: colors.accent,
  },
  description: {
    color: colors.mutedInk,
  },
});

type PageIntroProps = PageContent;

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
      <div {...stylex.props(styles.frame)}>
        <div className="px-6 py-14 sm:px-12 sm:py-20">
          <div {...stylex.props(styles.eyebrow)}>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase">
              {eyebrow}
            </p>
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl leading-tight font-semibold tracking-[-0.035em] text-balance sm:text-6xl">
            {title}
          </h1>
          <div {...stylex.props(styles.description)}>
            <p className="mt-7 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
