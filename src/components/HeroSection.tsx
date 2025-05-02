import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { FESTIVAL_DATES, FESTIVAL_LOCATION, FESTIVAL_YEAR } from '@/lib/constants';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center justify-center text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-rock-light/20 rounded-full animate-pulse delay-100"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-rock-orange/20 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-rock-red/20 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="space-y-8">
          <Logo withAnimation size="lg" className="mx-auto" />
          
          <div className="space-y-4 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold font-bebas tracking-wider">
              РОК ФЕСТИВАЛЬ РАССВЕТ
            </h1>
            <p className="text-xl md:text-2xl font-light">
              {FESTIVAL_DATES} · {FESTIVAL_YEAR}
            </p>
            <p className="text-lg md:text-xl opacity-80">
              {FESTIVAL_LOCATION}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
            <Button 
              className="fire-btn text-lg px-8 py-6 animate-flame"
              onClick={() => window.location.href = "#tickets"}
            >
              Купить билеты
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-6 bg-transparent border-2 border-white hover:bg-white/10"
              onClick={() => window.location.href = "#lineup"}
            >
              Посмотреть лайнап
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
