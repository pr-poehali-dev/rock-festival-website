import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PhotoSection from '@/components/PhotoSection';
import VideoSection from '@/components/VideoSection';
import SponsorsSection from '@/components/SponsorsSection';
import LocationSection from '@/components/LocationSection';
import TicketsSection from '@/components/TicketsSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PhotoSection />
        <VideoSection />
        <SponsorsSection />
        <LocationSection />
        <TicketsSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;