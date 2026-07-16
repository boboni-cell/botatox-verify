"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/context/LanguageContext";

export default function FaqContent() {
  const { t } = useLanguage();
  const faq = t.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <main className="flex-1 px-4 pt-28 pb-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-center text-xl font-bold tracking-wide text-navy sm:text-2xl">{faq.title}</h1>
          <div className="mx-auto mt-3 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#3B9FDA] to-transparent" />

          <div className="mt-8 space-y-3">
            {faq.items.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-xl bg-white shadow-[0_2px_12px_rgba(26,54,93,0.06)] border border-[rgba(26,54,93,0.06)]">
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-navy transition-colors hover:bg-gray-50"
                >
                  <span className="pr-4">{item.q}</span>
                  <svg
                    className={`h-4 w-4 flex-shrink-0 text-gray-400 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="animate-[fadeIn_0.2s_ease-out] border-t border-[#e2e8f0] px-5 py-4 text-sm leading-relaxed text-gray-500">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
