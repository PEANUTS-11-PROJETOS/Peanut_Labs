# Peanuts Labs — Redesign Futurista 2026

Port completo do redesign futurista pro stack Next.js 16 + Tailwind v4 + TypeScript.

## 📁 Estrutura

```
nextjs-port/
└── src/
    ├── app/
    │   ├── globals.css      ← SUBSTITUIR (tokens + animações)
    │   ├── layout.tsx       ← SUBSTITUIR (adiciona JetBrains Mono + Instrument Serif)
    │   └── page.tsx         ← SUBSTITUIR (adiciona StatusBar + Marquee)
    └── components/
        ├── StatusBar.tsx    ← NOVO
        ├── Navbar.tsx       ← SUBSTITUIR
        ├── Hero.tsx         ← SUBSTITUIR
        ├── Marquee.tsx      ← NOVO
        ├── Services.tsx     ← SUBSTITUIR
        ├── HowItWorks.tsx   ← SUBSTITUIR (agora é timeline interativa)
        ├── About.tsx        ← SUBSTITUIR (client component — tem relógio ao vivo)
        ├── Contact.tsx      ← SUBSTITUIR
        └── Footer.tsx       ← SUBSTITUIR
```

## 🚀 Como aplicar via Claude Code

1. Baixe o zip e extraia.
2. Copie tudo dentro de `nextjs-port/src/` por cima do seu `src/` atual:
   ```bash
   cp -R nextjs-port/src/* peanuts-labs/src/
   ```
3. Não precisa instalar nada — todas as fontes já vêm via `next/font/google` (JetBrains Mono e Instrument Serif são adicionadas em `layout.tsx`).
4. `lucide-react` continua nas dependências mas o redesign não usa mais — pode remover se quiser:
   ```bash
   npm remove lucide-react
   ```
5. Rode `npm run dev` e abre em `localhost:3000`.

## 🎨 O que mudou

### Identidade visual
- **Paleta**: agora dark-first (`#07070C` ao invés de `#1A1A2E`), com âmbar `#F5A524` mais luminoso
- **Tipografia**: adicionei **JetBrains Mono** (labels técnicos) e **Instrument Serif** (palavras em itálico de destaque)
- **Background**: aurora gradiente animada + grade + scanlines no lugar dos hexágonos estáticos

### Componentes
- `StatusBar` — barra fina no topo com relógio BRT ao vivo, latência, status online
- `Navbar` — colapsa em pill arredondada ao scrollar
- `Hero` — título gigante (até 148px) com tratamento misto (sólido + serif italic + outline) e strip de 4 stats
- `Marquee` — esteira horizontal da stack
- `Services` — cards com corner brackets animados + glifos SVG custom
- `HowItWorks` — timeline interativa: 4 tabs clicáveis, gauge circular de progresso, painel ativo
- `About` — "studio ID card" holográfico com tabela de specs e relógio do estúdio
- `Contact` — título oversize com glow, grid de canais (resposta, briefing, orçamento, início)
- `Footer` — logo gigante "Peanuts Labs." como elemento gráfico

## ⚙️ Tokens novos no `globals.css`

| Token | Valor | Uso |
|---|---|---|
| `--color-pl-bg` | `#07070C` | Background principal |
| `--color-pl-bg-2` | `#0D0D17` | Background secundário (cards, footer) |
| `--color-pl-ink` | `#F4F4F5` | Texto principal |
| `--color-pl-line` | `rgba(244,244,245,0.08)` | Bordas sutis |
| `--color-pl-accent` | `#F5A524` | Âmbar (cor de destaque) |
| `--color-pl-accent-soft` | `#FFD27A` | Âmbar hover |
| `--font-mono` | JetBrains Mono | Labels técnicos |
| `--font-serif` | Instrument Serif | Itálicos editoriais |

**Tokens legacy (Carvão `#1A1A2E`, Cinza Médio etc.) ficam mantidos** caso você queira reutilizar em outras páginas.

## 🪛 Classes utilitárias custom

- `.aurora` — gradiente animado em pseudo-elementos
- `.bg-grid` / `.bg-grid-sm` — grade de fundo
- `.mask-radial` / `.mask-radial-strong` / `.mask-bottom` — fade dos cantos
- `.bracket` — adiciona 4 cantos de marca (precisa de `<span class="br-tr" />` e `<span class="br-bl" />` filhos pros 2 cantos opostos)
- `.glow-amber` — sombra com brilho âmbar
- `.text-glow` — text-shadow âmbar
- `.outline-text` — texto só com contorno
- `.scanlines` — scanlines em cards "holográficos"
- `.pulse-dot` — anel pulsante ao redor do elemento
- `.blink` — piscar lento (2 steps)
- `.card-tilt` — hover translateY -4px
- `.marquee` / `.marquee-track` — esteira horizontal
- `[data-reveal]` — fade-in de entrada (basta adicionar o atributo)

## 📝 Próximos passos sugeridos

1. **WhatsApp**: atualizar `href="https://wa.me/"` em `Contact.tsx` com o número real
2. **Email**: atualizar `ola@peanutslabs.com.br` em `Contact.tsx` quando registrar o domínio
3. **Metadata**: ajustar OG image em `layout.tsx`
4. **Tema claro**: a paleta é dark-only por enquanto — se quiser variar, basta mover os tokens pra dentro de `[data-theme="dark"]` e criar uma variante clara

Qualquer dúvida na hora de aplicar, me chama.
