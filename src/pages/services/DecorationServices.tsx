import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../../components/ui/SectionHeading';
import ServiceCard from '../../components/ui/ServiceCard';
import CallToAction from '../../components/sections/CallToAction';
import { decorationServices } from '../../data/services';

const DecorationServices: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-decoration-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Event Decoration Services
            </motion.h1>
            <motion.p 
              className="text-xl text-decoration-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Transforming ordinary events into extraordinary memories
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Decoration Services" 
            subtitle="Professional decoration services for all types of events and celebrations"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {decorationServices.map((service, index) => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                link={`/services/decoration/${service.id}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Decoration Process" 
            subtitle="How we bring your vision to life"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {/* Step 1 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-decoration-primary rounded-full text-white text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary-navy mb-2">Consultation</h3>
              <p className="text-gray-600">
                We discuss your event needs, theme, and vision to understand your expectations.
              </p>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-decoration-primary rounded-full text-white text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary-navy mb-2">Design</h3>
              <p className="text-gray-600">
                Our team creates a customized decoration plan tailored to your event.
              </p>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-decoration-primary rounded-full text-white text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary-navy mb-2">Execution</h3>
              <p className="text-gray-600">
                We handle all setup and installation with precision and attention to detail.
              </p>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-decoration-primary rounded-full text-white text-2xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary-navy mb-2">Completion</h3>
              <p className="text-gray-600">
                We ensure everything is perfect for your event and handle post-event cleanup.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </main>
  );
};

export default DecorationServices;