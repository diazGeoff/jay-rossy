'use client';

import React from 'react';
import Image from 'next/image';
import asset09 from '@/assets/images/asset-09.png'; // Couple with flowers
import asset08 from '@/assets/images/asset-08.png'; // Church illustration

const RsvpSection = () => {
  return (
    <section id="rsvp">
      <div style={{ backgroundColor: "#e8d3a9" }}>
        <div className="flex flex-col items-center justify-center max-w-md mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* Church illustration */}
          <div className="mb-12 w-full max-w-xs mx-auto">
            <Image 
              src={asset08} 
              alt="Church illustration" 
              style={{ width: '100%', height: 'auto', imageRendering: 'pixelated' }}
            />
          </div>
          
          {/* RSVP Button */}
          <div className="mb-12">
            <button className="px-10 py-3 text-4xl rounded-lg shadow-md relative" style={{ 
              imageRendering: 'pixelated',
              boxShadow: '4px 4px 0 rgba(0,0,0,0.2)',
              transform: 'translateY(-2px)',
              border: '2px solid #4a5d4a',
              fontFamily: 'var(--font-04b-30)',
              backgroundColor: '#e8d3a9',
              color: '#4a5d4a'
            }}>
              RSVP
            </button>
          </div>
          
          {/* RSVP Text */}
          <div className="text-center mb-8">
            <h2 className="text-[#4a5d4a] text-3xl tracking-wider leading-relaxed" style={{ 
              imageRendering: 'pixelated',
              letterSpacing: '0.05em',
              textShadow: '2px 2px 0 rgba(0,0,0,0.1)',
              fontFamily: 'var(--font-04b-30)',
              color: '#4a5d4a'
            }}>
              RSVP BEFORE<br />
              APRIL 5, 2025
            </h2>
            <p className="text-[#4a5d4a] text-2xl mt-8 font-serif">
              Date: May 22, 2025
            </p>
          </div>
        </div>
      </div>
      <div className="md:h-auto h-[50vh]">
        <div className="relative h-full w-full">
          <Image
            src={asset09}
            alt="RSVP"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default RsvpSection; 