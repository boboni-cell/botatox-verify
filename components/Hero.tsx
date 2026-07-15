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
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/video/1.mp4"
      >
        <source src="/video/1.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* SVG Wave Curves */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100,900 C150,600 400,200 700,300 C1000,400 1150,150 1300,50 L1300,900 L-100,900 Z"
          fill="#3B9FDA"
          opacity="0.10"
          className="animate-wave"
        />
        <path
          d="M-100,900 C200,550 500,100 800,250 C1050,350 1200,200 1350,100 L1350,900 L-100,900 Z"
          fill="#3B9FDA"
          opacity="0.14"
          className="animate-wave"
          style={{ animationDelay: "2s", animationDuration: "10s" }}
        />
        <path
          d="M-100,900 C250,650 450,300 750,400 C1000,480 1200,300 1350,200 L1350,900 L-100,900 Z"
          fill="#3B9FDA"
          opacity="0.20"
          className="animate-wave"
          style={{ animationDelay: "4s", animationDuration: "12s" }}
        />
        <path
          d="M0,0 C300,100 600,50 900,120 C1050,160 1200,140 1300,100 L1300,0 L0,0 Z"
          fill="#3B9FDA"
          opacity="0.08"
          className="animate-wave"
          style={{ animationDelay: "1s", animationDuration: "9s" }}
        />
      </svg>

      {/* Light particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/20 animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      {/* Overlay content */}
      <div className="relative z-10 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-[0.25em] text-white sm:text-5xl md:text-6xl">
          {h.brand}
        </h1>
        <div className="mx-auto mt-4 h-[1px] w-16 bg-white/40" />
        <p className="mt-4 text-base font-light tracking-[0.15em] text-white/80 sm:text-lg">
          {h.subtitle}
        </p>
        <button
          onClick={scrollToVerify}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0"
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
