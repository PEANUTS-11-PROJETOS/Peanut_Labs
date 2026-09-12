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
    tag: "SaaS · Crédito e cobrança",
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
    tag: "SaaS · Ciclo de contratos",
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
  {
    tag: "E-commerce · Semijoias",
    title: "Anastácia Semijoias",
    desc: "Loja online de semijoias com catálogo de produtos, carrinho de compras e checkout via WhatsApp. Painel admin completo para gerenciar peças, categorias e fotos.",
    pills: ["Next.js", "Supabase"],
    images: [
      { src: "/projects/anastacia/pagina_inicial.png", alt: "Anastácia – Página Inicial" },
      { src: "/projects/anastacia/carrinho.png", alt: "Anastácia – Carrinho" },
      { src: "/projects/anastacia/admin.png", alt: "Anastácia – Painel Admin" },
    ],
    href: "https://anastacia-semijoias.vercel.app",
    linkLabel: "anastacia-semijoias.vercel.app",
  },
];

function ScreenCarousel({ images, eager }: { images: ProjectImage[]; eager: boolean }) {
  const [idx, setIdx] = useState(0);
  const multi = images.length > 1;

  return (
    <div className="relative" style={{ aspectRatio: "16/9", overflow: "hidden", background: "var(--color-pl-bg)" }}>
      {/* browser chrome bar */}
      <div
        className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1 px-3 border-b border-pl-line bg-pl-bg-2/95"
        style={{ height: 20 }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#FF5F57" }} />
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#FEBC2E" }} />
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#28C840" }} />
        <span className="flex-1 h-1.5 rounded-full bg-pl-fill-1" style={{ margin: "0 8px" }} />
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
        priority={eager}
        loading={eager ? undefined : "lazy"}
      />

      {/* prev / next — desenho de 28px, área de toque de 44px via .tap-44 */}
      {multi && (
        <>
          <button
            onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
            aria-label={`Imagem anterior (${idx + 1} de ${images.length})`}
            className="tap-44 absolute left-2 bottom-2.5 z-20 w-7 h-7 rounded-full flex items-center justify-center text-pl-ink-2 text-md transition hover:text-pl-ink bg-pl-bg/70 border border-pl-line-2"
          >
            ‹
          </button>
          <button
            onClick={() => setIdx((i) => (i + 1) % images.length)}
            aria-label={`Próxima imagem (${idx + 1} de ${images.length})`}
            className="tap-44 absolute right-2 bottom-2.5 z-20 w-7 h-7 rounded-full flex items-center justify-center text-pl-ink-2 text-md transition hover:text-pl-ink bg-pl-bg/70 border border-pl-line-2"
          >
            ›
          </button>

          {/* dots */}
          {/* Os pontos flutuam sobre capturas de tela de cor imprevisível — a
              cápsula escura garante que sejam legíveis em qualquer uma delas. */}
          <div
            className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center h-6 px-1.5 rounded-full bg-pl-bg/70 border border-pl-line-2"
            role="tablist"
            aria-label="Telas do projeto"
          >
            {images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setIdx(i)}
                role="tab"
                aria-selected={i === idx}
                aria-label={img.alt}
                className="tap-44 relative w-4 h-6 flex items-center justify-center group"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === idx ? "bg-pl-accent" : "bg-pl-ink-dim group-hover:bg-pl-ink"
                  }`}
                />
              </button>
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
      className="bracket relative bg-pl-bg-2/60 backdrop-blur-sm border border-pl-line-2 rounded-2xl flex flex-col"
      data-reveal
      style={{ animationDelay: `${i * 0.08}s`, overflow: "hidden" }}
    >
      <span className="br-tr" />
      <span className="br-bl" />

      <ScreenCarousel images={project.images} eager={i === 0} />

      <div className="p-6 flex flex-col flex-1">
        <span className="self-start font-[family-name:var(--font-jetbrains-mono)] text-2xs uppercase tracking-[0.18em] text-pl-accent border border-pl-accent/30 bg-pl-accent/8 px-2 py-1 rounded-full mb-4">
          {project.tag}
        </span>

        <h3 className="font-[family-name:var(--font-space-grotesk)] font-medium text-pl-ink text-2xl md:text-3xl leading-[1.05] tracking-tight mb-2">
          {project.title}
        </h3>

        <p className="text-pl-ink-dim text-sm leading-[1.6] mb-5 flex-1">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.pills.map((pill) => (
            <span
              key={pill}
              className="font-[family-name:var(--font-jetbrains-mono)] text-2xs uppercase tracking-[0.12em] text-pl-ink-dim border border-pl-line-2 bg-pl-fill-1 px-2.5 py-1 rounded"
              
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="border-t border-pl-line pt-4 flex items-center justify-between gap-3">
          {project.href ? (
            <>
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-2xs uppercase tracking-[0.1em] text-pl-ink-dim truncate">
                {project.linkLabel}
              </span>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir ${project.title}`}
                className="tap-44 relative w-8 h-8 rounded-full border border-pl-line-3 flex items-center justify-center text-pl-ink-3 hover:bg-pl-accent hover:text-pl-bg hover:border-pl-accent transition shrink-0"
              >
                ↗
              </a>
            </>
          ) : (
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-2xs uppercase tracking-[0.12em] text-pl-ink-dim">
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
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-2xs uppercase tracking-[0.18em] text-pl-accent">
                § 02 · Projetos
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] font-medium text-pl-ink text-[clamp(32px,9vw,44px)] md:text-[68px] leading-[0.95] tracking-[-0.025em] max-w-[16ch]">
              Sistemas que<br />
              <span className="text-pl-ink-mute">funcionam </span>
              <span className="italic font-[family-name:var(--font-instrument-serif)] text-pl-accent">
                em produção
              </span>
              .
            </h2>
          </div>
          <p className="text-pl-ink-dim max-w-[360px] text-base leading-[1.55]">
            Três plataformas que construí do zero — do banco de dados ao deploy. São produtos
            próprios, no ar e navegáveis: é neles que você vê como eu trabalho antes de me
            contratar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
