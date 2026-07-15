"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="mt-auto bg-[#003A70] py-8 px-4">
      <div className="mx-auto flex max-w-md flex-col items-center gap-2 text-center text-xs text-white/50">
        <p>{f.copyright}</p>
        <div className="flex gap-4">
          <span className="hover:text-white/80 cursor-pointer transition-colors">
            {f.privacy}
          </span>
          <span className="hover:text-white/80 cursor-pointer transition-colors">
            {f.contact}
          </span>
        </div>
      </div>
    </footer>
  );
}
