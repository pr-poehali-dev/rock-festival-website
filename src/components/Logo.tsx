import React from 'react';
import { FESTIVAL_NAME } from '@/lib/constants';

interface LogoProps {
  className?: string;
  withAnimation?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  withAnimation = false,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-16',
    lg: 'h-32'
  };

  return (
    <div className={`relative ${className}`}>
      <img 
        src="https://cdn.poehali.dev/files/23841097-aaab-4968-968e-e45556273bb5.png" 
        alt={FESTIVAL_NAME} 
        className={`${sizeClasses[size]} ${withAnimation ? 'animate-float' : ''}`}
      />
    </div>
  );
};

export default Logo;
