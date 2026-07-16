"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import zh from "@/locales/zh";
import en from "@/locales/en";
import ko from "@/locales/ko";
import type { Translations } from "@/locales/zh";

type Locale = "zh" | "en" | "ko";
const ALL: Locale[] = ["zh", "en", "ko"];

const translations: Record<Locale, Translations> = { zh, en, ko };

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  toggleLanguage: () => void;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  t: en,
  toggleLanguage: () => {},
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("locale") as Locale | null;
      if (saved === "zh" || saved === "en" || saved === "ko") {
        setLocaleState(saved);
      }
    } catch {
      // localStorage not available
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("locale", l);
    } catch {
      // localStorage not available
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLocaleState((prev) => {
      const idx = ALL.indexOf(prev);
      const next = ALL[(idx + 1) % ALL.length];
      try {
        localStorage.setItem("locale", next);
      } catch {
        // localStorage not available
      }
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider
      value={{ locale, t: translations[locale], toggleLanguage, setLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
