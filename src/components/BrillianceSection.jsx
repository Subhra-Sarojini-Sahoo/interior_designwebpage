import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { accordionItems, sectionImages } from '../data/mock';

const BrillianceSection = () => {
  const [open, setOpen] = useState(accordionItems[0].id);

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left image */}
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={sectionImages.brilliance}
              alt="Bright living room with bookshelf and lamp"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="lg:col-span-7">
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium tracking-tight text-black leading-[1.15]">
            Designing Your Dream
            <br />
            with Brilliance
          </h2>

          <p className="mt-6 text-neutral-600 text-[15px] md:text-[16px] leading-[1.75] max-w-[640px]">
            Elevate your spaces with bespoke interior designs that reflect your
            unique style and aspirations, crafted with precision and brilliance
            for an unforgettable living experience.
          </p>

          <div className="mt-10 border-t border-neutral-200">
            {accordionItems.map((item) => {
              const isOpen = open === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-neutral-200"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span
                      className={`text-[15px] md:text-[16px] transition-colors duration-200 ${
                        isOpen
                          ? 'text-black font-medium'
                          : 'text-neutral-700 group-hover:text-black'
                      }`}
                    >
                      {item.title}
                    </span>
                    <span className="shrink-0 text-neutral-700">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? 'max-h-40 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-neutral-600 text-[14px] md:text-[15px] leading-[1.7] pr-8">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <button className="bg-black text-white text-[15px] px-8 py-3.5 rounded-sm hover:bg-neutral-800 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrillianceSection;
