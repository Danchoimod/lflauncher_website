"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Download, Monitor, Smartphone, Check, ChevronRight, FileText, Box } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function DownloadPage() {
  const { lang } = useParams();
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#F8F9FF] text-[#0F172A] selection:bg-green-500/30">
      <Navbar />

      <main className="relative pt-32 pb-24 px-4">
        <div className="max-w-[1024px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E6D00]/10 text-[#1E6D00] text-[12px] font-bold uppercase tracking-wider mb-6">
              <Download className="w-3.5 h-3.5" /> {t("download.latest")}
            </div>
            <h1 className="text-[40px] md:text-[56px] font-bold tracking-tight mb-6">
              {t("download.title")}
            </h1>
            <p className="text-[18px] text-[#545F73] max-w-2xl mx-auto">
              {t("download.subtitle")}
            </p>
          </div>

          {/* Download Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Windows Card */}
            <div className="bg-white rounded-[32px] border border-zinc-100 p-8 md:p-10 flex flex-col gap-8 shadow-sm">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-[#1E6D00]">
                  <Monitor className="w-8 h-8" />
                </div>
                <div className="text-right">
                  <span className="text-[14px] font-bold text-[#1E6D00] bg-green-50 px-3 py-1 rounded-full">
                    v1.0.0-stable
                  </span>
                  <p className="text-[12px] text-zinc-400 mt-2 font-medium">{t("download.windows.name")} • x86-64</p>
                </div>
              </div>

              <div>
                <h2 className="text-[28px] font-bold mb-4">{t("download.windows.name")}</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[#545F73] text-[15px]">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#1E6D00]" />
                    </div>
                    {t("download.windows.feat1")}
                  </div>
                  <div className="flex items-center gap-3 text-[#545F73] text-[15px]">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#1E6D00]" />
                    </div>
                    {t("download.windows.feat2")}
                  </div>
                  <div className="flex items-center gap-3 text-[#545F73] text-[15px]">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#1E6D00]" />
                    </div>
                    {t("download.windows.feat3")}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4 flex flex-col gap-3">
                <button className="w-full h-[56px] rounded-2xl bg-[#1E6D00] text-white text-[15px] font-bold flex items-center justify-center gap-3 hover:bg-[#165200] transition-colors cursor-pointer shadow-lg shadow-green-900/10">
                  <Download className="w-5 h-5" /> {t("download.windows.installer")}
                </button>
                <button className="w-full h-[56px] rounded-2xl border border-zinc-200 text-[#0F172A] text-[15px] font-bold flex items-center justify-center gap-3 hover:bg-zinc-50 transition-colors cursor-pointer">
                  <Box className="w-5 h-5 text-zinc-400" /> {t("download.windows.portable")}
                </button>
              </div>
            </div>

            {/* Android Card */}
            <div className="bg-white rounded-[32px] border border-zinc-100 p-8 md:p-10 flex flex-col gap-8 shadow-sm">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-[#0F172A]">
                  <Smartphone className="w-8 h-8" />
                </div>
                <div className="text-right">
                  <span className="text-[14px] font-bold text-[#1E6D00] bg-green-50 px-3 py-1 rounded-full">
                    v1.0.0-stable
                  </span>
                  <p className="text-[12px] text-zinc-400 mt-2 font-medium">{t("download.android.name")} • ARM64/v7a</p>
                </div>
              </div>

              <div>
                <h2 className="text-[28px] font-bold mb-4">{t("download.android.name")}</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[#545F73] text-[15px]">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#1E6D00]" />
                    </div>
                    {t("download.android.feat1")}
                  </div>
                  <div className="flex items-center gap-3 text-[#545F73] text-[15px]">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#1E6D00]" />
                    </div>
                    {t("download.android.feat2")}
                  </div>
                  <div className="flex items-center gap-3 text-[#545F73] text-[15px]">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#1E6D00]" />
                    </div>
                    {t("download.android.feat3")}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <button className="w-full h-[56px] rounded-2xl bg-[#0F172A] text-white text-[15px] font-bold flex items-center justify-center gap-3 hover:bg-black transition-colors cursor-pointer shadow-lg shadow-black/10">
                  <Download className="w-5 h-5" /> {t("download.android.apk")}
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-[24px] border border-zinc-100 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center">
                <FileText className="w-5 h-5 text-zinc-400" />
              </div>
              <h3 className="font-bold">{t("download.notes.title")}</h3>
              <p className="text-[14px] text-zinc-500">{t("download.notes.desc")}</p>
              <Link href={`/${lang}/wiki`} className="text-[14px] font-bold text-[#1E6D00] flex items-center gap-1 mt-auto hover:text-[#165200] transition-all">
                {t("download.more")} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-[24px] border border-zinc-100 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center">
                <Check className="w-5 h-5 text-zinc-400" />
              </div>
              <h3 className="font-bold">{t("download.verify.title")}</h3>
              <p className="text-[14px] text-zinc-500">{t("download.verify.desc")}</p>
              <Link href="#" className="text-[14px] font-bold text-[#1E6D00] flex items-center gap-1 mt-auto hover:text-[#165200] transition-all">
                {t("download.verify.action")} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-[24px] border border-zinc-100 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center">
                <Download className="w-5 h-5 text-zinc-400" />
              </div>
              <h3 className="font-bold">{t("download.legacy.title")}</h3>
              <p className="text-[14px] text-zinc-500">{t("download.legacy.desc")}</p>
              <Link href="#" className="text-[14px] font-bold text-[#1E6D00] flex items-center gap-1 mt-auto hover:text-[#165200] transition-all">
                {t("download.archive")} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
