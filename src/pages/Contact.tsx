import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';
import LocationMap from '../components/sections/LocationMap';

const Contact: React.FC = () => {
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
              Contact <span className="text-secondary-gold">Us</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We're here to help with all your event decoration and vehicle service needs
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <ContactSection />
      
      {/* Map */}
      <LocationMap />
    </main>
  );
};

export default Contact;