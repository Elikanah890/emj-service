import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { aboutData } from '../data/about';
import LocationMap from '../components/sections/LocationMap';
import CallToAction from '../components/sections/CallToAction';

const About: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About <span className="text-secondary-gold">EMJ</span> SERVICE
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Your trusted partner for event decoration and vehicle services in Tanzania
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/logo.jpeg" 
                alt="Company History" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            
            <div>
              <SectionHeading 
                title="Our Story" 
                subtitle="The journey of EMJ SERVICE"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-gray-600 mb-6">
                  Founded by {aboutData.founder}, EMJ SERVICE began with a vision to provide exceptional 
                  services in event decoration and vehicle registration in Tanzania. What started as a small 
                  operation has grown into a trusted name in the industry, serving clients throughout the country.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Our journey has been marked by a commitment to excellence, innovative solutions, and a deep 
                  understanding of our clients' needs. We've built our reputation on reliability, quality, and 
                  professionalism in everything we do.
                </p>
                
                <p className="text-gray-600">
                  Today, EMJ SERVICE continues to grow and evolve, always maintaining the core values and 
                  dedication to customer satisfaction that have defined us from the beginning.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Mission, Vision & Values" 
            subtitle="What drives us every day"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Mission */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-serif text-2xl font-bold text-secondary-navy mb-4">Our Mission</h3>
              <p className="text-gray-600">
                {aboutData.mission}
              </p>
            </motion.div>
            
            {/* Vision */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="font-serif text-2xl font-bold text-secondary-navy mb-4">Our Vision</h3>
              <p className="text-gray-600">
                {aboutData.vision}
              </p>
            </motion.div>
            
            {/* Values */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h3 className="font-serif text-2xl font-bold text-secondary-navy mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                {aboutData.values.map((value, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-secondary-gold mr-2">•</span>
                    {value}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Founder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading 
              title="Meet Our Founder" 
              subtitle="The visionary behind EMJ SERVICE"
              centered
            />
            
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 inline-block rounded-full overflow-hidden border-4 border-secondary-gold p-1">
                <img 
                  src="/logo.jpeg" 
                  alt={aboutData.founder} 
                  className="w-48 h-48 rounded-full object-cover"
                />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-secondary-navy mb-2">{aboutData.founder}</h3>
              <p className="text-gray-500 mb-6">Founder & CEO</p>
              
              <p className="text-gray-600 mb-4">
                With a passion for excellence and an entrepreneurial spirit, {aboutData.founder.split(' ')[0]} established 
                EMJ SERVICE to fill a gap in the market for high-quality event decoration and vehicle 
                registration services.
              </p>
              
              <p className="text-gray-600">
                {aboutData.founder.split(' ')[0]}'s vision, leadership, and commitment to customer satisfaction have been the 
                driving force behind the company's success and growth over the years.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Location */}
      <LocationMap />
      
      {/* Call to Action */}
      <CallToAction />
    </main>
  );
};

export default About;