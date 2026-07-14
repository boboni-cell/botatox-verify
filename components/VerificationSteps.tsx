function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="mt-4 flex h-36 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 text-sm text-gray-300">
      {label}
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-1">
      <svg
        className="h-6 w-6 text-gold/40"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
}

export default function VerificationSteps() {
  return (
    <section className="mx-auto mt-10 w-full max-w-2xl px-4 pb-12">
      {/* Section Title */}
      <div className="mb-8 text-center">
        <h2 className="text-lg font-semibold tracking-wide text-navy">
          验证流程
        </h2>
        <div className="mx-auto mt-2 h-[2px] w-10 rounded-full bg-gold" />
      </div>

      {/* Steps */}
      <div className="space-y-0">
        {/* STEP 1 */}
        <div className="rounded-2xl bg-white px-6 py-6 shadow-sm shadow-gray-200/50 sm:px-8">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex-shrink-0 rounded-full bg-gold-light px-3 py-1 text-xs font-bold tracking-wider text-gold-dark">
              STEP 1
            </span>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-navy">
                找到防伪码
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                在 BOTATOX 产品包装上找到防伪标签，标签上印有唯一的防伪验证码。
              </p>
              <PlaceholderImage label="示意图：防伪标签位置" />
            </div>
          </div>
        </div>

        <Connector />

        {/* STEP 2 */}
        <div className="rounded-2xl bg-white px-6 py-6 shadow-sm shadow-gray-200/50 sm:px-8">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex-shrink-0 rounded-full bg-gold-light px-3 py-1 text-xs font-bold tracking-wider text-gold-dark">
              STEP 2
            </span>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-navy">
                输入或扫描防伪码
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                在上方输入框中手动输入防伪码，或拍照上传防伪标签图片，系统将自动识别。
              </p>
              <PlaceholderImage label="示意图：输入/扫描操作" />
            </div>
          </div>
        </div>

        <Connector />

        {/* STEP 3 */}
        <div className="rounded-2xl bg-white px-6 py-6 shadow-sm shadow-gray-200/50 sm:px-8">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex-shrink-0 rounded-full bg-gold-light px-3 py-1 text-xs font-bold tracking-wider text-gold-dark">
              STEP 3
            </span>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-navy">
                系统验证
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                系统将在数据库中比对您的防伪码，验证过程仅需几秒钟。
              </p>
              <PlaceholderImage label="示意图：系统验证中" />
            </div>
          </div>
        </div>

        <Connector />

        {/* STEP 4 */}
        <div className="rounded-2xl bg-white px-6 py-6 shadow-sm shadow-gray-200/50 sm:px-8">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex-shrink-0 rounded-full bg-gold-light px-3 py-1 text-xs font-bold tracking-wider text-gold-dark">
              STEP 4
            </span>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-navy">
                查看验证结果
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                验证通过将显示产品详细信息，确认为正品。如显示警告信息，该产品可能为仿冒品，请联系官方客服。
              </p>

              {/* Result Comparison Cards */}
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {/* Genuine Card */}
                <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50/50 px-4 py-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-700">
                      正品验证通过
                    </p>
                    <p className="text-xs text-green-600/70">
                      产品为正品，请放心使用
                    </p>
                  </div>
                </div>

                {/* Counterfeit Card */}
                <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50/50 px-4 py-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                    <svg
                      className="h-5 w-5 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-red-600">
                      WARNING
                    </p>
                    <p className="text-xs text-red-500/70">
                      可能为仿冒品，请联系客服
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
