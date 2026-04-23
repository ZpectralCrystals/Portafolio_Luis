import { Menu } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { navItems, profile } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--surface)] backdrop-blur-xl">
      <Container className="flex min-h-18 items-center justify-between gap-5 py-3">
        <a
          href="#inicio"
          className="group inline-flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          aria-label="Ir al inicio"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--contrast)] text-sm font-bold text-[var(--contrast-foreground)] shadow-[0_14px_34px_rgba(15,23,42,0.12)] transition group-hover:-translate-y-0.5">
            LC
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold text-[var(--ink)]">{profile.name}</span>
            <span className="mono block text-[0.68rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              Frontend Enterprise
            </span>
          </span>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface)] p-1 shadow-[0_12px_34px_rgba(15,23,42,0.045)] md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--ink-muted)] transition hover:bg-[var(--contrast)] hover:text-[var(--contrast-foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent-foreground)] shadow-[0_14px_34px_rgba(15,118,110,0.18)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            Contactar
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="h-11" />
          <details className="group relative">
            <summary className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] transition marker:hidden hover:bg-[var(--surface-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
              <span className="sr-only">Abrir menú</span>
              <Menu className="h-5 w-5" aria-hidden="true" />
            </summary>
            <div className="absolute right-0 mt-3 w-64 rounded-3xl border border-[var(--line)] bg-[var(--surface-strong)] p-3 shadow-[0_24px_80px_rgba(2,6,23,0.18)]">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--ink-muted)] hover:bg-[rgba(20,184,166,0.1)] hover:text-[var(--ink)]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block rounded-2xl bg-[var(--contrast)] px-4 py-3 text-center text-sm font-semibold text-[var(--contrast-foreground)]"
              >
                Contactar
              </a>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
