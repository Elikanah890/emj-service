import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'navy' | 'outline' | 'whatsapp' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  external?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  to,
  external,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]';

  const sizeStyles = {
    sm: 'px-3.5 py-2 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2',
  };

  const variantStyles = {
    gold: 'bg-secondary-gold hover:bg-secondary-darkGold text-white focus:ring-secondary-gold shadow-md shadow-secondary-gold/25 hover:shadow-lg hover:shadow-secondary-gold/30',
    navy: 'bg-secondary-navy hover:bg-[#162544] text-white focus:ring-secondary-navy shadow-md shadow-secondary-navy/25',
    outline: 'border-2 border-white/30 text-white hover:bg-white hover:text-secondary-navy focus:ring-white',
    whatsapp: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-500 shadow-md shadow-green-500/25',
    ghost: 'text-white/80 hover:text-white hover:bg-white/10 focus:ring-white',
    link: 'text-secondary-gold hover:text-secondary-darkGold underline p-0 shadow-none min-h-0',
  };

  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (to) {
    if (external) {
      return (
        <a href={to} className={buttonStyles} target="_blank" rel="noopener noreferrer">
          {icon && <span>{icon}</span>}
          {children}
        </a>
      );
    }
    return (
      <Link to={to} className={buttonStyles}>
        {icon && <span>{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonStyles} {...props}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
