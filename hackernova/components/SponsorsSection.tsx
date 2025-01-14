'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const SponsorsSection = () => {
  const sponsors = [
    { name: 'TechCorp', logo: '/images/devfolio.png' },
    { name: 'InnovateCo', logo: '/images/polygon.png' },
    { name: 'FutureTech', logo: '/images/replit.png' },
    { name: 'CodeMasters', logo: '/images/echo.png' },
    { name: 'DataDynamics', logo: '/images/xyz.png' },
    { name: 'CloudNine', logo: '/images/rosenfeld.png' },
  ]

  return (
    <section id="sponsors" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-orange-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Sponsors
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-32 h-32">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  layout="fill"
                  objectFit="contain"
                  className="transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SponsorsSection

