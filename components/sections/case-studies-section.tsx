import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/data/portfolio";

export function CaseStudiesSection() {
  return (
    <section id="impacto" className="section-padding section-divider scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="Casos de impacto"
          title="Mini case studies con reto, intervención y resultado."
          description="Casos basados en experiencia real. Sin métricas inventadas: foco en contexto, decisiones técnicas y efectos observables sobre producto y equipo."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <PremiumCard key={study.title} className="rounded-[2rem] p-6 transition hover:-translate-y-1 sm:p-8">
              <article>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                      {study.area} · Caso {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.055em] text-[var(--ink)]">
                      {study.title}
                    </h3>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--ink)] text-white shadow-[0_12px_34px_rgba(17,24,39,0.15)]">
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <p className="mt-6 text-sm leading-7 text-[var(--ink-muted)]">{study.context}</p>

                <div className="mt-7 grid gap-3">
                  <div className="rounded-3xl border border-[var(--line)] bg-white/62 p-5">
                    <p className="mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">Reto</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--ink)]">{study.problem}</p>
                  </div>
                  <div className="rounded-3xl border border-[var(--line)] bg-white/62 p-5">
                    <p className="mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                      Intervención
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--ink)]">{study.intervention}</p>
                  </div>
                  <div className="rounded-3xl bg-[var(--ink)] p-5 text-white">
                    <p className="mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-soft)]">
                      Impacto
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/82">{study.result}</p>
                  </div>
                </div>
              </article>
            </PremiumCard>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-[var(--line)] bg-white/62 p-6 text-center shadow-[0_16px_50px_rgba(17,24,39,0.06)]">
          <p className="mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
            Principio de trabajo
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg font-semibold leading-8 tracking-[-0.02em] text-[var(--ink)]">
            Cada intervención busca reducir complejidad operativa: mejores componentes, mejor medición, menos deuda,
            mayor claridad para equipos y entregas más confiables.
          </p>
        </div>
      </Container>
    </section>
  );
}
