const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-pl-bg-2">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-10">
        <div className="flex items-end justify-between flex-wrap gap-6 pb-10 mb-8 border-b border-white/8">
          <div className="font-[family-name:var(--font-space-grotesk)] font-medium text-white leading-[0.9] tracking-[-0.04em] text-[68px] md:text-[120px]">
            Peanuts<span className="text-white/30"> Labs</span>
            <span className="text-pl-accent">.</span>
          </div>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10.5px] uppercase tracking-[0.18em] text-white/35 pb-3">
            studio · independente · since 2024
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-6 flex items-center gap-3">
            <div className="w-6 h-6 bg-pl-accent rounded flex items-center justify-center font-[family-name:var(--font-space-grotesk)] font-bold text-[#07070C] text-[12px]">
              P
            </div>
            <p className="text-white/40 text-[12px]">
              © {new Date().getFullYear()} Peanuts Labs. Tecnologia que cabe no seu negócio.
            </p>
          </div>
          <nav className="md:col-span-6 flex md:justify-end gap-6 flex-wrap">
            {links.map((x) => (
              <a
                key={x.href}
                href={x.href}
                className="text-white/50 hover:text-white text-[12px] transition"
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
