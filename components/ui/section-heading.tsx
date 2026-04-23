import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, className, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className="mono inline-flex rounded-full border border-[rgba(20,184,166,0.22)] bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
        {eyebrow}
      </p>
      <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.06em] text-[var(--ink)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-8 text-[var(--ink-muted)] sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
