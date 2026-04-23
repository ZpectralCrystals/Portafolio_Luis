import { Container } from "@/components/ui/container";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[rgba(251,250,246,0.68)] py-8">
      <Container className="flex flex-col gap-4 text-sm text-[var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Frontend enterprise portfolio.</p>
        <div className="flex flex-wrap gap-4">
          <a className="font-semibold hover:text-[var(--ink)]" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="font-semibold hover:text-[var(--ink)]" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  );
}
