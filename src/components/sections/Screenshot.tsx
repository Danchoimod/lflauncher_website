"use client";

import Image from "next/image";

export const Screenshot = () => {
  return (
    <section className="w-full max-w-[1196px] mx-auto py-10 px-4 flex flex-col items-center">
      <h2 className="text-[32px] md:text-[42px] font-bold text-[#0F172A] mb-8">
        Screen<span className="text-[#1E6D00]">shot</span>
      </h2>
      
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Thumbnails - Desktop (Left), Mobile (Bottom or Grid) */}
        <div className="flex md:flex-col flex-row gap-4 w-full md:w-[240px] overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
          {[1, 2, 3].map((i) => (
            <div key={i} className="min-w-[160px] md:min-w-0 flex-1 aspect-video relative rounded-xl overflow-hidden border-2 border-zinc-100 cursor-pointer hover:border-green-500 transition-all">
              <Image src={`/launcher_mockup.png`} alt="Thumbnail" fill className="object-cover opacity-80" />
            </div>
          ))}
        </div>
        
        {/* Main Screenshot */}
        <div className="flex-1 aspect-[16/10] relative rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-200">
          <Image src="/launcher_mockup.png" alt="Main Screenshot" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};
