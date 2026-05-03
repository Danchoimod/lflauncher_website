"use client";

import { Box, AlertTriangle, CheckCircle2, Monitor } from "lucide-react";
import { useParams } from "next/navigation";

export default function CreatingInstance() {
  const { lang } = useParams();

  const steps = [
    {
      title: "Open Launcher",
      desc: "Open the official LF Launcher and ensure you are on the Java Edition tab.",
    },
    {
      title: "Go to Installations",
      desc: 'Click on the "Installations" tab at the top of the launcher.',
    },
    {
      title: "New Installation",
      desc: 'Click the "New installation" (or "New instance" in some versions) button.',
    },
    {
      title: "Name and Version",
      desc: 'Give your instance a name (e.g., "Modded 1.20" or "Survival"). Select the Minecraft version you want to play.',
    },
    {
      title: "Set Game Directory (Crucial!)",
      desc: 'Click "Browse" next to the Game Directory box and create a new folder on your computer to store this specific instance\'s files (worlds, mods, configs). If you don\'t do this, it will share data with your main game folder.',
      isWarning: true,
    },
    {
      title: "Create",
      desc: 'Click "Create" at the bottom right to finish the process.',
    },
  ];

  return (
    <div className="max-w-[800px] mx-auto pt-16 pb-24 px-8 md:px-12">
      {/* Header */}
      <h1 className="text-[36px] md:text-[42px] font-bold text-[#0F172A] mb-8 flex items-center gap-4">
        <Box className="w-10 h-10 text-[#1E6D00]" /> Creating an Instance
      </h1>

      <div className="space-y-8 text-[16px] text-[#545F73] leading-relaxed">
        <p>
          Instances allow you to have multiple isolated Minecraft installations. This is perfect for playing different versions, keeping modpacks separate, or having different sets of worlds and configs without them interfering with each other.
        </p>

        {/* Steps List */}
        <div className="space-y-6 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[2px] before:bg-zinc-100">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-12">
              {/* Step Number Dot */}
              <div className="absolute left-0 top-0 w-[40px] h-[40px] rounded-full bg-white border-2 border-[#1E6D00] flex items-center justify-center z-10 shadow-sm">
                <span className="text-[#1E6D00] font-bold text-[14px]">{index + 1}</span>
              </div>

              <div className={`p-6 rounded-2xl border ${step.isWarning ? 'bg-amber-50 border-amber-100' : 'bg-white border-zinc-100 shadow-sm'}`}>
                <h3 className={`text-[18px] font-bold mb-2 ${step.isWarning ? 'text-amber-800' : 'text-[#0F172A]'}`}>
                  {step.isWarning && <AlertTriangle className="w-5 h-5 inline mr-2" />}
                  {step.title}
                </h3>
                <p className={`text-[15px] ${step.isWarning ? 'text-amber-700' : 'text-[#545F73]'}`}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Success Box */}
        <div className="bg-[#1E6D00]/5 border border-[#1E6D00]/10 rounded-2xl p-6 flex gap-4 mt-12">
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm shrink-0">
            <CheckCircle2 className="w-5 h-5 text-[#1E6D00]" />
          </div>
          <div>
            <h4 className="text-[16px] font-bold text-[#0F172A] mb-1">Ready to Play!</h4>
            <p className="text-[14px]">
              After creating the instance, go back to the "Play" tab, select your new instance from the dropdown menu next to the "Play" button, and start your adventure!
            </p>
          </div>
        </div>

        {/* Pro Tip */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex gap-4">
          <Monitor className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <p className="text-[14px] text-blue-800">
            <strong>Pro Tip:</strong> You can also allocate more RAM to your instance in the "More Options" section during creation or by editing an existing instance. This is highly recommended for modded gameplay.
          </p>
        </div>
      </div>
    </div>
  );
}
