import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/mock';

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 border-[2.5px] border-black rounded-md flex items-center justify-center">
      <div className="w-3 h-3 bg-black rounded-[2px]" />
    </div>
    <span className="font-serif text-[22px] font-semibold tracking-tight text-black">
      Ashoka Interiors
    </span>
  </div>
);

const Header = () => {
  const [active, setActive] = useState('Home');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_0_rgba(0,0,0,0.06)]' : ''
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-5 md:py-7 flex items-center justify-between">
        <a href="#home" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`text-[15px] tracking-tight transition-colors duration-200 hover:text-black ${
                active === link.label
                  ? 'text-black font-medium'
                  : 'text-neutral-500'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button className="bg-black text-white text-[15px] px-7 py-3 rounded-md hover:bg-neutral-800 transition-colors duration-200">
            Sign Up
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 px-6 py-4 bg-white">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActive(link.label);
                  setOpen(false);
                }}
                className="text-[15px] text-neutral-700"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-black text-white text-[15px] px-6 py-3 rounded-md mt-2 self-start">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
