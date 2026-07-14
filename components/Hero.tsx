"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.home.hero;

  const scrollToVerify = () => {
    document.getElementById("verify-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex h-[50vh] min-h-[360px] items-center justify-center overflow-hidden md:h-[70vh] md:min-h-[500px]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2e] via-[#1a365d] to-[#0f2744]" />

      {/* Light particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/30 animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2.5 + Math.random() * 2}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>

      {/* Floating light beams */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/2 left-1/4 h-[200%] w-[1px] rotate-12 bg-gradient-to-b from-transparent via-white/10 to-transparent"
          style={{ animation: "float-particle 8s ease-in-out infinite" }}
        />
        <div
          className="absolute -top-1/2 left-1/2 h-[200%] w-[1px] -rotate-12 bg-gradient-to-b from-transparent via-white/8 to-transparent"
          style={{ animation: "float-particle 10s ease-in-out 2s infinite" }}
        />
        <div
          className="absolute -top-1/2 left-2/3 h-[200%] w-[1px] rotate-6 bg-gradient-to-b from-transparent via-white/6 to-transparent"
          style={{ animation: "float-particle 9s ease-in-out 4s infinite" }}
        />
      </div>

      {/* Video placeholder */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/40">
            <svg
              className="ml-1 h-8 w-8 text-white/60"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5.14v14l11-7-11-7z" />
            </svg>
          </div>
          <span className="text-sm font-light tracking-[0.3em] text-white/40 uppercase">
            {h.videoPlaceholder}
          </span>
        </div>
      </div>

      {/* Overlay content */}
      <div className="relative z-10 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-[0.25em] text-white sm:text-5xl md:text-6xl">
          {h.brand}
        </h1>
        <div className="mx-auto mt-4 h-[1px] w-16 bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />
        <p className="mt-4 text-base font-light tracking-[0.15em] text-white/70 sm:text-lg">
          {h.subtitle}
        </p>
        <button
          onClick={scrollToVerify}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0"
        >
          {h.cta}
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
