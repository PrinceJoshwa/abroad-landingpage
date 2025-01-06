
import React from 'react';
import { motion } from 'framer-motion';
import sopBackground from '../assets/sop.png'; // Import the image from the assets folder

function SOP() {
  return (
    <section 
    //   className="py-44 bg-orange-500 text-white bg-cover bg-center bg-no-repeat relative" 
    //   style={{ backgroundImage: `url(${sopBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll', backgroundPositionY: '0px' }}
    // >
    className="min-h-screen bg-orange-500 text-white bg-cover bg-center bg-no-repeat relative"
    style={{ 
      backgroundImage: `url(${sopBackground})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',  
    }}
  >
      {/* Overlay for better text visibility */}
      {/* <div className="absolute inset-0 bg-orange-500 bg-opacity-70"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Write a Standout SOP with Expert Guidance!</h2>
          <p className="text-xl mb-8">We Craft the Perfect Statement of Purpose for You!</p>
          <motion.a 
            href='#contact'
            className="bg-white text-orange-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your SOP Today
          </motion.a>
        </motion.div>
      </div> */}
    </section>
  );
}

export default SOP;


