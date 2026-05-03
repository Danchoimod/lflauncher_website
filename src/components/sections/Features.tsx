"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export const Features = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="w-full max-w-[1024px] mx-auto py-10 px-4 flex flex-col items-center gap-12 md:gap-16">
      <h2 className="text-[28px] md:text-[32px] font-bold text-[#0F172A] mb-4">{t("features.title")}</h2>

      {/* Row 1: Versions */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full">
        <div className="w-full flex-1 aspect-[16/10] relative rounded-xl md:rounded-2xl overflow-hidden border border-zinc-200">
          <Image src="/screenshot/screenshot_java.png" alt="Versions" fill className="object-cover" sizes="(max-width: 768px) 100vw, 600px" />
        </div>
        <div className="w-full md:w-[320px] text-center md:text-right">
          <h3 className="text-[22px] md:text-[28px] font-bold text-[#0F172A] mb-3 md:mb-5">{t("features.v.title")}</h3>
          <p className="text-[14px] md:text-[15px] text-[#545F73] leading-relaxed">
            {t("features.v.desc")}
          </p>
        </div>
      </div>

      {/* Row 2: Settings */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 w-full">
        <div className="w-full md:w-[320px] text-center md:text-left">
          <h3 className="text-[22px] md:text-[28px] font-bold text-[#0F172A] mb-3 md:mb-5">{t("features.s.title")}</h3>
          <p className="text-[14px] md:text-[15px] text-[#545F73] leading-relaxed">
            {t("features.s.desc")}
          </p>
        </div>
        <div className="w-full flex-1 aspect-[16/10] relative rounded-xl md:rounded-2xl overflow-hidden border border-zinc-200">
          <Image src="/screenshot/screenshot_settings.png" alt="Settings" fill className="object-cover" sizes="(max-width: 768px) 100vw, 600px" />
        </div>
      </div>
    </section>
  );
};
