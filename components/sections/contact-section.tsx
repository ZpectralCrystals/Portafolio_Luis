import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/portfolio";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail
  },
  {
    label: "Teléfono",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^\d+]/g, "")}`,
    icon: Phone
  },
  {
    label: "Ubicación",
    value: `${profile.location} (${profile.timezone})`,
    href: "https://www.google.com/maps/place/Arequipa,+Per%C3%BA",
    icon: MapPin
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/luis-calcina",
    href: profile.linkedin,
    icon: ExternalLink
  }
] as const;

export function ContactSection() {
  return (
    <section id="contacto" className="section-padding scroll-mt-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--contrast)] p-4 text-[var(--contrast-foreground)] shadow-[0_30px_90px_rgba(15,23,42,0.22)] sm:p-6 lg:p-8">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[rgba(15,118,110,0.28)] blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[rgba(20,184,166,0.16)] blur-3xl" aria-hidden="true" />

          <div className="relative grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="rounded-[2rem] border border-[var(--contrast-line)] bg-[var(--contrast-card)] p-7 backdrop-blur sm:p-10 lg:p-12">
              <p className="mono text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-on-contrast)]">
                Contacto
              </p>
              <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                Si el frontend necesita subir de nivel, conversemos.
              </h2>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[var(--contrast-foreground-muted)]">
                Disponible para roles senior, liderazgo frontend, migraciones React/Next, auditorías de performance,
                arquitectura de componentes y squads que necesitan entregar con mejor estándar técnico.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-[var(--contrast-line)] bg-[var(--contrast-card)] p-5">
                  <p className="mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--contrast-foreground-faint)]">Ideal para</p>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[var(--contrast-foreground-soft)]">
                    Recruiters, líderes técnicos, CTOs y equipos de producto con sistemas frontend críticos.
                  </p>
                </div>
                <div className="rounded-3xl border border-[var(--contrast-line)] bg-[var(--contrast-card)] p-5">
                  <p className="mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--contrast-foreground-faint)]">Zona horaria</p>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[var(--contrast-foreground-soft)]">
                    {profile.location} · {profile.timezone}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="!bg-[var(--contrast-foreground)] !text-[var(--contrast)] hover:!bg-[var(--contrast-button-hover)]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Escribirme
                </Button>
                <Button
                  href={profile.cvFile}
                  download
                  variant="secondary"
                  className="!border-[var(--contrast-line)] !bg-[var(--contrast-card)] !text-[var(--contrast-foreground)] hover:!bg-[var(--contrast-card-hover)]"
                >
                  Descargar CV
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[var(--surface-strong)] p-6 text-[var(--ink)] sm:p-8 lg:p-10">
              <p className="mono text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                Datos directos
              </p>
              <h3 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
                Contacto claro, sin fricción.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                Para entrevistas, discovery técnico, revisión de arquitectura o conversación sobre producto frontend.
              </p>

              <div className="mt-7 grid gap-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.label === "Email" || item.label === "Teléfono" ? undefined : "_blank"}
                      rel={item.label === "Email" || item.label === "Teléfono" ? undefined : "noreferrer"}
                      className="group flex items-center gap-4 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-4 shadow-[0_12px_34px_rgba(15,23,42,0.045)] transition hover:-translate-y-0.5 hover:border-[rgba(20,184,166,0.38)] hover:bg-[var(--surface-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="mono block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                          {item.label}
                        </span>
                        <span className="mt-1 block break-words font-semibold text-[var(--ink)] group-hover:text-[var(--accent-strong)]">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
