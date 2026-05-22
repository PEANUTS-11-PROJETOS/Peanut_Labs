function CornerMarks() {
  return (
    <>
      <div className="absolute top-8 left-5">
        <svg width="14" height="14" viewBox="0 0 14 14" className="text-white/30">
          <path d="M0 6 V0 H6" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="absolute top-8 right-5">
        <svg width="14" height="14" viewBox="0 0 14 14" className="text-white/30">
          <path d="M14 6 V0 H8" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-5 left-5">
        <svg width="14" height="14" viewBox="0 0 14 14" className="text-white/30">
          <path d="M0 8 V14 H6" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-5 right-5">
        <svg width="14" height="14" viewBox="0 0 14 14" className="text-white/30">
          <path d="M14 8 V14 H8" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>
    </>
  );
}

const stats = [
  { k: "Prazo médio", v: "5", suf: " dias", note: "briefing → deploy" },
  { k: "Projetos no prazo", v: "100", suf: "%", note: "histórico 2024–26" },
  { k: "Surpresas no contrato", v: "0", suf: "", note: "escopo travado" },
  { k: "Suporte pós-entrega", v: "30", suf: " dias", note: "incluso" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100vh] flex items-center overflow-hidden pt-32 pb-24"
    >
      <div className="aurora" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid mask-radial pointer-events-none" />

      <CornerMarks />

      <div className="relative max-w-[1320px] mx-auto px-5 md:px-10 w-full">
        {/* Top label row */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-pl-accent" />
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10.5px] uppercase tracking-[0.18em] text-white/55">
              Disponível · Q3·2026 · 1 vaga aberta
            </span>
          </div>
          <span className="hidden md:inline font-[family-name:var(--font-jetbrains-mono)] text-[10.5px] uppercase tracking-[0.18em] text-white/35">
            REF · 26-PL-001
          </span>
        </div>

        {/* Headline grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-9">
            <h1 className="font-[family-name:var(--font-space-grotesk)] font-medium text-white leading-[0.92] tracking-[-0.035em] text-[60px] sm:text-[88px] md:text-[120px] lg:text-[148px]">
              <span className="block">Tecnologia</span>
              <span className="block">
                que{" "}
                <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-pl-accent text-glow">
                  cabe
                </span>
                <span className="text-white/30"> no seu </span>
              </span>
              <span className="block outline-text">negócio.</span>
            </h1>
          </div>

          <div className="lg:col-span-3 lg:pb-6">
            <div className="border-l-2 border-pl-accent pl-4 mb-6">
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10.5px] uppercase tracking-[0.18em] text-pl-accent">
                Manifesto
              </span>
              <p className="font-[family-name:var(--font-inter)] text-white/65 text-[15px] leading-[1.5] mt-2 max-w-[280px]">
                Sites, landing pages e sistemas sob demanda para pequenas empresas e MEI. Do briefing ao deploy — sem enrolação, sem agência.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href="#contato"
                className="group relative inline-flex items-center justify-between gap-3 bg-pl-accent text-[#07070C] font-semibold text-[14px] pl-5 pr-2 py-2.5 rounded-full overflow-hidden glow-amber"
              >
                <span>Solicitar orçamento</span>
                <span className="w-8 h-8 rounded-full bg-[#07070C] text-pl-accent flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#servicos"
                className="group inline-flex items-center justify-between gap-3 border border-white/15 text-white font-medium text-[14px] pl-5 pr-2 py-2.5 rounded-full hover:border-white/40 hover:bg-white/5 transition"
              >
                <span>Ver serviços</span>
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">↓</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom data-strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <div key={s.k} className="bg-pl-bg p-5 md:p-6 relative">
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] text-white/35">
                {String(i + 1).padStart(2, "0")} · {s.k}
              </span>
              <div className="mt-4 font-[family-name:var(--font-space-grotesk)] font-medium text-white text-[44px] md:text-[56px] leading-[0.9] tracking-tight">
                {s.v}
                <span className="text-pl-accent">{s.suf}</span>
              </div>
              <div className="mt-3 text-[12px] text-white/40">{s.note}</div>
              {i === 1 && (
                <svg className="absolute right-4 top-4 opacity-60" width="50" height="22" viewBox="0 0 50 22">
                  <polyline
                    fill="none"
                    stroke="var(--color-pl-accent)"
                    strokeWidth="1.2"
                    points="0,18 8,14 16,16 24,8 32,10 40,4 50,6"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
