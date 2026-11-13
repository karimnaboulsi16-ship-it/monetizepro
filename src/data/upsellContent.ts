import { BenefitItem, BonusItem, FaqItem } from '../types';
import guideMockup from '../assets/images/viral_master_guide_pt_fresh_1794587262292.jpg';
import phoneGrowth from '../assets/images/smartphone_viral_pt_1794587224568.jpg';
import studioBackdrop from '../assets/images/viral_creator_studio_1793370556742.jpg';

export const ASSETS = {
  guideMockup,
  phoneGrowth,
  studioBackdrop,
};

export const PROBLEM_STATEMENT = {
  quote: "Ter milhares de vídeos prontos sem saber como funciona o algoritmo é como comprar uma Ferrari e deixá-la trancada na garagem.",
  subtext: "O conteúdo é o combustível, mas a estratégia de viralização é o motor que gera milhões de visualizações.",
};

export const BENEFITS: BenefitItem[] = [
  {
    id: 'benefit-1',
    title: 'Mais Visualizações',
    subtitle: 'Quebre a barreira das 200 visualizações',
    metric: '+3,8M',
    metricLabel: 'Visualizações orgânicas médias',
    description: 'Aprenda a disparar a retenção nos primeiros 3 segundos para que o algoritmo recomende seus vídeos sem parar.',
    iconType: 'views',
    badge: 'Retenção Extrema',
  },
  {
    id: 'benefit-2',
    title: 'Crescimento Mais Rápido',
    subtitle: 'De 0 a milhares de seguidores reais',
    metric: '+1.250%',
    metricLabel: 'Aceleração em 14 dias',
    description: 'Transforme espectadores curiosos em uma comunidade fiel de seguidores sem gastar um único centavo com anúncios.',
    iconType: 'speed',
    badge: 'Crescimento Orgânico',
  },
  {
    id: 'benefit-3',
    title: 'Estratégias de Viralização',
    subtitle: 'O passo a passo exato e validado',
    metric: '94,2%',
    metricLabel: 'Taxa de eficácia dos ganchos',
    description: 'Domine os ganchos psicológicos, as tendências de áudio e os horários de ouro para postar no TikTok, Reels e Shorts.',
    iconType: 'strategy',
    badge: 'Método Científico',
  },
];

export const BONUSES: BonusItem[] = [
  {
    id: 'bonus-1',
    title: 'Mais de 10.000 hashtags virais',
    value: 47,
    description: 'Banco completo e atualizado de hashtags estratégicas para multiplicar o alcance dos seus vídeos em qualquer nicho.',
    tag: 'Acesso Imediato',
  },
  {
    id: 'bonus-2',
    title: 'Aprenda a usar o título certo',
    value: 37,
    description: 'Modelos exatos de títulos magnéticos para prender a atenção nos primeiros segundos e gerar mais cliques e retenção.',
    tag: 'Guia Prático',
  },
  {
    id: 'bonus-3',
    title: 'Aprenda os horários virais de cada plataforma',
    value: 29,
    description: 'Descubra os horários de ouro para postar no TikTok, Instagram Reels e YouTube Shorts e evitar vídeos flopados.',
    tag: 'Mapa de Horários',
  },
  {
    id: 'bonus-4',
    title: 'Suporte exclusivo com especialista em viralização',
    value: 67,
    description: 'Acompanhamento direto para tirar suas dúvidas, ajustar sua estratégia e acelerar seus resultados mais rápido.',
    tag: 'Suporte VIP',
  },
  {
    id: 'bonus-5',
    title: 'IAs grátis para você usar',
    value: 47,
    description: 'Lista curada das melhores Inteligências Artificiais gratuitas para criar roteiros, legendas e escalar seus vídeos.',
    tag: 'Ferramentas Grátis',
  },
  {
    id: 'bonus-6',
    title: '1.000 ganchos virais',
    value: 47,
    description: 'Acervo completo com aberturas magnéticas prontas para prender a atenção nos primeiros 3 segundos e disparar a retenção.',
    tag: 'Bônus Exclusivo',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Por que preciso deste guia se já comprei o Pack de Vídeos?',
    answer: 'O Pack de Vídeos entrega o melhor material audiovisual pronto para publicar, mas se você postar sem entender retenção, ganchos iniciais e os sinais do algoritmo, seus vídeos podem ficar travados em 200 visualizações. Este guia entrega o método exato para que cada vídeo publicado exploda em visualizações.',
  },
  {
    question: 'Funciona para contas que estão começando do zero?',
    answer: 'Sim, ele foi criado especificamente para contas novas ou estagnadas. Mostra como enviar os sinais certos aos algoritmos do TikTok, Instagram Reels e YouTube Shorts desde a primeira postagem.',
  },
  {
    question: 'Como vou receber o acesso ao Guia Viral Master?',
    answer: 'O acesso é 100% digital e imediato. Assim que você confirmar a adição ao seu pedido, o Guia Master em formato interativo e todos os bônus serão liberados diretamente na sua área de entrega do Pack Viral Master.',
  },
  {
    question: 'Tem garantia de satisfação?',
    answer: 'Com certeza. Você tem 30 dias de garantia blindada. Se aplicar o método e não conseguir multiplicar suas visualizações e seguidores, devolvemos 100% do seu dinheiro sem perguntas.',
  },
];
