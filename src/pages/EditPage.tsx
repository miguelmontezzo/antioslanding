import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Save, Plus, Trash2, ExternalLink } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import type { LandingContent } from '../types/landing';

const defaultPillar = {
  title: 'Novo pilar',
  tagline: 'Tagline',
  description: 'Descrição.',
  tags: 'Tag1, Tag2',
};

const defaultPhase = {
  title: 'Nova fase',
  subtitle: 'Subtítulo',
  badge: 'Mês',
  items: ['Item 1'],
};

function Field({
  label,
  value,
  onChange,
  multiline = false,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1 block">
        {label}
      </span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-accent focus:outline-none"
          rows={3}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-accent focus:outline-none"
        />
      )}
    </label>
  );
}

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
      <h2 className="mb-4 text-lg font-bold uppercase tracking-tight text-accent">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export default function EditPage() {
  const { content, setContent } = useContent();
  const [draft, setDraft] = useState<LandingContent>(content);
  const [saved, setSaved] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const update = <K extends keyof LandingContent>(
    section: K,
    data: Partial<LandingContent[K]>
  ) => {
    setDraft((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
  };

  const handleSave = () => {
    setContent(draft);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    iframeRef.current?.contentWindow?.location?.reload();
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col lg:flex-row">
      {/* Coluna do formulário */}
      <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8 overflow-auto">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"
            >
              <ArrowLeft size={18} />
              Ver landing
            </Link>
            <div className="flex items-center gap-3">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
              >
                <ExternalLink size={16} />
                Abrir em nova aba
              </a>
              <button
                type="button"
                onClick={handleSave}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-accent/90"
              >
                <Save size={18} />
                {saved ? 'Salvo!' : 'Salvar'}
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <SectionCard title="Hero (abertura)">
              <Field
                label="Label"
                value={draft.hero.labelTag}
                onChange={(v) => update('hero', { labelTag: v })}
              />
              <Field label="Título linha 1" value={draft.hero.titleLine1} onChange={(v) => update('hero', { titleLine1: v })} />
              <Field label="Título linha 2" value={draft.hero.titleLine2} onChange={(v) => update('hero', { titleLine2: v })} />
              <Field label="Título linha 3" value={draft.hero.titleLine3} onChange={(v) => update('hero', { titleLine3: v })} />
              <Field label="Subtítulo 1" value={draft.hero.subtitle1} onChange={(v) => update('hero', { subtitle1: v })} />
              <Field label="Subtítulo 2" value={draft.hero.subtitle2} onChange={(v) => update('hero', { subtitle2: v })} />
              <Field label="Rodapé dev" value={draft.hero.footerDev} onChange={(v) => update('hero', { footerDev: v })} />
              <Field label="CTA" value={draft.hero.ctaText} onChange={(v) => update('hero', { ctaText: v })} />
              <Field
                label="Vídeo de fundo (URL direta ou YouTube)"
                value={draft.hero.videoSrc}
                onChange={(v) => update('hero', { videoSrc: v })}
                placeholder="https://... ou link do YouTube"
              />
            </SectionCard>

            <SectionCard title="Seção 2 — Diagnóstico">
              <Field label="Label" value={draft.section2.labelTag} onChange={(v) => update('section2', { labelTag: v })} />
              <Field label="Título 1" value={draft.section2.titleLine1} onChange={(v) => update('section2', { titleLine1: v })} />
              <Field label="Título 2" value={draft.section2.titleLine2} onChange={(v) => update('section2', { titleLine2: v })} />
              <Field label="Parágrafo 1" value={draft.section2.paragraph1} onChange={(v) => update('section2', { paragraph1: v })} multiline />
              <Field label="Parágrafo 2" value={draft.section2.paragraph2} onChange={(v) => update('section2', { paragraph2: v })} multiline />
              <Field label="Parágrafo 3" value={draft.section2.paragraph3} onChange={(v) => update('section2', { paragraph3: v })} multiline />
              <Field label="Citação" value={draft.section2.quote} onChange={(v) => update('section2', { quote: v })} multiline />
            </SectionCard>

            <SectionCard title="Seção 3 — Efeito Cloudflare">
              <Field label="Label" value={draft.section3.labelTag} onChange={(v) => update('section3', { labelTag: v })} />
              <Field label="Título" value={draft.section3.title} onChange={(v) => update('section3', { title: v })} />
              <Field label="Texto 1" value={draft.section3.body1} onChange={(v) => update('section3', { body1: v })} multiline />
              <Field label="Texto 2" value={draft.section3.body2} onChange={(v) => update('section3', { body2: v })} multiline />
              <Field label="Destaque" value={draft.section3.highlight} onChange={(v) => update('section3', { highlight: v })} multiline />
              <Field
                label="Vídeo de fundo (URL ou YouTube)"
                value={draft.section3.videoSrc}
                onChange={(v) => update('section3', { videoSrc: v })}
                placeholder="https://..."
              />
            </SectionCard>

            <SectionCard title="Seção 4 — Pilares (adicione ou remova)">
              <Field label="Label" value={draft.section4.labelTag} onChange={(v) => update('section4', { labelTag: v })} />
              <Field label="Título da seção" value={draft.section4.title} onChange={(v) => update('section4', { title: v })} />
              {draft.section4.pillars.map((p, i) => (
                <div key={i} className="rounded-xl border border-white/10 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50">Pilar {i + 1}</span>
                    <button
                      type="button"
                      onClick={() => {
                        const pillars = draft.section4.pillars.filter((_, j) => j !== i);
                        if (pillars.length >= 1) update('section4', { pillars });
                      }}
                      className="rounded p-1.5 text-white/40 hover:text-red-400 hover:bg-white/10"
                      title="Remover pilar"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <Field label="Título" value={p.title} onChange={(v) => update('section4', { pillars: draft.section4.pillars.map((x, j) => (j === i ? { ...x, title: v } : x)) })} />
                  <Field label="Tagline" value={p.tagline} onChange={(v) => update('section4', { pillars: draft.section4.pillars.map((x, j) => (j === i ? { ...x, tagline: v } : x)) })} />
                  <Field label="Descrição" value={p.description} onChange={(v) => update('section4', { pillars: draft.section4.pillars.map((x, j) => (j === i ? { ...x, description: v } : x)) })} multiline />
                  <Field label="Tags (vírgula)" value={p.tags} onChange={(v) => update('section4', { pillars: draft.section4.pillars.map((x, j) => (j === i ? { ...x, tags: v } : x)) })} />
                </div>
              ))}
              <button
                type="button"
                onClick={() => update('section4', { pillars: [...draft.section4.pillars, defaultPillar] })}
                className="flex items-center gap-2 rounded-lg border border-dashed border-white/20 py-2.5 px-4 text-sm text-white/60 hover:bg-white/5 hover:text-white"
              >
                <Plus size={18} />
                Adicionar pilar
              </button>
            </SectionCard>

            <SectionCard title="Seção 5 — Vídeo / Prévia (imagem ou vídeo/YouTube)">
              <Field label="Label" value={draft.section5.labelTag} onChange={(v) => update('section5', { labelTag: v })} />
              <Field label="Título" value={draft.section5.title} onChange={(v) => update('section5', { title: v })} />
              <Field label="Intro 1" value={draft.section5.intro1} onChange={(v) => update('section5', { intro1: v })} />
              <Field label="Intro 2" value={draft.section5.intro2} onChange={(v) => update('section5', { intro2: v })} />
              <Field
                label="Imagem (URL) — usada como poster ou quando não há vídeo"
                value={draft.section5.videoImageUrl}
                onChange={(v) => update('section5', { videoImageUrl: v })}
                placeholder="https://..."
              />
              <Field
                label="Vídeo (URL .mp4 ou link do YouTube)"
                value={draft.section5.videoUrl ?? ''}
                onChange={(v) => update('section5', { videoUrl: v })}
                placeholder="https://youtube.com/... ou https://....mp4"
              />
              <Field label="Citação" value={draft.section5.quote} onChange={(v) => update('section5', { quote: v })} multiline />
            </SectionCard>

            <SectionCard title="Seção 6 — 90 dias (adicione ou remova fases e itens)">
              <Field label="Label" value={draft.section6.labelTag} onChange={(v) => update('section6', { labelTag: v })} />
              <Field label="Título" value={draft.section6.title} onChange={(v) => update('section6', { title: v })} />
              {draft.section6.phases.map((ph, i) => (
                <div key={i} className="rounded-xl border border-white/10 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50">Fase {i + 1}</span>
                    <button
                      type="button"
                      onClick={() => {
                        const phases = draft.section6.phases.filter((_, j) => j !== i);
                        if (phases.length >= 1) update('section6', { phases });
                      }}
                      className="rounded p-1.5 text-white/40 hover:text-red-400 hover:bg-white/10"
                      title="Remover fase"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <Field label="Título" value={ph.title} onChange={(v) => update('section6', { phases: draft.section6.phases.map((x, j) => (j === i ? { ...x, title: v } : x)) })} />
                  <Field label="Subtítulo" value={ph.subtitle} onChange={(v) => update('section6', { phases: draft.section6.phases.map((x, j) => (j === i ? { ...x, subtitle: v } : x)) })} />
                  <Field label="Badge" value={ph.badge} onChange={(v) => update('section6', { phases: draft.section6.phases.map((x, j) => (j === i ? { ...x, badge: v } : x)) })} />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1 block">Itens da fase</span>
                    {ph.items.map((item, j) => (
                      <div key={j} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => {
                            const items = [...ph.items];
                            items[j] = e.target.value;
                            update('section6', { phases: draft.section6.phases.map((x, k) => (k === i ? { ...x, items } : x)) });
                          }}
                          className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const items = ph.items.filter((_, k) => k !== j);
                            update('section6', { phases: draft.section6.phases.map((x, k) => (k === i ? { ...x, items: items.length ? items : [''] } : x)) });
                          }}
                          className="rounded p-2 text-white/40 hover:text-red-400"
                          title="Remover item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => update('section6', { phases: draft.section6.phases.map((x, k) => (k === i ? { ...x, items: [...ph.items, 'Novo item'] } : x)) })}
                      className="mt-1 flex items-center gap-1.5 text-xs text-accent hover:underline"
                    >
                      <Plus size={12} />
                      Adicionar item
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => update('section6', { phases: [...draft.section6.phases, defaultPhase] })}
                className="flex items-center gap-2 rounded-lg border border-dashed border-white/20 py-2.5 px-4 text-sm text-white/60 hover:bg-white/5 hover:text-white"
              >
                <Plus size={18} />
                Adicionar fase
              </button>
            </SectionCard>

            <SectionCard title="Seção 7 — Fechamento / CTA">
              <Field label="Título 1" value={draft.section7.titleLine1} onChange={(v) => update('section7', { titleLine1: v })} />
              <Field label="Título 2" value={draft.section7.titleLine2} onChange={(v) => update('section7', { titleLine2: v })} />
              <Field label="Texto" value={draft.section7.body} onChange={(v) => update('section7', { body: v })} multiline />
              <Field label="Texto do botão" value={draft.section7.ctaText} onChange={(v) => update('section7', { ctaText: v })} />
              <Field label="Rodapé 1" value={draft.section7.footer1} onChange={(v) => update('section7', { footer1: v })} />
              <Field label="Rodapé 2" value={draft.section7.footer2} onChange={(v) => update('section7', { footer2: v })} />
            </SectionCard>
          </div>

          <div className="mt-12 pb-12">
            <button
              type="button"
              onClick={handleSave}
              className="w-full rounded-full bg-accent py-4 text-base font-bold uppercase tracking-wider text-white hover:bg-accent/90 sm:w-auto sm:px-12"
            >
              {saved ? 'Salvo!' : 'Salvar alterações'}
            </button>
          </div>
        </div>
      </div>

      {/* Preview ao vivo (desktop) */}
      <div className="hidden lg:block lg:w-[480px] xl:w-[560px] shrink-0 border-l border-white/10 bg-dark-surface">
        <div className="sticky top-0 flex h-screen flex-col">
          <div className="border-b border-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white/50">
            Prévia (atualiza ao salvar)
          </div>
          <div className="flex-1 overflow-hidden">
            <iframe
              ref={iframeRef}
              src="/"
              title="Preview"
              className="h-full w-full scale-[0.35] origin-top-left"
              style={{ width: '285.71%', height: '285.71%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
