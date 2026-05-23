function WhatsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M20.5 11.5a8.4 8.4 0 0 1-12.7 7.2L3 20l1.4-4.7A8.4 8.4 0 1 1 20.5 11.5z"
        stroke="#07070C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9.5c.1 1.7 1 3.2 2.4 4.4 1.4 1.3 3 2 4.6 2 .4 0 .8-.2 1-.5l.6-.8c.2-.3.1-.6-.2-.8l-1.4-.8c-.3-.2-.6-.1-.8.1l-.5.5c-.8-.3-1.6-.8-2.2-1.5-.6-.6-1.1-1.4-1.4-2.1l.5-.5c.2-.2.3-.5.1-.8l-.8-1.4c-.2-.3-.5-.4-.8-.2l-.8.6c-.3.2-.4.5-.4.9z"
        fill="#07070C"
      />
    </svg>
  );
}

const channels = [
  { k: "Resposta", v: "< 2h", n: "BRT, dias úteis" },
  { k: "Briefing", v: "30min", n: "call ou texto" },
  { k: "Orçamento", v: "24h", n: "PDF detalhado" },
  { k: "Início", v: "Q3·26", n: "1 vaga aberta" },
];

export function Contact() {
  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-sm opacity-50 mask-radial-strong pointer-events-none" />
      <div className="aurora opacity-70" aria-hidden="true" />

      <div className="relative max-w-[1100px] mx-auto px-5 md:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-8 h-px bg-pl-accent" />
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10.5px] uppercase tracking-[0.18em] text-pl-accent">
            § 04 · Contato
          </span>
          <span className="w-8 h-px bg-pl-accent" />
        </div>

        <h2 className="font-[family-name:var(--font-space-grotesk)] font-medium text-white text-[60px] md:text-[108px] leading-[0.92] tracking-[-0.03em] mb-10">
          Pronto para<br />
          <span className="italic font-[family-name:var(--font-instrument-serif)] text-pl-accent text-glow">
            começar
          </span>
          <span className="text-white/40">?</span>
        </h2>

        <p className="text-white/60 text-[17px] md:text-[18px] leading-[1.55] max-w-[560px] mx-auto mb-12">
          Me conta o que você precisa. Respondo rápido e já te dou uma ideia de prazo e valor na primeira conversa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
          <a
            href="https://wa.me/5511989408375"
            className="group relative inline-flex items-center justify-between gap-3 bg-pl-accent text-[#07070C] font-semibold text-[15px] pl-7 pr-3 py-3.5 rounded-full overflow-hidden glow-amber min-w-[280px]"
          >
            <span className="flex items-center gap-3">
              <WhatsIcon />
              Falar no WhatsApp
            </span>
            <span className="w-9 h-9 rounded-full bg-[#07070C] text-pl-accent flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="mailto:peanutslabs11@gmail.com"
            className="group inline-flex items-center gap-3 border border-white/15 text-white font-medium text-[15px] pl-6 pr-3 py-3.5 rounded-full hover:border-white/40 hover:bg-white/5 transition min-w-[240px] justify-between"
          >
            <span>peanutslabs11@gmail.com</span>
            <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">→</span>
          </a>
        </div>

        <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10.5px] uppercase tracking-[0.18em] text-white/35 block mb-2">
          Sem formulário · Sem enrolação · Uma mensagem já basta
        </span>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden text-left">
          {channels.map((s) => (
            <div key={s.k} className="bg-pl-bg p-5 relative">
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] text-white/35">
                {s.k}
              </span>
              <div className="font-[family-name:var(--font-space-grotesk)] text-white text-[28px] mt-2 leading-none">
                {s.v}
              </div>
              <div className="text-[11.5px] text-white/45 mt-2">{s.n}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
