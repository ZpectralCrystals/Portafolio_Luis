import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SkillHighlightCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
};

export function SkillHighlightCard({ title, description, icon: Icon, className }: SkillHighlightCardProps) {
  return (
    <article
      className={cn(
        "group h-full rounded-[1.45rem] border border-[var(--line)] bg-[var(--surface)] p-4 shadow-[0_14px_42px_rgba(15,23,42,0.045)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(20,184,166,0.34)] hover:bg-[var(--surface-strong)] hover:shadow-[0_18px_52px_rgba(15,23,42,0.065)]",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)] ring-1 ring-[rgba(15,118,110,0.12)] transition group-hover:scale-105">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-[-0.02em] text-[var(--ink)]">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">{description}</p>
        </div>
      </div>
    </article>
  );
}
