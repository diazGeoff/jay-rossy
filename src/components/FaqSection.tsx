'use client';

import React from 'react';

const FaqSection = () => {
  return (
    <section className="py-16 px-4 bg-[#4a5d4a] flex flex-col items-center justify-center text-center">
      {/* Title */}
      <h1 className="faq-title text-5xl mb-12">
        FREQUENT QUESTIONS
      </h1>
      
      {/* FAQ Items */}
      <div className="max-w-2xl mx-auto">
        {/* Question 1 */}
        <h2 className="faq-question">
          CAN I BRING EXTRA?
        </h2>
        <div className="faq-answer mb-12">
          <p>
            To allow for an intimate celebration with our closest family and friends, seating for our ceremony and reception is limited.
          </p>
          <p className="mt-4">
            We respectfully request that only those who we personally invite to attend.
          </p>
        </div>
        
        {/* Question 2 */}
        <h2 className="faq-question">
          CAN WE BRING KIDS?
        </h2>
        <div className="faq-answer mb-12">
          <p>
            We are so excited to celebrate with you! Please note that while we adore children, to ensure all guests can relax and fully enjoy the celebration,
          </p>
          <p className="mt-4">
            we have chosen to make our wedding an adults-only occasion, with the exception of children
          </p>
          <p className="mt-4">
            who we specifically invite. We appreciate your understanding.
          </p>
        </div>
        
        {/* Question 3 */}
        <h2 className="faq-question">
          CAN I TAKE PHOTOS DURING THE CEREMONY?
        </h2>
        <div className="faq-answer mb-12">
          <p>
            We invite you to capture the joy of our wedding day and share your memories! Nonetheless, we kindly ask to be mindful during the ceremony and avoid distracting our photographers and videographers. We appreciate your cooperation and can&apos;t wait to see the day through your eyes (and lenses!)
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 