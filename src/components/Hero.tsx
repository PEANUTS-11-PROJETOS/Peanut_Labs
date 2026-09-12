function CornerMarks() {
  return (
    <>
      <div className="absolute top-8 left-5">
        <svg width="14" height="14" viewBox="0 0 14 14" className="text-pl-ink-mute">
          <path d="M0 6 V0 H6" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="absolute top-8 right-5">
        <svg width="14" height="14" viewBox="0 0 14 14" className="text-pl-ink-mute">
          <path d="M14 6 V0 H8" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-5 left-5">
        <svg width="14" height="14" viewBox="0 0 14 14" className="text-pl-ink-mute">
          <path d="M0 8 V14 H6" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-5 right-5">
        <svg width="14" height="14" viewBox="0 0 14 14" className="text-pl-ink-mute">
          <path d="M14 8 V14 H8" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>
    </>
  );
}

// Compromissos declarados — o que eu me proponho a cumprir.
// Nenhum número aqui afirma histórico: não há projetos entregues a contabilizar.
const stats = [
  { k: "Prazo de entrega", v: "5", suf: " dias", note: "do briefing ao deploy" },
  { k: "Proposta na mão", v: "24", suf: "h", note: "valor e prazo por escrito" },
  { k: "Código-fonte", v: "100", suf: "%", note: "seu, na entrega" },
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
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-2xs uppercase tracking-[0.18em] text-pl-ink-dim">
              Disponível
            </span>
          </div>
          <span className="hidden md:inline font-[family-name:var(--font-jetbrains-mono)] text-2xs uppercase tracking-[0.18em] text-pl-ink-dim">
            REF · 26-PL-001
          </span>
        </div>

        {/* Headline grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-9">
            <h1 className="font-[family-name:var(--font-space-grotesk)] font-medium text-pl-ink leading-[0.92] tracking-[-0.035em] text-[clamp(42px,12vw,60px)] sm:text-[88px] md:text-[120px] lg:text-[148px]">
              <span className="block">Tecnologia</span>
              <span className="block">
                que{" "}
                <span className="italic font-[family-name:var(--font-instrument-serif)] font-normal text-pl-accent text-glow">
                  cabe
                </span>
                <span className="text-pl-ink-mute"> no seu </span>
              </span>
              <span className="block outline-text">negócio.</span>
            </h1>
          </div>

          <div className="lg:col-span-3 lg:pb-6">
            <div className="border-l-2 border-pl-accent pl-4 mb-6">
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-2xs uppercase tracking-[0.18em] text-pl-accent">
                Manifesto
              </span>
              <p className="font-[family-name:var(--font-inter)] text-pl-ink-3 text-base leading-[1.5] mt-2 max-w-[280px]">
                Sites, landing pages e sistemas sob demanda para pequenas empresas e MEI. Do briefing ao deploy — sem enrolação, sem agência.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href="#contato"
                className="group relative inline-flex items-center justify-between gap-3 bg-pl-accent text-pl-bg font-semibold text-base pl-5 pr-2 py-2.5 rounded-full overflow-hidden glow-amber"
              >
                <span>Solicitar orçamento</span>
                <span className="w-8 h-8 rounded-full bg-pl-bg text-pl-accent flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#servicos"
                className="group inline-flex items-center justify-between gap-3 border border-pl-line-3 text-pl-ink font-medium text-base pl-5 pr-2 py-2.5 rounded-full hover:border-pl-line-hi hover:bg-pl-fill-1 transition"
              >
                <span>Ver serviços</span>
                <span className="w-8 h-8 rounded-full bg-pl-fill-2 flex items-center justify-center">↓</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom data-strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-pl-fill-2 border border-pl-line-2 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <div key={s.k} className="bg-pl-bg p-5 md:p-6 relative">
              {/* min-h reserva duas linhas: sem isso o rótulo que quebra
                  desalinha o número em relação às células vizinhas. */}
              <span className="block min-h-[2.6em] leading-[1.3] font-[family-name:var(--font-jetbrains-mono)] text-2xs uppercase tracking-[0.18em] text-pl-ink-dim">
                {String(i + 1).padStart(2, "0")} · {s.k}
              </span>
              <div className="mt-2 font-[family-name:var(--font-space-grotesk)] font-medium text-pl-ink text-[clamp(34px,9vw,44px)] md:text-[56px] leading-[0.9] tracking-tight">
                {s.v}
                <span className="text-pl-accent">{s.suf}</span>
              </div>
              <div className="mt-3 text-xs text-pl-ink-dim">{s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
