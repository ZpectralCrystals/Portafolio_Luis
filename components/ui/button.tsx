import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--contrast)] text-[var(--contrast-foreground)] shadow-[0_18px_45px_rgba(15,23,42,0.18)] hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] hover:text-[var(--accent-foreground)] hover:shadow-[0_24px_60px_rgba(20,184,166,0.18)]",
  secondary:
    "border border-[var(--line-strong)] bg-[var(--surface)] text-[var(--ink)] shadow-[0_12px_34px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 hover:border-[var(--accent-hover)] hover:bg-[var(--surface-strong)]",
  ghost:
    "text-[var(--accent-strong)] hover:bg-[rgba(20,184,166,0.1)] hover:text-[var(--ink)]"
};

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
