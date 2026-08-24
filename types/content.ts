export type PageContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export type NavigationItem = {
  href: "/" | "/solucoes" | "/sobre" | "/contato";
  label: string;
};

export type HomeRouteLink = Pick<NavigationItem, "href" | "label">;

export type HomeService = {
  number: string;
  title: string;
  description: string;
};

export type HomeFlowStep = {
  number: string;
  title: string;
  description: string;
};

export type HomeValue = {
  title: string;
  description: string;
};

export type HomePageContent = {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    links: readonly [HomeRouteLink, HomeRouteLink];
  };
  contextVisual: {
    eyebrow: string;
    meta: string;
    title: string;
    caption: string;
  };
  manifesto: {
    index: string;
    eyebrow: string;
    title: string;
    description: string;
  };
  services: {
    index: string;
    eyebrow: string;
    title: string;
    description: string;
    items: readonly HomeService[];
  };
  flow: {
    eyebrow: string;
    title: string;
    caption: string;
    steps: readonly HomeFlowStep[];
  };
  values: {
    index: string;
    eyebrow: string;
    title: string;
    items: readonly HomeValue[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    link: HomeRouteLink;
  };
};
