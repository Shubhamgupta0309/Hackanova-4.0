'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const SpeakersSection = () => {
  const speakers = [
    { name: 'Jane Doe', role: 'AI Researcher', image: '/placeholder.svg' },
    { name: 'John Smith', role: 'Tech Entrepreneur', image: '/placeholder.svg' },
    { name: 'Alice Johnson', role: 'Cybersecurity Expert', image: '/placeholder.svg' },
    { name: 'Bob Williams', role: 'Blockchain Developer', image: '/placeholder.svg' },
  ]

  return (
    <section id="speakers" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-orange-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Speakers and Judges
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-orange-500">{speaker.name}</h3>
              <p className="text-gray-300">{speaker.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpeakersSection

