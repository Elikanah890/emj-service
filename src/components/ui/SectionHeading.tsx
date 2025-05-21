import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  light = false,
  className = ""
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <motion.h2 
        className={`font-serif text-3xl md:text-4xl font-bold mb-4 ${
          light ? 'text-white' : 'text-secondary-navy'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={`text-lg ${
            light ? 'text-gray-200' : 'text-gray-600'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        className={`h-1 w-20 ${centered ? 'mx-auto' : ''} mt-4 bg-secondary-gold`}
        initial={{ width: 0 }}
        animate={{ width: '5rem' }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </div>
  );
};

export default SectionHeading;