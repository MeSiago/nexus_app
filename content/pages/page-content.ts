import type { PageContent } from "@/types/content";

export const pageContent = {
  home: {
    eyebrow: "Conectividade em ambientes aeroportuários",
    title: "Infraestrutura de rede para operações que não podem parar.",
    description:
      "A Nexun atende empresas que operam dentro de aeroportos com soluções de conectividade, instalação e manutenção de pontos de rede.",
  },
  solutions: {
    eyebrow: "Soluções",
    title: "Conectividade tratada como parte essencial da operação.",
    description:
      "Links de rede, instalação de pontos e manutenção apresentados de forma clara e institucional. Detalhes técnicos e comerciais serão incorporados após validação.",
  },
  about: {
    eyebrow: "Sobre a Nexun",
    title: "Uma presença dedicada à conectividade dentro de aeroportos.",
    description:
      "Esta área receberá a história, a missão e os compromissos institucionais da Nexun quando o conteúdo for aprovado.",
  },
  contact: {
    eyebrow: "Contato",
    title: "Um ponto direto para começar uma conversa.",
    description:
      "Os canais de atendimento e o comportamento do formulário serão definidos em uma etapa posterior. Nenhum dado é enviado nesta versão inicial.",
  },
} satisfies Record<string, PageContent>;
