"use client";

import { useState, useRef, type ChangeEvent } from "react";

export default function VerificationCard() {
  const [code, setCode] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const hasInput = code.trim().length > 0 || image !== null;

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleVerify = async () => {
    if (!hasInput || isVerifying) return;
    setIsVerifying(true);
    // Mock verification — replace with real API later
    await new Promise((r) => setTimeout(r, 1500));
    setIsVerifying(false);
    alert("验证中…\n请稍候，正在为您核实产品真伪");
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white shadow-lg shadow-gray-200/50 px-6 py-8 sm:px-8">
      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold text-navy">产品真伪验证</h2>
        <p className="mt-1.5 text-sm text-gray-400">
          输入防伪码或上传防伪码图片，验证产品真伪
        </p>
      </div>

      {/* Verification Code Input */}
      <div className="mb-5">
        <label className="mb-1.5 block text-sm font-medium text-navy-light">
          防伪码
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
            placeholder="请输入防伪码"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-navy placeholder:text-gray-300 outline-none transition-all focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold-light"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="mb-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-100" />
        <span className="text-xs text-gray-300">或者</span>
        <div className="h-px flex-1 bg-gray-100" />
      </div>

      {/* Image Upload */}
      <div className="mb-6">
        <label className="mb-1.5 block text-sm font-medium text-navy-light">
          上传防伪码图片
        </label>

        {image ? (
          /* Preview */
          <div className="relative overflow-hidden rounded-xl border border-gray-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt="防伪码预览"
              className="h-40 w-full object-contain bg-gray-50"
            />
            <button
              onClick={handleRemoveImage}
              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white text-xs hover:bg-black/70 transition-colors"
              aria-label="删除图片"
            >
              ✕
            </button>
          </div>
        ) : (
          /* Drop Zone */
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex w-full flex-col items-center gap-2 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 py-8 px-4 text-center transition-colors hover:border-gold hover:bg-gold-light/30 cursor-pointer"
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
            <span className="text-sm text-gray-500">拍照或从相册选择</span>
            <span className="text-xs text-gray-300">
              支持上传防伪码图片，系统将自动识别
            </span>
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

      {/* Submit Button */}
      <button
        onClick={handleVerify}
        disabled={!hasInput || isVerifying}
        className="w-full rounded-xl bg-gold py-3.5 text-sm font-semibold text-white tracking-wide shadow-md shadow-gold/20 transition-all hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:bg-gold"
      >
        {isVerifying ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="h-4 w-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            验证中…
          </span>
        ) : (
          "立即验证"
        )}
      </button>
    </div>
  );
}
