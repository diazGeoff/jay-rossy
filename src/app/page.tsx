import Banner from '@/components/Banner';
import PixelArtSection from '@/components/PixelArtSection';
import RsvpSection from '@/components/RsvpSection';
import ChurchSection from '@/components/ChurchSection';
import ReceptionSection from '@/components/ReceptionSection';
import CocktailSection from '@/components/CocktailSection';
import DinnerSection from '@/components/DinnerSection';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      <Navbar />
      <Banner />
      <PixelArtSection />
      <RsvpSection />
      <div className="bg-[#e8d3a9]">
        <ChurchSection />
        <ReceptionSection />
        <CocktailSection />
        <DinnerSection />
      </div>
    </div>
  );
}
