"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const SCREENSHOTS = [
  { id: 1, src: "/screenshot/screenshot_java2.png", alt: "Java Edition" },
  { id: 2, src: "/screenshot/screenshot_dungeons.png", alt: "Dungeons Edition" },
  { id: 3, src: "/screenshot/screenshot_news.png", alt: "News & Updates" },
];

export const Screenshot = () => {
  const { t } = useLanguage();
  const [activeImage, setActiveImage] = useState(SCREENSHOTS[0]);

  return (
    <section className="w-full max-w-[1024px] mx-auto py-8 px-4 flex flex-col items-center">
      <h2 className="text-[28px] md:text-[32px] font-bold text-[#0F172A] mb-8 text-center">
        {t("screenshot.title")}<span className="text-[#1E6D00]">{t("screenshot.highlight")}</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-5 w-full">
        {/* Thumbnails */}
        <div className="flex md:flex-col flex-row gap-3.5 w-full md:w-[200px] overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
          {SCREENSHOTS.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              className={`min-w-[140px] md:min-w-0 flex-1 aspect-video relative rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${activeImage.id === img.id ? "border-[#1E6D00]" : "border-zinc-100"
                }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={`object-cover transition-opacity ${activeImage.id === img.id ? "opacity-100" : "opacity-40 hover:opacity-100"}`}
                sizes="(max-width: 768px) 33vw, 200px"
              />
            </div>
          ))}
        </div>

        {/* Main Screenshot */}
        <div className="flex-1 aspect-[16/6] relative rounded-xl md:rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            className="object-cover animate-in fade-in duration-500"
            key={activeImage.src}
            sizes="(max-width: 1024px) 100vw, 800px"
          />
        </div>
      </div>
    </section>
  );
};
