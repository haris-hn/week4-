"use client";

import { useParams } from 'next/navigation';
import { useHeroStore } from '@/store/useHeroStore';
import Image from 'next/image';

export default function GameDetailPage() {
  const { id } = useParams();
  const { saleGames, promoGames, freeGames } = useHeroStore();

  const allGames = [...saleGames, ...promoGames, ...freeGames];
  const game = allGames.find((g) => g.id.toString() === id);

  if (!game) {
    return (
      <div className="h-screen bg-[#121212] text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">Game not found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <div className="relative w-full h-[60vh]">
        <Image 
          src={game.image} 
          alt={game.title} 
          fill 
          className="object-cover opacity-40 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
        
        <div className="absolute bottom-10 left-0 right-0 max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-end">
          <div className="relative w-48 h-64 rounded-xl overflow-hidden shadow-2xl border border-white/10">
             <Image src={game.image} alt={game.title} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-black uppercase mb-4">{game.title}</h1>
            <div className="flex gap-4">
              <button className="bg-[#0078f2] hover:bg-[#0066cc] text-white px-10 py-3 rounded-lg font-bold uppercase text-sm transition">
                Buy Now
              </button>
              <button className="border border-white/20 hover:bg-white/5 text-white px-10 py-3 rounded-lg font-bold uppercase text-sm transition">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About the Game</h2>
            <p className="text-gray-400 leading-relaxed italic">
            
               Experience the thrill of {game.title}. Immerse yourself in a world of high-fidelity graphics and gripping gameplay mechanics.
            </p>
          </div>
          
          <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 h-fit">
             <h3 className="text-gray-500 uppercase text-xs font-bold mb-4">Price Information</h3>
             <div className="text-3xl font-bold mb-2">
               {'status' in game && game.status.toLowerCase().includes('free') 
                 ? "Free" 
                 : `$${(('price' in game ? game.price : 'salePrice' in game ? game.salePrice : 0) || 0).toLocaleString()}`}
             </div>
             <p className="text-green-500 text-xs font-bold">
               {'status' in game ? game.status : 'Available Now'}
             </p>
          </div>
        </div>
      </section>

    </main>
  );
}