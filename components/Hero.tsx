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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b5c] via-[#1B6BAA] to-[#0a2d45]" />

      {/* SVG Wave Curves */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer wave - opacity 0.1 */}
        <path
          d="M-100,900 C150,600 400,200 700,300 C1000,400 1150,150 1300,50 L1300,900 L-100,900 Z"
          fill="#3B9FDA"
          opacity="0.08"
          className="animate-wave"
        />
        {/* Middle wave - opacity 0.15 */}
        <path
          d="M-100,900 C200,550 500,100 800,250 C1050,350 1200,200 1350,100 L1350,900 L-100,900 Z"
          fill="#3B9FDA"
          opacity="0.12"
          className="animate-wave"
          style={{ animationDelay: "2s", animationDuration: "10s" }}
        />
        {/* Inner wave - opacity 0.2 */}
        <path
          d="M-100,900 C250,650 450,300 750,400 C1000,480 1200,300 1350,200 L1350,900 L-100,900 Z"
          fill="#3B9FDA"
          opacity="0.18"
          className="animate-wave"
          style={{ animationDelay: "4s", animationDuration: "12s" }}
        />
        {/* Top accent wave */}
        <path
          d="M0,0 C300,100 600,50 900,120 C1050,160 1200,140 1300,100 L1300,0 L0,0 Z"
          fill="#3B9FDA"
          opacity="0.06"
          className="animate-wave"
          style={{ animationDelay: "1s", animationDuration: "9s" }}
        />
      </svg>

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

      {/* Video placeholder */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15">
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/30">
            <svg
              className="ml-1 h-8 w-8 text-white/50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5.14v14l11-7-11-7z" />
            </svg>
          </div>
          <span className="text-sm font-light tracking-[0.3em] text-white/30 uppercase">
            {h.videoPlaceholder}
          </span>
        </div>
      </div>

      {/* Overlay content */}
      <div className="relative z-10 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-[0.25em] text-white sm:text-5xl md:text-6xl">
          {h.brand}
        </h1>
        <div className="mx-auto mt-4 h-[1px] w-16 bg-[#3B9FDA]/50" />
        <p className="mt-4 text-base font-light tracking-[0.15em] text-white/70 sm:text-lg">
          {h.subtitle}
        </p>
        <button
          onClick={scrollToVerify}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-[#3B9FDA] to-[#1B6BAA] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#3B9FDA]/20 transition-all hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0"
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
