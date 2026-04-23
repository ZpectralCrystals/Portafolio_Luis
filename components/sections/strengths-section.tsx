import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { strengths } from "@/data/portfolio";

export function StrengthsSection() {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionHeading
            eyebrow="Fortalezas"
            title="Señales de seniority que importan en producción."
            description="Más allá del stack: criterio para migrar, decidir, revisar, medir y sostener producto cuando el frontend ya es crítico para negocio."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => (
              <PremiumCard
                key={strength.title}
                className="group rounded-[1.6rem] p-5 transition hover:-translate-y-1 hover:border-[rgba(15,118,110,0.28)]"
              >
                <article>
                  <div className="flex items-center justify-between gap-4">
                    <CheckCircle2 className="h-6 w-6 text-[var(--accent)]" aria-hidden="true" />
                    <ArrowUpRight className="h-5 w-5 text-[var(--ink-muted)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{strength.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">{strength.description}</p>
                </article>
              </PremiumCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
