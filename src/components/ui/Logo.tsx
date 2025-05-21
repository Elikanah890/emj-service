import React from 'react';
import { CircleDollarSign } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center justify-center w-full h-full">
        <CircleDollarSign size={32} className="text-secondary-gold" />
        <span className="absolute text-secondary-navy font-serif font-bold text-lg">EMJ</span>
      </div>
    </div>
  );
};

export default Logo;