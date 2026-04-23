import { ArrowUpRight, Boxes, ChartNoAxesCombined, ClipboardCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PremiumCard } from "@/components/ui/premium-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { projects } from "@/data/portfolio";

const projectIcons = [ChartNoAxesCombined, ClipboardCheck, Boxes] as const;

export function ProjectsSection() {
  return (
    <section id="proyectos" className="section-padding scroll-mt-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeading
            eyebrow="Proyectos"
            title="Proyectos Next.js orientados a operación, datos y producto."
            description="Selección de productos web planteados con arquitectura moderna, interfaces claras y foco en resolver procesos críticos de negocio."
          />

          <PremiumCard className="rounded-[1.7rem] p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-semibold tracking-[-0.06em] text-[var(--ink)]">3</p>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">proyectos destacados</p>
              </div>
              <div>
                <p className="text-3xl font-semibold tracking-[-0.06em] text-[var(--ink)]">Next</p>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">base fullstack moderna</p>
              </div>
              <div>
                <p className="text-3xl font-semibold tracking-[-0.06em] text-[var(--ink)]">Ops</p>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">gestión y claridad operativa</p>
              </div>
            </div>
          </PremiumCard>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = projectIcons[index];

            return (
              <PremiumCard
                key={project.title}
                className="group rounded-[2rem] p-6 transition hover:-translate-y-1 hover:border-[rgba(20,184,166,0.34)] sm:p-7"
              >
                <article className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--contrast)] text-[var(--contrast-foreground)] shadow-[0_12px_34px_rgba(15,23,42,0.13)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-[var(--ink-muted)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]" aria-hidden="true" />
                  </div>

                  <p className="mono mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                    Proyecto {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.055em] text-[var(--ink)]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[var(--ink-muted)]">{project.type}</p>

                  <div className="mt-6 rounded-3xl border border-[var(--line)] bg-[var(--surface-muted)] p-4">
                    <p className="text-sm font-semibold leading-7 text-[var(--ink)]">{project.summary}</p>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-[var(--ink-muted)]">{project.description}</p>

                  <div className="mt-7 border-t border-[var(--line)] pt-5">
                    <p className="mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                      Enfoque funcional
                    </p>
                    <p className="mt-3 text-sm font-semibold leading-7 text-[var(--ink)]">{project.focus}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </article>
              </PremiumCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
