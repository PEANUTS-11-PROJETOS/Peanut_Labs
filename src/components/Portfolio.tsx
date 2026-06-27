"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectImage = { src: string; alt: string };

type Project = {
  tag: string;
  title: string;
  desc: string;
  pills: string[];
  images: ProjectImage[];
  href: string | null;
  linkLabel: string | null;
};

const projects: Project[] = [
  {
    tag: "SaaS · Por assinatura",
    title: "FinFlow",
    desc: "Plataforma de gestão e controle de carteiras de empréstimo — monitoramento de cobranças, parcelas e inadimplência em tempo real.",
    pills: ["Next.js", "Supabase", "Stripe"],
    images: [
      { src: "/projects/finflow/login.png", alt: "FinFlow – Login" },
      { src: "/projects/finflow/painel.png", alt: "FinFlow – Painel" },
      { src: "/projects/finflow/emprestimo.png", alt: "FinFlow – Novo Empréstimo" },
    ],
    href: "https://finflow-orcin.vercel.app",
    linkLabel: "finflow-orcin.vercel.app",
  },
  {
    tag: "SaaS · Para empresa",
    title: "Marinari Assessoria",
    desc: "Plataforma completa para planejamento e gestão de casamentos — convidados, orçamentos e cronograma em um painel unificado.",
    pills: ["Next.js", "Supabase"],
    images: [
      { src: "/projects/marinari/inicio.png", alt: "Marinari – Início" },
      { src: "/projects/marinari/convidados.png", alt: "Marinari – Convidados" },
      { src: "/projects/marinari/financeiro.png", alt: "Marinari – Financeiro" },
    ],
    href: "https://marinari-assessoria.vercel.app",
    linkLabel: "marinari-assessoria.vercel.app",
  },
  {
    tag: "SaaS · Por assinatura",
    title: "ContractFlow",
    desc: "Criação e gestão do ciclo de vida de contratos para empreendedores — do rascunho à renovação, com visibilidade total dos acordos ativos.",
    pills: ["Next.js", "Supabase"],
    images: [
      { src: "/projects/contractflow/modelos.png", alt: "ContractFlow – Modelos" },
      { src: "/projects/contractflow/dashboard.png", alt: "ContractFlow – Painel" },
      { src: "/projects/contractflow/login.png", alt: "ContractFlow – Login" },
    ],
    href: null,
    linkLabel: null,
  },
];

function ScreenCarousel({ images }: { images: ProjectImage[] }) {
  const [idx, setIdx] = useState(0);
  const multi = images.length > 1;

  return (
    <div className="relative" style={{ aspectRatio: "16/9", overflow: "hidden", background: "#07070C" }}>
      {/* browser chrome bar */}
      <div
        className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1 px-3 border-b border-white/6"
        style={{ height: 20, background: "rgba(10,10,20,0.92)" }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#FF5F57" }} />
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#FEBC2E" }} />
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#28C840" }} />
        <span className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", margin: "0 8px" }} />
      </div>

      {/* image */}
      <Image
        key={images[idx].src}
        src={images[idx].src}
        alt={images[idx].alt}
        fill
        className="object-cover object-top"
        style={{ paddingTop: 20 }}
        sizes="(max-width: 768px) 100vw, 440px"
        priority={idx === 0}
      />

      {/* prev / next */}
      {multi && (
        <>
          <button
            onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
            aria-label="Imagem anterior"
            className="absolute left-2 bottom-2.5 z-20 w-7 h-7 rounded-full flex items-center justify-center text-white/80 text-base transition hover:text-white"
            style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            ‹
          </button>
          <button
            onClick={() => setIdx((i) => (i + 1) % images.length)}
            aria-label="Próxima imagem"
            className="absolute right-2 bottom-2.5 z-20 w-7 h-7 rounded-full flex items-center justify-center text-white/80 text-base transition hover:text-white"
            style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            ›
          </button>

          {/* dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Imagem ${i + 1}`}
                className="w-1.5 h-1.5 rounded-full transition-colors"
                style={{ background: i === idx ? "var(--color-pl-accent)" : "rgba(255,255,255,0.28)" }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectCard({ project, i }: { project: Project; i: number }) {
  return (
    <div
      className="bracket relative bg-pl-bg-2/60 backdrop-blur-sm border border-white/10 rounded-2xl flex flex-col"
      data-reveal
      style={{ animationDelay: `${i * 0.08}s`, overflow: "hidden" }}
    >
      <span className="br-tr" />
      <span className="br-bl" />

      <ScreenCarousel images={project.images} />

      <div className="p-6 flex flex-col flex-1">
        <span className="self-start font-[family-name:var(--font-jetbrains-mono)] text-[9.5px] uppercase tracking-[0.18em] text-pl-accent border border-pl-accent/30 bg-pl-accent/8 px-2 py-1 rounded-full mb-4">
          {project.tag}
        </span>

        <h3 className="font-[family-name:var(--font-space-grotesk)] font-medium text-white text-[24px] md:text-[28px] leading-[1.05] tracking-tight mb-2">
          {project.title}
        </h3>

        <p className="text-white/55 text-[13.5px] leading-[1.6] mb-5 flex-1">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.pills.map((pill) => (
            <span
              key={pill}
              className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] uppercase tracking-[0.12em] text-white/40 border border-white/10 px-2.5 py-1 rounded"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="border-t border-white/8 pt-4 flex items-center justify-between gap-3">
          {project.href ? (
            <>
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] uppercase tracking-[0.1em] text-white/30 truncate">
                {project.linkLabel}
              </span>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir ${project.title}`}
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:bg-pl-accent hover:text-[#07070C] hover:border-pl-accent transition shrink-0"
              >
                ↗
              </a>
            </>
          ) : (
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] uppercase tracking-[0.12em] text-white/25">
              Em breve
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="projetos" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-bottom opacity-50 pointer-events-none" />
      <div className="relative max-w-[1320px] mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-pl-accent" />
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10.5px] uppercase tracking-[0.18em] text-pl-accent">
                § 02 · Projetos
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] font-medium text-white text-[44px] md:text-[68px] leading-[0.95] tracking-[-0.025em] max-w-[16ch]">
              Sistemas que<br />
              <span className="text-white/40">funcionam </span>
              <span className="italic font-[family-name:var(--font-instrument-serif)] text-pl-accent">
                em produção
              </span>
              .
            </h2>
          </div>
          <p className="text-white/55 max-w-[360px] text-[15px] leading-[1.55]">
            Três SaaS construídos do zero e usados por clientes reais — cada um resolvendo um problema específico de negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
