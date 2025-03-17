'use client';

import React from 'react';
import Image from 'next/image';
import asset13 from '@/assets/images/asset-13.png'; // Dinner plate illustration

const DinnerSection = () => {
  return (
    <section className="py-16 px-4 bg-[#e8d3a9] flex flex-col items-center justify-center text-center">
      {/* Dinner Title */}
      <h1 className="dinner-title text-5xl mb-8">
        DINNER
      </h1>
      
      {/* Dinner Illustration */}
      <div className="relative w-full max-w-xl mx-auto mb-12">
        <Image 
          src={asset13} 
          alt="Dinner plate with utensils" 
          className="w-full h-auto"
          style={{ imageRendering: 'pixelated' }}
          priority
        />
      </div>
      
      {/* Description */}
      <div className="max-w-xl mx-auto">
        <p className="dinner-description text-xl">
          Tickle your taste buds from various delectable choices,<br />
          ranging from melt-in-your-mouth tuna sashimi to<br />
          savory roast beef.
        </p>
      </div>
    </section>
  );
};

export default DinnerSection; 