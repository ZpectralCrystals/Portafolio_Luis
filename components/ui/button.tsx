import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--ink)] text-white shadow-[0_18px_45px_rgba(17,24,39,0.22)] hover:-translate-y-0.5 hover:bg-[#0b1220] hover:shadow-[0_24px_60px_rgba(17,24,39,0.24)]",
  secondary:
    "border border-[var(--line-strong)] bg-white/78 text-[var(--ink)] shadow-[0_12px_34px_rgba(17,24,39,0.07)] hover:-translate-y-0.5 hover:border-[rgba(15,118,110,0.38)] hover:bg-white",
  ghost:
    "text-[var(--accent-strong)] hover:bg-[rgba(15,118,110,0.09)] hover:text-[var(--ink)]"
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
