"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutCeoContent() {
  const { t } = useLanguage();
  const c = t.about.ceo;

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <main className="flex-1 px-4 pt-24 pb-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-center text-xl font-bold tracking-wide text-navy sm:text-2xl">{c.title}</h1>
          <div className="mx-auto mt-3 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#3B9FDA] to-transparent" />

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="flex aspect-square items-center justify-center rounded-xl bg-[#edf2f7] text-sm text-[#94a3b8]">
              {c.photoPlaceholder}
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy">{c.name}</h2>
              <p className="mt-1 text-sm text-[#3B9FDA]">{c.role}</p>
              <div className="mt-6 text-sm leading-relaxed text-gray-500 whitespace-pre-line">
                {c.message}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
