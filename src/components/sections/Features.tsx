"use client";

import Image from "next/image";

export const Features = () => {
  return (
    <section id="features" className="w-full max-w-[1196px] mx-auto py-12 px-4 flex flex-col items-center gap-12 md:gap-20">
      <h2 className="text-[32px] md:text-[42px] font-bold text-[#0F172A] mb-4">Features</h2>
      
      {/* Row 1: Versions */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full">
        <div className="w-full flex-1 aspect-[16/10] relative rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-200">
          <Image src="/launcher_mockup.png" alt="Versions" fill className="object-cover" />
        </div>
        <div className="w-full md:w-[380px] text-center md:text-right">
          <h3 className="text-[24px] md:text-[32px] font-bold text-[#0F172A] mb-4 md:mb-6">Versions</h3>
          <p className="text-[16px] md:text-[18px] text-[#545F73] leading-relaxed">
            Get access to almost all versions and switch between them in an instant.
          </p>
        </div>
      </div>

      {/* Row 2: Settings */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 w-full">
        <div className="w-full md:w-[380px] text-center md:text-left">
          <h3 className="text-[24px] md:text-[32px] font-bold text-[#0F172A] mb-4 md:mb-6">Settings</h3>
          <p className="text-[16px] md:text-[18px] text-[#545F73] leading-relaxed">
            Tweak every nook and cranny to your heart's content.
          </p>
        </div>
        <div className="w-full flex-1 aspect-[16/10] relative rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-200">
          <Image src="/launcher_mockup.png" alt="Settings" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};
