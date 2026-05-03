"use client";

import { MessageSquare, Bug, Github, Users } from "lucide-react";
import { useParams } from "next/navigation";

export default function FeedbackAndBugs() {
  const { lang } = useParams();

  return (
    <div className="max-w-[800px] mx-auto pt-16 pb-24 px-8 md:px-12">
      {/* Header */}
      <h1 className="text-[36px] md:text-[42px] font-bold text-[#0F172A] mb-8 flex items-center gap-4">
        <Bug className="w-10 h-10 text-amber-600" /> Feedback and Bugs
      </h1>

      <div className="space-y-8 text-[16px] text-[#545F73] leading-relaxed">
        <p>
          We value every piece of input from our community. Whether you've encountered a technical hurdle or have a vision for a new feature that would make LF Launcher even better, your voice matters.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-100 shadow-sm">
            <svg className="w-6 h-6 text-[#0F172A] mb-3 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <h4 className="font-bold text-[#0F172A] mb-2">Report an Issue</h4>
            <p className="text-[14px]">Found a bug or have a suggestion? Head over to our GitHub repository and open an issue.</p>
            <a href="https://github.com/lasscmone/lflauncher/issues" target="_blank" className="inline-block mt-4 text-[14px] font-bold text-[#1E6D00] hover:underline transition-all">
              GitHub Issues →
            </a>
          </div>
          
          <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-100 shadow-sm">
            <MessageSquare className="w-6 h-6 text-[#1E6D00] mb-3" />
            <h4 className="font-bold text-[#0F172A] mb-2">Join the Discussion</h4>
            <p className="text-[14px]">Want to chat about features or get quick help? Join our community channels.</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-zinc-400 hover:text-[#5865F2] transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.23 10.23 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-[#0088cc] transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.891 8.145l-1.454 6.848c-.112.502-.408.627-.827.391l-2.213-1.633-1.068 1.028c-.118.118-.217.217-.444.217l.159-2.253 4.1-3.704c.178-.159-.039-.247-.276-.089l-5.068 3.193-2.185-.683c-.475-.148-.485-.475.099-.703l8.528-3.288c.395-.144.741.094.583.899z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Warning Note */}
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100 text-[15px] text-amber-800 shadow-sm">
          <p>
            <strong>Before posting:</strong> Please take a moment to search through existing issues on GitHub. It’s possible that another player has already flagged the same problem, or that a solution is already being developed. This helps us focus on fixing unique bugs faster!
          </p>
        </div>

        <section className="pt-8 border-t border-zinc-100">
          <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Other Channels</h2>
          <p className="mb-6">
            For general questions, community builds, and latest news, feel free to join our Reddit community or our official Telegram channel.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1E6D00]" />
              <span className="font-medium text-[#0F172A]">Reddit:</span>
              <a href="#" className="text-[#545F73] hover:text-[#1E6D00] hover:underline transition-all">r/LFLauncher</a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1E6D00]" />
              <span className="font-medium text-[#0F172A]">Telegram:</span>
              <a href="#" className="text-[#545F73] hover:text-[#1E6D00] hover:underline transition-all">LF Launcher News</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
