"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductsContent() {
  const { t } = useLanguage();
  const p = t.products;

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <main className="flex-1 px-4 pt-24 pb-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-xl font-bold tracking-wide text-navy sm:text-2xl">
            {p.title}
          </h1>
          <p className="mt-2 text-sm text-gray-400">{p.subtitle}</p>
          <div className="mx-auto mt-3 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {p.items.map((item) => (
            <div
              key={item.name}
              className="group rounded-2xl bg-white shadow-sm shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Product Image Placeholder */}
              <div className="flex h-48 items-center justify-center rounded-t-2xl bg-gray-100">
                <svg
                  className="h-12 w-12 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                  />
                </svg>
              </div>

              <div className="p-5">
                <h3 className="text-sm font-semibold tracking-wide text-navy">
                  {item.name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-400">
                  {item.desc}
                </p>
                <button className="mt-4 w-full rounded-lg border border-gray-200 py-2 text-xs font-medium text-gray-400 transition-colors hover:border-[#2b6cb0] hover:text-[#2b6cb0]">
                  {p.learnMore}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
