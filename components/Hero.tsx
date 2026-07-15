"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const R2 = "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev";
const VIDEOS = [`${R2}/1.mp4`, `${R2}/2.mp4`];

export default function Hero() {
  const { t } = useLanguage();
  const h = t.home.hero;
  const [currentSrc, setCurrentSrc] = useState(VIDEOS[0]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const indexRef = useRef(0);
  const mountedRef = useRef(false);

  const switchToNext = useCallback(() => {
    indexRef.current = (indexRef.current + 1) % VIDEOS.length;
    setCurrentSrc(VIDEOS[indexRef.current]);
  }, []);

  // When src changes, play the new video
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play().catch(() => {});
    }
  }, [currentSrc]);

  const handleEnded = useCallback(() => {
    switchToNext();
  }, [switchToNext]);

  return (
    <section className="relative flex h-[50vh] min-h-[360px] items-center justify-center overflow-hidden md:h-[70vh] md:min-h-[500px]">
      {/* Single Video Background */}
      <video
        ref={videoRef}
        key={currentSrc}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        className="absolute inset-0 h-full w-full object-cover"
        src={currentSrc}
      />

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

      {/* Brand Name */}
      <div className="relative z-10 text-center">
        <h1
          className="text-[60px] font-black leading-none tracking-[0.3em] text-white md:text-[120px]"
          style={{
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            animation: "fadeInUp 1s ease-out forwards",
          }}
        >
          {h.brand}
        </h1>
        <div
          className="mx-auto mt-4 h-[1px] w-20 bg-white/60"
          style={{ animation: "fadeIn 0.8s ease-out 0.3s both" }}
        />
      </div>
    </section>
  );
}
