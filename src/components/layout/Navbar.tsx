"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "Installation", href: "#installation" },
  { name: "News", href: "#news" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-zinc-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[122px]">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-zinc-200">
              <Image src="/icon.jpg" alt="Logo" fill className="object-cover" />
            </div>
            <span className="text-[18px] md:text-[20px] font-bold text-[#0F172A] tracking-tight">
              LF Launcher
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[14px] font-semibold transition-colors",
                  link.name === "Home" ? "text-[#1E6D00] border-b-2 border-[#1E6D00] pb-0.5" : "text-[#545F73] hover:text-[#0F172A]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button className="h-[40px] px-6 rounded-full bg-[#56ab2f] text-white text-[14px] font-bold hover:bg-[#4a8e26] transition-all">
              Download Now
            </button>
            <div className="w-8 h-8 relative rounded-full overflow-hidden border border-zinc-200">
              <Image
                src="https://flagcdn.com/us.svg"
                alt="English"
                fill
                className="object-cover"
                unoptimized
              />
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
          <div className="md:hidden py-4 border-t border-zinc-100 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[14px] font-semibold text-[#545F73]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="h-[40px] w-full rounded-full bg-[#56ab2f] text-white text-[14px] font-bold">
              Download Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
