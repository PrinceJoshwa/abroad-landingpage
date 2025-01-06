

// import { motion } from 'framer-motion'
// import { ChevronRight } from 'lucide-react'
// import plane from '../../assets/crcimg11.png'

// export default function HelpCard({ onTalkToExpert }) {
//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         duration: 0.5,
//         when: "beforeChildren",
//         staggerChildren: 0.2
//       }
//     }
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   }

//   const buttonVariants = {
//     rest: { scale: 1 },
//     hover: { scale: 1.05 },
//     tap: { scale: 0.95 }
//   }

//   const planeVariants = {
//     hidden: { x: 100, y: 100, opacity: 0, rotate: -45 },
//     visible: { 
//       x: 0, 
//       y: 0, 
//       opacity: 1,
//       rotate: 0,
//       transition: { 
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         delay: 0.5
//       }
//     },
//     hover: {
//       y: [-10, 10],
//       transition: {
//         y: {
//           repeat: Infinity,
//           duration: 2,
//           repeatType: "reverse",
//           ease: "easeInOut"
//         }
//       }
//     }
//   }

//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       className="bg-blue-700 text-white rounded-3xl p-6 relative overflow-hidden"
//     >
//       <div className="relative z-10">
//         <motion.h2 
//           variants={itemVariants}
//           className="text-xl font-semibold mb-4"
//         >
//           need more help in finding your dream course?
//         </motion.h2>
//         <motion.button
//           variants={buttonVariants}
//           initial="rest"
//           whileHover="hover"
//           whileTap="tap"
//           onClick={onTalkToExpert}
//           className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2"
//         >
//           Talk to expert
//           <motion.div
//             initial={{ x: -5 }}
//             animate={{ x: 0 }}
//             transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
//           >
//             <ChevronRight className="w-4 h-4" />
//           </motion.div>
//         </motion.button>
//       </div>
//       <motion.div 
//         className="absolute bottom-0 right-0 w-32"
//         variants={planeVariants}
//         initial="hidden"
//         animate="visible"
//         whileHover="hover"
//       >
//         <img
//           src={plane}
//           alt="Airplane illustration"
//           className="w-full h-full object-contain"
//         />
//       </motion.div>
//     </motion.div>
//   )
// }


import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function HelpCard({ onTalkToExpert }) {
  return (
    <div className="bg-blue-700 rounded-xl p-6 text-white">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <MessageSquare className="w-6 h-6" />
          <div>
            <h2 className="text-xl font-semibold">Need help choosing?</h2>
            <p className="text-white/80">Our experts are here to guide you</p>
          </div>
        </div>
        <button
          onClick={onTalkToExpert}
          className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50"
        >
          Talk to Expert
        </button>
      </div>
    </div>
  );
}