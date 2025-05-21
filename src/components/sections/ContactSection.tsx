import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { aboutData } from '../../data/about';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <SectionHeading 
              title="Get In Touch" 
              subtitle="We'd love to hear from you. Contact us through any of these channels."
            />
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary-gold/10 flex items-center justify-center mr-4">
                  <Phone className="text-secondary-gold" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-secondary-navy mb-1">Phone</h3>
                  <p className="text-gray-600 mb-1">Call us directly:</p>
                  <a 
                    href={`tel:${aboutData.phone}`} 
                    className="text-secondary-gold hover:text-secondary-darkGold transition-colors"
                  >
                    {aboutData.phone}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary-gold/10 flex items-center justify-center mr-4">
                  <Mail className="text-secondary-gold" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-secondary-navy mb-1">Email</h3>
                  <p className="text-gray-600 mb-1">Send us an email:</p>
                  <a 
                    href={`mailto:${aboutData.email}`} 
                    className="text-secondary-gold hover:text-secondary-darkGold transition-colors"
                  >
                    {aboutData.email}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary-gold/10 flex items-center justify-center mr-4">
                  <MapPin className="text-secondary-gold" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-secondary-navy mb-1">Location</h3>
                  <p className="text-gray-600">
                    {aboutData.location.country}
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="mt-8"
              >
                <h3 className="text-lg font-medium text-secondary-navy mb-4">Connect with us on WhatsApp:</h3>
                <Button 
                  external 
                  to={aboutData.whatsapp}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Message on WhatsApp
                </Button>
              </motion.div>
            </div>
          </div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-bold text-secondary-navy mb-6">Send us a message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-gold focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-gold focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-gold focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-gold focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="decoration">Event Decoration</option>
                    <option value="registered-vehicle">Registered Vehicle Services</option>
                    <option value="unregistered-vehicle">Unregistered Vehicle Services</option>
                    <option value="driving-license">Driving License</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-gold focus:border-transparent"
                  />
                </div>
                
                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;