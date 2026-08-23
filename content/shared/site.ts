import type { NavigationItem } from "@/types/content";

export const siteContent = {
  name: "Nexus",
  description:
    "Conectividade para empresas que operam dentro de aeroportos.",
  location: "São Paulo, Brasil",
  navigation: [
    { href: "/", label: "Início" },
    { href: "/solucoes", label: "Soluções" },
    { href: "/sobre", label: "Sobre" },
    { href: "/contato", label: "Contato" },
  ] satisfies NavigationItem[],
  solutionNavigation: [
    { href: "/solucoes", label: "Internet" },
    { href: "/solucoes", label: "Fortigate" },
    { href: "/solucoes", label: "Infraestrutura" },
  ] satisfies NavigationItem[],
};
