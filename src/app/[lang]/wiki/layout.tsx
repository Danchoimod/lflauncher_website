import { WikiSidebar } from "@/components/wiki/WikiSidebar";
import { Footer } from "@/components/layout/Footer";

export default async function WikiLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-[#F8F9FF] selection:bg-green-500/30">
      <WikiSidebar lang={lang} />
      
      <div className="pl-[280px] flex flex-col min-h-screen">
        <main className="flex-1">
          {children}
        </main>
        
        {/* Simplified Footer for Wiki */}
        <div className="bg-white border-t border-zinc-100 mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}
