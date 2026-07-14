"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="mt-auto border-t border-gray-200 py-6 px-4">
      <div className="mx-auto flex max-w-md flex-col items-center gap-2 text-center text-xs text-gray-400">
        <p>{f.copyright}</p>
        <div className="flex gap-4">
          <span className="hover:text-gray-600 cursor-pointer transition-colors">
            {f.privacy}
          </span>
          <span className="hover:text-gray-600 cursor-pointer transition-colors">
            {f.contact}
          </span>
        </div>
      </div>
    </footer>
  );
}
