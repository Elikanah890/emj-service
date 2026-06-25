import { CircleDollarSign } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center justify-center w-full h-full">
        <CircleDollarSign className="w-8 h-8 sm:w-9 sm:h-9 text-secondary-gold" />
        <span className="absolute text-secondary-navy dark:text-white font-serif font-bold text-base sm:text-lg">EMJ</span>
      </div>
    </div>
  );
};

export default Logo;
