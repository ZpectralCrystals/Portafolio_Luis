"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const storageKey = "luis-theme";
const ThemeContext = createContext<ThemeContextValue | null>(null);

function getResolvedTheme(): Theme {
  if (typeof document !== "undefined" && document.documentElement.dataset.theme === "dark") {
    return "dark";
  }

  return "light";
}

function applyTheme(theme: Theme, persist = true) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;

  if (persist) {
    window.localStorage.setItem(storageKey, theme);
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const frame = window.requestAnimationFrame(() => setThemeState(getResolvedTheme()));

    const handleSystemChange = (event: MediaQueryListEvent) => {
      if (!window.localStorage.getItem(storageKey)) {
        const nextTheme = event.matches ? "dark" : "light";
        applyTheme(nextTheme, false);
        setThemeState(nextTheme);
      }
    };

    if (stored !== "light" && stored !== "dark") {
      media.addEventListener("change", handleSystemChange);
    }

    return () => {
      window.cancelAnimationFrame(frame);
      media.removeEventListener("change", handleSystemChange);
    };
  }, []);

  const setTheme = useCallback((nextTheme: Theme) => {
    applyTheme(nextTheme);
    setThemeState(nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme = getResolvedTheme() === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    setThemeState(nextTheme);
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [setTheme, theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
