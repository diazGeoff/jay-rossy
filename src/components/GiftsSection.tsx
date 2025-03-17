'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import asset25 from '@/assets/images/asset-25.png';
import asset26 from '@/assets/images/asset-26.png';

const GiftsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const totalSlides = 2;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile && carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: activeSlide * slideWidth,
        behavior: 'smooth'
      });
    }
  }, [activeSlide, isMobile]);

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [isMobile, totalSlides]);

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className="py-16 px-4 bg-[#e8d3a9] flex flex-col items-center justify-center text-center">
      {/* Title */}
      <h1 className="gifts-title text-5xl mb-12">
        ABOUT THE GIFTS
      </h1>
      
      {/* Description */}
      <div className="max-w-2xl mx-auto mb-12">
        <p className="gifts-description">
          Your presence at our wedding is the greatest gift we could receive. However if you wish to give something to help us start this new chapter we highly appreciate it. We also highly appreciate gifts for Dio (e.g., pet toys).
        </p>
      </div>
      
      {/* Photo Carousel/Grid */}
      <div className="w-full max-w-4xl mx-auto">
        <div ref={carouselRef} className="gifts-carousel">
          <div className="gifts-carousel-slide">
            <Image 
              src={asset25} 
              alt="Couple with dog - image 1" 
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="gifts-carousel-slide">
            <Image 
              src={asset26} 
              alt="Couple with dog - image 2" 
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
        
        {/* Mobile Carousel Dots */}
        {isMobile && (
          <div className="gifts-carousel-dots">
            {[0, 1].map((index) => (
              <button
                key={index}
                className={`gifts-carousel-dot ${activeSlide === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GiftsSection; 