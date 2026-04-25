import React from 'react';
import {
  Lamp,
  Armchair,
  Trees,
  PaintBucket,
  Sofa,
  Home as HomeIcon,
} from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  Lamp,
  Armchair,
  Trees,
  PaintBucket,
  Sofa,
  Home: HomeIcon,
};

const Services = () => {
  return (
    <section id="services" className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="flex items-center gap-4 mb-16">
        <div className="w-10 h-px bg-black" />
        <h2 className="font-serif text-[36px] md:text-[44px] font-medium tracking-tight text-black">
          Our Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
        {services.map((s) => {
          const Icon = iconMap[s.icon] || HomeIcon;
          return (
            <div
              key={s.title}
              className="group cursor-default"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center text-black">
                  <Icon strokeWidth={1.4} size={42} />
                </div>
                <h3 className="font-serif text-[22px] md:text-[24px] font-medium text-black mt-1">
                  {s.title}
                </h3>
              </div>
              <p className="mt-4 text-neutral-600 text-[15px] leading-[1.7]">
                {s.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
