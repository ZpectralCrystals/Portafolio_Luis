"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme/theme-provider";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className={cn(
        "group inline-flex h-11 items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-2 text-[var(--ink)] shadow-[0_12px_34px_rgba(15,23,42,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[var(--accent-hover)] hover:bg-[var(--surface-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]",
        className
      )}
    >
      <span className="sr-only">{isDark ? "Modo oscuro activo" : "Modo claro activo"}</span>
      <span
        className={cn(
          "grid h-8 w-8 place-items-center rounded-full transition",
          isDark ? "bg-transparent text-[var(--ink-muted)]" : "bg-[var(--accent-soft)] text-[var(--accent-strong)]"
        )}
        aria-hidden="true"
      >
        <Sun className="h-4 w-4" />
      </span>
      <span
        className={cn(
          "grid h-8 w-8 place-items-center rounded-full transition",
          isDark ? "bg-[var(--accent-soft)] text-[var(--accent-strong)]" : "bg-transparent text-[var(--ink-muted)]"
        )}
        aria-hidden="true"
      >
        <Moon className="h-4 w-4" />
      </span>
    </button>
  );
}
