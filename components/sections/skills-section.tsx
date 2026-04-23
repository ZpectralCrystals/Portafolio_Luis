import {
  Blocks,
  Cloud,
  Code2,
  Gauge,
  Layers3,
  Palette,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Workflow
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/data/portfolio";

const iconMap = {
  code: Code2,
  layers: Layers3,
  palette: Palette,
  shield: ShieldCheck,
  gauge: Gauge,
  mobile: Smartphone,
  api: ServerCog,
  cloud: Cloud,
  method: Workflow
} as const;

export function SkillsSection() {
  return (
    <section id="stack" className="section-padding section-divider scroll-mt-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Stack / Skills"
            title="Stack curado por responsabilidad, no por moda."
            description="Cada categoría representa una capa del trabajo frontend: diseño del sistema, implementación, integración, medición y operación."
          />
          <PremiumCard className="hidden max-w-sm rounded-[1.5rem] p-5 lg:block">
            <p className="mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
              Core profile
            </p>
            <p className="mt-3 text-sm font-semibold leading-7 text-[var(--ink)]">
              React · Next.js · TypeScript · Performance · SEO · Clean Architecture
            </p>
          </PremiumCard>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon];

            return (
              <article
                key={category.title}
                className="group quiet-panel rounded-[1.75rem] p-5 transition hover:-translate-y-1 hover:border-[rgba(15,118,110,0.3)] hover:bg-white/84 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)] ring-1 ring-[rgba(15,118,110,0.12)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{category.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">{category.description}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--line)] bg-white/72 px-3 py-1.5 text-sm font-semibold text-[var(--ink-muted)] transition group-hover:border-[rgba(15,118,110,0.18)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[1.75rem] border border-dashed border-[rgba(15,118,110,0.35)] bg-[rgba(223,245,239,0.48)] p-5">
            <Blocks className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
            <p className="mt-4 text-sm font-semibold leading-7 text-[var(--ink)]">
              Estructura lista para internacionalización futura.
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
              Contenido centralizado en data, secciones desacopladas y componentes reutilizables.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--ink)] p-5 text-white">
            <p className="mono text-xs font-semibold uppercase tracking-[0.22em] text-white/48">
              Cómo uso el stack
            </p>
            <p className="mt-4 text-pretty text-lg font-semibold leading-8">
              La tecnología no aparece como inventario: aparece como soporte para migrar, medir, estandarizar,
              entregar y mantener productos frontend de largo plazo.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
