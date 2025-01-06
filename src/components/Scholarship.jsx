import React from 'react';
import { motion } from 'framer-motion';
import scholarBackground from '../assets/scholarship.png'; // Import the image from the assets folder

function Scholar() {
  return (
    <section 
    className="min-h-screen 0 text-white bg-cover bg-center bg-no-repeat relative"
    style={{ 
      backgroundImage: `url(${scholarBackground})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',  
    }}
  >
    </section>
  );
}

export default Scholar;


