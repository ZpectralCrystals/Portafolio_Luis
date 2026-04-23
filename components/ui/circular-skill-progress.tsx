"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CircularSkillProgressProps = {
  name: string;
  percentage: number;
  category: string;
  description: string;
  delay?: number;
  className?: string;
  compact?: boolean;
};

export function CircularSkillProgress({
  name,
  percentage,
  category,
  description,
  delay = 0,
  className,
  compact = false
}: CircularSkillProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);
  const size = compact ? 140 : 154;
  const strokeWidth = compact ? 9 : 10;
  const innerSize = compact ? 96 : 108;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      const frame = window.requestAnimationFrame(() => setAnimatedValue(percentage));
      return () => window.cancelAnimationFrame(frame);
    }

    let frame = 0;
    let timeout = 0;
    const duration = 1200;

    timeout = window.setTimeout(() => {
      const startedAt = performance.now();

      const animate = (now: number) => {
        const elapsed = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - elapsed, 3);

        setAnimatedValue(Math.round(eased * percentage));

        if (elapsed < 1) {
          frame = window.requestAnimationFrame(animate);
        }
      };

      frame = window.requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(frame);
    };
  }, [delay, isVisible, percentage]);

  const strokeDashoffset = circumference - (animatedValue / 100) * circumference;

  return (
    <article
      ref={ref}
      aria-label={`${name}: ${percentage}% de dominio percibido. ${description}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-[var(--line)] bg-[var(--surface)] p-4 text-center shadow-[0_16px_48px_rgba(15,23,42,0.055)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[rgba(20,184,166,0.36)] hover:bg-[var(--surface-strong)] hover:shadow-[0_24px_70px_rgba(15,23,42,0.085)] sm:p-5",
        compact && "lg:p-4",
        className
      )}
    >
      <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(15,118,110,0.42),transparent)]" />
      <div className="absolute -right-10 -top-12 h-24 w-24 rounded-full bg-[rgba(15,118,110,0.08)] blur-2xl transition group-hover:bg-[rgba(20,184,166,0.16)]" />
      <div className="relative mx-auto grid place-items-center" style={{ height: size, width: size }}>
        <svg
          aria-hidden="true"
          className="-rotate-90 drop-shadow-[0_14px_24px_rgba(15,118,110,0.12)]"
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          width={size}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            fill="none"
            r={radius}
            stroke="var(--skill-track)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            fill="none"
            r={radius}
            stroke="var(--accent)"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            className="transition-[stroke-dashoffset] duration-500 ease-out [filter:drop-shadow(0_0_10px_rgba(15,118,110,0.18))]"
          />
        </svg>

        <div
          className="absolute grid place-items-center rounded-full border border-[var(--line)] bg-[var(--surface-strong)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_34px_rgba(15,23,42,0.055)]"
          style={{ height: innerSize, width: innerSize }}
        >
          <div>
            <p className="text-2xl font-semibold tracking-[-0.06em] text-[var(--ink)] sm:text-3xl">{animatedValue}%</p>
            <p className="mono mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">
              dominio
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <p className="mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
          {category}
        </p>
        <h3 className="mt-2 text-lg font-semibold leading-6 tracking-[-0.04em] text-[var(--ink)] sm:text-xl">{name}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">{description}</p>
      </div>
    </article>
  );
}
