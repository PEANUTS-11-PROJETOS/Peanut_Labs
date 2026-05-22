"use client";

import { useState, useEffect } from "react";

function fmtBR(d: Date) {
  return d.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "America/Sao_Paulo",
  });
}

const differentials = [
  { k: "Escopo claro antes de começar", v: "ZERO surpresas" },
  { k: "Código entregue, não alugado", v: "100% seu" },
  { k: "Comunicação direta, sem intermediários", v: "1 ponto de contato" },
  { k: "Prazo real, não prazo de agência", v: "Cumprido" },
];

const specs: [string, string][] = [
  ["Foco", "Resultado"],
  ["Público", "MEI · PME"],
  ["Entrega típica", "< 5 dias"],
  ["Suporte", "30 dias incluso"],
  ["Stack", "Next · TS · Tailwind"],
  ["Capacidade", "1 projeto/semana"],
];

export function About() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="sobre" className="relative py-32 overflow-hidden">
      <div className="aurora opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid mask-radial pointer-events-none" />

      <div className="relative max-w-[1320px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left — holographic ID card */}
          <div className="lg:col-span-5">
            <div className="relative bracket border border-white/12 rounded-2xl bg-pl-bg-2/70 backdrop-blur-md p-7 overflow-hidden scanlines">
              <span className="br-tr" />
              <span className="br-bl" />

              <div className="flex items-center justify-between mb-8">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] text-white/45">
                  ID · STUDIO_FILE_001
                </span>
                <span className="flex items-center gap-2 text-[10px] font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-[0.18em] text-emerald-400/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 blink" />
                  ACTIVE
                </span>
              </div>

              <div className="flex items-end gap-5 mb-8">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-2xl bg-pl-accent" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-pl-accent/40 blur-md opacity-70" />
                  <div className="relative w-full h-full flex items-center justify-center font-[family-name:var(--font-space-grotesk)] font-bold text-[#07070C] text-[44px] leading-none">
                    P
                  </div>
                </div>
                <div className="pb-1">
                  <div className="font-[family-name:var(--font-space-grotesk)] font-medium text-white text-[28px] leading-none">
                    Peanuts Labs
                  </div>
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] text-white/45 mt-2 block">
                    Studio solo · São Paulo, Brasil
                  </span>
                </div>
              </div>

              <p className="font-[family-name:var(--font-instrument-serif)] italic text-white/85 text-[18px] leading-[1.45] mb-8">
                &ldquo;Tecnologia sob medida para quem não tem tempo a perder.&rdquo;
              </p>

              <div className="border-t border-white/8 divide-y divide-white/8">
                {specs.map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between py-2.5">
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] text-white/40">
                      {k}
                    </span>
                    <span className="font-[family-name:var(--font-space-grotesk)] text-white text-[13.5px]">
                      {v}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/8 flex items-center justify-between">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] text-white/35">
                  Horário do estúdio
                </span>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-white tabular-nums text-[14px]">
                  {now ? fmtBR(now) : "--:--:--"} · BRT
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-pl-accent" />
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10.5px] uppercase tracking-[0.18em] text-pl-accent">
                § 03 · Sobre
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] font-medium text-white text-[44px] md:text-[68px] leading-[0.95] tracking-[-0.025em] mb-8">
              Pequeno negócio.<br />
              <span className="italic font-[family-name:var(--font-instrument-serif)] text-pl-accent">
                Presença
              </span>{" "}
              <span className="text-white/40">grande.</span>
            </h2>
            <div className="space-y-5 text-white/65 text-[16px] leading-[1.65] max-w-[600px] mb-10">
              <p>
                A Peanuts Labs nasceu de uma observação simples: pequenas empresas e MEIs precisam de tecnologia de qualidade, mas o mercado só oferece duas opções — <span className="text-white">muito caro</span> ou <span className="text-white">muito ruim</span>.
              </p>
              <p>
                A proposta aqui é diferente: entrega técnica séria, comunicação direta e preço que cabe no orçamento de quem está construindo algo de verdade.
              </p>
            </div>

            <ul className="space-y-px">
              {differentials.map((d, i) => (
                <li
                  key={d.k}
                  className="group flex items-center justify-between py-4 border-t border-white/8 last:border-b hover:bg-white/[0.02] transition px-1"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] text-white/30 w-8">
                      0{i + 1}
                    </span>
                    <span className="text-white text-[15.5px] font-medium">{d.k}</span>
                  </div>
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] text-pl-accent opacity-0 group-hover:opacity-100 transition">
                    {d.v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
