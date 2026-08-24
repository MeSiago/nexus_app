import type { NavigationItem } from "@/types/content";

export const siteContent = {
  name: "Nexun",
  description:
    "Conectividade para empresas que operam dentro de aeroportos.",
  location: "São Paulo, Brasil",
  navigation: [
    { href: "/", label: "Início" },
    { href: "/solucoes", label: "Soluções" },
    { href: "/sobre", label: "Sobre" },
    { href: "/contato", label: "Contato" },
  ] satisfies NavigationItem[],
  footer: {
    navigationLabel: "Navegação do rodapé",
    navigationGroups: [
      { label: "Nexun", hrefs: ["/", "/sobre"] },
      { label: "Explorar", hrefs: ["/solucoes", "/contato"] },
    ],
  },
  solutionNavigation: [
    { href: "/solucoes", label: "Internet" },
    { href: "/solucoes", label: "Fortigate" },
    { href: "/solucoes", label: "Infraestrutura" },
  ] satisfies NavigationItem[],
  aboutNavigation: [
    { href: "/sobre", label: "Quem somos" },
    { href: "/sobre", label: "Onde estamos" },
    { href: "/sobre", label: "Onde atuamos" },
  ] satisfies NavigationItem[],
};
