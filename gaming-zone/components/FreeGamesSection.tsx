"use client";

import Image from 'next/image';
import { Gift } from 'lucide-react';
import { useHeroStore } from '@/store/useHeroStore';

export default function FreeGamesSection() {
  const { freeGames } = useHeroStore();

  return (
    <section className="bg-[#121212] py-10 px-6 font-sans">
      {/* Boxed width container to match your other sections */}
      <div className="max-w-7xl mx-auto bg-[#2a2a2a] rounded-xl p-6 md:p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3 text-white">
            <Gift className="w-7 h-7 md:w-8 md:h-8" />
            <h2 className="text-lg md:text-xl font-bold tracking-tight">Free Games</h2>
          </div>
          <button className="border border-gray-500 text-white px-4 py-1.5 rounded text-[10px] md:text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition">
            View More
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {freeGames.map((game) => (
            <div 
              key={game.id} 
              className={`group cursor-pointer transition-opacity duration-300 ${
                game.status === "Coming Soon" ? "opacity-70 hover:opacity-100" : "opacity-100"
              }`}
            >
              {/* Image with 3:4 Aspect Ratio */}
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-3/4 bg-[#1a1a1a]">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Info */}
              <div className="space-y-1">
                <h3 className="text-white text-sm font-semibold truncate">
                  {game.title}
                </h3>
                <p className="text-gray-400 text-[11px] md:text-xs font-medium">
                  {game.status} - {game.dateRange}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}