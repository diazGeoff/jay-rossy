'use client';

import React from 'react';
import Image from 'next/image';
import bannerImage from '@/assets/images/banner.png';

export default function Banner() {
  return (
    <div className="w-full bg-[#e8d3a9] relative">
      <div className="mx-auto">
        <Image 
          src={bannerImage} 
          alt="Jay and Rossy with their dog" 
          className="w-full h-auto object-cover"
          priority
          sizes="100vw"
          style={{
            maxHeight: '45vh',
            objectPosition: 'center 25%'
          }}
        />
      </div>
    </div>
  );
} 