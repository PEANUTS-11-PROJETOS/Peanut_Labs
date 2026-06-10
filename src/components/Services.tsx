"use client";

import { useState, useEffect, useRef, useCallback } from "react";

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

type ModalContent = {
  what: string;
  who: string;
  receives: string[];
  price: string;
  prazo: string;
};

const services: {
  idx: string;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  glyph: Glyph;
  priceLabel: string;
  priceValue: string;
  modal: ModalContent;
}[] = [
  {
    idx: "MOD/01",
    tag: "Presença digital",
    title: "Site Institucional",
    desc: "Seu negócio no ar com identidade profissional. Design limpo, rápido e otimizado para Google. Para ser encontrado e passar credibilidade.",
    bullets: ["Design responsivo", "Otimização SEO", "Painel de edição", "Domínio + hospedagem"],
    glyph: "site",
    priceLabel: "a partir de",
    priceValue: "R$1.200",
    modal: {
      what: "Um site com múltiplas páginas — Home, Sobre, Serviços e Contato. Feito pra existir no Google e passar credibilidade pra quem te pesquisa antes de comprar.",
      who: "Negócio que ainda não tem presença online ou tem vergonha do site atual. MEI, prestador de serviço, loja física que quer ser encontrada.",
      receives: [
        "Design responsivo",
        "SEO básico configurado",
        "Painel pra editar textos sem precisar de programador",
        "Domínio e hospedagem orientados",
      ],
      price: "A partir de R$1.200",
      prazo: "Entrega em até 5 dias",
    },
  },
  {
    idx: "MOD/02",
    tag: "Alta conversão",
    title: "Landing Page",
    desc: "Página focada em um único objetivo: converter visitante em cliente. Sem distrações, copy direto e CTA claro. Perfeita para campanhas.",
    bullets: ["Copy persuasivo", "Formulário integrado", "Pixel de rastreio", "Testes A/B"],
    glyph: "landing",
    priceLabel: "a partir de",
    priceValue: "R$800",
    modal: {
      what: "Uma página única, sem menu, sem distração. Cada elemento existe pra fazer o visitante tomar uma ação — mandar mensagem, preencher formulário ou comprar.",
      who: "Quem vai rodar anúncio (Google Ads, Meta Ads) ou tem uma oferta específica pra divulgar. Não faz sentido mandar tráfego pago pra um site cheio de página.",
      receives: [
        "Copy estruturado pra converter",
        "Formulário integrado",
        "Pixel de rastreio configurado",
        "Pronta pra receber tráfego no dia da entrega",
      ],
      price: "A partir de R$800",
      prazo: "Entrega em até 3 dias",
    },
  },
  {
    idx: "MOD/03",
    tag: "Sob demanda",
    title: "SaaS & Sistemas Web",
    desc: "Automatize processos, gerencie dados e entregue valor com uma plataforma própria. Desenvolvido do zero, com foco no problema real.",
    bullets: ["Auth de usuários", "Dashboard custom", "Integrações API", "Deploy + manutenção"],
    glyph: "saas",
    priceLabel: "a partir de",
    priceValue: "R$1.500",
    modal: {
      what: "Um sistema feito do zero pro seu processo específico — PDV, controle de estoque, agendamento, gestão de clientes. Não é template, não é adaptação: é construído pro seu problema.",
      who: "Negócio que perdeu dinheiro ou tempo tentando encaixar o processo numa planilha ou num sistema genérico que não serve direito.",
      receives: [
        "Login de usuários",
        "Dashboard personalizado",
        "Integrações com o que você já usa",
        "Deploy em produção + suporte a depender do projeto",
      ],
      price: "A partir de R$1.500",
      prazo: "Prazo sob consulta",
    },
  },
];

function ServiceModal({
  service,
  onClose,
}: {
  service: (typeof services)[number];
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="backdrop-in fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={service.title}
        className="modal-in relative w-full sm:max-w-[560px] bg-[#0D0D17] border border-white/12 rounded-t-3xl sm:rounded-2xl outline-none overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* drag handle — mobile only */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* header */}
        <div className="flex items-start justify-between px-6 pt-5 pb-4 border-b border-white/8">
          <div>
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.18em] text-pl-accent">
              {service.idx} · {service.tag}
            </span>
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-medium text-white text-[24px] leading-tight mt-1">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="mt-1 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition shrink-0"
          >
            ×
          </button>
        </div>

        {/* body */}
        <div className="px-6 py-5 space-y-5 max-h-[60vh] overflow-y-auto">
          <div>
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9.5px] uppercase tracking-[0.18em] text-white/35 block mb-1.5">
              O que é?
            </span>
            <p className="text-white/70 text-[14px] leading-[1.6]">{service.modal.what}</p>
          </div>

          <div>
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9.5px] uppercase tracking-[0.18em] text-white/35 block mb-1.5">
              Pra quem é?
            </span>
            <p className="text-white/70 text-[14px] leading-[1.6]">{service.modal.who}</p>
          </div>

          <div>
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9.5px] uppercase tracking-[0.18em] text-white/35 block mb-2">
              O que você recebe:
            </span>
            <ul className="space-y-2">
              {service.modal.receives.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[13.5px] text-white/80">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] text-white/25 w-5 shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-pl-accent shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* footer */}
        <div className="px-6 py-5 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="font-[family-name:var(--font-space-grotesk)] font-medium text-white text-[22px] leading-none">
              {service.modal.price}
            </div>
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.15em] text-white/40 mt-1">
              {service.modal.prazo}
            </div>
          </div>
          <a
            href="https://wa.me/5511989408375"
            onClick={onClose}
            className="group inline-flex items-center justify-between gap-3 bg-pl-accent text-[#07070C] font-semibold text-[13px] pl-5 pr-2 py-2.5 rounded-full glow-amber w-full sm:w-auto"
          >
            <span>Solicitar orçamento</span>
            <span className="w-7 h-7 rounded-full bg-[#07070C] text-pl-accent flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({
  service,
  i,
  onOpen,
}: {
  service: (typeof services)[number];
  i: number;
  onOpen: () => void;
}) {
  const { idx, tag, title, desc, bullets, glyph, priceLabel, priceValue } = service;
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

      <div className="mt-4 pt-4 border-t border-white/8 flex items-end justify-between gap-4">
        <div>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] uppercase tracking-[0.18em] text-white/35 block mb-1">
            {priceLabel}
          </span>
          <span className="font-[family-name:var(--font-space-grotesk)] font-medium text-pl-accent text-[28px] leading-none">
            {priceValue}
          </span>
        </div>
        <button
          onClick={onOpen}
          aria-label={`Ver detalhes de ${title}`}
          className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:bg-pl-accent hover:text-[#07070C] hover:border-pl-accent transition cursor-pointer shrink-0"
        >
          →
        </button>
      </div>
    </div>
  );
}

export function Services() {
  const [openIdx, setOpenIdx] = useState<string | null>(null);
  const activeService = services.find((s) => s.idx === openIdx) ?? null;

  return (
    <>
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
              <ServiceCard
                key={s.idx}
                service={s}
                i={i}
                onOpen={() => setOpenIdx(s.idx)}
              />
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

      {activeService && (
        <ServiceModal service={activeService} onClose={() => setOpenIdx(null)} />
      )}
    </>
  );
}
