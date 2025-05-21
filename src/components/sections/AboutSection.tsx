import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Star, Calendar, Award, PenTool } from 'lucide-react';
import { aboutData } from '../../data/about';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/logo.jpeg"
                alt="EMJ Service Team" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary-gold text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm uppercase tracking-wider">Years of Experience</div>
            </div>
          </motion.div>
          
          {/* Content */}
          <div>
            <SectionHeading 
              title="About EMJ SERVICE" 
              subtitle="Your trusted partner for event decoration and vehicle services in Tanzania."
            />
            
            <motion.p 
              className="text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Founded by {aboutData.founder}, EMJ SERVICE has been delivering exceptional 
              event decoration and vehicle-related services across Tanzania. Our commitment to quality, 
              professionalism, and customer satisfaction has made us a preferred choice for clients 
              seeking reliable and premium services.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Feature 1 */}
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary-gold/10 flex items-center justify-center mr-4">
                  <Star className="text-secondary-gold" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-secondary-navy mb-1">Premium Quality</h3>
                  <p className="text-gray-600">
                    We deliver excellence in every service we provide.
                  </p>
                </div>
              </motion.div>
              
              {/* Feature 2 */}
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary-gold/10 flex items-center justify-center mr-4">
                  <Calendar className="text-secondary-gold" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-secondary-navy mb-1">Timely Delivery</h3>
                  <p className="text-gray-600">
                    We value your time and always meet deadlines.
                  </p>
                </div>
              </motion.div>
              
              {/* Feature 3 */}
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary-gold/10 flex items-center justify-center mr-4">
                  <Award className="text-secondary-gold" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-secondary-navy mb-1">Certified Experts</h3>
                  <p className="text-gray-600">
                    Our team consists of qualified professionals.
                  </p>
                </div>
              </motion.div>
              
              {/* Feature 4 */}
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary-gold/10 flex items-center justify-center mr-4">
                  <PenTool className="text-secondary-gold" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-secondary-navy mb-1">Creative Solutions</h3>
                  <p className="text-gray-600">
                    We bring innovative ideas to every project.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-serif font-bold text-secondary-navy mb-4">Our Values</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                {aboutData.values.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;