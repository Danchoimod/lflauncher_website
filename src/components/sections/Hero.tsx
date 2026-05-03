"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Download, FileText, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();
  const { lang } = useParams();

  return (
    <section id="home" className="w-full flex justify-center md:py-0 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1196px] min-h-[576px] bg-white rounded-[24px] md:rounded-[36px] relative flex flex-col md:flex-row border border-zinc-200/50 overflow-hidden"
      >
        {/* Left Content Area */}
        <div className="px-6 md:pl-[52px] pt-10 md:pt-[134px] pb-10 md:pb-0 flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Badge */}
          <div className="w-fit h-[32px] px-4 rounded-full bg-[#1E6D00]/10 flex items-center justify-center gap-1.5 mb-8 md:mb-[48px]">
            <Check className="w-[14px] h-[14px] text-[#1E6D00]" />
            <span className="text-[#1E6D00] text-[11px] font-bold tracking-tight uppercase">
              {t("hero.badge")}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[32px] md:text-[48px] font-bold text-[#0F172A] leading-[1.1] mb-6 md:mb-[35px] tracking-[-0.02em]">
            {t("hero.title")}
          </h1>

          {/* Subheading */}
          <p className="text-[15px] md:text-[17px] text-[#545F73] max-w-[460px] leading-[1.6] mb-8 md:mb-[66px] font-medium">
            {t("hero.subtitle")}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href={`/${lang}/download`} className="w-full sm:w-auto">
              <button className="h-[52px] w-full px-14 rounded-lg bg-[#1E6D00] text-white text-[15px] font-bold flex items-center justify-center gap-2 hover:bg-[#1a5c00] transition-all active:scale-95 cursor-pointer">
                <Download className="w-[18px] h-[18px] stroke-[2.5px]" /> {t("hero.download")}
              </button>
            </Link>
            <button className="h-[52px] w-full sm:w-auto px-12 rounded-lg text-[#545F73] text-[15px] font-bold flex items-center justify-center gap-2 hover:bg-black/5 transition-all active:scale-95 cursor-pointer">
              <FileText className="w-[18px] h-[18px]" /> {t("hero.changelog")}
            </button>
          </div>
        </div>

        {/* Right Artwork Area */}
        <div className="w-full md:w-[580px] flex items-center justify-center p-6 md:pr-[52px]">
          <div className="w-full aspect-square max-w-[480px] relative rounded-[20px] md:rounded-[24px] overflow-hidden border-[4px] md:border-[6px] border-zinc-100">
            <Image
              src="/screenshot/screenshot_java.png"
              alt="LF Launcher Artwork"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
