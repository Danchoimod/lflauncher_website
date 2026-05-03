"use client";

import { Info, Coffee, CheckCircle2 } from "lucide-react";
import { useParams } from "next/navigation";

export default function InstallingJava() {
  const { lang } = useParams();

  return (
    <div className="max-w-[800px] mx-auto pt-16 pb-24 px-8 md:px-12">
      {/* Header */}
      <h1 className="text-[36px] md:text-[42px] font-bold text-[#0F172A] mb-8">
        Installing Java
      </h1>

      {/* Content */}
      <div className="space-y-8 text-[16px] text-[#545F73] leading-relaxed">
        <p>
          Minecraft: Java Edition requires a Java Runtime Environment (JRE) to run. While you can install Java manually, LF Launcher makes this process completely seamless by handling it automatically for you.
        </p>

        {/* Highlight Box: Automatic Handling */}
        <div className="bg-[#1E6D00]/5 border border-[#1E6D00]/10 rounded-2xl p-6 flex gap-4 shadow-sm">
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm shrink-0">
            <CheckCircle2 className="w-5 h-5 text-[#1E6D00]" />
          </div>
          <div>
            <h4 className="text-[16px] font-bold text-[#0F172A] mb-2">The Easy Way (Recommended)</h4>
            <p className="text-[14px] mb-4">
              In LF Launcher, you can let the launcher handle Java automatically on <strong>Windows</strong> by enabling these settings in your global settings:
            </p>
            <ul className="space-y-2 text-[14px]">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1E6D00]" />
                <span><strong>Autodetect Java version</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1E6D00]" />
                <span><strong>Auto-download Mojang Java</strong></span>
              </li>
            </ul>
          </div>
        </div>

        <p>
          This will make the launcher automatically download and manage the right version of Java for your specific version of Minecraft:
        </p>

        {/* Version Table */}
        <div className="bg-white border border-zinc-100 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left text-[14px]">
            <thead className="bg-zinc-50 border-b border-zinc-100">
              <tr>
                <th className="px-6 py-3 font-bold text-[#0F172A]">Minecraft Version</th>
                <th className="px-6 py-3 font-bold text-[#0F172A]">Java Version</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              <tr>
                <td className="px-6 py-4">Pre-1.17</td>
                <td className="px-6 py-4">Java 8</td>
              </tr>
              <tr>
                <td className="px-6 py-4">1.17 - 1.20.4</td>
                <td className="px-6 py-4">Java 17</td>
              </tr>
              <tr>
                <td className="px-6 py-4">1.20.5+</td>
                <td className="px-6 py-4">Java 21</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Manual Section */}
        <div className="pt-8 border-t border-zinc-100">
          <div className="flex items-center gap-3 mb-4">
            <Coffee className="w-6 h-6 text-orange-500" />
            <h2 className="text-[24px] font-bold text-[#0F172A]">Manual Installation</h2>
          </div>
          <p className="mb-4 italic opacity-80 text-[14px]">
            The following information explains how to download Java manually and is probably not needed for most users.
          </p>
          <p>
            If you need a specific Java distribution (like GraalVM or Zulu) or if the automatic download fails, you can download Java from providers like <a href="https://adoptium.net/" target="_blank" className="text-[#1E6D00] font-bold hover:underline">Adoptium (Eclipse Temurin)</a>. Once installed, you can point to the Java executable in the instance settings.
          </p>
        </div>

        {/* Tip Box */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex gap-4">
          <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <p className="text-[14px] text-blue-800">
            <strong>Note:</strong> Some Linux distributions might require you to install Java through your package manager (e.g., <code>apt</code>, <code>pacman</code>, or <code>dnf</code>) for the best compatibility.
          </p>
        </div>
      </div>
    </div>
  );
}
