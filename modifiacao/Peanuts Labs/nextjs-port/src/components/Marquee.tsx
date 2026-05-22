const tokens = [
  "Next.js", "TypeScript", "React", "Tailwind", "Supabase",
  "PostgreSQL", "Vercel", "Stripe", "Resend", "Framer Motion",
  "Prisma", "Auth.js",
];

function Row() {
  return (
    <div className="marquee-track items-center text-white/40 font-[family-name:var(--font-jetbrains-mono)] text-[13px] uppercase tracking-[0.2em]">
      {tokens.map((t) => (
        <span key={t} className="flex items-center gap-12">
          <span className="text-white/60">{t}</span>
          <span className="text-pl-accent/60">✦</span>
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="border-y border-white/8 py-5 bg-pl-bg-2 overflow-hidden">
      <div className="marquee">
        <Row />
        <Row />
      </div>
    </div>
  );
}
