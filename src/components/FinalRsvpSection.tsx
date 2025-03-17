'use client';

import React from 'react';

const FinalRsvpSection = () => {
  return (
    <section className="final-rsvp-section">
      <div className="max-w-2xl mx-auto">
        {/* Main text */}
        <p className="final-rsvp-text">
          We are excited to meet everyone and celebrate our special day.
        </p>
        
        {/* RSVP Button */}
        <a 
          href="https://forms.gle/zWwtLRxTuLokW6bPA" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="final-rsvp-button"
        >
          RSVP
        </a>
        
        {/* Deadline */}
        <div className="final-rsvp-deadline">
          Please RSVP before<br />
          April 01, 2025
        </div>
      </div>
    </section>
  );
};

export default FinalRsvpSection; 