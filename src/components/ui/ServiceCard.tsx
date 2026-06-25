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
  const isDarkBg = bgColor !== "bg-white";

  return (
    <motion.div
      className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col border border-gray-100 dark:border-gray-700 ${bgColor === "bg-white" ? "bg-white dark:bg-gray-900" : bgColor}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="h-36 sm:h-40 md:h-44 lg:h-48 overflow-hidden flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className={`p-4 sm:p-5 lg:p-6 flex flex-col flex-1 ${isDarkBg ? 'text-white' : 'text-gray-800 dark:text-gray-100'}`}>
        <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2">
          {title}
        </h3>

        <p className={`text-sm sm:text-base mb-3 sm:mb-4 flex-1 ${isDarkBg ? 'text-gray-100 dark:text-gray-200' : 'text-gray-600 dark:text-gray-400'}`}>
          {description}
        </p>

        <Link
          to={link}
          className={`inline-flex items-center text-sm sm:text-base font-medium mt-auto transition-colors group ${
            isDarkBg
              ? 'text-white hover:text-gray-200'
              : 'text-secondary-gold hover:text-secondary-darkGold'
          }`}
        >
          Learn more <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
