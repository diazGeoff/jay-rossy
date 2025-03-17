'use client'

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <>
      <nav className={isOpen ? 'hidden' : ''}>
        <button aria-label="Menu" onClick={toggleMenu} style={{ fontFamily: 'var(--font-04b-30)' }}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Navigation Menu */}
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <div className="nav-menu-content">
          <ul>
            <li>
              <a 
                href="#rsvp" 
                className="nav-link" 
                style={{ fontFamily: 'var(--font-04b-30)' }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('rsvp');
                }}
              >
                RSVP
              </a>
            </li>
            <li>
              <a 
                href="#reception" 
                className="nav-link" 
                style={{ fontFamily: 'var(--font-04b-30)' }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('reception');
                }}
              >
                RECEPTION
              </a>
            </li>
            <li>
              <a 
                href="#entourage" 
                className="nav-link" 
                style={{ fontFamily: 'var(--font-04b-30)' }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('entourage');
                }}
              >
                ENTOURAGE
              </a>
            </li>
            <li>
              <a 
                href="#about-us" 
                className="nav-link" 
                style={{ fontFamily: 'var(--font-04b-30)' }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about-us');
                }}
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a 
                href="#dress-code" 
                className="nav-link" 
                style={{ fontFamily: 'var(--font-04b-30)' }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('dress-code');
                }}
              >
                DRESS CODE
              </a>
            </li>
            <li>
              <a 
                href="#faq" 
                className="nav-link" 
                style={{ fontFamily: 'var(--font-04b-30)' }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('faq');
                }}
              >
                FAQ
              </a>
            </li>
            <li>
              <a 
                href="#gifts" 
                className="nav-link" 
                style={{ fontFamily: 'var(--font-04b-30)' }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('gifts');
                }}
              >
                ADDITIONAL INFO
              </a>
            </li>
          </ul>
        </div>
        
        {/* Close button */}
        <button 
          className="close-menu-btn" 
          onClick={toggleMenu}
          aria-label="Close menu"
          style={{ fontFamily: 'var(--font-04b-30)' }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </>
  );
} 