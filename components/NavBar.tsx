"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "首页", href: "#" },
  { label: "产品验证", href: "#" },
  { label: "关于我们", href: "#" },
  { label: "联系方式", href: "#" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2.5 sm:px-6">
        {/* Left: Logo + Brand */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-gray-100 text-xs font-semibold text-gray-400">
            LOGO
          </div>
          <span className="text-lg font-bold tracking-[0.15em] text-navy">
            HYUNDAIBIO
          </span>
        </a>

        {/* Right: Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-blue-50 hover:text-[#2b6cb0]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 md:hidden"
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 pt-2 md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:bg-blue-50 hover:text-[#2b6cb0]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
