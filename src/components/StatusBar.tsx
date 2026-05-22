"use client";

import { useState, useEffect } from "react";

function fmtBR(d: Date) {
  return d.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "America/Sao_Paulo",
  });
}

export function StatusBar() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="fixed top-0 inset-x-0 z-[60] border-b border-white/8 bg-black/40 backdrop-blur-md"
      style={{ height: 26 }}
    >
      <div className="max-w-[1320px] mx-auto h-full px-5 flex items-center justify-between text-[10.5px] font-[family-name:var(--font-jetbrains-mono)] text-white/45">
        <div className="flex items-center gap-5">
          <span className="uppercase tracking-[0.18em] text-pl-accent">PL/SYS</span>
          <span className="hidden sm:inline">v2026.05 · build 0721</span>
          <span className="hidden md:inline">SP–BR · UTC−03</span>
        </div>
        <div className="flex items-center gap-5">
          <span className="hidden md:inline">LAT 18ms</span>
          <span className="hidden sm:inline">CPU 04%</span>
          <span className="flex items-center gap-2 uppercase tracking-[0.18em]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 blink" />
            ONLINE
          </span>
          <span className="tabular-nums text-white/70">
            {now ? fmtBR(now) : "--:--:--"}
          </span>
        </div>
      </div>
    </div>
  );
}
