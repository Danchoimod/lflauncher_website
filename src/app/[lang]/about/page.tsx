"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Heart, Shield, Zap, Milestone } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t, dir } = useLanguage();

  const values = [
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: t("about.value1.title"),
      desc: t("about.value1.desc")
    },
    {
      icon: <Shield className="w-6 h-6 text-[#1E6D00]" />,
      title: t("about.value2.title"),
      desc: t("about.value2.desc")
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: t("about.value3.title"),
      desc: t("about.value3.desc")
    }
  ];

  return (
    <div className="relative min-h-screen bg-white text-[#0F172A] selection:bg-green-500/30" dir={dir}>
      <Navbar />

      <main className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-full pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-[#56ab2f]/5 rounded-full blur-3xl" />
          <div className="absolute top-[40%] right-[5%] w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1024px] mx-auto px-4 relative">
          {/* Hero Section */}
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E6D00]/10 text-[#1E6D00] text-[12px] font-bold uppercase tracking-wider mb-6">
                <Milestone className="w-3.5 h-3.5" /> {t("about.badge")}
              </div>
              <h1 className="text-[48px] md:text-[64px] font-bold tracking-tight mb-8 leading-[1.1]">
                {t("about.hero.title")}
              </h1>
              <p className="text-[18px] md:text-[20px] text-[#545F73] max-w-2xl mx-auto leading-relaxed">
                {t("about.hero.subtitle")}
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-[32px] bg-zinc-50 border border-zinc-100 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-[20px] font-bold">{value.title}</h3>
                <p className="text-[15px] text-[#545F73] leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline / History */}
          <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
            <div className="flex-1">
              <h2 className="text-[32px] md:text-[40px] font-bold mb-8 leading-tight">
                {t("about.history.title")}
              </h2>
              <div className="space-y-8">
                <div className={`relative pl-8 border-l-2 border-zinc-100 ${dir === 'rtl' ? 'border-l-0 border-r-2 pl-0 pr-8' : ''}`}>
                  <div className={`absolute top-0 w-4 h-4 rounded-full bg-[#1E6D00] border-4 border-white shadow-sm ${dir === 'rtl' ? '-right-[9px]' : '-left-[9px]'}`} />
                  <span className="text-[13px] font-bold text-[#1E6D00] uppercase tracking-wider mb-2 block">{t("about.history.v1.date")}</span>
                  <h4 className="font-bold text-[18px] mb-2">{t("about.history.v1.title")}</h4>
                  <p className="text-[15px] text-[#545F73]">{t("about.history.v1.desc")}</p>
                </div>
                <div className={`relative pl-8 border-l-2 border-zinc-100 ${dir === 'rtl' ? 'border-l-0 border-r-2 pl-0 pr-8' : ''}`}>
                  <div className={`absolute top-0 w-4 h-4 rounded-full bg-zinc-300 border-4 border-white shadow-sm ${dir === 'rtl' ? '-right-[9px]' : '-left-[9px]'}`} />
                  <span className="text-[13px] font-bold text-zinc-400 uppercase tracking-wider mb-2 block">{t("about.history.v2.date")}</span>
                  <h4 className="font-bold text-[18px] mb-2">{t("about.history.v2.title")}</h4>
                  <p className="text-[15px] text-[#545F73]">{t("about.history.v2.desc")}</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[420px] aspect-[4/5] relative rounded-[40px] overflow-hidden bg-zinc-100 shadow-2xl">
              <Image 
                src="/screenshot/screenshot_java.png" 
                alt="LF Launcher Interface" 
                fill 
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover scale-110 grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-[48px] bg-[#0F172A] p-12 md:p-20 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E6D00]/20 rounded-full blur-[100px]" />
            <h2 className="text-[32px] md:text-[48px] font-bold mb-8 relative z-10">{t("about.cta.title")}</h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-[16px] md:text-[18px] relative z-10 leading-relaxed">
              {t("about.cta.desc")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button className="h-[56px] px-10 rounded-2xl bg-[#1E6D00] text-white font-bold hover:bg-[#165200] transition-all flex items-center gap-2">
                {t("about.cta.discord")}
              </button>
              <a href="https://github.com/lasscmone/lflauncher" target="_blank" className="h-[56px] px-10 rounded-2xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all flex items-center gap-2 backdrop-blur-sm">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg> {t("about.cta.github")}
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
