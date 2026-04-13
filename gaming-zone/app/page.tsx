import Hero from '@/components/Hero';
import GameSlider from '@/components/GameSlider';
import PromotionGrid from '@/components/PromotionGrid';
import FreeGamesSection from '@/components/FreeGamesSection';
import GameLists from '@/components/GameLists';
import CatalogCTA from '@/components/CatalogCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#121212] space-y-4">
      <Hero />
      <GameSlider />
      <PromotionGrid />
      <FreeGamesSection/>
      <GameLists/>
      <PromotionGrid />
      <GameSlider />
      <CatalogCTA/>
      <Footer/>


      
    </div>
  );
}