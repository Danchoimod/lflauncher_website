"use client";

import { HelpCircle, ShieldCheck, History, CheckCircle2, Star } from "lucide-react";
import { useParams } from "next/navigation";

export default function WikiFAQ() {
  const { lang } = useParams();

  const faqs = [
    {
      question: "What is LF Launcher?",
      icon: <History className="w-5 h-5 text-blue-500" />,
      answer: (
        <>
          <p className="mb-4">
            LF Launcher is a modern, high-performance Minecraft launcher designed for the next generation of players. Our journey began in <strong>August 2023</strong> with the release of <strong>Android version 1.0.0</strong>.
          </p>
          <p>
            Originally focused on <strong>Minecraft PE (Pocket Edition)</strong>, the launcher was created to provide a streamlined way for mobile players to download and manage their game versions efficiently. Since then, it has evolved into a comprehensive tool for both Android and PC users.
          </p>
        </>
      ),
    },
    {
      question: "Should I use LF Launcher?",
      icon: <Star className="w-5 h-5 text-amber-500" />,
      answer: (
        <>
          <p className="mb-4">
            If you are looking for a launcher that prioritizes <strong>speed, aesthetics, and simplicity</strong>, then LF Launcher is for you. Here is why thousands of players choose us:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1E6D00] mt-1 shrink-0" />
              <span><strong>Modern UI:</strong> A clean, intuitive interface that looks premium on any device.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1E6D00] mt-1 shrink-0" />
              <span><strong>Optimized Performance:</strong> Extremely low resource usage, ensuring your system's power goes to the game, not the launcher.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1E6D00] mt-1 shrink-0" />
              <span><strong>Cross-Platform:</strong> Seamless management of your Minecraft experience whether you are on Windows or Android.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Is it safe to use?",
      icon: <ShieldCheck className="w-5 h-5 text-[#1E6D00]" />,
      answer: (
        <>
          <p className="mb-4">
            <strong>Yes, absolutely.</strong> Safety and transparency are at the core of LF Launcher's development.
          </p>
          <ul className="space-y-3">
            <li>
              <strong>No Telemetry:</strong> We do not track your activity, collect personal data, or phone home with your information.
            </li>
            <li>
              <strong>Open Communication:</strong> Our community is active and transparent, and we are committed to maintaining a secure environment for all players.
            </li>
            <li>
              <strong>Privacy First:</strong> Your credentials and game files are stored locally on your machine and are never shared with third parties.
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="max-w-[800px] mx-auto pt-16 pb-24 px-8 md:px-12">
      {/* Header */}
      <h1 className="text-[36px] md:text-[42px] font-bold text-[#0F172A] mb-8 flex items-center gap-4">
        <HelpCircle className="w-10 h-10 text-[#1E6D00]" /> FAQ
      </h1>

      <div className="space-y-12">
        {faqs.map((faq, index) => (
          <section key={index} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center shadow-sm">
                {faq.icon}
              </div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-[#0F172A]">{faq.question}</h2>
            </div>
            <div className="bg-white rounded-2xl border border-zinc-100 p-8 shadow-sm text-[16px] text-[#545F73] leading-relaxed">
              {faq.answer}
            </div>
          </section>
        ))}

        {/* Footer Note */}
        <div className="pt-12 border-t border-zinc-100 text-center">
          <p className="text-[14px] text-zinc-400">
            Have more questions? Join our <a href="#" className="text-[#1E6D00] font-bold hover:underline">Discord</a> or check the <a href={`/${lang}/wiki/overview/feedback-and-bugs`} className="text-[#1E6D00] font-bold hover:underline">Feedback</a> page.
          </p>
        </div>
      </div>
    </div>
  );
}
