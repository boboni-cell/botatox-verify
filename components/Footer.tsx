"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="mt-auto bg-[#1B6BAA] py-8 px-4">
      <div className="mx-auto flex max-w-md flex-col items-center gap-2 text-center text-xs text-white/50">
        <p>&copy; {new Date().getFullYear()} HYUNDAIBIO. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/faq" className="hover:text-white/80 transition-colors">
            {f.faq}
          </Link>
          <Link href="/contact" className="hover:text-white/80 transition-colors">
            {f.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}
