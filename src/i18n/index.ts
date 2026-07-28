export type Locale = 'en' | 'pt';

export interface Dict {
  meta: { title: string; description: string };
  brand: string;
  nav: { services: string; expertise: string; product: string; how: string; contact: string; langLabel: string; langHref: string };
  hero: {
    title: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string[];
  };
  services: {
    heading: string;
    intro: string;
    cards: { title: string; body: string }[];
  };
  expertise: {
    heading: string;
    groups: { title: string; items: string }[];
    industriesHeading: string;
    industries: string[];
  };
  product: {
    heading: string;
    name: string;
    body: string;
    cta: string;
    note: string;
  };
  how: {
    heading: string;
    steps: { title: string; body: string }[];
    remote: string;
  };
  contact: {
    heading: string;
    body: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    alt: string;
  };
  footer: {
    legal: string;
    cnpj: string;
    easterEgg: string;
    easterEggTitle: string;
    rights: string;
  };
}

export const en: Dict = {
  meta: {
    title: 'Valinor Software Engineering — Industrial IoT, Systems Integration & Cloud-Native .NET',
    description:
      'Software engineering consultancy specialized in industrial IoT, systems integration, and cloud-native .NET. We build the software that makes machines, enterprise systems, and the cloud talk.',
  },
  brand: 'Valinor Software Engineering',
  nav: {
    services: 'Services',
    expertise: 'Expertise',
    product: 'Product',
    how: 'How we work',
    contact: 'Contact',
    langLabel: 'PT-BR',
    langHref: '/pt/',
  },
  hero: {
    title: 'Software that makes systems talk.',
    sub: 'Valinor is a software engineering consultancy that designs and builds the integration layer between machines, enterprise systems, and the cloud — from the factory floor to instant payments.',
    ctaPrimary: 'Talk to us',
    ctaSecondary: 'See I/O Smith',
    trust: [
      '15+ years of integration engineering',
      'Deliveries running in 42+ production sites worldwide',
      'Manufacturing · Automotive · Steel & Mining · Financial services',
    ],
  },
  services: {
    heading: 'What we deliver',
    intro:
      'Senior engineering for the hard part of every digital project: making systems that were never designed to talk to each other work as one.',
    cards: [
      {
        title: 'Industrial IoT & machine connectivity',
        body: 'PLC-to-cloud and machine-to-MES data flows with OPC-UA, MQTT, and data historians. We bridge legacy equipment and modern connected software — reliably, in real time.',
      },
      {
        title: 'Systems integration & APIs',
        body: 'REST APIs, API gateway strategy and governance, messaging with RabbitMQ, and SAP integration (MII, PI, FI/MM/HR). Legacy modernization without stopping the business.',
      },
      {
        title: 'Cloud-native .NET engineering',
        body: 'C#/.NET microservices built on Clean Architecture and DDD, containerized with Docker, orchestrated with Kubernetes, and delivered on Azure — designed for scale and maintainability.',
      },
      {
        title: 'Financial systems integration',
        body: 'Experience delivering PIX and Open Banking Brasil integrations on regulatory deadlines: architecting the layer between legacy core systems and instant-payment platforms serving millions of users.',
      },
      {
        title: 'DevOps & delivery acceleration',
        body: 'CI/CD on Azure DevOps, DevSecOps, automated quality gates, and observability with OpenTelemetry — so every deployment is boring, fast, and reversible.',
      },
      {
        title: 'AI-assisted engineering enablement',
        body: 'We help teams adopt LLM workflows for coding, testing, and review that speed up delivery without compromising code quality — grounded in real production practice.',
      },
    ],
  },
  expertise: {
    heading: 'Technologies we master',
    groups: [
      { title: 'Industrial connectivity', items: 'IIoT · OPC-UA · MQTT · machine-to-MES · data historians' },
      { title: 'Integration & APIs', items: 'REST · API Gateways · RabbitMQ · SAP MII/PI/FI/MM/HR · legacy modernization' },
      { title: 'Cloud-native .NET', items: 'C# · .NET · microservices · Clean Architecture · DDD · Docker · Kubernetes · Azure' },
      { title: 'Delivery & quality', items: 'Azure DevOps CI/CD · DevSecOps · OpenTelemetry · automated testing · AI-assisted engineering' },
    ],
    industriesHeading: 'Industries we know from the inside',
    industries: ['Manufacturing & packaging', 'Automotive', 'Steelmaking & mining', 'Financial services'],
  },
  product: {
    heading: 'Our product',
    name: 'I/O Smith',
    body: 'A config-driven industrial integration engine. Connect machines, brokers, databases, and APIs with declarative YAML flows — no glue code, no fleet of one-off services.',
    cta: 'Visit iosmith.valinor.dev.br',
    note: 'Built by Valinor from years of solving the same integration problems on real factory floors.',
  },
  how: {
    heading: 'How we work',
    steps: [
      { title: 'Discovery', body: 'We map your systems, protocols, and constraints — and define what success looks like in measurable terms.' },
      { title: 'Architecture', body: 'A pragmatic integration design: explicit contracts, failure modes, and a plan that survives contact with production.' },
      { title: 'Build', body: 'Senior engineers deliver in short cycles with CI/CD, automated tests, and quality gates from day one.' },
      { title: 'Operate & evolve', body: 'Observability, documentation, and handover — or ongoing support, if you prefer we stay close.' },
    ],
    remote: 'Remote-first. Based in Brazil, delivering worldwide, in English or Portuguese.',
  },
  contact: {
    heading: 'Tell us about your integration problem',
    body: 'A machine that will not talk to your MES, a legacy core blocking a new product, an API landscape out of control — chances are we have untangled something similar before.',
    name: 'Name',
    email: 'Email',
    message: 'What are you trying to connect?',
    submit: 'Send message',
    alt: 'Prefer email?',
  },
  footer: {
    legal: 'Valinor Consultoria e Engenharia de Software',
    cnpj: 'CNPJ 41.814.250/0001-42',
    easterEgg: 'Yes, it ends in 42. Don’t panic.',
    easterEggTitle: 'So long, and thanks for all the fish.',
    rights: 'All rights reserved.',
  },
};

