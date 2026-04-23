import { ArrowUpRight, Building2, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="section-padding scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="Experiencia destacada"
          title="Trayectoria de impacto en productos críticos."
          description="Banca, fintech, media y SaaS: roles donde el frontend debía sostener operación, velocidad de entrega, calidad de experiencia y evolución técnica."
        />

        <div className="relative mt-12 space-y-5">
          <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-[linear-gradient(180deg,transparent,var(--line-strong),transparent)] lg:block" aria-hidden="true" />
          {experiences.map((experience, index) => (
            <PremiumCard
              key={`${experience.company}-${experience.client}`}
              className="rounded-[2rem] transition hover:-translate-y-1 hover:border-[rgba(15,118,110,0.28)]"
            >
              <article className="grid gap-0 lg:grid-cols-[0.36fr_0.64fr]">
                <div className="border-b border-[var(--line)] p-6 sm:p-8 lg:border-b-0 lg:border-r">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--ink)] text-white shadow-[0_12px_30px_rgba(17,24,39,0.16)]">
                        <Building2 className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                        Engagement {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-[var(--ink-muted)]" aria-hidden="true" />
                  </div>

                  <h3 className="mt-7 text-3xl font-semibold tracking-[-0.055em] text-[var(--ink)]">
                    {experience.company}
                  </h3>
                  <p className="mt-3 text-sm font-semibold text-[var(--ink-muted)]">Cliente: {experience.client}</p>

                  <div className="mt-6 rounded-3xl border border-[var(--line)] bg-white/64 p-4">
                    <p className="text-sm font-semibold text-[var(--ink)]">{experience.role}</p>
                    <p className="mt-1 text-sm text-[var(--ink-muted)]">{experience.period}</p>
                    <div className="mt-4 h-px bg-[var(--line)]" />
                    <p className="mt-4 text-sm font-semibold leading-7 text-[var(--accent-strong)]">{experience.focus}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.stack.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                    Impacto generado
                  </p>
                  <p className="mt-4 text-pretty text-xl font-semibold leading-9 tracking-[-0.03em] text-[var(--ink)]">
                    {experience.impact}
                  </p>

                  <ul className="mt-7 grid gap-3 xl:grid-cols-2">
                    {experience.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 rounded-2xl border border-[var(--line)] bg-white/62 p-4 text-sm leading-7 text-[var(--ink-muted)]"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </PremiumCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
