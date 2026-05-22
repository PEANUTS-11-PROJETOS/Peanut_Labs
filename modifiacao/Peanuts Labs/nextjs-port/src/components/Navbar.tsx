"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Serviços", href: "#servicos", n: "01" },
  { label: "Processo", href: "#processo", n: "02" },
  { label: "Sobre", href: "#sobre", n: "03" },
  { label: "Contato", href: "#contato", n: "04" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 z-50 transition-all" style={{ top: 26 }}>
      <div
        className={`mx-auto transition-all duration-300 ${
          scrolled ? "max-w-[1100px] mt-3" : "max-w-[1320px] mt-0"
        }`}
      >
        <div
          className={`mx-5 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "rounded-full border border-white/10 bg-black/60 backdrop-blur-xl px-4 py-2"
              : "border-b border-white/8 px-5 py-3.5"
          }`}
        >
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-md bg-pl-accent opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 rounded-md ring-1 ring-pl-accent/40 blur-[2px]" />
              <div className="relative w-full h-full flex items-center justify-center font-[family-name:var(--font-space-grotesk)] font-bold text-[#07070C]">
                P
              </div>
            </div>
            <div className="leading-none">
              <div className="font-[family-name:var(--font-space-grotesk)] font-bold text-white text-[15px] tracking-tight">
                Peanuts<span className="font-light text-white/70"> Labs</span>
              </div>
              <span className="font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-[0.18em] text-[9px] text-white/35 mt-0.5 block">
                studio · 2026
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.slice(0, 3).map((x) => (
              <a
                key={x.href}
                href={x.href}
                className="group relative px-3 py-1.5 text-[13px] text-white/65 hover:text-white transition flex items-center gap-2"
              >
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] text-white/30 group-hover:text-pl-accent transition">
                  {x.n}
                </span>
                <span className="font-medium">{x.label}</span>
              </a>
            ))}
            <a
              href="#contato"
              className="ml-3 relative inline-flex items-center gap-2 bg-pl-accent text-[#07070C] font-semibold text-[13px] pl-4 pr-2 py-1.5 rounded-full hover:bg-pl-accent-soft transition"
            >
              Iniciar projeto
              <span className="w-6 h-6 rounded-full bg-[#07070C] text-pl-accent flex items-center justify-center text-[11px]">
                →
              </span>
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/80 w-9 h-9 flex items-center justify-center"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1">
              <span className="w-4 h-px bg-current" />
              <span className="w-4 h-px bg-current" />
            </div>
          </button>
        </div>

        {open && (
          <div className="md:hidden mx-5 mt-2 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl p-4 flex flex-col gap-2">
            {links.map((x) => (
              <a
                key={x.href}
                href={x.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-2 text-white/80"
              >
                <span className="flex items-center gap-3">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] text-white/30">
                    {x.n}
                  </span>
                  {x.label}
                </span>
                <span>→</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
