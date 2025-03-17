'use client'

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            <li><a href="#" className="nav-link" style={{ fontFamily: 'var(--font-04b-30)' }}>RSVP</a></li>
            <li><a href="#" className="nav-link" style={{ fontFamily: 'var(--font-04b-30)' }}>RECEPTION</a></li>
            <li><a href="#" className="nav-link" style={{ fontFamily: 'var(--font-04b-30)' }}>ENTOURAGE</a></li>
            <li><a href="#" className="nav-link" style={{ fontFamily: 'var(--font-04b-30)' }}>ABOUT US</a></li>
            <li><a href="#" className="nav-link" style={{ fontFamily: 'var(--font-04b-30)' }}>DRESS CODE</a></li>
            <li><a href="#" className="nav-link" style={{ fontFamily: 'var(--font-04b-30)' }}>FAQ</a></li>
            <li><a href="#" className="nav-link" style={{ fontFamily: 'var(--font-04b-30)' }}>ADDITIONAL INFO</a></li>
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