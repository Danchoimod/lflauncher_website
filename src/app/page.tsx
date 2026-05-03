"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Screenshot } from "@/components/sections/Screenshot";
import { Features } from "@/components/sections/Features";
import { Sponsors } from "@/components/sections/Sponsors";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F8F9FF] text-[#0F172A] selection:bg-green-500/30">
      <Navbar />

      <main className="relative pt-20">
        {/* Main Hero Section */}
        <Hero />
        
        {/* Screenshot Gallery */}
        <Screenshot />
        
        {/* Features Row-based Section */}
        <Features />
        
        {/* Sponsors Section */}
        <Sponsors />
      </main>

      <Footer />
    </div>
  );
}
