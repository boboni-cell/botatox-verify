"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

function GlobeIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

const ABOUT_SUB = ["ceo", "intro", "network"] as const;

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const { locale, t, setLocale } = useLanguage();

  const NAV_ITEMS = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.products, href: "/products" },
    { label: t.nav.verification, href: "/verify" },
    { label: t.nav.about, href: "/about/intro", hasDropdown: true },
    { label: t.nav.news, href: "/news" },
    { label: t.nav.contact, href: "/contact" },
  ];

  // Close language dropdown when clicking outside
  useEffect(() => {
    if (!langOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(e.target as Node)
      ) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [langOpen]);

  const handleSetLocale = (l: "zh" | "en" | "ko") => {
    setLocale(l);
    setLangOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#e2e8f0] bg-white/90 backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2.5 md:py-3 sm:px-6">
        {/* Left: Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/HYDUNDAIBIO-LOGO.png"
            alt="HYUNDAIBIO Logo"
            className="h-20 w-20 md:h-16 md:w-16 object-contain"
          />
          <span className="text-lg md:text-base font-bold tracking-[0.15em] text-[#1B6BAA]">
            HYUNDAIBIO
          </span>
        </Link>

        {/* Right: Desktop Nav + Language Switcher */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) =>
            item.hasDropdown ? (
              <div key={item.label} className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm md:text-[13px] font-medium text-gray-500 transition-colors hover:bg-blue-50 hover:text-[#3B9FDA]"
                >
                  {item.label}
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </Link>
                {aboutOpen && (
                  <div className="absolute left-0 top-full mt-1 w-36 rounded-xl border border-gray-100 bg-white py-1 shadow-lg">
                    {ABOUT_SUB.map((key) => (
                      <Link key={key} href={`/about/${key}`} className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3B9FDA]">
                        {t.about.nav[key]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="rounded-lg px-3 py-1.5 md:px-3 md:py-1.5 text-sm md:text-[13px] font-medium text-gray-500 transition-colors hover:bg-blue-50 hover:text-[#3B9FDA]">
                {item.label}
              </Link>
            )
          )}
          {/* Desktop Language Switcher */}
          <div className="ml-3 flex items-center rounded-md border border-gray-200 bg-gray-50 p-0.5">
            <button
              onClick={() => setLocale("zh")}
              className={`rounded-sm px-2 py-1 md:px-2 md:py-1 text-xs md:text-[11px] font-medium transition-all ${
                locale === "zh"
                  ? "bg-[#3B9FDA] text-white shadow-sm"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              中文
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`rounded-sm px-2 py-1 md:px-2 md:py-1 text-xs md:text-[11px] font-medium transition-all ${
                locale === "en"
                  ? "bg-[#3B9FDA] text-white shadow-sm"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLocale("ko")}
              className={`rounded-sm px-2 py-1 md:px-2 md:py-1 text-xs md:text-[11px] font-medium transition-all ${
                locale === "ko"
                  ? "bg-[#3B9FDA] text-white shadow-sm"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              한
            </button>
          </div>
        </div>

        {/* Right: Mobile Controls */}
        <div className="flex items-center gap-1 md:hidden">
          {/* Mobile Language Switcher (Globe Icon + Dropdown) */}
          <div ref={langDropdownRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center justify-center rounded-lg p-2 transition-colors ${
                langOpen
                  ? "bg-blue-50 text-[#3B9FDA]"
                  : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              }`}
              aria-label="切换语言"
            >
              <GlobeIcon />
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-1 w-36 rounded-xl border border-gray-100 bg-white py-1 shadow-lg shadow-gray-200/50 animate-[fadeIn_0.15s_ease-out]">
                <button
                  onClick={() => handleSetLocale("zh")}
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                >
                  <span className="w-4 flex-shrink-0">
                    {locale === "zh" && <CheckIcon />}
                  </span>
                  <span>中文</span>
                </button>
                <button
                  onClick={() => handleSetLocale("en")}
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                >
                  <span className="w-4 flex-shrink-0">
                    {locale === "en" && <CheckIcon />}
                  </span>
                  <span>English</span>
                </button>
                <button
                  onClick={() => handleSetLocale("ko")}
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                >
                  <span className="w-4 flex-shrink-0">
                    {locale === "ko" && <CheckIcon />}
                  </span>
                  <span>한국어</span>
                </button>
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100"
            aria-label="菜单"
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 pt-2 md:hidden">
          {NAV_ITEMS.map((item) =>
            item.hasDropdown ? (
              <div key={item.label}>
                <button onClick={() => setAboutOpen(!aboutOpen)} className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-500 hover:bg-blue-50 hover:text-[#3B9FDA]">
                  {item.label}
                  <svg className={`h-3 w-3 transition-transform ${aboutOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {aboutOpen && (
                  <div className="ml-4 border-l border-gray-100 pl-3">
                    {ABOUT_SUB.map((key) => (
                      <Link key={key} href={`/about/${key}`} onClick={() => { setMenuOpen(false); setAboutOpen(false); }} className="block rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-[#3B9FDA]">
                        {t.about.nav[key]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:bg-blue-50 hover:text-[#3B9FDA]">
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
