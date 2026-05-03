"use client";

import { Info, Download, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function InstallingLFLauncher() {
  const { lang } = useParams();

  return (
    <div className="max-w-[800px] mx-auto pt-16 pb-24 px-8 md:px-12">


      {/* Header */}
      <h1 className="text-[36px] md:text-[42px] font-bold text-[#0F172A] mb-8">
        Installing LFLauncher
      </h1>

      {/* Content */}
      <div className="space-y-8 text-[16px] text-[#545F73] leading-relaxed">
        <p>
          Welcome to LFLauncher! Getting started is quick and easy. LFLauncher provides a centralized hub to manage your Minecraft instances seamlessly. The installation process varies slightly depending on your operating system.
        </p>

        {/* Info Box */}
        <div className="bg-[#1E6D00]/5 border border-[#1E6D00]/10 rounded-2xl p-6 flex gap-4">
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm shrink-0">
            <Info className="w-5 h-5 text-[#1E6D00]" />
          </div>
          <div>
            <h4 className="text-[16px] font-bold text-[#0F172A] mb-1">System Requirements</h4>
            <p className="text-[14px]">
              Ensure your system meets the minimum requirements before proceeding. You will need a compatible version of Java installed. See the next section for Java installation details.
            </p>
          </div>
        </div>

        {/* Section: Downloading */}
        <div className="pt-8 border-t border-zinc-100">
          <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Downloading the Installer</h2>
          <p className="mb-6">
            Head over to our official downloads page to grab the latest release. We provide installers and portable versions for Windows and Android.
          </p>
          <Link
            href={`/${lang}/download`}
            className="inline-flex items-center gap-2 bg-[#56ab2f] text-white px-6 h-[46px] rounded-xl font-bold text-[14px] hover:bg-[#4a8e26] transition-all"
          >
            <Download className="w-4 h-4" />
            Go to Downloads Page
          </Link>
        </div>

        {/* Section: Windows */}
        <div className="pt-8 border-t border-zinc-100">
          <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Windows Installation</h2>
          <ul className="space-y-3 list-disc pl-5">
            <li>Download the <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-zinc-800">.exe</code> installer from the link above.</li>
            <li>Double-click the downloaded file to run the setup wizard.</li>
            <li>Follow the on-screen prompts to choose your installation directory.</li>
            <li>Once finished, you can launch LF Launcher from your Start menu.</li>
          </ul>
        </div>

        {/* Section: Android */}
        <div className="pt-8 border-t border-zinc-100">
          <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Android Installation</h2>
          <p className="mb-6">
            For Android users, we provide a high-performance APK that supports most modern devices.
          </p>
          <ul className="space-y-3 list-disc pl-5">
            <li>Download the <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-zinc-800">.apk</code> file from our downloads page.</li>
            <li>Open the downloaded file to begin installation.</li>
            <li>You might need to enable <strong>"Install from Unknown Sources"</strong> in your device settings if this is your first time installing an APK.</li>
            <li>Once installed, you can find LF Launcher in your app drawer and start playing.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
