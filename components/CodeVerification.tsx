"use client";

import { useState, useRef, type ChangeEvent, type DragEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function CodeVerification() {
  const { t } = useLanguage();
  const c = t.home.codeVerification;

  const [code, setCode] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const hasInput = code.trim().length > 0 || image !== null;

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleRemoveImage = () => {
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleVerify = () => {
    if (!hasInput) return;
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="relative mx-auto mt-10 w-full max-w-md">
      <div className="absolute -top-3 right-4 z-10 rounded-full bg-gradient-to-r from-[#2b6cb0] to-[#1a365d] px-4 py-1 text-xs font-semibold text-white shadow-md">
        {c.badge}
      </div>

      <div className="rounded-2xl bg-white px-6 py-8 shadow-lg shadow-gray-200/50 sm:px-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/60">
        <div className="mb-6 text-center">
          <h2 className="text-lg font-semibold text-navy">{c.title}</h2>
          <p className="mt-1.5 text-sm text-gray-400">{c.subtitle}</p>
        </div>

        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-navy-light">
            {c.codeLabel}
          </label>
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={c.codePlaceholder}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-navy placeholder:text-gray-300 outline-none transition-all focus:border-[#2b6cb0] focus:bg-white focus:ring-2 focus:ring-[#EBF4FF]"
            />
          </div>
        </div>

        <div className="mb-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-xs text-gray-300">{c.or}</span>
          <div className="h-px flex-1 bg-gray-100" />
        </div>

        <div className="mb-6">
          <label className="mb-1.5 block text-sm font-medium text-navy-light">
            {c.uploadLabel}
          </label>

          {image ? (
            <div className="relative overflow-hidden rounded-xl border border-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={c.uploadLabel}
                className="h-40 w-full object-contain bg-gray-50"
              />
              <button
                onClick={handleRemoveImage}
                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-xs text-white transition-colors hover:bg-black/70"
                aria-label="删除图片"
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              onClick={() => fileInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`flex w-full flex-col items-center gap-2 rounded-xl border-2 border-dashed px-4 py-8 text-center transition-colors cursor-pointer ${
                isDragging
                  ? "border-[#2b6cb0] bg-[#EBF4FF]"
                  : "border-gray-200 bg-gray-50 hover:border-[#2b6cb0] hover:bg-[#EBF4FF]/50"
              }`}
            >
              <svg
                className="h-8 w-8 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
              <span className="text-sm text-gray-500">{c.uploadButton}</span>
              <span className="text-xs text-gray-300">{c.uploadHint}</span>
            </button>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        <button
          onClick={handleVerify}
          disabled={!hasInput}
          className="w-full rounded-xl bg-gradient-to-r from-[#2b6cb0] to-[#1a365d] py-3.5 text-sm font-semibold text-white tracking-wide shadow-md shadow-[#2b6cb0]/20 transition-all hover:shadow-lg hover:shadow-[#2b6cb0]/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none disabled:hover:translate-y-0 disabled:from-[#2b6cb0] disabled:to-[#1a365d]"
        >
          {c.verifyButton}
        </button>

        {showToast && (
          <div className="mt-4 animate-[fadeIn_0.3s_ease-out] rounded-xl border border-[#2b6cb0]/20 bg-[#EBF4FF] px-4 py-3 text-center text-sm font-medium text-[#1a365d]">
            {c.toast}
          </div>
        )}
      </div>
    </div>
  );
}
