"use client";

import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { locale } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f9fc]">
      <NavBar />
      <main className="flex flex-1 items-center justify-center px-4 pt-24 pb-8">
        <div className="relative text-center">
          {/* Wave decoration */}
          <svg
            className="absolute -top-20 left-1/2 h-40 w-80 -translate-x-1/2 opacity-20"
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,150 C100,100 200,50 300,120 C350,150 380,130 400,100" stroke="#3B9FDA" strokeWidth="2" fill="none" />
            <path d="M0,170 C120,130 220,80 320,140 C360,160 390,150 400,130" stroke="#3B9FDA" strokeWidth="1.5" fill="none" opacity="0.6" />
            <path d="M0,190 C80,160 180,110 280,160 C330,180 370,170 400,150" stroke="#3B9FDA" strokeWidth="1" fill="none" opacity="0.3" />
          </svg>

          <h1 className="text-[100px] font-black leading-none tracking-tight text-[#3B9FDA]/20">
            404
          </h1>
          <h2 className="-mt-6 text-xl font-bold tracking-wide text-navy">
            {locale === "zh" ? "页面未找到" : "Page Not Found"}
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            {locale === "zh"
              ? "您访问的页面不存在或已被移除"
              : "The page you are looking for does not exist or has been removed"}
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-[#3B9FDA] to-[#1B6BAA] px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:brightness-110 hover:-translate-y-0.5"
          >
            {locale === "zh" ? "返回首页" : "Back to Home"}
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
