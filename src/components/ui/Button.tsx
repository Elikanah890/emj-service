import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  external?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  external,
  icon,
  className = '',
  ...props
}) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-secondary-gold hover:bg-secondary-darkGold text-white focus:ring-secondary-gold',
    secondary: 'bg-secondary-navy hover:bg-secondary-darkNavy text-white focus:ring-secondary-navy',
    outline: 'border border-secondary-gold text-secondary-gold hover:bg-secondary-gold hover:text-white focus:ring-secondary-gold',
    link: 'text-secondary-gold hover:text-secondary-darkGold underline focus:ring-secondary-gold p-0',
  };
  
  // Combine styles
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  
  // If "to" prop is provided, render as Link
  if (to) {
    if (external) {
      return (
        <a href={to} className={buttonStyles} target="_blank" rel="noopener noreferrer">
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </a>
      );
    }
    
    return (
      <Link to={to} className={buttonStyles}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    );
  }
  
  // Otherwise render as button
  return (
    <button className={buttonStyles} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;