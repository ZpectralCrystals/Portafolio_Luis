import { GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/data/portfolio";

export function EducationSection() {
  return (
    <section id="educacion" className="section-padding section-divider scroll-mt-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="Educación"
            title="Formación técnica base."
            description="Base académica en ingeniería complementada por experiencia práctica en productos digitales de alto impacto."
          />

          <PremiumCard className="rounded-[2rem] p-6 sm:p-8">
            <article>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="grid h-16 w-16 place-items-center rounded-3xl bg-[var(--accent-soft)] text-[var(--accent-strong)] ring-1 ring-[rgba(15,118,110,0.14)]">
                <GraduationCap className="h-8 w-8" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{education.institution}</h3>
                <p className="mt-2 text-lg text-[var(--ink-muted)]">{education.degree}</p>
                <p className="mt-3 text-sm font-semibold text-[var(--accent-strong)]">
                  {education.period} · {education.location}
                </p>
              </div>
            </div>
            </article>
          </PremiumCard>
        </div>
      </Container>
    </section>
  );
}
