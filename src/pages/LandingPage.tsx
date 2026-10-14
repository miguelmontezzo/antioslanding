/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Globe,
  Activity,
} from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { VideoBackground } from '../components/VideoBackground';
import { MediaBlock } from '../components/MediaBlock';

const FadeIn = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

export default function LandingPage() {
  const { content } = useContent();
  const { hero, section2, section3, section4, section5, section6, section7 } =
    content;

  return (
    <div className="bg-dark min-h-screen selection:bg-accent selection:text-white">
      {/* SESSÃO 1 — ABERTURA (mobile-first) */}
      <section className="section-container relative min-h-screen py-16 sm:py-20 md:py-24">
        <VideoBackground src={hero.videoSrc} opacity={0.3} />

        <div className="relative z-10 flex flex-col min-h-[80vh] sm:min-h-[85vh]">
          <FadeIn>
            <span className="label-tag">{hero.labelTag}</span>
            <h1 className="title-giant mb-6 sm:mb-8">
              {hero.titleLine1}
              <br />
              <span className="text-stroke">{hero.titleLine2}</span>
              <br />
              {hero.titleLine3}
            </h1>
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-light text-white/60 max-w-3xl mb-8 sm:mb-12">
              {hero.subtitle1}
              <br />
              <span className="font-medium text-white">{hero.subtitle2}</span>
            </p>
          </FadeIn>

          <div className="mt-auto pt-8 sm:pt-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-8">
            <FadeIn delay={0.4}>
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/30 font-bold max-w-[280px] sm:max-w-none">
                {hero.footerDev}
              </div>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="flex items-center gap-3 sm:gap-4 text-accent animate-bounce">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold">
                  {hero.ctaText}
                </span>
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SESSÃO 2 — O DIAGNÓSTICO */}
      <section className="section-container bg-white text-dark py-16 sm:py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
        <FadeIn>
          <span className="label-tag !text-dark !mb-2 sm:mb-4">
            {section2.labelTag}
          </span>
          <h2 className="title-large !text-dark mb-10 sm:mb-12 md:mb-16">
            {section2.titleLine1}
            <br />
            <span className="opacity-30">{section2.titleLine2}</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-start">
            <div className="space-y-6 sm:space-y-8">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-dark/70 leading-relaxed font-light">
                {section2.paragraph1}
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-dark/70 leading-relaxed font-light">
                {section2.paragraph2}
              </p>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-dark/70 leading-relaxed font-light">
                {section2.paragraph3}
              </p>
              <div className="pt-8 sm:pt-12 border-t border-dark/5">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic text-accent leading-tight">
                  {section2.quote}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SESSÃO 3 — O PADRÃO */}
      <section className="section-container bg-dark py-16 sm:py-24 md:py-32 lg:py-40 relative">
        <VideoBackground src={section3.videoSrc} opacity={0.4} />

        <div className="relative z-10">
          <FadeIn>
            <span className="label-tag">{section3.labelTag}</span>
            <h2 className="title-large mb-10 sm:mb-12 md:mb-16">
              {section3.title}
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
              <div className="space-y-6 sm:space-y-10">
                <p className="text-body text-sm sm:text-base md:text-lg lg:text-xl">
                  {section3.body1}
                </p>
                <p className="text-body text-sm sm:text-base md:text-lg lg:text-xl">
                  {section3.body2}
                </p>
                <div className="p-6 sm:p-8 md:p-10 glass-card border-accent/20 bg-accent/5">
                  <p className="text-base sm:text-lg md:text-xl font-medium text-accent-light leading-relaxed">
                    {section3.highlight}
                  </p>
                </div>
              </div>
              <div className="hidden lg:block aspect-square relative">
                <div className="absolute inset-0 bg-accent/10 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="w-full h-full border border-white/5 rounded-full flex items-center justify-center">
                  <Globe
                    className="text-accent/20"
                    size={200}
                    strokeWidth={0.5}
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SESSÃO 4 — 3 PILARES */}
      <section className="section-container bg-dark-surface py-16 sm:py-24 md:py-32 lg:py-40">
        <FadeIn>
          <span className="label-tag">{section4.labelTag}</span>
          <h2 className="title-large mb-12 sm:mb-16 md:mb-24">
            {section4.title}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {section4.pillars.map((pilar, idx) => {
              const Icon =
                idx === 0 ? Shield : idx === 1 ? Activity : Zap;
              return (
                <div
                  key={idx}
                  className="glass-card p-6 sm:p-8 md:p-12 flex flex-col h-full hover:border-accent/40 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 sm:mb-10 group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={28} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 uppercase tracking-tight">
                    {pilar.title}
                  </h3>
                  <p className="text-accent/60 text-[10px] uppercase tracking-[0.3em] font-bold mb-6 sm:mb-8">
                    {pilar.tagline}
                  </p>
                  <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 font-light flex-1">
                    {pilar.description}
                  </p>
                  <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-wrap gap-2 sm:gap-4">
                    {pilar.tags.split(',').map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] uppercase tracking-widest text-white/20 font-bold"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </section>

      {/* SESSÃO 5 — PRÉVIA */}
      <section className="section-container bg-white text-dark py-16 sm:py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
        <FadeIn>
          <span className="label-tag !text-dark !mb-2 sm:mb-4">
            {section5.labelTag}
          </span>
          <h2 className="title-large !text-dark mb-8 sm:mb-12">
            {section5.title}
          </h2>

          <div className="max-w-5xl mx-auto space-y-10 sm:space-y-16">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-dark/60 text-center font-light">
              {section5.intro1}
              <br />
              <span className="font-bold text-dark">{section5.intro2}</span>
            </p>

            <MediaBlock
              imageUrl={section5.videoImageUrl}
              videoUrl={section5.videoUrl}
              showPlayerUI
            />

            <div className="text-center">
              <p className="text-dark/40 italic text-base sm:text-lg md:text-xl font-serif max-w-3xl mx-auto leading-relaxed">
                {section5.quote}
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SESSÃO 6 — 90 DIAS */}
      <section className="section-container bg-dark py-16 sm:py-24 md:py-32 lg:py-40">
        <FadeIn>
          <span className="label-tag">{section6.labelTag}</span>
          <h2 className="title-large mb-12 sm:mb-16 md:mb-24">
            {section6.title}
          </h2>

          <div className="space-y-10 sm:space-y-16 relative">
            <div className="absolute left-[23px] sm:left-[31px] top-0 bottom-0 w-px bg-white/5 hidden md:block" />

            {section6.phases.map((phase, idx) => (
              <div key={idx} className="relative md:pl-20 lg:pl-24">
                <div
                  className={`absolute left-0 top-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-lg sm:text-xl z-10 hidden md:flex ${
                    idx === 0
                      ? 'bg-accent text-white shadow-[0_0_30px_rgba(0,102,255,0.3)]'
                      : 'bg-white/5 text-white/40 border border-white/10'
                  }`}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="glass-card p-6 sm:p-10 md:p-16">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight">
                        {phase.title}
                      </h3>
                      <p
                        className={`uppercase tracking-[0.3em] text-[10px] font-bold mt-2 ${
                          idx === 0 ? 'text-accent' : 'text-white/30'
                        }`}
                      >
                        {phase.subtitle}
                      </p>
                    </div>
                    <div className="px-4 sm:px-6 py-2 rounded-full border border-white/5 text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold w-fit">
                      {phase.badge}
                    </div>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 sm:gap-5 group">
                        <div
                          className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 sm:mt-1 transition-colors duration-300 ${
                            idx === 0
                              ? 'border-accent/30 group-hover:bg-accent'
                              : 'border-white/10'
                          }`}
                        >
                          <CheckCircle2
                            className={
                              idx === 0
                                ? 'text-accent group-hover:text-white transition-colors'
                                : 'text-white/10'
                            }
                            size={12}
                          />
                        </div>
                        <span
                          className={`text-sm sm:text-lg font-light leading-relaxed ${
                            idx === 0 ? 'text-white/50' : 'text-white/40'
                          }`}
                        >
                          {item}
                        </span>
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
      <section className="section-container bg-accent text-white py-16 sm:py-24 md:py-32 lg:py-48 text-center items-center">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <FadeIn>
          <h2 className="title-giant mb-6 sm:mb-10">
            {section7.titleLine1}
            <br />
            {section7.titleLine2}
          </h2>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-light text-white/80 max-w-3xl mx-auto mb-12 sm:mb-20 leading-relaxed px-2">
            {section7.body}
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: '#ffffff',
              color: '#0066FF',
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white px-8 py-5 sm:px-12 sm:py-6 md:px-16 md:py-8 rounded-full text-base sm:text-lg md:text-xl font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] flex items-center gap-4 sm:gap-6 mx-auto transition-all duration-300 shadow-[0_20px_60px_-15px_rgba(255,255,255,0.3)]"
          >
            {section7.ctaText}
            <ArrowRight size={24} className="sm:w-7 sm:h-7" />
          </motion.button>
        </FadeIn>

        <div className="mt-20 sm:mt-32 md:mt-40 w-full border-t border-white/10 pt-10 sm:pt-16 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] font-bold text-white/30 text-center md:text-left">
          <span>{section7.footer1}</span>
          <span>{section7.footer2}</span>
        </div>
      </section>
    </div>
  );
}
