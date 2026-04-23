import { cn } from "@/lib/utils";

type PremiumCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function PremiumCard({ children, className }: PremiumCardProps) {
  return (
    <div className={cn("premium-card rounded-[2rem]", className)}>
      <div className="relative">{children}</div>
    </div>
  );
}
