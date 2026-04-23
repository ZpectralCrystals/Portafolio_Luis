import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--line)] bg-white/74 px-3 py-1 text-xs font-semibold text-[var(--ink-muted)] shadow-[0_8px_22px_rgba(17,24,39,0.04)]",
        className
      )}
    >
      {children}
    </span>
  );
}
