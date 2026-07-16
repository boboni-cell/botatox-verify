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
            <svg className="h-72 w-full max-w-2xl" viewBox="0 0 900 450" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Map background */}
              <rect x="20" y="20" width="860" height="410" rx="16" fill="#EBF4FF" />
              {/* Continental outlines - simplified world map */}
              <g fill="#d0dce8" stroke="#3B9FDA" strokeWidth="0.8" opacity="0.7">
                {/* North America */}
                <path d="M100,60 C80,80 70,120 85,160 C100,200 120,240 100,280 C90,300 80,310 90,330 C110,340 130,320 150,300 C170,280 200,250 220,200 C230,170 210,130 190,90 C170,60 140,40 100,60Z" />
                {/* South America */}
                <path d="M150,340 C170,330 190,350 200,380 C210,410 200,430 180,440 C160,440 140,420 135,390 C130,360 135,345 150,340Z" />
                {/* Europe */}
                <path d="M260,50 C280,40 310,35 340,45 C360,55 370,70 360,90 C350,110 330,120 310,115 C290,110 270,100 260,80 C255,65 255,55 260,50Z" />
                {/* Africa */}
                <path d="M270,130 C290,120 320,115 350,130 C380,150 390,200 380,250 C370,300 350,340 330,350 C310,350 290,320 280,280 C270,240 260,180 270,130Z" />
                {/* Asia */}
                <path d="M370,40 C420,30 480,35 530,45 C580,55 620,70 650,90 C670,110 680,140 660,160 C640,170 600,160 560,150 C520,140 480,130 440,120 C400,110 380,100 370,80 C360,60 365,50 370,40Z" />
                {/* Southeast Asia */}
                <path d="M560,150 C590,165 620,180 640,200 C650,210 640,220 620,215 C600,210 580,195 560,180 C540,165 540,155 560,150Z" />
                {/* Australia */}
                <path d="M580,250 C600,240 640,245 660,260 C680,280 670,310 650,320 C630,325 600,310 585,290 C570,270 565,255 580,250Z" />
                {/* East Asia */}
                <path d="M650,90 C680,100 710,120 730,140 C740,150 730,160 710,155 C690,150 670,130 650,110 C640,100 640,90 650,90Z" />
              </g>
              {/* Location dots with pulse animation */}
              <g>
                {/* USA */}
                <circle cx="160" cy="120" r="4" fill="#3B9FDA" />
                <circle cx="160" cy="120" r="10" fill="#3B9FDA" opacity="0.15" className="animate-pulse-glow" />
                <text x="170" y="115" fontSize="9" fill="#1B6BAA" fontWeight="600">{n.americas}</text>
                {/* Germany */}
                <circle cx="300" cy="75" r="4" fill="#3B9FDA" />
                <circle cx="300" cy="75" r="10" fill="#3B9FDA" opacity="0.15" className="animate-pulse-glow" />
                <text x="310" y="70" fontSize="9" fill="#1B6BAA" fontWeight="600">{n.europe}</text>
                {/* Vietnam */}
                <circle cx="595" cy="175" r="4" fill="#3B9FDA" />
                <circle cx="595" cy="175" r="10" fill="#3B9FDA" opacity="0.15" className="animate-pulse-glow" />
                <text x="605" y="170" fontSize="9" fill="#1B6BAA" fontWeight="600">{n.asia}</text>
              </g>
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
