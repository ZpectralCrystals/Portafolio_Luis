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
};

const size = 154;
const strokeWidth = 10;
const radius = (size - strokeWidth) / 2;
const circumference = 2 * Math.PI * radius;

export function CircularSkillProgress({
  name,
  percentage,
  category,
  description,
  delay = 0,
  className
}: CircularSkillProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);

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
        "group relative overflow-hidden rounded-[1.8rem] border border-[var(--line)] bg-white/70 p-5 text-center shadow-[0_18px_54px_rgba(17,24,39,0.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[rgba(15,118,110,0.32)] hover:bg-white/86 hover:shadow-[0_24px_70px_rgba(17,24,39,0.1)]",
        className
      )}
    >
      <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(15,118,110,0.4),transparent)]" />
      <div className="relative mx-auto grid h-[154px] w-[154px] place-items-center">
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
            stroke="rgba(17, 24, 39, 0.08)"
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
            className="transition-[stroke-dashoffset] duration-500 ease-out"
          />
        </svg>

        <div className="absolute grid h-[108px] w-[108px] place-items-center rounded-full border border-[var(--line)] bg-[rgba(255,255,252,0.88)] shadow-[inset_0_1px_0_rgba(255,255,255,0.88),0_14px_34px_rgba(17,24,39,0.06)]">
          <div>
            <p className="text-3xl font-semibold tracking-[-0.06em] text-[var(--ink)]">{animatedValue}%</p>
            <p className="mono mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">
              dominio
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
          {category}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{name}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">{description}</p>
      </div>
    </article>
  );
}
