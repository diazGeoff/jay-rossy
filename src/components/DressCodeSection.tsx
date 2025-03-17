'use client';

import React from 'react';
import Image from 'next/image';
import asset21 from '@/assets/images/asset-21.png';
import asset22 from '@/assets/images/asset-22.png';
import asset23 from '@/assets/images/asset-23.png';
import asset24 from '@/assets/images/asset-24.png';

const DressCodeSection = () => {
  return (
    <section className="py-16 px-4 bg-[#2a3e47] flex flex-col items-center justify-center text-center">
      {/* Title */}
      <h1 className="dress-title text-5xl mb-12 text-[#e8d3a9]">
        DRESS CODE
      </h1>
      
      {/* Color Palette */}
      <div className="relative w-full max-w-lg mx-auto mb-12">
        <Image 
          src={asset21} 
          alt="Color palette with sage greens, earth tones, and creams" 
          className="w-full h-auto"
          priority
        />
      </div>
      
      {/* Description */}
      <div className="max-w-2xl mx-auto mb-8">
        <p className="dress-description text-xl text-[#e8d3a9]">
          We&apos;re envisioning a wedding day bathed in soft, natural tones, centered around sage green. If you&apos;d like to embrace the palette, think gentle greens, muted earth tones, and creams.
        </p>
      </div>
      
      {/* Additional Note */}
      <div className="max-w-2xl mx-auto mb-16">
        <p className="dress-description text-xl text-[#e8d3a9]">
          Most importantly, we want you to feel comfortable and joyful celebrating with us! Please wear what makes you feel wonderful and ready to share in our happiness, keeping in mind the celebratory nature of our wedding.
        </p>
      </div>
      
      {/* Styles Section */}
      <h1 className="dress-title text-5xl mb-12 text-[#e8d3a9]">
        STYLES
      </h1>
      
      {/* Women's Styles */}
      <div className="relative w-full max-w-2xl mx-auto mb-12">
        <Image 
          src={asset22} 
          alt="Women's dress styles in sage green, earth tones, and cream colors" 
          className="w-full h-auto"
          priority
        />
      </div>
      
      {/* Men's Styles */}
      <div className="relative w-full max-w-2xl mx-auto mb-16">
        <Image 
          src={asset23} 
          alt="Men's suit styles in sage green, earth tones, and cream colors" 
          className="w-full h-auto"
          priority
        />
      </div>
      
      {/* Colors to Avoid */}
      <div className="max-w-2xl mx-auto mb-8">
        <p className="dress-description text-2xl text-[#e8d3a9] mb-10">
          Please refrain from wearing these clothes
        </p>
        
        <div className="relative w-full max-w-lg mx-auto">
          <Image 
            src={asset24} 
            alt="Colors to avoid: white, black, red, and bright red" 
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection; 