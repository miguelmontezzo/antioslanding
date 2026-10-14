/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Globe,
  Activity,
  Settings
} from 'lucide-react';
import { defaultContent, ContentSchema } from './content';
import AdminPanel from './AdminPanel';

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
      src={src}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
    <div className="absolute inset-0 grid-bg opacity-20" />
  </div>
);

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [content, setContent] = useState<ContentSchema>(defaultContent);

  useEffect(() => {
    const saved = localStorage.getItem('siteContent');
    if (saved) {
      try {
        setContent(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSaveContent = (newContent: ContentSchema) => {
    setContent(newContent);
    localStorage.setItem('siteContent', JSON.stringify(newContent));
  };

  const { section1, section2, section3, section4, section5, section6, section7 } = content;

  return (
    <div className="bg-dark min-h-screen selection:bg-accent selection:text-white relative font-sans">
      {/* SESSÃO 1 — ABERTURA */}
      <section className="section-container relative h-screen">
        <VideoBackground src={section1.videoSrc} opacity={section1.videoOpacity} />

        <div className="relative z-10">
          <FadeIn>
            <span className="label-tag">{section1.labelTag}</span>
            <h1 className="title-giant mb-8">
              {section1.titleLine1}<br />
              <span className="text-stroke">{section1.titleLine2}</span><br />
              {section1.titleLine3}
            </h1>
            <p className="text-2xl md:text-3xl font-light text-white/60 max-w-3xl mb-12">
              {section1.subtitleLine1}<br />
              <span className="font-medium text-white">{section1.subtitleLine2}</span>
            </p>
          </FadeIn>
        </div>

        <div className="mt-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
          <FadeIn delay={0.4}>
            <div className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">
              {section1.footerText}
            </div>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div
              className="flex items-center gap-4 text-accent animate-bounce cursor-pointer hover:text-white transition-colors"
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth'
                });
              }}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">{section1.exploreText}</span>
              <ChevronDown size={14} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SESSÃO 2 — O DIAGNÓSTICO */}
      <section className="section-container bg-white text-dark py-40">
        <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
        <FadeIn>
          <span className="label-tag">{section2.labelTag}</span>
          <h2 className="title-large !text-dark mb-16">
            {section2.titleLine1}<br />
            <span className="opacity-30">{section2.titleLine2}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-dark/70 leading-relaxed font-light">
                {section2.paragraph1}
              </p>
              <p className="text-xl md:text-2xl text-dark/70 leading-relaxed font-light">
                {section2.paragraph2}
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-dark/70 leading-relaxed font-light">
                {section2.paragraph3}
              </p>
              <div className="pt-12 border-t border-dark/5">
                <p className="text-3xl md:text-4xl font-serif italic text-accent leading-tight">
                  {section2.quote}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SESSÃO 3 — O PADRÃO QUE QUEREMOS ATINGIR */}
      <section className="section-container bg-dark py-40 relative">
        <VideoBackground src={section3.videoSrc} opacity={section3.videoOpacity} />

        <div className="relative z-10">
          <FadeIn>
            <span className="label-tag">{section3.labelTag}</span>
            <h2 className="title-large mb-16">{section3.title}</h2>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <p className="text-body">
                  {section3.paragraph1}
                </p>
                <p className="text-body">
                  {section3.paragraph2}
                </p>
                <div className="p-10 glass-card border-accent/20 bg-accent/5">
                  <p className="text-xl font-medium text-accent-light leading-relaxed">
                    {section3.highlight}
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
          <span className="label-tag">{section4.labelTag}</span>
          <h2 className="title-large mb-24">{section4.title}</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {section4.pillars.map((pillar, i) => (
              <div key={i} className="glass-card p-12 flex flex-col h-full hover:border-accent/40 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-10 group-hover:bg-accent/20 transition-colors">
                  {i === 0 ? <Shield className="text-accent" size={28} /> :
                    i === 1 ? <Activity className="text-accent" size={28} /> :
                      <Zap className="text-accent" size={28} />}
                </div>
                <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">{pillar.title}</h3>
                <p className="text-accent/60 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">{pillar.subtitle}</p>
                <p className="text-white/50 leading-relaxed mb-10 font-light">
                  {pillar.text}
                </p>
                <div className="mt-auto pt-8 border-t border-white/5 flex gap-4">
                  <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">{pillar.tool1}</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">{pillar.tool2}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* SESSÃO 5 — A PRÉVIA (O Que Já Produzimos) */}
      <section className="section-container bg-white text-dark py-40">
        <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
        <FadeIn>
          <span className="label-tag">{section5.labelTag}</span>
          <h2 className="title-large !text-dark mb-12">{section5.title}</h2>

          <div className="max-w-5xl mx-auto space-y-16">
            <p className="text-xl md:text-2xl text-dark/60 text-center font-light">
              {section5.textLine1}<br />
              <span className="font-bold text-dark">{section5.textLine2}</span>
            </p>

            <div
              className="aspect-video bg-dark rounded-[2rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,102,255,0.2)] relative group cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              {isPlaying ? (
                <video
                  autoPlay
                  controls
                  className="w-full h-full object-cover"
                  src={section5.videoSrc}
                />
              ) : (
                <>
                  <img
                    src={section5.videoThumbnail}
                    alt="Preview"
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
                      <span className="text-white/40 text-[10px] font-bold tracking-widest">{section5.videoTimeText}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="text-center">
              <p className="text-dark/40 italic text-xl font-serif max-w-3xl mx-auto leading-relaxed">
                {section5.quote}
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SESSÃO 6 — O PLANO (Os 90 Dias) */}
      <section className="section-container bg-dark py-40">
        <FadeIn>
          <span className="label-tag">{section6.labelTag}</span>
          <h2 className="title-large mb-24">{section6.title}</h2>

          <div className="space-y-16 relative">
            <div className="absolute left-[31px] top-0 bottom-0 w-px bg-white/5 hidden md:block" />

            {section6.phases.map((phase, i) => (
              <div key={i} className="relative md:pl-24">
                <div className={`absolute left-0 top-0 w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl z-10 hidden md:flex ${i === 0 ? 'bg-accent text-white shadow-[0_0_30px_rgba(0,102,255,0.3)]' : 'bg-white/5 text-white/40 border border-white/10'}`}>
                  {phase.id}
                </div>
                <div className="glass-card p-10 md:p-16">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                      <h3 className="text-3xl font-bold uppercase tracking-tight">{phase.title}</h3>
                      <p className={`${i === 0 ? 'text-accent' : 'text-white/30'} uppercase tracking-[0.3em] text-[10px] font-bold mt-2`}>
                        {phase.subtitle}
                      </p>
                    </div>
                    <div className="px-6 py-2 rounded-full border border-white/5 text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
                      {phase.month}
                    </div>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-8">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-5 group">
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-1 transition-colors duration-300 ${i === 0 ? 'border-accent/30 group-hover:bg-accent' : 'border-white/10'}`}>
                          <CheckCircle2 className={`${i === 0 ? 'text-accent group-hover:text-white transition-colors' : 'text-white/10'}`} size={12} />
                        </div>
                        <span className={`${i === 0 ? 'text-white/50' : 'text-white/40'} text-lg font-light leading-relaxed`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* SESSÃO 7 — FECHAMENTO */}
      <section className="section-container bg-accent text-white py-48 text-center items-center">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <FadeIn>
          <h2 className="title-giant mb-10">
            {section7.titleLine1}<br />
            {section7.titleLine2}
          </h2>
          <p className="text-2xl md:text-3xl font-light text-white/80 max-w-3xl mx-auto mb-20 leading-relaxed">
            {section7.subtitle}
          </p>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#0066FF' }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white px-16 py-8 rounded-full text-xl font-bold uppercase tracking-[0.3em] flex items-center gap-6 mx-auto transition-all duration-300 shadow-[0_20px_60px_-15px_rgba(255,255,255,0.3)]"
            onClick={() => window.open(section7.ctaLink, '_blank')}
          >
            {section7.ctaText}
            <ArrowRight size={28} />
          </motion.button>
        </FadeIn>

        <div className="mt-40 w-full border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.5em] font-bold text-white/30">
          <span>{section7.footerLeft}</span>
          <span>{section7.footerRight}</span>
        </div>
      </section>

      {/* ADMIN PANEL TOGGLE */}
      <button
        onClick={() => setIsAdminOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-dark hover:bg-dark-surface border border-white/10 text-white/50 hover:text-white p-4 rounded-full shadow-2xl transition-all"
        title="Painel de Edição"
      >
        <Settings size={24} />
      </button>

      {/* ADMIN PANEL OVERLAY */}
      {isAdminOpen && (
        <AdminPanel
          content={content}
          setContent={handleSaveContent}
          onClose={() => setIsAdminOpen(false)}
        />
      )}
    </div>
  );
}
