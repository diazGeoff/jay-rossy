'use client';

import React from 'react';
import Image from 'next/image';
import asset01 from '@/assets/images/asset-01.png'; // Couple illustration
import asset02 from '@/assets/images/asset-02.png'; // Tree 1
import asset03 from '@/assets/images/asset-03.png'; // Tree 2
import asset04 from '@/assets/images/asset-04.png'; // Dog illustration
import asset05 from '@/assets/images/asset-05.png'; // Jay & Rossy text
import asset06 from '@/assets/images/asset-06.png'; // With Dio text
import asset07 from '@/assets/images/asset-07.png'; // Additional asset

export default function PixelArtSection() {
  return (
    <div className="relative w-full bg-green-section py-8 px-4 min-h-[100vh] overflow-hidden">
      {/* Couple illustration - left side */}
      <div className="absolute left-[8%] bottom-[30%] w-[25%] max-w-[160px] z-10">
        <Image 
          src={asset01} 
          alt="Pixel art couple" 
          className="w-full h-auto"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
      
      {/* Trees scattered around - larger size */}
      <div className="absolute right-[20%] top-[15%] w-[30%] max-w-[180px]">
        <Image 
          src={asset03} 
          alt="Pixel art tree" 
          className="w-full h-auto"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
      
      <div className="absolute left-[8%] bottom-[8%] w-[20%] max-w-[120px]">
        <Image 
          src={asset02} 
          alt="Pixel art tree" 
          className="w-full h-auto"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
      
      <div className="absolute right-[10%] bottom-[12%] w-[25%] max-w-[150px]">
        <Image 
          src={asset03} 
          alt="Pixel art tree" 
          className="w-full h-auto"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
      
      <div className="absolute left-[25%] top-[12%] w-[28%] max-w-[170px]">
        <Image 
          src={asset02} 
          alt="Pixel art tree" 
          className="w-full h-auto"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
      
      <div className="absolute left-[60%] bottom-[8%] w-[22%] max-w-[130px]">
        <Image 
          src={asset02} 
          alt="Pixel art tree" 
          className="w-full h-auto"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
      
      {/* Dog illustration - right side */}
      <div className="absolute right-[8%] top-[40%] w-[25%] max-w-[160px] z-10">
        <Image 
          src={asset04} 
          alt="Pixel art dog" 
          className="w-full h-auto"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
      
      {/* Centered text - using image assets instead of text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-[350px] z-20">
        <div className="flex flex-col items-center justify-center">
          {/* Jay & Rossy text image */}
          <div className="w-full max-w-[300px]">
            <Image 
              src={asset05} 
              alt="Jay & Rossy" 
              className="w-full h-auto"
              style={{ imageRendering: 'pixelated' }}
              priority
            />
          </div>
          
          {/* With Dio text image */}
          <div className="w-[60%] max-w-[180px] mt-4">
            <Image 
              src={asset06} 
              alt="With Dio" 
              className="w-full h-auto"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
        </div>
      </div>
      
      {/* Additional decorative elements if needed */}
      <div className="absolute left-[40%] top-[75%] w-[15%] max-w-[100px] opacity-80">
        <Image 
          src={asset07} 
          alt="Decorative element" 
          className="w-full h-auto"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
    </div>
  );
} 