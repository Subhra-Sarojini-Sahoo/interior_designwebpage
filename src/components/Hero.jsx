import React from 'react';
import { ArrowDown } from 'lucide-react';
import { stats, heroImages } from '../data/mock';

const Hero = () => {
  return (
    <section id="home" className="max-w-[1280px] mx-auto px-6 md:px-10 pt-8 md:pt-12 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left column */}
        <div className="lg:col-span-7 flex flex-col">
          <h1 className="font-serif font-medium tracking-[-0.02em] text-black leading-[0.95] text-[52px] sm:text-[68px] md:text-[84px] lg:text-[96px]">
            One Stop Solution
            <br />
            for Elegant
            <br />
            Interiors
          </h1>

          <p className="mt-8 text-neutral-600 text-[16px] md:text-[17px] leading-[1.7] max-w-[560px]">
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge modern
            Innovation, Allowing you to transform your living spaces into the
            epitome of luxury and sophistication
          </p>

          <div className="mt-12">
            <button className="bg-black text-white text-[15px] px-10 py-4 rounded-sm hover:bg-neutral-800 transition-colors duration-200">
              Start Project
            </button>
          </div>

          
        </div>

        {/* Right column - images */}
        <div className="lg:col-span-5 relative min-h-[600px] md:min-h-[760px]">
          {/* Top image */}
          <div className="relative w-full max-w-[420px] ml-auto">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={heroImages.primary}
                alt="Modern interior with elegant chair"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom image with frame outline */}
          <div className="relative w-full max-w-[440px] mt-8 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0">
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-black rounded-sm pointer-events-none hidden md:block" />
            <div className="aspect-[5/4] overflow-hidden rounded-sm">
              <img
                src={heroImages.secondary}
                alt="Cozy modern living room with sofa and plant"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              aria-label="Scroll down"
              className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-12 h-16 md:w-14 md:h-20 bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-colors duration-200"
            >
              <ArrowDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
