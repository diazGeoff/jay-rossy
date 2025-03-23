'use client';

import React from 'react';

const EntourageSection = () => {
  return (
    <section className="py-16 px-4 bg-[#4a5d4a] flex flex-col items-center justify-center text-center">
      {/* Entourage Title */}
      <h1 className="entourage-title text-4xl mb-12 px-4 py-2">
        ENTOURAGE
      </h1>
      
      <div className="max-w-4xl mx-auto w-full">
        {/* Parents */}
        <div className="mb-12">
          <h2 className="entourage-subtitle text-2xl mb-2">
            Parent of the Groom
          </h2>
          <p className="entourage-name text-xl mb-6">
            Mrs. Ma. Teresa Soriano
          </p>
          <div className="w-64 h-px bg-[#e8d3a9] mx-auto mb-8"></div>
          
          <h2 className="entourage-subtitle text-2xl mb-2">
            Parent of the Bride
          </h2>
          <p className="entourage-name text-xl mb-6">
            Mrs. Pamela Veroy
          </p>
          <div className="w-64 h-px bg-[#e8d3a9] mx-auto mb-8"></div>
        </div>
        
        {/* Principal Sponsors */}
        <div className="mb-12">
          <h2 className="entourage-subtitle text-2xl mb-8">
            Principal Sponsors
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="entourage-name text-xl mb-2">
                Mrs. Cleo Albay
              </p>
              <div className="w-64 h-px bg-[#e8d3a9] mx-auto mb-6"></div>
              
              <p className="entourage-name text-xl mb-2">
                Mrs. Mary Joy Lugo
              </p>
              <div className="w-64 h-px bg-[#e8d3a9] mx-auto mb-6"></div>
            </div>
            
            <div>
              <p className="entourage-name text-xl mb-2">
                Mr. Ray Benedict Aquiatan
              </p>
              <div className="w-64 h-px bg-[#e8d3a9] mx-auto mb-6"></div>
              
              <p className="entourage-name text-xl mb-2">
                Mr. Cris De Guzman
              </p>
              <div className="w-64 h-px bg-[#e8d3a9] mx-auto mb-6"></div>
            </div>
          </div>
        </div>
        
        {/* Special Person */}
        <div className="mb-12">
          <h2 className="entourage-subtitle text-2xl mb-2">
            Special Person
          </h2>
          <p className="entourage-name text-xl mb-6">
            Kianna Mae Ravanes
          </p>
          <div className="w-64 h-px bg-[#e8d3a9] mx-auto mb-8"></div>
        </div>
        
        {/* Maid of Honor */}
        <div className="mb-12">
          <h2 className="entourage-subtitle text-2xl mb-2">
            Maid of Honor
          </h2>
          <p className="entourage-name text-xl mb-6">
            Ana Carmela Valenzona
          </p>
          <div className="w-64 h-px bg-[#e8d3a9] mx-auto mb-8"></div>
        </div>
        
        {/* Candle */}
        <div className="mb-12">
          <h2 className="entourage-subtitle text-2xl mb-2">
            Candle
          </h2>
          <p className="entourage-name text-xl mb-2">
            Mrs. Jette Aquiatan
          </p>
          <div className="w-64 h-px bg-[#e8d3a9] mx-auto mb-4"></div>
          
          <p className="entourage-name text-xl mb-2">
            Mr. Matt Aquiatan
          </p>
          <div className="w-64 h-px bg-[#e8d3a9] mx-auto mb-8"></div>
        </div>
        
        {/* Cord and Veil */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div>
            <h2 className="entourage-subtitle text-2xl mb-2">
              Cord
            </h2>
            <p className="entourage-name text-xl mb-2">
              Mr. Paul Nino Veroy
            </p>
            <div className="w-64 h-px bg-[#e8d3a9] mx-auto mb-4"></div>
            
            <p className="entourage-name text-xl mb-2">
              Ms. Charmaine Dughon
            </p>
            <div className="w-64 h-px bg-[#e8d3a9] mx-auto mb-6"></div>
          </div>
          
          <div>
            <h2 className="entourage-subtitle text-2xl mb-2">
              Veil
            </h2>
            <p className="entourage-name text-xl mb-2">
              Mrs. Laiza Gandeza
            </p>
            <div className="w-64 h-px bg-[#e8d3a9] mx-auto mb-4"></div>
            
            <p className="entourage-name text-xl mb-2">
              Mr. Sigfred Gandeza
            </p>
            <div className="w-64 h-px bg-[#e8d3a9] mx-auto mb-6"></div>
          </div>
        </div>
        
        {/* Ring Bearer */}
        <div className="mb-12">
          <h2 className="entourage-subtitle text-2xl mb-2">
            Ring Bearer
          </h2>
          <p className="entourage-name text-xl mb-6">
            Dio
          </p>
          <div className="w-64 h-px bg-[#e8d3a9] mx-auto mb-8"></div>
        </div>
        
        {/* Bible and Coin Bearer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div>
            <h2 className="entourage-subtitle text-2xl mb-2">
              Bible Bearer
            </h2>
            <p className="entourage-name text-xl mb-2">
              Mikael Johann Aquiatan
            </p>
            <div className="w-64 h-px bg-[#e8d3a9] mx-auto mb-6"></div>
          </div>
          
          <div>
            <h2 className="entourage-subtitle text-2xl mb-2">
              Coin Bearer
            </h2>
            <p className="entourage-name text-xl mb-2">
              Marco Aquiatan
            </p>
            <div className="w-64 h-px bg-[#e8d3a9] mx-auto mb-6"></div>
          </div>
        </div>
        
        {/* Flower Girls */}
        <div className="mb-8">
          <h2 className="entourage-subtitle text-2xl mb-2">
            Flower Lady
          </h2>
          <p className="entourage-name text-xl mb-2">
            Ms. Haydara Mama
          </p>
          <div className="w-64 h-px bg-[#e8d3a9] mx-auto mb-4"></div>
        </div>
      </div>
    </section>
  );
};

export default EntourageSection; 