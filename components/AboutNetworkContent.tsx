"use client";

import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutNetworkContent() {
  const { t } = useLanguage();
  const n = t.about.network;

  const stats = [
    { value: n.stats.countries },
    { value: n.stats.regions },
    { value: n.stats.founded },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <main className="flex-1 px-4 pt-24 pb-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-center text-xl font-bold tracking-wide text-navy sm:text-2xl">{n.title}</h1>
          <div className="mx-auto mt-3 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#3B9FDA] to-transparent" />
          <p className="mt-6 text-center text-sm leading-relaxed text-gray-500">{n.desc}</p>

          {/* World Map SVG */}
          <div className="mt-8 flex justify-center">
            <svg className="h-64 w-full max-w-lg" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Simplified world map */}
              <ellipse cx="300" cy="150" rx="280" ry="140" fill="#EBF4FF" stroke="#3B9FDA" strokeWidth="0.5" opacity="0.5" />
              {/* Americas */}
              <path d="M80,30 C60,80 70,140 90,180 C110,220 100,260 120,270" stroke="#3B9FDA" strokeWidth="1" fill="none" />
              <circle cx="85" cy="60" r="5" fill="#3B9FDA" />
              <text x="95" y="55" className="text-[8px]" fill="#1B6BAA">USA</text>
              {/* Europe */}
              <circle cx="280" cy="55" r="5" fill="#3B9FDA" />
              <text x="290" y="50" className="text-[8px]" fill="#1B6BAA">Germany</text>
              {/* Asia */}
              <circle cx="450" cy="90" r="5" fill="#3B9FDA" />
              <text x="460" y="85" className="text-[8px]" fill="#1B6BAA">Vietnam</text>
            </svg>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {stats.map((s) => (
              <div key={s.value} className="rounded-xl bg-white px-4 py-6 shadow-[0_2px_12px_rgba(26,54,93,0.06)] border border-[rgba(26,54,93,0.06)]">
                <p className="text-xl font-bold text-[#3B9FDA]">{s.value}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">{n.cta}</p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-[#3B9FDA] to-[#1B6BAA] px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:brightness-110 hover:-translate-y-0.5"
            >
              {n.ctaButton}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
