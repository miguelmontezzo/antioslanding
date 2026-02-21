/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Zap, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  MessageSquare, 
  BarChart3,
  ChevronDown,
  Globe,
  Lock,
  Activity
} from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

const VideoBackground = ({ src, opacity = 0.2 }: { src: string, opacity?: number }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
      style={{ opacity }}
    >
      <source src={src} type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
    <div className="absolute inset-0 grid-bg opacity-20" />
  </div>
);

export default function App() {
  return (
    <div className="bg-dark min-h-screen selection:bg-accent selection:text-white">
      {/* SESSÃO 1 — ABERTURA */}
      <section className="section-container relative h-screen">
        <VideoBackground src="/input_file_0.mp4" opacity={0.3} />
        
        <div className="relative z-10">
          <FadeIn>
            <span className="label-tag">Dossiê Estratégico de Evolução — Fevereiro 2026</span>
            <h1 className="title-giant mb-8">
              COMPUTIZE NETWORK:<br />
              <span className="text-stroke">A EVOLUÇÃO</span><br />
              INVISÍVEL.
            </h1>
            <p className="text-2xl md:text-3xl font-light text-white/60 max-w-3xl mb-12">
              Sua infraestrutura já é imparável.<br />
              <span className="font-medium text-white">Agora, o mercado vai saber disso.</span>
            </p>
          </FadeIn>
        </div>

        <div className="mt-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
          <FadeIn delay={0.4}>
            <div className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">
              Desenvolvido por Anti Copy Club — Inteligência Artificial Aplicada
            </div>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="flex items-center gap-4 text-accent animate-bounce">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Explorar Dossiê</span>
              <ChevronDown size={14} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SESSÃO 2 — O DIAGNÓSTICO */}
      <section className="section-container bg-white text-dark py-40">
        <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
        <FadeIn>
          <span className="label-tag">O Ponto de Partida</span>
          <h2 className="title-large !text-dark mb-16">
            O SEU PRODUTO É 2026.<br />
            <span className="opacity-30">A SUA COMUNICAÇÃO AINDA NÃO.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-dark/70 leading-relaxed font-light">
                A Computize protege provedores ISP, e-commerces e fintechs contra ataques que derrubam concorrentes todos os dias. A tecnologia é real, robusta e opera em milissegundos.
              </p>
              <p className="text-xl md:text-2xl text-dark/70 leading-relaxed font-light">
                Mas há um paradoxo invisível: o mercado que você precisa alcançar — o dono do provedor, o CTO do e-commerce, o gestor de TI — não consegue enxergar o tamanho do que você entrega.
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-dark/70 leading-relaxed font-light">
                Não porque o produto seja fraco. Porque a comunicação atual ainda usa a linguagem de 2015.
              </p>
              <div className="pt-12 border-t border-dark/5">
                <p className="text-3xl md:text-4xl font-serif italic text-accent leading-tight">
                  "Quando a vitrine não acompanha o produto, quem perde é o faturamento."
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SESSÃO 3 — O PADRÃO QUE QUEREMOS ATINGIR */}
      <section className="section-container bg-dark py-40 relative">
        <VideoBackground src="/input_file_1.mp4" opacity={0.4} />
        
        <div className="relative z-10">
          <FadeIn>
            <span className="label-tag">O Referencial</span>
            <h2 className="title-large mb-16">O EFEITO CLOUDFLARE.</h2>
            
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <p className="text-body">
                  Empresas como Cloudflare, Vercel e Stripe não vendem servidores. Elas vendem poder, estabilidade e visão de futuro.
                </p>
                <p className="text-body">
                  Elas transformam dados invisíveis em visuais que o CEO entende. Elas falam de negócio, não de protocolo. Elas se comunicam com quem assina o cheque — não apenas com quem configura o roteador.
                </p>
                <div className="p-10 glass-card border-accent/20 bg-accent/5">
                  <p className="text-xl font-medium text-accent-light leading-relaxed">
                    Esse é o padrão que a Computize merece. E é exatamente o que a Anti Copy Club vai construir.
                  </p>
                </div>
              </div>
              <div className="hidden lg:block aspect-square relative">
                <div className="absolute inset-0 bg-accent/10 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="w-full h-full border border-white/5 rounded-full flex items-center justify-center">
                  <Globe className="text-accent/20" size={200} strokeWidth={0.5} />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SESSÃO 4 — NOSSA SOLUÇÃO (Os 3 Pilares) */}
      <section className="section-container bg-dark-surface py-40">
        <FadeIn>
          <span className="label-tag">A Nossa Entrega</span>
          <h2 className="title-large mb-24">O MÉTODO ANTI COPY CLUB.</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Pilar 1 */}
            <div className="glass-card p-12 flex flex-col h-full hover:border-accent/40 transition-all duration-500 group">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-10 group-hover:bg-accent/20 transition-colors">
                <Shield className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Visual que Vende</h3>
              <p className="text-accent/60 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">O fim do banco de imagens genérico.</p>
              <p className="text-white/50 leading-relaxed mb-10 font-light">
                Nada de cabos azuis e cadeados digitais. Usamos ferramentas de IA para criar imagens cinematográficas que materializam a proteção da Computize. O cliente vai ver o escudo funcionando.
              </p>
              <div className="mt-auto pt-8 border-t border-white/5 flex gap-4">
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Midjourney</span>
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Kling</span>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="glass-card p-12 flex flex-col h-full hover:border-accent/40 transition-all duration-500 group">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-10 group-hover:bg-accent/20 transition-colors">
                <Activity className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Storytelling que Conecta</h3>
              <p className="text-accent/60 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Da linguagem técnica para negócios.</p>
              <p className="text-white/50 leading-relaxed mb-10 font-light">
                Transformamos o dia a dia da operação em conteúdo de alto impacto. Um log de ataque vira um Reel que o dono do provedor para de rolar o feed para assistir.
              </p>
              <div className="mt-auto pt-8 border-t border-white/5 flex gap-4">
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">LinkedIn</span>
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Authority</span>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="glass-card p-12 flex flex-col h-full hover:border-accent/40 transition-all duration-500 group">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-10 group-hover:bg-accent/20 transition-colors">
                <Zap className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Automação que Escala</h3>
              <p className="text-accent/60 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">O marketing que trabalha enquanto a rede dorme.</p>
              <p className="text-white/50 leading-relaxed mb-10 font-light">
                Construímos um ecossistema automatizado. Um evento real na infraestrutura vira post, roteiro e mensagem automática — sem parar a operação.
              </p>
              <div className="mt-auto pt-8 border-t border-white/5 flex gap-4">
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">n8n</span>
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Evolution</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SESSÃO 5 — A PRÉVIA (O Que Já Produzimos) */}
      <section className="section-container bg-white text-dark py-40">
        <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
        <FadeIn>
          <span className="label-tag">O Produto em Ação</span>
          <h2 className="title-large !text-dark mb-12">O NOVO ESPECIALISTA DA COMPUTIZE.</h2>
          
          <div className="max-w-5xl mx-auto space-y-16">
            <p className="text-xl md:text-2xl text-dark/60 text-center font-light">
              Não é necessário estúdio. Não é necessário câmera.<br />
              <span className="font-bold text-dark">É necessário ter o que vocês já têm: conhecimento técnico real.</span>
            </p>

            <div className="aspect-video bg-dark rounded-[2rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,102,255,0.2)] relative group cursor-pointer">
              <img 
                src="https://picsum.photos/seed/network/1280/720" 
                alt="AI Specialist Preview" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
                </div>
              </div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-6">
                  <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-accent" />
                  </div>
                  <span className="text-white/40 text-[10px] font-bold tracking-widest">01:24 / 03:45</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-dark/40 italic text-xl font-serif max-w-3xl mx-auto leading-relaxed">
                "Este é um exemplo real do que a Anti Copy Club produz para a Computize. Tempo de produção: horas, não semanas. Custo: uma fração de uma produtora tradicional."
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SESSÃO 6 — O PLANO (Os 90 Dias) */}
      <section className="section-container bg-dark py-40">
        <FadeIn>
          <span className="label-tag">A Execução</span>
          <h2 className="title-large mb-24">90 DIAS PARA VIRAR O JOGO.</h2>
          
          <div className="space-y-16 relative">
            <div className="absolute left-[31px] top-0 bottom-0 w-px bg-white/5 hidden md:block" />
            
            {/* Fase 1 */}
            <div className="relative md:pl-24">
              <div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-accent text-white flex items-center justify-center font-bold text-xl z-10 hidden md:flex shadow-[0_0_30px_rgba(0,102,255,0.3)]">01</div>
              <div className="glass-card p-10 md:p-16">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                  <div>
                    <h3 className="text-3xl font-bold uppercase tracking-tight">Fase 1 — Fundação</h3>
                    <p className="text-accent uppercase tracking-[0.3em] text-[10px] font-bold mt-2">Dias 1 a 30: Construir a base</p>
                  </div>
                  <div className="px-6 py-2 rounded-full border border-white/5 text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Mês 01</div>
                </div>
                <ul className="grid md:grid-cols-2 gap-8">
                  {[
                    "Novo posicionamento e mensagem central da marca.",
                    "Reformulação do site com foco em prova social e conversão.",
                    "Ativação do LinkedIn com voz do founder e dados reais.",
                    "Produção dos 3 primeiros cases de clientes reais."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-5 group">
                      <div className="w-6 h-6 rounded-full border border-accent/30 flex items-center justify-center shrink-0 mt-1 group-hover:bg-accent transition-colors duration-300">
                        <CheckCircle2 className="text-accent group-hover:text-white transition-colors" size={12} />
                      </div>
                      <span className="text-white/50 text-lg font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Fase 2 */}
            <div className="relative md:pl-24">
              <div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-white/5 text-white/40 border border-white/10 flex items-center justify-center font-bold text-xl z-10 hidden md:flex">02</div>
              <div className="glass-card p-10 md:p-16">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                  <div>
                    <h3 className="text-3xl font-bold uppercase tracking-tight">Fase 2 — Ativação</h3>
                    <p className="text-white/30 uppercase tracking-[0.3em] text-[10px] font-bold mt-2">Dias 31 a 60: Colocar a máquina para rodar</p>
                  </div>
                  <div className="px-6 py-2 rounded-full border border-white/5 text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Mês 02</div>
                </div>
                <ul className="grid md:grid-cols-2 gap-8">
                  {[
                    "Lançamento do canal YouTube com vídeos de autoridade.",
                    "Início da rotina de Reels educativos (com IA).",
                    "Parceria de conteúdo com influenciador do setor.",
                    "3 posts semanais no LinkedIn com storytelling B2B."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-5 group">
                      <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 className="text-white/10" size={12} />
                      </div>
                      <span className="text-white/40 text-lg font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Fase 3 */}
            <div className="relative md:pl-24">
              <div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-white/5 text-white/40 border border-white/10 flex items-center justify-center font-bold text-xl z-10 hidden md:flex">03</div>
              <div className="glass-card p-10 md:p-16">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                  <div>
                    <h3 className="text-3xl font-bold uppercase tracking-tight">Fase 3 — Escala com IA</h3>
                    <p className="text-white/30 uppercase tracking-[0.3em] text-[10px] font-bold mt-2">Dias 61 a 90: Ligar o turbo</p>
                  </div>
                  <div className="px-6 py-2 rounded-full border border-white/5 text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Mês 03</div>
                </div>
                <ul className="grid md:grid-cols-2 gap-8">
                  {[
                    "Automação de conteúdo via n8n (evento → post).",
                    "Fluxo de nutrição de leads via WhatsApp.",
                    "Relatório mensal de ataques (isca de lead premium).",
                    "Review de métricas e ajuste para o próximo ciclo."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-5 group">
                      <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 className="text-white/10" size={12} />
                      </div>
                      <span className="text-white/40 text-lg font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SESSÃO 7 — FECHAMENTO */}
      <section className="section-container bg-accent text-white py-48 text-center items-center">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <FadeIn>
          <h2 className="title-giant mb-10">
            A SUA REDE É IMPARÁVEL.<br />
            A SUA MARCA TAMBÉM SERÁ.
          </h2>
          <p className="text-2xl md:text-3xl font-light text-white/80 max-w-3xl mx-auto mb-20 leading-relaxed">
            A tecnologia já está pronta. O próximo passo é fazer o mercado enxergar o que você já entrega.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#0066FF' }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white px-16 py-8 rounded-full text-xl font-bold uppercase tracking-[0.3em] flex items-center gap-6 mx-auto transition-all duration-300 shadow-[0_20px_60px_-15px_rgba(255,255,255,0.3)]"
          >
            Iniciar com a Anti Copy Club
            <ArrowRight size={28} />
          </motion.button>
        </FadeIn>

        <div className="mt-40 w-full border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.5em] font-bold text-white/30">
          <span>Dossiê Confidencial | Computize Network x Anti Copy Club</span>
          <span>Fevereiro 2026 — Todos os direitos reservados.</span>
        </div>
      </section>
    </div>
  );
}
