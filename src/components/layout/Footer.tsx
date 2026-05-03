"use client";

import Image from "next/image";
import { Mail, X, Video } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-white border-t border-zinc-100 py-12 md:py-16 px-4">
      <div className="max-w-[1024px] mx-auto flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8">
          <div className="flex flex-col items-center md:items-start gap-6 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="relative w-7 h-7 rounded-md overflow-hidden border border-zinc-100">
                <Image src="/icon.jpg" alt="Logo" fill className="object-cover" sizes="28px" />
              </div>
              <span className="text-[18px] font-bold text-[#0F172A]">LF Launcher</span>
            </div>
            <p className="text-[14px] text-[#545F73] leading-relaxed">
              {t("footer.desc")}
            </p>
            <div className="flex flex-col gap-1">
              <span className="text-[12px] font-bold text-[#545F73] uppercase tracking-wider">{t("footer.support")}</span>
              <a href="mailto:support@lflauncher.org" className="text-[14px] text-[#1E6D00] font-medium hover:underline">
                support@lflauncher.org
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <span className="text-[12px] font-bold text-[#545F73] uppercase tracking-widest">{t("footer.connect")}</span>
            <div className="flex gap-4">
              <SocialIcon icon={<Mail className="w-4 h-4" />} />
              <SocialIcon icon={<X className="w-4 h-4" />} />
              <SocialIcon icon={<Video className="w-4 h-4" />} />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-100 text-center md:text-left">
          <span className="text-[13px] text-[#545F73]">{t("footer.copyright")}</span>
          <div className="hidden md:block w-px h-3 bg-zinc-200 mx-2" />
          <span className="text-[13px] text-[#545F73]">{t("footer.disclaimer")}</span>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-10 h-10 rounded-xl border border-zinc-100 flex items-center justify-center text-[#545F73] hover:text-[#1E6D00] hover:border-[#1E6D00]/20 hover:bg-green-50 transition-all cursor-pointer">
    {icon}
  </div>
);
