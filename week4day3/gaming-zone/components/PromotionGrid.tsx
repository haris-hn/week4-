"use client";

import Image from 'next/image';
import { useHeroStore } from '@/store/useHeroStore';

export default function PromotionGrid() {
  const { promoGames } = useHeroStore();

  return (
    <section className="bg-[#121212] py-12 px-6 text-white font-sans">
      
      <div className="max-w-7xl mx-auto"> 
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {promoGames.map((game) => (
            <div key={game.id} className="group cursor-pointer flex flex-col">
              
              <div className="relative overflow-hidden rounded-2xl aspect-video mb-6 border border-white/5 group-hover:border-[#0078f2]/30 transition-all duration-500">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none group-hover:ring-[#0078f2]/50 transition-all duration-500"></div>
              </div>

              <div className="space-y-3 px-1">
                <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-gray-400 group-hover:text-[#0078f2] transition-colors duration-300">
                  {game.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-2 font-medium">
                  {game.description}
                </p>
                <div className="flex items-center justify-between pt-2">
                   <p className="text-lg font-medium text-white">
                      ${game.price.toLocaleString('en-IN')}
                   </p>
                   <span className="text-[10px] font-bold text-[#0078f2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                     VIEW DETAILS <span className="text-lg">›</span>
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}