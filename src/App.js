import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrillianceSection from './components/BrillianceSection';
import ThreeStepsSection from './components/ThreeStepsSection';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Services from './components/Services';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen bg-white text-black">
      <Header />
      <main>
        <Hero />
        <Services />
        <BrillianceSection />
        <ThreeStepsSection />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
