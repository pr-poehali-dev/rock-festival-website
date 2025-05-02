import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SECTIONS } from '@/lib/constants';
import Logo from '@/components/Logo';
import Icon from '@/components/ui/icon';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Logo size="sm" />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {SECTIONS.map((section) => (
              <a 
                key={section.id} 
                href={`#${section.id}`} 
                className="nav-item text-white hover:text-primary transition-colors"
              >
                <Icon name={section.icon} size={16} />
                <span>{section.title}</span>
              </a>
            ))}
            <Button 
              className="fire-btn ml-4"
              onClick={() => window.location.href = "#tickets"}
            >
              Купить билеты
            </Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            className="md:hidden text-white" 
            onClick={toggleMenu}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-rock-dark border-t border-rock-light/20 animate-fadeIn">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {SECTIONS.map((section) => (
                <a 
                  key={section.id} 
                  href={`#${section.id}`} 
                  className="nav-item text-white py-2 px-4 hover:bg-rock-light/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon name={section.icon} size={20} />
                  <span>{section.title}</span>
                </a>
              ))}
              <Button 
                className="fire-btn mt-4 w-full"
                onClick={() => {
                  window.location.href = "#tickets";
                  setIsMenuOpen(false);
                }}
              >
                Купить билеты
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
