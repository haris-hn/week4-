"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

import { useHeroStore } from '@/store/useHeroStore';

export default function GameSlider() {
  const { saleGames } = useHeroStore();

  return (
    <section className="max-w-7xl mx-auto px-4 mt-12 pb-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium flex items-center gap-1 text-white cursor-pointer group">
          Game on sale 
          <ChevronRight size={18} className="mt-1 transition-transform group-hover:translate-x-1" />
        </h2>
        
        <div className="flex gap-2"> 
          <button className="swiper-prev text-white border-2 border-white p-2 rounded-full hover:bg-gray-200  cursor-pointer  hover:text-black">
            <ChevronLeft size={16} />
          </button>
          <button className="swiper-next text-white p-2 rounded-full border-2 hover:bg-gray-200 hover:text-black cursor-pointer ">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1.2}
        navigation={{
          prevEl: '.swiper-prev',
          nextEl: '.swiper-next',
        }}
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 12 },
          480: { slidesPerView: 2.2, spaceBetween: 16 },
          768: { slidesPerView: 3.2, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
        className="game-swiper"
        style={{ display: 'block' }} 
      >
        {saleGames.map((game) => (
          <SwiperSlide key={game.id} className="h-auto">
            <div className="group cursor-pointer">
              <div className="relative aspect-3/4 overflow-hidden rounded-xl mb-4 border border-white/5 group-hover:border-white/20 transition-all">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              <h3 className="text-xs md:text-sm font-bold text-gray-300 group-hover:text-white transition line-clamp-1 mb-1">
                {game.title}
              </h3>
              
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-[#0078f2] text-white text-[9px] md:text-[10px] font-black px-1.5 py-0.5 rounded shadow-sm">
                  -{game.discount}%
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 line-through text-[10px]">${game.originalPrice}</span>
                  <span className="text-white text-xs md:text-sm font-medium">${game.salePrice}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}