export const pt: Dict = {
  meta: {
    title: 'Valinor Engenharia de Software — IoT Industrial, Integração de Sistemas e .NET Cloud-Native',
    description:
      'Consultoria de engenharia de software especializada em IoT industrial, integração de sistemas e .NET cloud-native. Construímos o software que faz máquinas, sistemas corporativos e nuvem conversarem.',
  },
  brand: 'Valinor Engenharia de Software',
  nav: {
    services: 'Serviços',
    expertise: 'Especialidades',
    product: 'Produto',
    how: 'Como trabalhamos',
    contact: 'Contato',
    langLabel: 'EN',
    langHref: '/',
  },
  hero: {
    title: 'Software que faz sistemas conversarem.',
    sub: 'A Valinor é uma consultoria de engenharia de software que projeta e constrói a camada de integração entre máquinas, sistemas corporativos e nuvem — do chão de fábrica ao pagamento instantâneo.',
    ctaPrimary: 'Fale conosco',
    ctaSecondary: 'Conheça o I/O Smith',
    trust: [
      '15+ anos de engenharia de integração',
      'Entregas rodando em 42+ plantas industriais no mundo',
      'Manufatura · Automotivo · Siderurgia e Mineração · Serviços financeiros',
    ],
  },
  services: {
    heading: 'O que entregamos',
    intro:
      'Engenharia sênior para a parte difícil de todo projeto digital: fazer sistemas que nunca foram feitos para conversar funcionarem como um só.',
    cards: [
      {
        title: 'IoT industrial e conectividade de máquinas',
        body: 'Fluxos de dados de PLC para nuvem e de máquina para MES com OPC-UA, MQTT e historiadores de dados. Conectamos equipamentos legados ao software moderno — com confiabilidade e em tempo real.',
      },
      {
        title: 'Integração de sistemas e APIs',
        body: 'APIs REST, estratégia e governança de API gateways, mensageria com RabbitMQ e integração SAP (MII, PI, FI/MM/HR). Modernização de legado sem parar a operação.',
      },
      {
        title: 'Engenharia .NET cloud-native',
        body: 'Microsserviços em C#/.NET com Clean Architecture e DDD, containerizados com Docker, orquestrados com Kubernetes e entregues no Azure — projetados para escala e manutenção.',
      },
      {
        title: 'Integração de sistemas financeiros',
        body: 'Experiência entregando integrações de PIX e Open Banking Brasil dentro do prazo regulatório: arquitetura da camada entre core bancário legado e plataformas de pagamento instantâneo servindo milhões de usuários.',
      },
      {
        title: 'DevOps e aceleração de entrega',
        body: 'CI/CD com Azure DevOps, DevSecOps, quality gates automatizados e observabilidade com OpenTelemetry — para que cada deploy seja previsível, rápido e reversível.',
      },
      {
        title: 'Adoção de engenharia assistida por IA',
        body: 'Ajudamos times a adotar fluxos com LLMs para codificação, testes e revisão que aceleram a entrega sem comprometer a qualidade do código — com base em prática real de produção.',
      },
    ],
  },
  expertise: {
    heading: 'Tecnologias que dominamos',
    groups: [
      { title: 'Conectividade industrial', items: 'IIoT · OPC-UA · MQTT · máquina-para-MES · historiadores de dados' },
      { title: 'Integração e APIs', items: 'REST · API Gateways · RabbitMQ · SAP MII/PI/FI/MM/HR · modernização de legado' },
      { title: '.NET cloud-native', items: 'C# · .NET · microsserviços · Clean Architecture · DDD · Docker · Kubernetes · Azure' },
      { title: 'Entrega e qualidade', items: 'CI/CD Azure DevOps · DevSecOps · OpenTelemetry · testes automatizados · engenharia assistida por IA' },
    ],
    industriesHeading: 'Setores que conhecemos por dentro',
    industries: ['Manufatura e embalagens', 'Automotivo', 'Siderurgia e mineração', 'Serviços financeiros'],
  },
  product: {
    heading: 'Nosso produto',
    name: 'I/O Smith',
    body: 'Um motor de integração industrial orientado a configuração. Conecte máquinas, brokers, bancos de dados e APIs com fluxos declarativos em YAML — sem código de cola, sem uma frota de serviços descartáveis.',
    cta: 'Visite iosmith.valinor.dev.br',
    note: 'Criado pela Valinor a partir de anos resolvendo os mesmos problemas de integração em chão de fábrica de verdade.',
  },
  how: {
    heading: 'Como trabalhamos',
    steps: [
      { title: 'Descoberta', body: 'Mapeamos seus sistemas, protocolos e restrições — e definimos sucesso em termos mensuráveis.' },
      { title: 'Arquitetura', body: 'Um desenho de integração pragmático: contratos explícitos, modos de falha e um plano que sobrevive ao contato com a produção.' },
      { title: 'Construção', body: 'Engenheiros seniores entregando em ciclos curtos, com CI/CD, testes automatizados e quality gates desde o primeiro dia.' },
      { title: 'Operação e evolução', body: 'Observabilidade, documentação e transferência — ou suporte contínuo, se preferir que a gente fique por perto.' },
    ],
    remote: 'Remote-first. Sediada no Brasil, entregando para o mundo, em português ou inglês.',
  },
  contact: {
    heading: 'Conte seu problema de integração',
    body: 'Uma máquina que não conversa com o MES, um core legado travando um produto novo, um cenário de APIs fora de controle — provavelmente já desatamos um nó parecido.',
    name: 'Nome',
    email: 'E-mail',
    message: 'O que você precisa conectar?',
    submit: 'Enviar mensagem',
    alt: 'Prefere e-mail?',
  },
  footer: {
    legal: 'Valinor Consultoria e Engenharia de Software',
    cnpj: 'CNPJ 41.814.250/0001-42',
    easterEgg: 'Sim, termina em 42. Não entre em pânico.',
    easterEggTitle: 'Até mais, e obrigado pelos peixes.',
    rights: 'Todos os direitos reservados.',
  },
};

export const dicts: Record<Locale, Dict> = { en, pt };
