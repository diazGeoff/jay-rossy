'use client';

import React from 'react';
import Image from 'next/image';
import asset12 from '@/assets/images/asset-12.png'; // Cocktail glasses illustration

const CocktailSection = () => {
  return (
    <section className="py-16 px-4 bg-[#e8d3a9] flex flex-col items-center justify-center text-center">
      {/* Cocktail and Snacks Title */}
      <div className="mb-8">
        <h1 className="cocktail-title text-5xl mb-2">
          COCKTAIL
        </h1>
        <h1 className="cocktail-title text-5xl mb-2">
          AND
        </h1>
        <h1 className="cocktail-title text-5xl mb-8">
          SNACKS
        </h1>
      </div>
      
      {/* Cocktail Illustration */}
      <div className="relative w-full max-w-xl mx-auto mb-12">
        <Image 
          src={asset12} 
          alt="Cocktail glasses" 
          className="w-full h-auto"
          style={{ imageRendering: 'pixelated' }}
          priority
        />
      </div>
      
      {/* Description */}
      <div className="max-w-xl mx-auto">
        <p className="cocktail-description text-xl">
          There&apos;s no shortage of food and drinks at the reception.<br />
          Eat, drink, and be merry!
        </p>
      </div>
    </section>
  );
};

export default CocktailSection; 