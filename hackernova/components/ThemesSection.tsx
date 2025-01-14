'use client'

import { motion } from 'framer-motion'

const ThemesSection = () => {
  const themes = [
    { name: 'Sustainability', description: 'Develop solutions for a greener future' },
    { name: 'Artificial Intelligence', description: 'Push the boundaries of AI and machine learning' },
    { name: 'Health Tech', description: 'Innovate in healthcare and wellness' },
    { name: 'Fintech', description: 'Revolutionize financial services and technologies' },
  ]

  return (
    <section id="themes" className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-8xl font-bold text-white whitespace-nowrap"
            style={{
              top: `${(i * 100) % 800}px`,
              left: `${(i * 300) % 2000}px`,
              transform: `rotate(${i * 45}deg)`,
            }}
          >
            THEME
          </div>
        ))}
      </div>
      <div className="container mx-auto relative">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-orange-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hackathon Themes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.name}
              className="bg-black bg-opacity-50 rounded-lg p-6 border border-orange-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-orange-500">{theme.name}</h3>
              <p className="text-gray-300">{theme.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThemesSection
