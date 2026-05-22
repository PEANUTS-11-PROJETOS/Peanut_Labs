type Glyph = "site" | "landing" | "saas";

function ServiceGlyph({ kind }: { kind: Glyph }) {
  const stroke = "currentColor";
  if (kind === "site") {
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" className="text-pl-accent">
        <rect x="6" y="10" width="36" height="28" rx="3" fill="none" stroke={stroke} strokeWidth="1.2" />
        <rect x="6" y="10" width="36" height="6" fill="var(--color-pl-accent)" opacity="0.15" />
        <circle cx="10" cy="13" r="0.8" fill={stroke} />
        <circle cx="13" cy="13" r="0.8" fill={stroke} />
        <circle cx="16" cy="13" r="0.8" fill={stroke} />
        <rect x="10" y="20" width="14" height="2" fill={stroke} opacity="0.6" />
        <rect x="10" y="24" width="22" height="1" fill={stroke} opacity="0.3" />
        <rect x="10" y="27" width="18" height="1" fill={stroke} opacity="0.3" />
        <rect x="10" y="32" width="8" height="3" fill={stroke} opacity="0.8" />
      </svg>
    );
  }
  if (kind === "landing") {
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" className="text-pl-accent">
        <rect x="6" y="6" width="36" height="36" rx="3" fill="none" stroke={stroke} strokeWidth="1.2" />
        <path d="M14 18 L34 18 M14 22 L26 22" stroke={stroke} strokeWidth="1.2" />
        <rect x="14" y="28" width="20" height="7" rx="2" fill="var(--color-pl-accent)" opacity="0.85" />
        <path d="M24 31 L26 31 L24 33 Z" fill="#07070C" />
        <circle cx="36" cy="11" r="1" fill={stroke} />
      </svg>
    );
  }
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" className="text-pl-accent">
      <rect x="6" y="8" width="36" height="32" rx="3" fill="none" stroke={stroke} strokeWidth="1.2" />
      <path d="M6 17 L42 17" stroke={stroke} strokeWidth="1" />
      <rect x="10" y="22" width="10" height="14" rx="1.5" fill={stroke} opacity="0.15" stroke={stroke} strokeWidth="0.8" />
      <rect x="22" y="22" width="16" height="6" rx="1.5" fill={stroke} opacity="0.4" />
      <rect x="22" y="30" width="16" height="6" rx="1.5" fill="none" stroke={stroke} strokeWidth="0.8" opacity="0.6" />
      <circle cx="34" cy="12.5" r="1" fill={stroke} />
      <circle cx="38" cy="12.5" r="1" fill={stroke} opacity="0.5" />
    </svg>
  );
}

const services: {
  idx: string;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  glyph: Glyph;
}[] = [
  {
    idx: "MOD/01",
    tag: "Presença digital",
    title: "Site Institucional",
    desc: "Seu negócio no ar com identidade profissional. Design limpo, rápido e otimizado para Google. Para ser encontrado e passar credibilidade.",
    bullets: ["Design responsivo", "Otimização SEO", "Painel de edição", "Domínio + hospedagem"],
    glyph: "site",
  },
  {
    idx: "MOD/02",
    tag: "Alta conversão",
    title: "Landing Page",
    desc: "Página focada em um único objetivo: converter visitante em cliente. Sem distrações, copy direto e CTA claro. Perfeita para campanhas.",
    bullets: ["Copy persuasivo", "Formulário integrado", "Pixel de rastreio", "Testes A/B"],
    glyph: "landing",
  },
  {
    idx: "MOD/03",
    tag: "Sob demanda",
    title: "SaaS & Sistemas Web",
    desc: "Automatize processos, gerencie dados e entregue valor com uma plataforma própria. Desenvolvido do zero, com foco no problema real.",
    bullets: ["Auth de usuários", "Dashboard custom", "Integrações API", "Deploy + manutenção"],
    glyph: "saas",
  },
];

function ServiceCard({
  idx,
  tag,
  title,
  desc,
  bullets,
  glyph,
  i,
}: (typeof services)[number] & { i: number }) {
  return (
    <div
      className="bracket card-tilt relative bg-pl-bg-2/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-7 flex flex-col min-h-[480px]"
      data-reveal
      style={{ animationDelay: `${i * 0.08}s` }}
    >
      <span className="br-tr" />
      <span className="br-bl" />

      <div className="flex items-center justify-between mb-8">
        <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] text-white/40">
          {idx}
        </span>
        <ServiceGlyph kind={glyph} />
      </div>

      <span className="self-start font-[family-name:var(--font-jetbrains-mono)] text-[9.5px] uppercase tracking-[0.18em] text-pl-accent border border-pl-accent/30 bg-pl-accent/8 px-2 py-1 rounded-full mb-5">
        {tag}
      </span>

      <h3 className="font-[family-name:var(--font-space-grotesk)] font-medium text-white text-[26px] md:text-[30px] leading-[1.05] tracking-tight mb-3">
        {title}
      </h3>
      <p className="text-white/55 text-[13.5px] leading-[1.6] mb-7">{desc}</p>

      <ul className="mt-auto space-y-2.5 border-t border-white/8 pt-5">
        {bullets.map((b, j) => (
          <li key={b} className="flex items-center gap-3 text-[13px] text-white/80">
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] text-white/30 w-7">
              {String(j + 1).padStart(2, "0")}
            </span>
            <span className="w-1 h-1 rounded-full bg-pl-accent shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 pt-5 border-t border-white/8 flex items-center justify-between">
        <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] text-white/35">
          Saiba mais
        </span>
        <span className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:bg-pl-accent hover:text-[#07070C] hover:border-pl-accent transition cursor-pointer">
          →
        </span>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="servicos" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-bottom opacity-50 pointer-events-none" />
      <div className="relative max-w-[1320px] mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-pl-accent" />
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10.5px] uppercase tracking-[0.18em] text-pl-accent">
                § 01 · Serviços
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] font-medium text-white text-[44px] md:text-[68px] leading-[0.95] tracking-[-0.025em] max-w-[16ch]">
              Três módulos.<br />
              <span className="text-white/40">Um objetivo: </span>
              <span className="italic font-[family-name:var(--font-instrument-serif)] text-pl-accent">
                entregar
              </span>
              .
            </h2>
          </div>
          <p className="text-white/55 max-w-[360px] text-[15px] leading-[1.55]">
            Cada entrega é pensada para o seu contexto — sem pacote engessado, sem funcionalidade que você nunca vai usar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.idx} {...s} i={i} />
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4 justify-between border-t border-white/8 pt-8">
          <p className="text-white/45 text-[14px]">
            Não sabe qual módulo faz mais sentido?
            <span className="text-white/80"> Eu te ajudo a decidir em 1 conversa.</span>
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-[13px] text-white border border-white/15 px-4 py-2 rounded-full hover:border-white/40 hover:bg-white/5 transition"
          >
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] text-pl-accent">
              Pedir indicação
            </span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
