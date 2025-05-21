import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Car, PartyPopper } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';
import { decorationServices, registeredVehicleServices, drivingLicenseServices } from '../../data/services';

const ServicesOverview: React.FC = () => {
  // Get a subset of services for the overview
  const featuredDecorationServices = decorationServices.slice(0, 3);
  const featuredVehicleServices = registeredVehicleServices.slice(0, 3);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Services" 
          subtitle="Professional services tailored to your needs"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Event Decoration Card */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-decoration-light text-decoration-primary rounded-lg mb-4">
                <PartyPopper size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-secondary-navy">Event Decoration</h3>
              <p className="text-gray-600 mb-4">
                Beautiful and professional decoration services for all types of events, from weddings to corporate gatherings.
              </p>
              <ul className="space-y-2 mb-6">
                {drivingLicenseServices.slice(0, 4).map(service => (
                  <li key={service.id} className="flex items-start">
                    <span className="text-decoration-primary mr-2">•</span>
                    <span>{service.title}</span>
                  </li>
                ))}
                <li className="flex items-start">
                  <span className="text-decoration-primary mr-2">•</span>
                  <span>And more...</span>
                </li>
              </ul>
              <a 
                href="/services/decoration" 
                className="inline-block text-decoration-primary hover:text-orange-600 font-medium transition-colors"
              >
                View All Event Services →
              </a>
            </div>
          </motion.div>
          
          {/* Registered Vehicle Card */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-50 text-vehicle-registered rounded-lg mb-4">
                <Car size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-secondary-navy">Vehicle Registration</h3>
              <p className="text-gray-600 mb-4">
                Professional assistance with all aspects of vehicle registration, transfer of ownership, and related services.
              </p>
              <ul className="space-y-2 mb-6">
                {registeredVehicleServices.slice(0, 4).map(service => (
                  <li key={service.id} className="flex items-start">
                    <span className="text-vehicle-registered mr-2">•</span>
                    <span>{service.title}</span>
                  </li>
                ))}
                <li className="flex items-start">
                  <span className="text-vehicle-registered mr-2">•</span>
                  <span>And more...</span>
                </li>
              </ul>
              <a 
                href="/services/vehicles" 
                className="inline-block text-vehicle-registered hover:text-amber-600 font-medium transition-colors"
              >
                View All Vehicle Services →
              </a>
            </div>
          </motion.div>
          
          {/* Driving License Card */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-50 text-vehicle-license rounded-lg mb-4">
                <LayoutGrid size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-secondary-navy">Driving License</h3>
              <p className="text-gray-600 mb-4">
                Complete solutions for obtaining, renewing, and managing your driving license requirements.
              </p>
              <ul className="space-y-2 mb-6">
                {drivingLicenseServices.map(service => (
                  <li key={service.id} className="flex items-start">
                    <span className="text-vehicle-license mr-2">•</span>
                    <span>{service.title}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="/services/driving-license" 
                className="inline-block text-vehicle-license hover:text-green-600 font-medium transition-colors"
              >
                View All License Services →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;