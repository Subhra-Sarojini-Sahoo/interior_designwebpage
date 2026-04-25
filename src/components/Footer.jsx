import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { footerData } from '../data/mock';

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 border-[2.5px] border-white rounded-md flex items-center justify-center">
      <div className="w-3 h-3 bg-white rounded-[2px]" />
    </div>
    <span className="font-serif text-[22px] font-semibold tracking-tight text-white">
      Ashoka Interiors
    </span>
  </div>
);

const Footer = () => {
  return (
    <footer id="support" className="bg-[#0e0e10] text-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-6 text-neutral-400 text-[14px] leading-[1.7] max-w-[260px]">
              {footerData.brand.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-300 hover:bg-white hover:text-black hover:border-white transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerData.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[15px] font-medium text-white">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-[15px] font-medium text-white">
              {footerData.contact.title}
            </h4>
            <ul className="mt-5 space-y-3 text-[14px] text-neutral-400">
              <li>{footerData.contact.phone}</li>
              <li className="max-w-[220px] leading-[1.6]">
                {footerData.contact.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-neutral-800 text-[12px] text-neutral-500">
          ©{' '}
          {new Date().getFullYear()} Ashoka Interiors. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
