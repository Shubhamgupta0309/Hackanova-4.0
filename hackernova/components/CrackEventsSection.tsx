'use client'

import { motion } from 'framer-motion'

const CrackEventsSection = () => {
  const events = [
    { name: 'Code Sprint', description: 'Race against time to solve coding challenges', prize: '$1000' },
    { name: 'Bug Bash', description: 'Find and fix the most bugs in a given codebase', prize: '$750' },
    { name: 'AI Showdown', description: 'Create the most impressive AI model', prize: '$1500' },
    { name: 'Design Duel', description: 'Design the best UI/UX for a given problem', prize: '$1000' },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-orange-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Crack Events and Prizes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-orange-500">{event.name}</h3>
              <p className="text-gray-300 mb-4">{event.description}</p>
              <p className="text-xl font-bold">Prize: {event.prize}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-orange-500">Total Prize Pool</h3>
          <p className="text-5xl font-bold text-white">$10,000</p>
        </motion.div>
      </div>
    </section>
  )
}

export default CrackEventsSection

