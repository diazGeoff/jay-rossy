'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-links">
        <Link 
          href="#reception" 
          className="footer-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('reception');
          }}
        >
          RECEPTION
        </Link>
        
        <Link 
          href="#about-us" 
          className="footer-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about-us');
          }}
        >
          ABOUT US
        </Link>
        
        <Link 
          href="#dress-code" 
          className="footer-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('dress-code');
          }}
        >
          DRESS CODE
        </Link>
        
        <Link 
          href="#faq" 
          className="footer-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('faq');
          }}
        >
          FAQ
        </Link>
      </div>
    </footer>
  );
};

export default Footer; 