"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Layout,
  Rocket,
  Settings,
  LifeBuoy,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const WIKI_NAV = [
  {
    id: "overview",
    title: "Overview",
    icon: Layout,
    href: "/wiki/overview",
  },
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Rocket,
    href: "/wiki/getting-started",
    children: [
      { title: "Installing LF Launcher", href: "/wiki/getting-started/installing-lflauncher" },
      { title: "Installing Java", href: "/wiki/getting-started/installing-java" },
      { title: "Adding Accounts", href: "/wiki/getting-started/adding-accounts" },
    ]
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    icon: AlertCircle,
    href: "/wiki/troubleshooting",
  },
];

const SECONDARY_NAV = [
  { title: "Support", icon: LifeBuoy, href: "/wiki/support" },
];

export const WikiSidebar = ({ lang }: { lang: string }) => {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "getting-started": true
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <aside className="w-[280px] h-screen fixed left-0 top-0 bg-white border-r border-zinc-100 flex flex-col pt-8 pb-6 px-4">
      {/* Wiki Title */}
      <div className="px-4 mb-8 flex items-center gap-3">
        <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-zinc-100 shrink-0">
          <Image src="/icon.jpg" alt="Logo" fill className="object-cover" sizes="32px" />
        </div>
        <div>
          <h1 className="text-[16px] font-bold text-[#0F172A] leading-tight">LF Launcher Wiki</h1>
          <p className="text-[11px] text-zinc-400">v1.0.0</p>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 flex flex-col gap-1 overflow-y-auto custom-scrollbar">
        {WIKI_NAV.map((item) => {
          const isOpen = openSections[item.id];
          const hasChildren = !!item.children;
          const isActive = pathname.includes(item.href);

          return (
            <div key={item.id} className="flex flex-col gap-1">
              <div
                onClick={() => hasChildren && toggleSection(item.id)}
                className={cn(
                  "flex items-center justify-between px-4 py-2.5 rounded-xl transition-all group cursor-pointer",
                  isActive && !hasChildren ? "bg-[#1E6D00]/5 text-[#1E6D00]" : "text-[#545F73] hover:bg-zinc-50"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={cn("w-4 h-4", isActive && !hasChildren ? "text-[#1E6D00]" : "text-zinc-400 group-hover:text-zinc-600")} />
                  {hasChildren ? (
                    <span className="text-[14px] font-semibold">{item.title}</span>
                  ) : (
                    <Link href={`/${lang}${item.href}`} className="text-[14px] font-semibold">
                      {item.title}
                    </Link>
                  )}
                </div>
                {hasChildren && (
                  <ChevronDown className={cn("w-4 h-4 text-zinc-400 transition-transform duration-200", isOpen && "rotate-180")} />
                )}
              </div>

              <AnimatePresence initial={false}>
                {hasChildren && isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-1 mt-1 ml-4 border-l border-zinc-100">
                      {item.children?.map((child) => (
                        <Link
                          key={child.title}
                          href={`/${lang}${child.href}`}
                          className={cn(
                            "flex items-center px-6 py-2 rounded-xl text-[14px] font-medium transition-all",
                            pathname.endsWith(child.href) ? "bg-[#1E6D00]/10 text-[#1E6D00]" : "text-[#545F73] hover:text-[#0F172A] hover:bg-zinc-50"
                          )}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>

      {/* Secondary Nav */}
      <div className="pt-6 mt-6 border-t border-zinc-100 flex flex-col gap-1">
        {SECONDARY_NAV.map((item) => (
          <Link
            key={item.title}
            href={`/${lang}${item.href}`}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[#545F73] hover:bg-zinc-50 transition-all group"
          >
            <item.icon className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600" />
            <span className="text-[14px] font-semibold">{item.title}</span>
          </Link>
        ))}

        <a
          href="https://github.com/lasscmone/lflauncher"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 h-[42px] rounded-xl border border-zinc-200 text-[13px] font-bold text-[#0F172A] hover:bg-zinc-50 transition-all"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      </div>
    </aside>
  );
};
