import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Download, ExternalLink, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { heroFocus, heroMetrics, profile } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden px-3 pb-16 pt-6 sm:px-5 lg:pb-[5.5rem]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[46rem] opacity-40 dot-grid" aria-hidden="true" />
      <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[rgba(15,118,110,0.12)] blur-3xl" aria-hidden="true" />
      <Container>
        <div className="glass-panel relative overflow-hidden rounded-[2.25rem] p-4 sm:rounded-[3rem] sm:p-6 lg:p-8">
          <div className="absolute inset-0 -z-10 bg-[var(--hero-overlay)]" aria-hidden="true" />
          <div className="grid items-stretch gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="animate-rise flex flex-col justify-between rounded-[1.8rem] bg-[var(--surface)] p-6 sm:p-8 lg:min-h-[39rem] lg:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(20,184,166,0.26)] bg-[var(--accent-soft)] px-3 py-2 text-sm font-semibold text-[var(--accent-strong)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                    Disponible para retos frontend senior
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--ink-muted)]">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    {profile.location} · {profile.timezone}
                  </span>
                </div>

                <div className="mt-10 max-w-4xl">
                  <p className="mono text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                    {profile.role}
                  </p>
                  <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.075em] text-[var(--ink)] sm:text-6xl lg:text-7xl xl:text-[5.15rem]">
                    {profile.name}
                  </h1>
                  <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-[var(--ink-muted)] sm:text-xl lg:text-[1.35rem] lg:leading-9">
                    Frontend enterprise para productos críticos: React, Next.js y TypeScript con arquitectura limpia,
                    performance medible, SEO técnico y liderazgo de equipos que entregan sin comprometer mantenibilidad.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {profile.sectors.map((sector) => (
                    <Tag key={sector}>{sector}</Tag>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button href={profile.whatsapp} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Contactarme
                  </Button>
                  <Button href={profile.linkedin} target="_blank" rel="noreferrer" variant="secondary">
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Ver LinkedIn
                  </Button>
                  <Button href={profile.cvFile} download variant="ghost">
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Descargar CV
                  </Button>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {heroMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-4 shadow-[0_10px_28px_rgba(15,23,42,0.035)]">
                      <p className="text-3xl font-semibold tracking-[-0.06em] text-[var(--ink)]">{metric.value}</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="animate-rise delay-200">
              <div className="relative h-full overflow-hidden rounded-[1.8rem] bg-[var(--contrast)] p-5 text-[var(--contrast-foreground)] shadow-[0_24px_80px_rgba(15,23,42,0.22)] sm:p-6 lg:p-7">
                <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[rgba(15,118,110,0.38)] blur-3xl" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-[rgba(20,184,166,0.18)] blur-3xl" aria-hidden="true" />

                <div className="relative rounded-[1.5rem] border border-[var(--contrast-line)] bg-[var(--contrast-card)] p-5 backdrop-blur">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/avatar-luis.svg"
                        alt="Monograma de Luis Fernando Calcina Ticlla"
                        width={78}
                        height={78}
                        priority
                        className="rounded-3xl ring-1 ring-[var(--contrast-line)]"
                      />
                      <div>
                        <p className="mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-on-contrast)]">
                          Engineering operating model
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                          Producto, arquitectura y delivery
                        </h2>
                      </div>
                    </div>
                    <ArrowUpRight className="hidden h-6 w-6 text-[var(--contrast-foreground-faint)] sm:block" aria-hidden="true" />
                  </div>

                  <div className="mt-7 space-y-3">
                    {heroFocus.map((item) => (
                      <div key={item.label} className="rounded-3xl border border-[var(--contrast-line)] bg-[var(--contrast-card)] p-4">
                        <p className="mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--contrast-foreground-faint)]">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm font-semibold leading-6 text-[var(--contrast-foreground-soft)]">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative mt-5 rounded-[1.5rem] border border-[var(--contrast-line)] bg-[var(--contrast-card-strong)] p-5">
                  <div className="flex items-center gap-2 text-xs text-[var(--contrast-foreground-faint)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--line-strong)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-hover)]" />
                    <span className="mono ml-2">frontend-readiness.ts</span>
                  </div>
                  <div className="mono mt-5 space-y-3 text-sm leading-7">
                    <p><span className="text-[var(--accent-on-contrast)]">scope</span>: enterprise systems;</p>
                    <p><span className="text-[var(--accent-on-contrast)]">focus</span>: architecture + performance;</p>
                    <p><span className="text-[var(--accent-on-contrast)]">delivery</span>: clean, measurable, scalable;</p>
                  </div>
                </div>

                <div className="relative mt-5 rounded-[1.5rem] bg-[var(--contrast-foreground)] p-5 text-[var(--contrast)]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                    <p className="text-pretty text-sm font-semibold leading-7">
                      Bases frontend limpias, medibles y sostenibles para equipos que deben entregar rápido sin romper producción.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
