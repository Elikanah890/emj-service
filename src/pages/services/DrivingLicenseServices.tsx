import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../../components/ui/SectionHeading';
import CallToAction from '../../components/sections/CallToAction';
import { drivingLicenseServices } from '../../data/services';

const DrivingLicenseServices: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-vehicle-license">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Driving License Services
            </motion.h1>
            <motion.p 
              className="text-xl text-green-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Complete assistance for all your driving license needs
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* License Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Driving License Services" 
            subtitle="Comprehensive services for obtaining and managing your driving license"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {drivingLicenseServices.map((service, index) => (
              <motion.div 
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-md border-t-4 border-vehicle-license"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="font-serif text-2xl font-bold text-secondary-navy mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  Professional assistance for {service.title.toLowerCase()} driving license applications.
                </p>
                <a 
                  href={`/services/driving-license/${service.id}`}
                  className="inline-block text-vehicle-license hover:text-green-700 font-medium transition-colors"
                >
                  Learn more →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Driving License Process" 
            subtitle="How we help you obtain your driving license"
            centered
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Process timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-vehicle-license"></div>
              
              {/* Step 1 */}
              <motion.div 
                className="relative z-10 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-vehicle-license text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">1</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
                  <h3 className="text-xl font-serif font-bold text-secondary-navy mb-2">Documentation Review</h3>
                  <p className="text-gray-600">
                    We thoroughly review your identification documents and eligibility for the type of license you need.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                className="relative z-10 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-vehicle-license text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">2</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
                  <h3 className="text-xl font-serif font-bold text-secondary-navy mb-2">Application Preparation</h3>
                  <p className="text-gray-600">
                    We prepare and complete all necessary application forms and documentation required by authorities.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                className="relative z-10 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-vehicle-license text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">3</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
                  <h3 className="text-xl font-serif font-bold text-secondary-navy mb-2">Submission and Follow-up</h3>
                  <p className="text-gray-600">
                    We submit your application to the proper authorities and actively follow up on its progress.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div 
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-vehicle-license text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">4</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
                  <h3 className="text-xl font-serif font-bold text-secondary-navy mb-2">License Delivery</h3>
                  <p className="text-gray-600">
                    Once approved, we ensure your license is delivered to you promptly and securely.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </main>
  );
};

export default DrivingLicenseServices;