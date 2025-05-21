import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  bgColor?: string;
  link: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  id, 
  title, 
  description, 
  imageUrl, 
  bgColor = "bg-white",
  link,
  index 
}) => {
  return (
    <motion.div 
      className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${bgColor === "bg-white" ? "bg-white" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className={`p-6 ${bgColor !== "bg-white" ? bgColor : ""} ${bgColor !== "bg-white" ? "text-white" : "text-gray-800"}`}>
        <h3 className="font-serif text-xl font-bold mb-2">{title}</h3>
        <p className={`mb-4 ${bgColor !== "bg-white" ? "text-gray-100" : "text-gray-600"}`}>{description}</p>
        <Link 
          to={link} 
          className={`inline-flex items-center text-sm font-medium ${
            bgColor !== "bg-white" 
              ? "text-white hover:text-gray-200" 
              : "text-secondary-gold hover:text-secondary-darkGold"
          } transition-colors`}
        >
          Learn more <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;