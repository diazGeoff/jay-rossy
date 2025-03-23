'use client';

import React from 'react';
import Image from 'next/image';
import asset11 from '@/assets/images/asset-11.png'; // Reception venue illustration

const ReceptionSection = () => {
  return (
    <section className="py-16 px-4 bg-[#e8d3a9] flex flex-col items-center justify-center text-center">
      {/* RECEPTION Title */}
      <h1 className="reception-title text-4xl mb-8 px-4 py-2">
        RECEPTION
      </h1>
      
      {/* Reception Illustration */}
      <div className="relative w-full max-w-2xl mx-auto mb-12">
        <Image 
          src={asset11} 
          alt="Casa Vieja reception venue" 
          className="w-full h-auto"
          style={{ imageRendering: 'pixelated' }}
          priority
        />
      </div>
      
      {/* Time and Location */}
      <div className="mb-8">
        <h2 className="reception-subtitle text-3xl mb-6">
          5:00 PM/ CASA VIEJA
        </h2>
      </div>
      
      {/* Description */}
      <div className="max-w-xl mx-auto">
        <p className="reception-description text-xl">
          We have rented the whole place.<br />
          Please rest, be at ease, and enjoy while dining in.
        </p>
      </div>
    </section>
  );
};

export default ReceptionSection; 