"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsContent() {
  const { t } = useLanguage();
  const n = t.news;

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
                <div className="flex aspect-video items-center justify-center bg-[#edf2f7] text-xs text-[#94a3b8]">
                  {n.title}
                </div>
                <div className="p-4">
                  <span className="text-xs text-gray-400">{item.date}</span>
                  <h3 className="mt-1 text-sm font-semibold text-navy line-clamp-2">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-400 line-clamp-2">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Activity Videos */}
          <section className="mt-12">
            <h2 className="text-center text-base font-semibold tracking-wide text-navy">{n.videos.title}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex aspect-video flex-col items-center justify-center gap-2 rounded-xl bg-[#edf2f7] text-[#94a3b8]">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5.14v14l11-7-11-7z" /></svg>
                  <span className="text-xs">{n.videos.placeholder}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
