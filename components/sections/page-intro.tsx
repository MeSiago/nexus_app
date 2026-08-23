import * as stylex from "@stylexjs/stylex";

import { colors, radii } from "@/styles/tokens/theme.stylex";
import type { PageContent } from "@/types/content";

const styles = stylex.create({
  frame: {
    backgroundColor: colors.surfaceSubtle,
    borderColor: colors.borderSubtle,
    borderRadius: radii.lg,
    borderStyle: "solid",
    borderWidth: 1,
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
    <section className="border-b border-border-subtle">
      <div className="mx-auto w-full max-w-content px-6 py-16 sm:py-24 lg:px-10 lg:py-32">
        <div {...stylex.props(styles.frame)}>
          <div className="px-6 py-14 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <div {...stylex.props(styles.eyebrow)}>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase">
                {eyebrow}
              </p>
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-[-0.045em] text-balance sm:text-5xl sm:leading-[1.02] lg:text-6xl">
              {title}
            </h1>
            <div {...stylex.props(styles.description)}>
              <p className="mt-7 max-w-2xl text-[0.9375rem] leading-6 sm:text-base sm:leading-7">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
