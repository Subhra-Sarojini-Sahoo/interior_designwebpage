import React from 'react';
import { Rocket, Compass, CheckCircle2 } from 'lucide-react';
import { designSteps, sectionImages } from '../data/mock';

const iconMap = { Rocket, Compass, CheckCircle2 };

const ThreeStepsSection = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left content */}
        <div className="lg:col-span-6">
          <h2 className="font-serif text-[34px] md:text-[44px] font-medium tracking-tight text-black leading-[1.15]">
            Designing Your Dream in
            <br />
            Three Simple Steps
          </h2>

          <div className="mt-12 space-y-10">
            {designSteps.map((step) => {
              const Icon = iconMap[step.icon] || Rocket;
              return (
                <div key={step.id} className="flex gap-5">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-black text-white flex items-center justify-center">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[20px] md:text-[22px] font-medium text-black">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-neutral-600 text-[14px] md:text-[15px] leading-[1.7] max-w-[460px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right image */}
        <div className="lg:col-span-6 lg:pt-12">
          <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-sm">
            <img
              src={sectionImages.threeSteps}
              alt="Elegant living room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepsSection;
