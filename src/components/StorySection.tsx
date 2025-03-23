'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import asset14 from '@/assets/images/asset-14.png';
import asset15 from '@/assets/images/asset-15.png';
import asset16 from '@/assets/images/asset-16.png';
import asset17 from '@/assets/images/asset-17.png';
import asset18 from '@/assets/images/asset-18.png';
import asset19 from '@/assets/images/asset-19.png';

const StorySection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const totalSlides = 3;

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
    <>
      <section className="py-16 px-4 bg-[#e8d3a9] flex flex-col items-center justify-center text-center">
        {/* Title */}
        <h1 className="story-title text-4xl mb-8 px-4 py-2">
          HOW WE GOT HERE
        </h1>
        
        {/* Description */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="story-description text-xl">
            Our story began as friends back in 2013. I was the photographer and she was the cosplayer. 
            Over time, our friendship blossomed into something more, leading us to this momentous 
            occasion that we want to share with everyone near and dear to our hearts.
          </p>
        </div>
        
        {/* Photo Carousel/Grid */}
        <div className="w-full max-w-4xl mx-auto">
          <div ref={carouselRef} className="story-carousel">
            <div className="story-carousel-slide">
              <Image 
                src={asset14} 
                alt="Couple with dog" 
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="story-carousel-slide">
              <Image 
                src={asset15} 
                alt="Couple sitting together" 
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="story-carousel-slide">
              <Image 
                src={asset16} 
                alt="Couple having fun" 
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          
          {/* Mobile Carousel Dots */}
          {isMobile && (
            <div className="story-carousel-dots">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  className={`story-carousel-dot ${activeSlide === index ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Meet Jay Section */}
      <section className="py-16 px-4 bg-[#e8d3a9] flex flex-col items-center justify-center text-center">
        {/* Title */}
        <h1 className="meet-title text-4xl mb-8 px-4 py-2">
          MEET JAY
        </h1>
        
        {/* Jay's Image */}
        <div className="meet-image">
          <Image 
            src={asset17} 
            alt="Jay with camera illustration" 
            className="w-full h-auto"
            priority
          />
        </div>
        
        {/* Description */}
        <div className="max-w-2xl mx-auto">
          <p className="meet-description text-xl">
            A hobbyist photographer with an enthusiasm for video games, music, movies, and tech gadgets, Jay is a health-focused individual who balances indoor hobbies, enjoying exercise and the peaceful haven of home, giving importance to his own space.
          </p>
        </div>
      </section>

      {/* Meet Rossy Section */}
      <section className="py-16 px-4 bg-[#e8d3a9] flex flex-col items-center justify-center text-center">
        {/* Title */}
        <h1 className="meet-title text-4xl mb-8 px-4 py-2">
          MEET ROSSY
        </h1>
        
        {/* Rossy's Image */}
        <div className="meet-image">
          <Image 
            src={asset18} 
            alt="Rossy illustration" 
            className="w-full h-auto"
            priority
          />
        </div>
        
        {/* Description */}
        <div className="max-w-2xl mx-auto">
          <p className="meet-description text-xl">
            A dedicated graphic designer who previously worked as a nurse, Rossy&apos;s nurturing spirit shines as brightly as her love for animals, especially dogs. This passionate cook, and caring &ldquo;mom&rdquo; of her friends, is a dedicated workaholic, selectively social, but always approachable and ready to lend a hand to those she cares for.
          </p>
        </div>
      </section>

      {/* Meet Dio Section */}
      <section className="py-16 px-4 bg-[#e8d3a9] flex flex-col items-center justify-center text-center">
        {/* Title */}
        <h1 className="meet-title text-4xl mb-8 px-4 py-2">
          MEET DIO
        </h1>
        
        {/* Dio's Image */}
        <div className="meet-image">
          <Image 
            src={asset19} 
            alt="Dio the dog illustration" 
            className="w-full h-auto"
            priority
          />
        </div>
        
        {/* Description */}
        <div className="max-w-2xl mx-auto">
          <p className="meet-description text-xl">
            Dio is a charming dog, a highly food-motivated pooch, and a joy to be around. He loves children, is amicable with all animals including cats, and is a peaceful, non-confrontational companion. Treats are the quickest way to his heart, and he offers endless affection in return!
          </p>
        </div>
        
        {/* Important Note */}
        <div className="note-container mt-8">
          <h2 className="note-title">NOTE:</h2>
          <p className="note-text">Do not feed human food to DIO</p>
        </div>
      </section>

      {/* Family Photo Section */}
      <section className="family-photo-section">
        <img 
          src='/images/asset-20.png'
          alt="Jay, Rossy and Dio together" 
          className="family-photo"
          width={2000}
          height={1500}
        />
      </section>
    </>
  );
};

export default StorySection; 