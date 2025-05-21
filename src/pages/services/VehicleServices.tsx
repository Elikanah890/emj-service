import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../../components/ui/SectionHeading';
import ServiceCard from '../../components/ui/ServiceCard';
import CallToAction from '../../components/sections/CallToAction';
import { registeredVehicleServices, unregisteredVehicleServices } from '../../data/services';

const VehicleServices: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-vehicle-registered">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Vehicle Registration Services
            </motion.h1>
            <motion.p 
              className="text-xl text-amber-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Professional assistance for all your vehicle registration needs
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Registered Vehicles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Registered Vehicle Services" 
            subtitle="Comprehensive services for vehicles already in the registry system"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {registeredVehicleServices.map((service, index) => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                bgColor={service.bgColor}
                link={`/services/vehicles/registered/${service.id}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Unregistered Vehicles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Unregistered Vehicle Services" 
            subtitle="Services for vehicles that need to be registered in the system"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {unregisteredVehicleServices.map((service, index) => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                bgColor={service.bgColor}
                link={`/services/vehicles/unregistered/${service.id}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Vehicle Registration Process" 
            subtitle="How we handle your vehicle documentation needs"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Step 1 */}
            <motion.div 
              className="bg-gray-50 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-vehicle-registered rounded-full text-white text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary-navy mb-3">Document Review</h3>
              <p className="text-gray-600">
                We assess your current documentation and identify what's needed for your specific service.
              </p>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              className="bg-gray-50 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-vehicle-registered rounded-full text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary-navy mb-3">Application Process</h3>
              <p className="text-gray-600">
                Our experts handle all paperwork and submit applications on your behalf.
              </p>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              className="bg-gray-50 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-vehicle-registered rounded-full text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary-navy mb-3">Completion</h3>
              <p className="text-gray-600">
                We deliver all final documents and registrations to you once processed.
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

export default VehicleServices;