"use client";

import { useLanguage } from "@/context/LanguageContext";

export const Community = () => {
  const { t } = useLanguage();

  return (
    <section id="community" className="w-full max-w-[1024px] mx-auto py-16 px-4">
      <div className="bg-white rounded-[32px] border border-zinc-100 p-8 md:p-12 flex flex-col items-center text-center gap-8">
        <div className="flex flex-col gap-4 max-w-2xl">
          <h2 className="text-[24px] md:text-[32px] font-bold text-[#0F172A] leading-tight">
            {t("community.title")}
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#545F73] leading-relaxed">
            {t("community.desc")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 w-full">
          {/* GitHub */}
          <a 
            href="https://github.com/lasscmone/lflauncher" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-[52px] px-8 rounded-xl border border-zinc-200 flex items-center justify-center gap-3 text-[15px] font-bold text-[#0F172A] hover:bg-zinc-50 transition-all cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>

          {/* Discord */}
          <a 
            href="https://discord.gg/lflauncher" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-[52px] px-8 rounded-xl bg-[#5865F2] text-white flex items-center justify-center gap-3 text-[15px] font-bold hover:bg-[#4752C4] transition-all shadow-lg shadow-indigo-500/20 cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 004.677 4.37a.07.07 0 00-.032.027C.533 10.493-.455 16.458.08 22.344a.081.081 0 00.03.055 19.903 19.903 0 005.992 3.026.078.078 0 00.084-.028c.462-.63.858-1.303 1.183-2.012a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.863-.886.077.077 0 00-.081-.007c.038-.028.077-.059.113-.089a.077.077 0 01.081-.01c3.923 1.796 8.18 1.796 12.062 0a.078.078 0 01.081.01c.036.03.075.06.113.089a.079.079 0 00-.08.007 12.87 12.87 0 01-1.864.886.077.077 0 00-.041.106c.325.709.721 1.382 1.183 2.012a.078.078 0 00.084.028 19.89 19.89 0 005.992-3.026.081.081 0 00.03-.055c.675-6.723-.119-12.635-4.63-17.947a.061.061 0 00-.031-.027zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/>
            </svg>
            Discord
          </a>

          {/* Telegram */}
          <a 
            href="https://t.me/lflauncher" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-[52px] px-8 rounded-xl bg-[#26A5E4] text-white flex items-center justify-center gap-3 text-[15px] font-bold hover:bg-[#1E8DC5] transition-all shadow-lg shadow-blue-500/20 cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M11.944 0C5.346 0 0 5.348 0 11.948c0 6.598 5.346 11.948 11.944 11.948 6.598 0 11.944-5.35 11.944-11.948C23.888 5.348 18.542 0 11.944 0zm5.727 7.74c-.167 1.764-.88 6.002-1.242 7.948-.154.823-.456 1.099-.75 1.126-.64.058-1.126-.424-1.745-.83-.97-.638-1.517-1.036-2.46-1.656-1.088-.716-.383-1.11.238-1.754.162-.168 2.973-2.723 3.028-2.955.006-.03.012-.138-.054-.196-.066-.058-.163-.038-.233-.022-.1.022-1.696 1.08-4.79 3.168-.454.312-.864.464-1.23.456-.402-.008-1.176-.226-1.75-.413-.706-.23-1.266-.352-1.218-.744.026-.204.306-.414.842-.63 3.294-1.432 5.488-2.378 6.584-2.836 3.125-1.306 3.774-1.533 4.198-1.54.094-.002.304.022.44.132.114.092.146.216.154.304.016.14.022.408 0 .584z"/>
            </svg>
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
};
