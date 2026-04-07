"use client";
import Image from 'next/image';
import { useHeroStore } from '@/store/useHeroStore';

const GameRow = ({ game }: { game: any }) => (
  <div className="group flex items-center p-2 rounded-xl hover:bg-[#2a2a2a] transition-all cursor-pointer">
    <div className="relative w-12 h-16 shrink-0 mr-4 overflow-hidden rounded-md">
      <Image src={game.image} alt={game.title} fill sizes="48px" className="object-cover transition-transform group-hover:scale-110" />
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors line-clamp-1">
        {game.title}
      </span>
      <div className="flex items-center space-x-2 mt-1">
        {game.discount && (
          <span className="bg-[#0078f2] text-[10px] font-bold px-1.5 py-0.5 rounded text-white">
            -{game.discount}%
          </span>
        )}
        <span className="text-xs text-gray-400">
          {game.price === 0 ? "Free" : `₹${game.price.toLocaleString()}`}
        </span>
      </div>
    </div>
  </div>
);

export default function GameLists() {
  const { topSellers, bestSellers, upcomingGames } = useHeroStore();

  const sections = [
    { title: "Top Sellers", data: topSellers },
    { title: "Best Sellers", data: bestSellers },
    { title: "Top Upcoming", data: upcomingGames },
  ];

  return (
    <section className="bg-[#121212] py-10 px-6 text-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {sections.map((section, idx) => (
          <div key={idx} className={`flex flex-col ${idx !== 0 ? 'md:border-l md:border-white/10 md:pl-10' : ''}`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold tracking-tight">{section.title}</h2>
              <button className="border border-[#3a3a44] text-gray-400 text-[10px] px-3 py-1 rounded uppercase font-bold hover:border-[#0078f2] hover:text-white hover:bg-white/5 transition-all">
                View More
              </button>
            </div>
            <div className="space-y-1">
              {section.data.map((game: any) => (
                <GameRow key={game.id} game={game} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}