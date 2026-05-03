"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const LANGUAGES = [
  { code: "en", name: "English", flag: "https://flagcdn.com/us.svg" },
  { code: "vi", name: "Tiếng Việt", flag: "https://flagcdn.com/vn.svg" },
  { code: "es", name: "Español", flag: "https://flagcdn.com/es.svg" },
  { code: "ru", name: "Русский", flag: "https://flagcdn.com/ru.svg" },
  { code: "ar", name: "العربية", flag: "https://flagcdn.com/sa.svg" },
] as const;

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const langRef = useRef<HTMLDivElement>(null);

  const NAV_LINKS = [
    { name: t("nav.home"), href: `/${language}` },
    { name: t("nav.features"), href: "#features" },
    { name: t("nav.news"), href: "#news" },
    { name: t("nav.wiki"), href: `/${language}/wiki/getting-started/installing-lflauncher` },
    { name: t("nav.community"), href: "#community" },
  ];

  const currentLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };

    const handleHashChange = () => {
      setActiveHash(window.location.hash || "");
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = ["features", "installation", "news", "wiki", "community"];
      
      let currentSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          currentSection = `#${section}`;
          break;
        }
      }
      
      if (window.scrollY < 100) {
        setActiveHash("");
      } else if (currentSection) {
        setActiveHash(currentSection);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);
    
    handleScroll();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHomeClick = (e?: React.MouseEvent) => {
    const isRoot = window.location.pathname === `/${language}` || window.location.pathname === `/${language}/`;
    if (isRoot) {
      e?.preventDefault?.();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveHash("");
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-zinc-100">
      <div className="max-w-[1024px] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link href={`/${language}`} onClick={handleHomeClick} className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-zinc-200">
              <Image src="/icon.jpg" alt="Logo" fill className="object-cover" sizes="32px" priority />
            </div>
            <span className="text-[18px] md:text-[20px] font-bold text-[#0F172A] tracking-tight">
              LF Launcher
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isAnchor = link.href.startsWith("#");
              const Component = isAnchor ? "a" : Link;
              
              return (
                <Component
                  key={link.name}
                  href={link.href}
                  onClick={link.href === `/${language}` ? handleHomeClick : undefined}
                  className={cn(
                    "text-[14px] font-semibold transition-colors whitespace-nowrap cursor-pointer",
                    (activeHash === link.href || (link.href === `/${language}` && activeHash === ""))
                      ? "text-[#1E6D00] border-b-2 border-[#1E6D00] pb-0.5" 
                      : "text-[#545F73] hover:text-[#0F172A]"
                  )}
                >
                  {link.name}
                </Component>
              );
            })}
          </div>

          {/* Actions - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link href={`/${language}/download`}>
              <button className="h-[40px] px-6 rounded-full bg-[#56ab2f] text-white text-[14px] font-bold hover:bg-[#4a8e26] transition-all whitespace-nowrap cursor-pointer">
                {t("nav.download")}
              </button>
            </Link>

            {/* Language Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100 cursor-pointer"
              >
                <div className="w-6 h-6 relative rounded-full overflow-hidden border border-zinc-200">
                  <Image src={currentLang.flag} alt={currentLang.name} fill className="object-cover" unoptimized sizes="24px" />
                </div>
                <ChevronDown className={cn("w-4 h-4 text-zinc-400 transition-transform", isLangOpen && "rotate-180")} />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-zinc-100 rounded-xl shadow-xl py-2 animate-in fade-in zoom-in-95 duration-200 z-[60]">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className="w-full px-4 py-2.5 flex items-center justify-between hover:bg-zinc-50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 relative rounded-full overflow-hidden border border-zinc-100">
                          <Image src={lang.flag} alt={lang.name} fill className="object-cover" unoptimized sizes="20px" />
                        </div>
                        <span className={cn("text-[14px] font-medium", language === lang.code ? "text-[#1E6D00]" : "text-zinc-600")}>
                          {lang.name}
                        </span>
                      </div>
                      {language === lang.code && <Check className="w-4 h-4 text-[#1E6D00]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[#0F172A]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-zinc-100 flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const isAnchor = link.href.startsWith("#");
              const Component = isAnchor ? "a" : Link;
              
              return (
                <Component
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-[14px] font-semibold transition-colors cursor-pointer",
                    (activeHash === link.href || (link.href === `/${language}` && activeHash === ""))
                      ? "text-[#1E6D00]" 
                      : "text-[#545F73]"
                  )}
                  onClick={() => {
                    if (link.href === `/${language}`) handleHomeClick({} as any);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </Component>
              );
            })}
            <div className="flex items-center justify-between pt-2">
              <span className="text-[14px] font-semibold text-zinc-400">Language</span>
              <div className="flex gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={cn(
                      "w-8 h-8 relative rounded-full overflow-hidden border-2 transition-all cursor-pointer",
                      language === lang.code ? "border-[#1E6D00]" : "border-zinc-100 opacity-50"
                    )}
                  >
                    <Image src={lang.flag} alt={lang.name} fill className="object-cover" unoptimized sizes="32px" />
                  </button>
                ))}
              </div>
            </div>
            <Link href={`/${language}/download`} onClick={() => setIsOpen(false)}>
              <button className="h-[40px] w-full rounded-full bg-[#56ab2f] text-white text-[14px] font-bold mt-2 cursor-pointer">
                {t("nav.download")}
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
