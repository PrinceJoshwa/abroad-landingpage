import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isCourseFinder = location.pathname === '/course-finder'

  const getNavLink = (hash) => {
    return isCourseFinder ? `/${hash}` : hash
  }

  return (
    <>
      <motion.header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white text-blue-900 shadow-md' : 'bg-transparent text-blue-900'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-3xl font-bold"
            whileHover={{ scale: 1.1 }}
          >
            <Link to="/">MOAS</Link>
          </motion.h1>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden block focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
            >
              {menuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:flex-row md:space-x-6">
            <Link 
              to={getNavLink("#hero")}
              className="hover:text-orange-500 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/course-finder" 
              className="hover:text-orange-500 transition-colors"
            >
              Course Finder
            </Link>
            {/* <Link 
              to={getNavLink("#how-it-works")}
              className="hover:text-orange-500 transition-colors"
            >
              How It Works
            </Link>
            <Link 
              to={getNavLink("#testimonials")}
              className="hover:text-orange-500 transition-colors"
            >
              Testimonials
            </Link> */}
            <Link 
              to={getNavLink("#contact")}
              className="hover:text-orange-500 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-blue-900 z-40 md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
              <Link 
                to={getNavLink("#hero")}
                className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/course-finder" 
                className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Course Finder
              </Link>
              {/* <Link 
                to={getNavLink("#how-it-works")}
                className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to={getNavLink("#testimonials")}
                className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Testimonials
              </Link> */}
              <Link 
                to={getNavLink("#contact")}
                className="text-white text-xl py-4 hover:text-orange-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header



