const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-pl-line-2 bg-pl-bg-2">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-10">
        <div className="flex items-end justify-between flex-wrap gap-6 pb-10 mb-8 border-b border-pl-line">
          <div className="font-[family-name:var(--font-space-grotesk)] font-medium text-pl-ink leading-[0.9] tracking-[-0.04em] text-[clamp(44px,12vw,68px)] md:text-[120px]">
            Peanuts<span className="text-pl-ink-mute"> Labs</span>
            <span className="text-pl-accent">.</span>
          </div>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-2xs uppercase tracking-[0.18em] text-pl-ink-dim pb-3">
            studio · independente · since 2026
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-6 flex items-center gap-3">
            <div className="w-6 h-6 bg-pl-accent rounded flex items-center justify-center font-[family-name:var(--font-space-grotesk)] font-bold text-pl-bg text-xs">
              P
            </div>
            <p className="text-pl-ink-dim text-xs">
              © {new Date().getFullYear()} Peanuts Labs. Tecnologia que cabe no seu negócio.
            </p>
          </div>
          <nav className="md:col-span-6 flex md:justify-end gap-6 flex-wrap">
            {links.map((x) => (
              <a
                key={x.href}
                href={x.href}
                className="inline-flex items-center min-h-11 text-pl-ink-dim hover:text-pl-ink text-xs transition"
              >
                {x.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
