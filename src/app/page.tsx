import Banner from '@/components/Banner';
import PixelArtSection from '@/components/PixelArtSection';
import RsvpSection from '@/components/RsvpSection';
import ChurchSection from '@/components/ChurchSection';
import ReceptionSection from '@/components/ReceptionSection';
import CocktailSection from '@/components/CocktailSection';
import DinnerSection from '@/components/DinnerSection';
import EntourageSection from '@/components/EntourageSection';
import StorySection from '@/components/StorySection';
import DressCodeSection from '@/components/DressCodeSection';
import FaqSection from '@/components/FaqSection';
import GiftsSection from '@/components/GiftsSection';
import FinalRsvpSection from '@/components/FinalRsvpSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      <Navbar />
      <Banner />
      <PixelArtSection />
      <div id="rsvp">
        <RsvpSection />
      </div>
      <div className="bg-[#e8d3a9]">
        <div id="reception">
          <ChurchSection />
        </div>
        <ReceptionSection />
        <CocktailSection />
        <DinnerSection />
        <div id="entourage">
          <EntourageSection />
        </div>
        <div id="about-us">
          <StorySection />
        </div>
        <div id="dress-code">
          <DressCodeSection />
        </div>
        <div id="faq">
          <FaqSection />
        </div>
        <div id="gifts">
          <GiftsSection />
        </div>
        <FinalRsvpSection />
        <Footer />
      </div>
    </div>
  );
}
