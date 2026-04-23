import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutPillars } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="section-padding scroll-mt-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeading
            eyebrow="Sobre mí"
            title="Frontend senior con criterio de arquitectura, producto y operación."
            description="No trabajo el frontend como una capa aislada. Lo conecto con estrategia de producto, restricciones enterprise, experiencia de usuario, rendimiento y salud técnica del equipo."
          />

          <div className="space-y-5">
            <PremiumCard className="p-6 sm:p-8">
              <div className="grid gap-7 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
                <div>
                  <p className="mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                    Perfil ejecutivo
                  </p>
                  <p className="mt-5 text-pretty text-2xl font-semibold leading-9 tracking-[-0.04em] text-[var(--ink)]">
                    Construyo frontends para sistemas donde estabilidad, velocidad de cambio y calidad de experiencia
                    tienen impacto directo en negocio.
                  </p>
                </div>
                <div className="space-y-5 text-base leading-8 text-[var(--ink-muted)]">
                  <p>
                    Tengo más de 6 años de experiencia en banca, fintech, medios digitales, minería y SaaS.
                    Mi trabajo se centra en modernizar bases técnicas con React, Next.js y TypeScript, manteniendo
                    foco en performance, SEO técnico, accesibilidad, testing y mantenibilidad.
                  </p>
                  <p>
                    He liderado squads frontend, definido estándares, ejecutado migraciones progresivas y acompañado
                    equipos mediante code reviews, pair programming y capacitación técnica. Me involucro desde la
                    factibilidad hasta producción, alineando diseño, producto, backend y QA.
                  </p>
                </div>
              </div>
            </PremiumCard>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutPillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className="group quiet-panel rounded-[1.6rem] p-5 transition hover:-translate-y-1 hover:border-[rgba(15,118,110,0.28)] hover:bg-white/82"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                      0{index + 1}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-[var(--ink-muted)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]" />
                  </div>
                  <CheckCircle2 className="mt-6 h-6 w-6 text-[var(--accent)]" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
