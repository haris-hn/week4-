"use client";

import Image from 'next/image';
import { Search } from 'lucide-react';
import { useHeroStore } from '@/store/useHeroStore';

export default function Hero() {
  const { games, activeGameId, setActiveGame } = useHeroStore();
  
  
  const activeGame = games.find((g) => g.id === activeGameId) || games[0];

  return (
    <section className="bg-[#121212] text-white pt-6 md:pt-10 pb-10 md:pb-20">
     
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:space-x-8 mb-8 max-w-7xl mx-auto px-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search store"
            className="bg-[#202020] rounded-full py-2 pl-10 pr-4 w-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>
        <ul className="flex space-x-6 text-sm text-gray-400 font-medium overflow-x-auto w-full md:w-auto no-scrollbar whitespace-nowrap pb-2 md:pb-0">
          <li className="text-white border-b border-white pb-1 cursor-pointer">Discover</li>
          <li className="hover:text-white cursor-pointer transition">Browse</li>
          <li className="hover:text-white cursor-pointer transition">News</li>
        </ul>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto px-4">
        
        {/* Left: CONSTANT Banner (Always God of War) */}
        <div className="col-span-12 lg:col-span-9 relative group cursor-pointer overflow-hidden rounded-2xl border border-transparent hover:border-gray-600 transition-all duration-300 aspect-video md:aspect-3/2 lg:aspect-16/9">
          <Image
            src="/gow.png" // Hardcoded path to keep it constant
            alt="God of War 4"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />

          <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-12">
            <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest mb-2">
              Pre-purchase Available
            </p>
            <h2 className="text-xs md:text-sm font-bold text-gray-300 max-w-md mb-4 md:mb-6 leading-relaxed">
              Kratos now lives as a man in the <br className="hidden md:block" />
              realm of Norse Gods and monsters. It <br className="hidden md:block" />
              is in this harsh, unforgiving world that <br className="hidden md:block" />
              he must fight to survive
            </h2>
            <button className="bg-white text-black font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg text-[10px] md:text-xs uppercase tracking-tighter w-fit hover:bg-gray-200 transition">
              Pre-purchase Now
            </button>
          </div>
        </div>

        {/* Right: Sidebar Navigation (Still interactive) */}
        <div className="hidden lg:flex lg:col-span-3 flex-col justify-between">
          {games.map((game) => (
            <div
              key={game.id}
              onClick={() => setActiveGame(game.id)}
              className={`flex items-center p-3 rounded-xl cursor-pointer transition group ${
                activeGameId === game.id ? 'bg-[#2a2a2a]' : 'hover:bg-[#202020]'
              }`}
            >
              <div className="relative w-12 h-16 shrink-0 mr-4">
                <Image
                  src={game.thumbnail} // Uses thumbnail from store
                  alt={game.title}
                  fill
                  sizes="48px"
                  className={`rounded-lg object-cover transition ${
                    activeGameId === game.id ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                  }`}
                />
              </div>
              <span className={`text-sm font-semibold transition ${
                activeGameId === game.id ? 'text-white' : 'text-gray-400 group-hover:text-white'
              }`}>
                {game.title}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile Sidebar (Horizontal scroll below main banner) */}
        <div className="lg:hidden col-span-12 flex space-x-4 overflow-x-auto no-scrollbar pb-4 pt-4">
          {games.map((game) => (
            <div
              key={game.id}
              onClick={() => setActiveGame(game.id)}
              className={`flex flex-col items-center min-w-[100px] p-2 rounded-xl cursor-pointer transition ${
                activeGameId === game.id ? 'bg-[#2a2a2a]' : ''
              }`}
            >
              <div className="relative w-16 h-20 mb-2">
                <Image
                  src={game.thumbnail}
                  alt={game.title}
                  fill
                  sizes="64px"
                  className={`rounded-lg object-cover transition ${
                    activeGameId === game.id ? 'opacity-100' : 'opacity-70'
                  }`}
                />
              </div>
              <span className={`text-[10px] font-semibold text-center line-clamp-1 ${
                activeGameId === game.id ? 'text-white' : 'text-gray-400'
              }`}>
                {game.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
