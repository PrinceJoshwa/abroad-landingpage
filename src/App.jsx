// import React from 'react'
import React,{useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import EndToEndSupport from './components/EndToEndSupport'
import SOP from './components/SOP'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import SupportServices from './components/SupportServices'
import SteppingAbroad from './components/SteppingAbroad'
import ApplicationProcess from './components/ApplicationProcess'
import Contact from './components/Contact'
// import Stats from './components/Stats'
import WhatsAppChat from './components/WhatsAppChat'
import Footer from './components/Footer'
import CourseFinder from './pages/CourseFinder'
import Scholar from './components/Scholarship'
// function App() {
//   return (
//     <div className="font-sans">
//       <Header />
//       <Hero />
//       <Services />
//       <EndToEndSupport />
//       <SOP />
//       <HowItWorks />
//       <SupportServices />
//       <SteppingAbroad />
//       <ApplicationProcess />
//       <Testimonials />
//       <Contact />
//       <WhatsAppChat />
//       <Footer />
//     </div>
//   )
// }

// export default App

// function App() {
//   return (
//     <Router>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Header />
//         <Routes>
//           <Route path="/" element={
//             <>
//       <Hero />
//       <Stats />
//       <Services />
//       <EndToEndSupport />
//       <SOP />
//       <HowItWorks />
//       <SupportServices />
//       <SteppingAbroad />
//       <ApplicationProcess />
//       <Testimonials />
//       <Contact />
//       <WhatsAppChat />
//             </>
//           } />
//           <Route path="/course-finder" element={<CourseFinder />} />
//         </Routes>
//         <Footer />
//       </motion.div>
//     </Router>
//   )
// }

// export default App


function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function MainContent() {
  return (
    <>
       <Hero />
       {/* <Stats /> */}
       <Services />
       <SOP />
       <EndToEndSupport />
       <Scholar />
       <HowItWorks />
       <SupportServices />
       <SteppingAbroad />
       <ApplicationProcess />
       <Testimonials />
       <Contact />
       <WhatsAppChat />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/course-finder" element={<CourseFinder />} />
        </Routes>
        <Footer />
      </motion.div>
    </Router>
  )
}

export default App

