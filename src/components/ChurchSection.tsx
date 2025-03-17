'use client';

import React from 'react';
import Image from 'next/image';
import asset10 from '@/assets/images/asset-10.png'; // Church illustration

const ChurchSection = () => {
  return (
    <section className="py-16 px-4 bg-[#e8d3a9] flex flex-col items-center justify-center text-center">
      {/* CHURCH Title */}
      <h1 className="church-title text-5xl mb-8">
        CHURCH
      </h1>
      
      {/* Church Illustration */}
      <div className="relative w-full max-w-2xl mx-auto mb-12">
        <Image 
          src={asset10} 
          alt="Church illustration with trees" 
          className="w-full h-auto"
          style={{ imageRendering: 'pixelated' }}
          priority
        />
      </div>
      
      {/* Time and Location */}
      <div className="mb-8">
        <h2 className="church-subtitle text-3xl mb-6">
          3:00 PM/ SACRED HEART
        </h2>
      </div>
      
      {/* Description */}
      <div className="max-w-xl mx-auto">
        <p className="church-description text-xl">
          Our ceremony will take place<br />
          at Sacred Heart.
        </p>
      </div>
    </section>
  );
};

export default ChurchSection; 