import React from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { Building2, Users, Globe2, Trophy } from 'lucide-react'
import studentsAbroad from "../assets/image2.jpg"

function AnimatedCounter({ from, to, duration = 2, delay = 0 }) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, latest => Math.round(latest))
  
  React.useEffect(() => {
    const controls = animate(count, to, {
      duration: duration,
      delay: delay,
      ease: "easeOut"
    })
    return controls.stop
  }, [count, to, duration, delay])
  
  return <motion.span>{rounded}</motion.span>
}

const stats = [
  {
    icon: Building2,
    value: 1500,
    label: 'universities',
    suffix: '+',
    divideBy: 1
  },
  {
    icon: Users,
    value: 3000,
    label: 'mentors',
    suffix: '+',
    divideBy: 1
  },
  {
    icon: Globe2,
    value: 40,
    label: 'countries',
    suffix: '',
    divideBy: 1
  },
  {
    icon: Trophy,
    value: 90000,
    label: 'success stories',
    suffix: 'K+',
    divideBy: 1000
  }
]

function Stats() {
  return (
    <section id="stats" className="py-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Global Impact
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Join thousands of students who have successfully started their international education journey with us. Our extensive network and expertise ensure your success.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-2">
                    <motion.div
                      className="bg-blue-100 p-2 rounded-full mr-3"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon className="w-5 h-5 text-blue-600" />
                    </motion.div>
                    <div className="text-2xl font-bold text-blue-900">
                      <AnimatedCounter 
                        from={0} 
                        to={stat.value / stat.divideBy} 
                        delay={index * 0.2} 
                      />
                      {stat.suffix}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm capitalize">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={studentsAbroad}
                alt="Students studying abroad"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Expand Your Horizons</h3>
                <p className="text-sm">Experience world-class education and cultural diversity with our study abroad programs</p>
              </div>
            </div>
          </motion.div>
        </div>
        {/* <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  )
}

export default Stats

