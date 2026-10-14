export interface LandingContent {
  hero: {
    labelTag: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    subtitle1: string;
    subtitle2: string;
    footerDev: string;
    ctaText: string;
    videoSrc: string;
  };
  section2: {
    labelTag: string;
    titleLine1: string;
    titleLine2: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    quote: string;
  };
  section3: {
    labelTag: string;
    title: string;
    body1: string;
    body2: string;
    highlight: string;
    videoSrc: string;
  };
  section4: {
    labelTag: string;
    title: string;
    pillars: Array<{
      title: string;
      tagline: string;
      description: string;
      tags: string;
    }>;
  };
  section5: {
    labelTag: string;
    title: string;
    intro1: string;
    intro2: string;
    /** URL de imagem (poster) ou quando não há vídeo. */
    videoImageUrl: string;
    /** URL de vídeo (mp4, webm) ou link do YouTube para reproduzir no player. */
    videoUrl: string;
    quote: string;
  };
  section6: {
    labelTag: string;
    title: string;
    phases: Array<{
      title: string;
      subtitle: string;
      badge: string;
      items: string[];
    }>;
  };
  section7: {
    titleLine1: string;
    titleLine2: string;
    body: string;
    ctaText: string;
    footer1: string;
    footer2: string;
  };
}

export const defaultLandingContent: LandingContent = {
  hero: {
    labelTag: 'Dossiê Estratégico de Evolução — Fevereiro 2026',
    titleLine1: 'COMPUTIZE NETWORK:',
    titleLine2: 'A EVOLUÇÃO',
    titleLine3: 'INVISÍVEL.',
    subtitle1: 'Sua infraestrutura já é imparável.',
    subtitle2: 'Agora, o mercado vai saber disso.',
    footerDev: 'Desenvolvido por Anti Copy Club — Inteligência Artificial Aplicada',
    ctaText: 'Explorar Dossiê',
    videoSrc: '/input_file_0.mp4',
  },
  section2: {
    labelTag: 'O Ponto de Partida',
    titleLine1: 'O SEU PRODUTO É 2026.',
    titleLine2: 'A SUA COMUNICAÇÃO AINDA NÃO.',
    paragraph1:
      'A Computize protege provedores ISP, e-commerces e fintechs contra ataques que derrubam concorrentes todos os dias. A tecnologia é real, robusta e opera em milissegundos.',
    paragraph2:
      'Mas há um paradoxo invisível: o mercado que você precisa alcançar — o dono do provedor, o CTO do e-commerce, o gestor de TI — não consegue enxergar o tamanho do que você entrega.',
    paragraph3:
      'Não porque o produto seja fraco. Porque a comunicação atual ainda usa a linguagem de 2015.',
    quote:
      '"Quando a vitrine não acompanha o produto, quem perde é o faturamento."',
  },
  section3: {
    labelTag: 'O Referencial',
    title: 'O EFEITO CLOUDFLARE.',
    body1:
      'Empresas como Cloudflare, Vercel e Stripe não vendem servidores. Elas vendem poder, estabilidade e visão de futuro.',
    body2:
      'Elas transformam dados invisíveis em visuais que o CEO entende. Elas falam de negócio, não de protocolo. Elas se comunicam com quem assina o cheque — não apenas com quem configura o roteador.',
    highlight:
      'Esse é o padrão que a Computize merece. E é exatamente o que a Anti Copy Club vai construir.',
    videoSrc: '/input_file_1.mp4',
  },
  section4: {
    labelTag: 'A Nossa Entrega',
    title: 'O MÉTODO ANTI COPY CLUB.',
    pillars: [
      {
        title: 'Visual que Vende',
        tagline: 'O fim do banco de imagens genérico.',
        description:
          'Nada de cabos azuis e cadeados digitais. Usamos ferramentas de IA para criar imagens cinematográficas que materializam a proteção da Computize. O cliente vai ver o escudo funcionando.',
        tags: 'Midjourney, Kling',
      },
      {
        title: 'Storytelling que Conecta',
        tagline: 'Da linguagem técnica para negócios.',
        description:
          'Transformamos o dia a dia da operação em conteúdo de alto impacto. Um log de ataque vira um Reel que o dono do provedor para de rolar o feed para assistir.',
        tags: 'LinkedIn, Authority',
      },
      {
        title: 'Automação que Escala',
        tagline: 'O marketing que trabalha enquanto a rede dorme.',
        description:
          'Construímos um ecossistema automatizado. Um evento real na infraestrutura vira post, roteiro e mensagem automática — sem parar a operação.',
        tags: 'n8n, Evolution',
      },
    ],
  },
  section5: {
    labelTag: 'O Produto em Ação',
    title: 'O NOVO ESPECIALISTA DA COMPUTIZE.',
    intro1: 'Não é necessário estúdio. Não é necessário câmera.',
    intro2:
      'É necessário ter o que vocês já têm: conhecimento técnico real.',
    videoImageUrl: 'https://picsum.photos/seed/network/1280/720',
    videoUrl: '',
    quote:
      '"Este é um exemplo real do que a Anti Copy Club produz para a Computize. Tempo de produção: horas, não semanas. Custo: uma fração de uma produtora tradicional."',
  },
  section6: {
    labelTag: 'A Execução',
    title: '90 DIAS PARA VIRAR O JOGO.',
    phases: [
      {
        title: 'Fase 1 — Fundação',
        subtitle: 'Dias 1 a 30: Construir a base',
        badge: 'Mês 01',
        items: [
          'Novo posicionamento e mensagem central da marca.',
          'Reformulação do site com foco em prova social e conversão.',
          'Ativação do LinkedIn com voz do founder e dados reais.',
          'Produção dos 3 primeiros cases de clientes reais.',
        ],
      },
      {
        title: 'Fase 2 — Ativação',
        subtitle: 'Dias 31 a 60: Colocar a máquina para rodar',
        badge: 'Mês 02',
        items: [
          'Lançamento do canal YouTube com vídeos de autoridade.',
          'Início da rotina de Reels educativos (com IA).',
          'Parceria de conteúdo com influenciador do setor.',
          '3 posts semanais no LinkedIn com storytelling B2B.',
        ],
      },
      {
        title: 'Fase 3 — Escala com IA',
        subtitle: 'Dias 61 a 90: Ligar o turbo',
        badge: 'Mês 03',
        items: [
          'Automação de conteúdo via n8n (evento → post).',
          'Fluxo de nutrição de leads via WhatsApp.',
          'Relatório mensal de ataques (isca de lead premium).',
          'Review de métricas e ajuste para o próximo ciclo.',
        ],
      },
    ],
  },
  section7: {
    titleLine1: 'A SUA REDE É IMPARÁVEL.',
    titleLine2: 'A SUA MARCA TAMBÉM SERÁ.',
    body: 'A tecnologia já está pronta. O próximo passo é fazer o mercado enxergar o que você já entrega.',
    ctaText: 'Iniciar com a Anti Copy Club',
    footer1: 'Dossiê Confidencial | Computize Network x Anti Copy Club',
    footer2: 'Fevereiro 2026 — Todos os direitos reservados.',
  },
};

const STORAGE_KEY = 'computize-landing-content';

export function loadContent(): LandingContent {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<LandingContent>;
      const merged: LandingContent = {
        ...defaultLandingContent,
        ...parsed,
        hero: { ...defaultLandingContent.hero, ...parsed.hero },
        section2: { ...defaultLandingContent.section2, ...parsed.section2 },
        section3: { ...defaultLandingContent.section3, ...parsed.section3 },
        section4: {
          ...defaultLandingContent.section4,
          ...parsed.section4,
          pillars: parsed.section4?.pillars ?? defaultLandingContent.section4.pillars,
        },
        section5: {
          ...defaultLandingContent.section5,
          ...parsed.section5,
          videoUrl: parsed.section5?.videoUrl ?? defaultLandingContent.section5.videoUrl,
        },
        section6: {
          ...defaultLandingContent.section6,
          ...parsed.section6,
          phases: parsed.section6?.phases ?? defaultLandingContent.section6.phases,
        },
        section7: { ...defaultLandingContent.section7, ...parsed.section7 },
      };
      return merged;
    }
  } catch (_) {}
  return defaultLandingContent;
}

export function saveContent(content: LandingContent): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}
