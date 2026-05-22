"use client";

import { useState } from "react";

const steps = [
  {
    n: "PHASE_01",
    title: "Briefing",
    lead: "Conversa rápida — sem formulário.",
    body: "Você me conta o que precisa. Em 20–30 minutos eu entendo o problema, mapeio o escopo e proponho o caminho certo.",
    meta: ["~30 min", "Sem custo", "Em até 24h"],
  },
  {
    n: "PHASE_02",
    title: "Proposta & design",
    lead: "Escopo claro, prazo real, valor fechado.",
    body: "Recebe uma proposta sem letra miúda. Aprovado, parto para o layout — você vê e aprova antes de qualquer linha de código.",
    meta: ["PDF + Figma", "Revisões inclusas", "Aprovação em etapas"],
  },
  {
    n: "PHASE_03",
    title: "Desenvolvimento",
    lead: "Código limpo, rápido e seguro.",
    body: "Acompanha o progresso em tempo real, com ambiente de preview público. Pode dar feedback a qualquer momento.",
    meta: ["Preview ao vivo", "Git público", "Daily updates"],
  },
  {
    n: "PHASE_04",
    title: "Deploy & entrega",
    lead: "Seu projeto no ar — você fica com tudo.",
    body: "Configuro domínio, faço o deploy e entrego acessos completos. Suporte pós-entrega incluso nos primeiros 30 dias.",
    meta: ["Vercel/Cloudflare", "SSL + analytics", "30 dias de suporte"],
  },
];

function ProgressGauge({ value }: { value: number }) {
  const r = 22;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - value);
  return (
    <div className="relative w-[56px] h-[56px]">
      <svg viewBox="0 0 56 56" className="w-full h-full -rotate-90">
        <circle cx="28" cy="28" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
        <circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          stroke="var(--color-pl-accent)"
          strokeWidth="2"
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-jetbrains-mono)] text-[12px] text-white">
        {Math.round(value * 100)}%
      </div>
    </div>
  );
}

export function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="processo" className="relative py-32 bg-pl-bg-2 overflow-hidden">
      <div className="absolute inset-0 bg-grid-sm opacity-40 mask-radial-strong pointer-events-none" />
      <div className="relative max-w-[1320px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-pl-accent" />
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10.5px] uppercase tracking-[0.18em] text-pl-accent">
                § 02 · Processo
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] font-medium text-white text-[44px] md:text-[68px] leading-[0.95] tracking-[-0.025em]">
              Do briefing<br />
              <span className="text-white/40">ao </span>
              <span className="italic font-[family-name:var(--font-instrument-serif)] text-pl-accent">
                deploy
              </span>
              <span className="text-white/40">.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-white/55 max-w-[440px] text-[15px] leading-[1.6]">
              Quatro fases curtas. Você sabe exatamente o que acontece em cada uma e quem está no controle.
            </p>
            <div className="mt-6 flex items-center gap-6">
              <ProgressGauge value={(active + 1) / steps.length} />
              <div>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] text-white/40">
                  Etapa atual
                </span>
                <div className="font-[family-name:var(--font-space-grotesk)] text-white text-[18px] mt-0.5">
                  {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")} · {steps[active].title}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline rail */}
        <div className="relative border border-white/10 rounded-2xl bg-pl-bg/60 backdrop-blur-sm p-6 md:p-8">
          {/* Track */}
          <div className="relative mb-8">
            <div className="h-px bg-white/10 w-full" />
            <div
              className="absolute top-0 left-0 h-px bg-pl-accent transition-all duration-500"
              style={{ width: `${((active + 1) / steps.length) * 100}%` }}
            />
            <div className="absolute -top-2 left-0 right-0 flex justify-between">
              {steps.map((s, i) => (
                <button
                  key={s.n}
                  onClick={() => setActive(i)}
                  className="group flex flex-col items-start gap-1 cursor-pointer"
                  style={{ width: `${100 / steps.length}%` }}
                  aria-label={`Ir para etapa ${i + 1}`}
                >
                  <span
                    className={`w-4 h-4 rounded-full border-2 transition ${
                      i <= active
                        ? "bg-pl-accent border-pl-accent"
                        : "bg-pl-bg border-white/25 group-hover:border-white/50"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="grid md:grid-cols-4 gap-px bg-white/8 rounded-xl overflow-hidden mb-8">
            {steps.map((s, i) => (
              <button
                key={s.n}
                onClick={() => setActive(i)}
                className={`text-left p-5 transition ${
                  i === active
                    ? "bg-pl-bg-2"
                    : "bg-pl-bg hover:bg-pl-bg-2/60"
                }`}
              >
                <span
                  className={`font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] block mb-3 ${
                    i === active ? "text-pl-accent" : "text-white/35"
                  }`}
                >
                  {s.n}
                </span>
                <div
                  className={`font-[family-name:var(--font-space-grotesk)] text-[18px] leading-tight ${
                    i === active ? "text-white" : "text-white/60"
                  }`}
                >
                  {s.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active panel */}
          <div className="grid md:grid-cols-12 gap-8 items-start min-h-[180px]">
            <div className="md:col-span-7" key={active} data-reveal>
              <div className="font-[family-name:var(--font-instrument-serif)] text-pl-accent text-[20px] mb-3 italic">
                {steps[active].lead}
              </div>
              <p className="text-white/70 text-[16px] leading-[1.65] max-w-[520px]">
                {steps[active].body}
              </p>
            </div>
            <div className="md:col-span-5 grid grid-cols-3 gap-3">
              {steps[active].meta.map((m, i) => (
                <div
                  key={m}
                  className="border border-white/10 rounded-xl p-3 bg-pl-bg-2"
                  data-reveal
                  style={{ animationDelay: `${0.1 + i * 0.05}s` }}
                >
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] uppercase tracking-[0.18em] text-white/35">
                    0{i + 1}
                  </span>
                  <div className="text-white text-[13px] mt-1 leading-tight">{m}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
