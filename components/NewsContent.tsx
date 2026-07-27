"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsContent() {
  const { t } = useLanguage();
  const n = t.news;
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <main className="flex-1 px-4 pt-28 pb-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-center text-xl font-bold tracking-wide text-navy sm:text-2xl">{n.title}</h1>
          <div className="mx-auto mt-3 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#3B9FDA] to-transparent" />

          {/* News Cards */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {n.items.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-xl bg-white shadow-[0_2px_12px_rgba(26,54,93,0.06)] border border-[rgba(26,54,93,0.06)]">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs text-gray-400">{item.date}</span>
                  <h3 className="mt-1 text-sm font-semibold text-navy line-clamp-2">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-400 line-clamp-2">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Event Gallery */}
          <section className="mt-12">
            <h2 className="text-center text-base font-semibold tracking-wide text-navy">{n.gallery.title}</h2>
            <div className="mx-auto mt-2 h-[1px] w-12 bg-[#e2e8f0]" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {n.items.map((item, i) => (
                <button key={i} onClick={() => setLightbox(item.image)} className="group overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="mt-2 text-center text-xs text-gray-400">{item.event}</div>
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute right-4 top-4 text-white/60 hover:text-white">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox}
            alt="Event"
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
