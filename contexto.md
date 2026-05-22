# Contexto do Projeto — Peanuts Labs

## O que é

Site de divulgação de serviços da **Peanuts Labs**, marca solo de tecnologia voltada para
pequenas empresas e MEI. O site serve como presença digital e canal de captação de clientes.

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Linguagem | TypeScript (strict) |
| Estilo | Tailwind CSS v4 |
| Ícones | Lucide React |
| Fontes | Space Grotesk (títulos) + Inter (corpo) via `next/font/google` |
| Deploy | Vercel |

## Estrutura de arquivos

```
src/
├── app/
│   ├── globals.css       # CSS variables da marca + Tailwind v4
│   ├── layout.tsx        # Root layout — fontes + metadados
│   └── page.tsx          # Monta todas as seções
└── components/
    ├── Navbar.tsx         # Navbar fixa com menu mobile
    ├── Hero.tsx           # Hero principal com tagline e CTA
    ├── Services.tsx       # 3 cards de serviço
    ├── HowItWorks.tsx     # 4 passos do processo
    ├── About.tsx          # Sobre a marca e diferenciais
    ├── Contact.tsx        # CTA de contato via WhatsApp
    └── Footer.tsx         # Rodapé com copyright
```

## Identidade visual

| Token | Valor | Uso |
|---|---|---|
| Carvão | `#1A1A2E` | Fundo dark, textos principais |
| Branco Gelo | `#F8F9FA` | Fundo light, áreas de respiro |
| Âmbar Forte | `#F59E0B` | CTAs, destaques, hover |
| Cinza Médio | `#6B7280` | Textos secundários, subtítulos |

**Fontes:**
- Títulos: `Space Grotesk` Bold 700
- Corpo: `Inter` Regular/Medium 400–600

**Referência completa:** `peanuts-labs-brand.md` (arquivo externo de identidade)

## Serviços divulgados

1. **Site Institucional** — presença digital profissional para negócios
2. **Landing Page** — foco em conversão para campanhas e lançamentos
3. **SaaS & Sistemas Web** — plataformas sob demanda para automação e gestão

## Público-alvo

Pequenas empresas e MEI que precisam de tecnologia de qualidade sem pagar preço de agência.

## Tom de voz

Direto, confiável, acessível e resolutivo. Fala com o dono do negócio, não com o dev.

## Contato

- WhatsApp: _a definir_ (atualizar em `src/components/Contact.tsx`)
- Domínio: `peanutslabs.com.br` (verificar disponibilidade)

## Observações técnicas

- Tailwind v4 usa `@theme inline` no CSS — linters de CSS podem exibir falso positivo em `@theme`
- Nenhuma dependência de Supabase/Stripe — site estático puro
- As fontes são carregadas via `next/font/google`, não via `@import` no CSS
- Seção de portfólio ainda não existe — adicionar quando houver projetos para mostrar
