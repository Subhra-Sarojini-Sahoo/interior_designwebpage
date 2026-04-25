import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { testimonials, sectionImages } from '../data/mock';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const visible = 2;
  const maxIndex = Math.max(0, testimonials.length - visible);

  const prev = () => setIndex((i) => (i === 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i === maxIndex ? 0 : i + 1));

  const current = testimonials.slice(index, index + visible);
  // pad if needed
  while (current.length < visible) {
    current.push(testimonials[(index + current.length) % testimonials.length]);
  }

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left image */}
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={sectionImages.testimonialBg}
              alt="Modern luxury room interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right - testimonials */}
        <div className="lg:col-span-7">
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium tracking-tight text-black leading-[1.15]">
            What Our Customers
            <br />
            Say About Us
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {current.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="bg-[#0e0e10] text-white p-7 rounded-sm flex flex-col min-h-[260px]"
              >
                <Quote
                  size={28}
                  strokeWidth={1.4}
                  className="text-white/80"
                />
                <p className="mt-5 text-[14px] leading-[1.7] text-neutral-200">
                  {t.quote}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <button
              aria-label="Previous"
              onClick={prev}
              className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-black hover:text-black transition-colors duration-200"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-black hover:text-black transition-colors duration-200"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
