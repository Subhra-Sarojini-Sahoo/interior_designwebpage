import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: 'Invalid email',
        description: 'Please enter a valid email address.',
      });
      return;
    }
    toast({
      title: 'Subscribed!',
      description: `Thanks for joining — we'll send insights to ${email}.`,
    });
    setEmail('');
  };

  return (
    <section id="contact" className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-serif text-[30px] md:text-[40px] font-medium tracking-tight text-black leading-[1.2] max-w-[640px]">
          Subscribe to Our Newsletter
          <br />
          for Design Insights
        </h2>
        <p className="mt-5 text-neutral-600 text-[14px] md:text-[15px] leading-[1.7] max-w-[600px]">
          Be the first to discover trends, inspirations, and special offers as
          we bring the world of design directly to your inbox.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 w-full max-w-[640px] flex flex-col sm:flex-row items-stretch gap-3 sm:gap-2 bg-white border border-neutral-200 rounded-md p-2"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 outline-none text-[14px] text-neutral-800 placeholder:text-neutral-400 bg-transparent"
          />
          <button
            type="submit"
            className="bg-black text-white text-[14px] px-7 py-3 rounded-sm hover:bg-neutral-800 transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
