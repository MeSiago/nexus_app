import type { HomePageContent } from "@/types/content";

export function OperationsFlow({
  content,
}: {
  content: HomePageContent["flow"];
}) {
  return (
    <figure
      aria-describedby="home-flow-caption"
      aria-labelledby="home-flow-title"
      className="overflow-hidden rounded-lg border border-border-subtle bg-surface"
    >
      <div className="grid border-b border-border-subtle lg:grid-cols-[0.78fr_1.22fr]">
        <div className="border-b border-border-subtle px-5 py-8 sm:px-8 sm:py-10 lg:border-r lg:border-b-0 lg:px-10 lg:py-12">
          <p className="font-mono text-[0.6875rem] leading-4 tracking-[0.12em] text-primary-500 uppercase">
            {content.eyebrow}
          </p>
          <h3
            className="mt-4 max-w-sm text-2xl leading-8 font-medium tracking-[-0.035em] text-ink sm:text-3xl sm:leading-9"
            id="home-flow-title"
          >
            {content.title}
          </h3>
        </div>

        <ol className="relative grid gap-0 sm:grid-cols-2">
          {content.steps.map((step) => (
            <li
              className="relative min-h-40 border-b border-border-subtle px-5 py-6 last:border-b-0 odd:sm:border-r sm:px-7 sm:py-7 sm:[&:nth-last-child(-n+2)]:border-b-0"
              key={step.number}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-7 items-center justify-center rounded-pill border border-primary-500/30 bg-primary-50 font-mono text-[0.625rem] text-primary-500">
                  {step.number}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-border sm:-mr-7"
                />
              </div>
              <p className="mt-5 text-sm font-medium text-ink">{step.title}</p>
              <p className="mt-2 max-w-48 text-xs leading-5 text-muted-ink">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <figcaption
        className="px-5 py-4 text-xs leading-5 text-muted-ink sm:px-8"
        id="home-flow-caption"
      >
        {content.caption}
      </figcaption>
    </figure>
  );
}
