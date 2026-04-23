import { Activity, BarChart3, Layers3 } from "lucide-react";
import { CircularSkillProgress } from "@/components/ui/circular-skill-progress";
import { Container } from "@/components/ui/container";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { coreSkillProgress } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="stack" className="section-padding section-divider scroll-mt-24">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Habilidades clave"
            title="Especialización visualizada con foco senior."
            description="Tecnologías y áreas donde he desarrollado mayor dominio profesional construyendo, migrando y escalando productos frontend en entornos enterprise."
          />

          <PremiumCard className="hidden max-w-sm rounded-[1.5rem] p-5 lg:block">
            <p className="mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
              Lectura de indicadores
            </p>
            <p className="mt-3 text-sm font-semibold leading-7 text-[var(--ink)]">
              Porcentajes = dominio percibido y especialización profesional, no métrica científica.
            </p>
          </PremiumCard>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {coreSkillProgress.map((skill, index) => (
            <CircularSkillProgress
              key={skill.name}
              category={skill.category}
              delay={index * 70}
              description={skill.description}
              name={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--ink)] p-5 text-white">
            <Layers3 className="h-5 w-5 text-[var(--accent-soft)]" aria-hidden="true" />
            <p className="mono mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/48">
              Arquitectura
            </p>
            <p className="mt-3 text-sm font-semibold leading-7 text-white/84">
              Separación UI-dominio, vertical slicing y componentes preparados para evolución.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white/70 p-5 shadow-[0_16px_46px_rgba(17,24,39,0.06)]">
            <Activity className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
            <p className="mono mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
              Delivery
            </p>
            <p className="mt-3 text-sm font-semibold leading-7 text-[var(--ink)]">
              Stack usado para sostener velocidad de entrega sin perder calidad técnica.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-dashed border-[rgba(15,118,110,0.35)] bg-[rgba(223,245,239,0.48)] p-5">
            <BarChart3 className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
            <p className="mono mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
              Interpretación
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
              Indicadores pensados para comunicar fortalezas principales de forma clara, visual y escaneable.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
