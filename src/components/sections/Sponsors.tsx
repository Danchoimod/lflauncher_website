"use client";

import Image from "next/image";

export const Sponsors = () => {
  return (
    <section className="w-full max-w-[1196px] mx-auto py-8 md:py-12 px-4 border-t border-zinc-100/50">
      <h2 className="text-[28px] md:text-[32px] font-bold text-[#0F172A] mb-6 md:mb-8 text-center md:text-left">Sponsors</h2>
      <p className="text-[15px] md:text-[16px] text-[#545F73] mb-8 md:mb-10 max-w-2xl leading-relaxed text-center md:text-left">
        We thank all the wonderful backers over at Open Collective! Support LF Launcher and its development by <span className="text-[#1E6D00] font-semibold cursor-pointer underline underline-offset-4 decoration-zinc-200">becoming a backer</span>.
      </p>

      <div className="flex justify-center md:justify-start">
        <button className="inline-flex items-center gap-2 bg-[#FFDD00] hover:bg-[#F7D100] text-black px-6 py-3 rounded-lg font-bold text-[14px] border border-black/5 transition-all active:scale-95">
          <span className="w-5 h-5 flex items-center justify-center text-lg">☕</span>
          Buy me a coffee
        </button>
      </div>
    </section>
  );
};
