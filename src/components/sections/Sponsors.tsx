"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export const Sponsors = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full max-w-[1024px] mx-auto py-8 px-4 border-t border-zinc-100/50">
      <h2 className="text-[24px] md:text-[28px] font-bold text-[#0F172A] mb-5 text-center md:text-left">{t("sponsors.title")}</h2>
      <p className="text-[14px] md:text-[15px] text-[#545F73] mb-8 max-w-xl leading-relaxed text-center md:text-left">
        {t("sponsors.desc")} <span className="text-[#1E6D00] font-semibold cursor-pointer underline underline-offset-4 decoration-zinc-200">{t("sponsors.link")}</span>.
      </p>
      
      <div className="flex justify-center md:justify-start">
        <a 
          href="https://www.buymeacoffee.com/tranphuphaq" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#FFDD00] hover:bg-[#F7D100] text-black px-5 py-2.5 rounded-lg font-bold text-[13px] border border-black/5 transition-all active:scale-95"
        >
          <img 
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" 
            alt="Buy me a coffee" 
            className="w-5 h-5"
          />
          <span className="font-['Cookie'] text-lg">{t("sponsors.bmc")}</span>
        </a>
      </div>
    </section>
  );
};
