"use client";

import Image from 'next/image';

export default function CatalogCTA() {
  return (
    <section className="bg-[#121212] py-8 px-6 font-sans">
      <div className="max-w-7xl mx-auto bg-linear-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl overflow-hidden p-8 md:p-16 border border-white/5 shadow-2xl relative group">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#0078f2]/10 rounded-full blur-3xl group-hover:bg-[#0078f2]/20 transition-all duration-700"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          
          <div className="relative w-full md:w-1/2 h-48 md:h-72 flex justify-center items-center">
            <div className="relative w-full h-full max-w-[450px] transition-transform duration-700 group-hover:scale-105">
              <Image
                src="/Frame 221.png"
                alt="Explore Catalog"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col text-center md:text-left md:items-start items-center md:w-1/2">
            <h2 className="text-white text-xl md:text-2xl font-semibold mb-3 tracking-tight">
              Explore our Catalog
            </h2>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm">
              Browse by genre, features, price, and more to find your next favorite game.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}