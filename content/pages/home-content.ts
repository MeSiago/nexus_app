import type { HomePageContent } from "@/types/content";

export const homeContent = {
  metadata: {
    title: "Conectividade para operações em aeroportos",
    description:
      "Conheça a atuação da Nexus em links de rede, instalação e manutenção para empresas que operam em aeroportos.",
  },
  hero: {
    eyebrow: "Conectividade em ambientes aeroportuários",
    title: "Conectividade para negócios que operam em aeroportos.",
    description:
      "Links de rede, instalação e manutenção para empresas que precisam estruturar seus pontos de rede dentro de aeroportos.",
    links: [
      { href: "/solucoes", label: "Conhecer soluções" },
      { href: "/contato", label: "Ir para contato" },
    ],
  },
  proof: {
    eyebrow: "Topologia conceitual",
    meta: "Nexus / Rede",
    title: "Uma infraestrutura conectada ao contexto da operação.",
    caption:
      "Representação ilustrativa da relação entre áreas, infraestrutura e pontos de rede. Não corresponde a um mapa ou projeto contratado.",
    nodes: {
      terminal: { eyebrow: "Área", label: "Terminal" },
      operations: { eyebrow: "Área", label: "Operações" },
      core: { eyebrow: "Nexus", label: "Conectividade" },
      infrastructure: { eyebrow: "Base", label: "Infraestrutura" },
      networkPoints: { eyebrow: "Extremidade", label: "Pontos de rede" },
    },
  },
  manifesto: {
    index: "01",
    eyebrow: "Perspectiva",
    title:
      "Em um aeroporto, a rede faz parte de uma operação maior — e precisa ser tratada com o mesmo cuidado.",
    description:
      "A Nexus concentra sua atuação na conectividade de empresas presentes nesse ambiente, com uma abordagem técnica, institucional e orientada ao contexto de cada operação.",
  },
  services: {
    index: "02",
    eyebrow: "Soluções",
    title: "Uma atuação concentrada no que sustenta a conexão.",
    description:
      "Três frentes complementares apresentam, de forma objetiva, o escopo inicial de serviços da Nexus.",
    items: [
      {
        number: "01",
        title: "Links de rede",
        description:
          "Conectividade destinada aos pontos de rede de empresas que atuam em ambientes aeroportuários.",
      },
      {
        number: "02",
        title: "Instalação",
        description:
          "Estruturação de pontos de rede para integrar espaços e necessidades da operação.",
      },
      {
        number: "03",
        title: "Manutenção",
        description:
          "Atuação técnica sobre pontos de rede e a infraestrutura de conectividade associada.",
      },
    ],
  },
  flow: {
    eyebrow: "Fluxo operacional",
    title: "Do ambiente à continuidade da conexão.",
    caption:
      "Fluxo conceitual de atuação. Etapas, responsabilidades e níveis de serviço são definidos conforme cada contratação.",
    steps: [
      {
        number: "01",
        title: "Contexto",
        description: "Leitura da necessidade da operação.",
      },
      {
        number: "02",
        title: "Infraestrutura",
        description: "Organização do ponto de rede.",
      },
      {
        number: "03",
        title: "Conectividade",
        description: "Integração do link ao ambiente.",
      },
      {
        number: "04",
        title: "Suporte",
        description: "Continuidade tratada no escopo acordado.",
      },
    ],
  },
  values: {
    index: "03",
    eyebrow: "Princípios",
    title: "Valores que orientam a relação com cada operação.",
    items: [
      {
        title: "Confiabilidade",
        description:
          "Infraestrutura tratada como parte relevante da rotina operacional.",
      },
      {
        title: "Excelência operacional",
        description:
          "Cuidado técnico, clareza e organização na condução dos serviços.",
      },
      {
        title: "Suporte",
        description:
          "Acompanhamento técnico como parte da experiência de conectividade.",
      },
      {
        title: "Compromisso com SLA",
        description:
          "Acordos de nível de serviço considerados conforme cada contratação.",
      },
    ],
  },
  cta: {
    eyebrow: "Próximo passo",
    title: "Converse sobre o contexto da sua operação.",
    description:
      "A página de contato reúne o ponto institucional para iniciar essa conversa.",
    link: { href: "/contato", label: "Acessar contato" },
  },
} satisfies HomePageContent;
