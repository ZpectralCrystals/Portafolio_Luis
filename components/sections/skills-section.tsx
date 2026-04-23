import {
  Activity,
  BarChart3,
  Blocks,
  Gauge,
  GitBranch,
  Handshake,
  Layers3,
  Network,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  UsersRound
} from "lucide-react";
import { CircularSkillProgress } from "@/components/ui/circular-skill-progress";
import { Container } from "@/components/ui/container";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillHighlightCard } from "@/components/ui/skill-highlight-card";
import { coreSkillProgress, skillHighlights } from "@/data/skills";

const highlightIconMap = {
  architecture: Layers3,
  performance: Gauge,
  seo: SearchCheck,
  testing: ShieldCheck,
  api: Network,
  scale: Blocks,
  leadership: UsersRound,
  collaboration: Handshake
} as const;

export function SkillsSection() {
  const strongestSkills = coreSkillProgress.filter((skill) => skill.percentage >= 90).length;

  return (
    <section id="stack" className="section-padding section-divider scroll-mt-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <SectionHeading
            eyebrow="Habilidades clave"
            title="Capability map frontend para productos de alto impacto."
            description="Mi enfoque combina dominio técnico en frontend moderno con experiencia en arquitectura, performance, testing y construcción de productos escalables."
          />

          <PremiumCard className="rounded-[1.7rem] p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-semibold tracking-[-0.06em] text-[var(--ink)]">10</p>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">áreas técnicas curadas</p>
              </div>
              <div>
                <p className="text-3xl font-semibold tracking-[-0.06em] text-[var(--ink)]">{strongestSkills}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">skills sobre 90% percibido</p>
              </div>
              <div>
                <p className="text-3xl font-semibold tracking-[-0.06em] text-[var(--ink)]">360</p>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">visión producto, equipo y delivery</p>
              </div>
            </div>
          </PremiumCard>
        </div>

        <div className="mt-11 grid gap-5 xl:grid-cols-[0.34fr_0.66fr]">
          <aside className="relative overflow-hidden rounded-[2rem] bg-[var(--contrast)] p-6 text-[var(--contrast-foreground)] shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:p-8">
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[rgba(15,118,110,0.28)] blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-[rgba(20,184,166,0.16)] blur-3xl" aria-hidden="true" />

            <div className="relative">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--contrast-card)] text-[var(--accent-on-contrast)] ring-1 ring-[var(--contrast-line)]">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mono mt-7 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-on-contrast)]">
                Especialización profesional
              </p>
              <h3 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-[-0.055em]">
                Skills entendidos como capacidad de resolver producto, no solo usar herramientas.
              </h3>
              <p className="mt-5 text-pretty text-sm leading-7 text-[var(--contrast-foreground-muted)]">
                Los porcentajes representan dominio percibido por experiencia real en proyectos enterprise:
                arquitectura, migraciones, medición, testing y colaboración con equipos de producto.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  { label: "Base técnica", value: "JavaScript · TypeScript · React" },
                  { label: "Producto web", value: "Next.js · SEO · Core Web Vitals" },
                  { label: "Escala", value: "Architecture · Testing · Design Systems" }
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-[var(--contrast-line)] bg-[var(--contrast-card)] p-4">
                    <p className="mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--contrast-foreground-faint)]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-[var(--contrast-foreground-soft)]">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-[var(--contrast-line)] bg-[var(--contrast-card-strong)] p-5">
                <div className="flex items-center gap-2 text-xs text-[var(--contrast-foreground-faint)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-hover)]" />
                  <span className="mono">skill-index.ts</span>
                </div>
                <div className="mono mt-5 space-y-3 text-sm leading-7">
                  <p><span className="text-[var(--accent-on-contrast)]">measure</span>: professional depth;</p>
                  <p><span className="text-[var(--accent-on-contrast)]">motion</span>: on viewport, no noise;</p>
                  <p><span className="text-[var(--accent-on-contrast)]">goal</span>: clarity for technical recruiters;</p>
                </div>
              </div>
            </div>
          </aside>

          <PremiumCard className="rounded-[2rem] p-4 sm:p-5 lg:p-6">
            <div className="mb-5 flex flex-col gap-4 border-b border-[var(--line)] pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                  Radial skill indicators
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
                  Dominio técnico principal
                </h3>
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--ink-muted)]">
                <BarChart3 className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                Percepción profesional
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {coreSkillProgress.map((skill, index) => (
                <CircularSkillProgress
                  key={skill.name}
                  category={skill.category}
                  compact
                  delay={index * 70}
                  description={skill.description}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </PremiumCard>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.8rem] border border-dashed border-[rgba(20,184,166,0.32)] bg-[var(--accent-soft)] p-6">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--surface)] text-[var(--accent-strong)] ring-1 ring-[rgba(15,118,110,0.14)]">
                <Activity className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                  Cómo leer esta sección
                </p>
                <p className="mt-3 text-pretty text-lg font-semibold leading-8 tracking-[-0.02em] text-[var(--ink)]">
                  No mide “perfección”; comunica profundidad práctica en áreas usadas para construir, migrar,
                  optimizar y mantener frontend en producción.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_16px_48px_rgba(15,23,42,0.055)]">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--contrast)] text-[var(--contrast-foreground)]">
                <GitBranch className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                  Criterio senior
                </p>
                <p className="mt-3 text-pretty text-lg font-semibold leading-8 tracking-[-0.02em] text-[var(--ink)]">
                  El valor aparece al combinar stack, arquitectura, performance, testing y comunicación con negocio.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillHighlights.map((highlight) => {
            const Icon = highlightIconMap[highlight.icon];

            return (
              <SkillHighlightCard
                key={highlight.title}
                description={highlight.description}
                icon={Icon}
                title={highlight.title}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
