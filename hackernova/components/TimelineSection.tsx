'use client'

import { motion } from 'framer-motion'

const TimelineSection = () => {
  const events = [
    { date: 'August 1, 2023', title: 'Registration Opens' },
    { date: 'August 15, 2023', title: 'Team Formation Deadline' },
    { date: 'September 1, 2023', title: 'Hackathon Kickoff' },
    { date: 'September 3, 2023', title: 'Project Submissions Due' },
    { date: 'September 5, 2023', title: 'Finalists Announced' },
    { date: 'September 10, 2023', title: 'Final Presentations and Awards' },
  ]

  return (
    <section id="timeline" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-orange-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Event Timeline
        </motion.h2>
        <div className="relative">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              className="mb-8 flex items-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-1 text-right mr-4 md:mr-8">
                <h3 className="text-xl font-bold text-orange-500">{event.title}</h3>
                <p className="text-gray-300">{event.date}</p>
              </div>
              <div className="w-4 h-4 bg-orange-500 rounded-full z-10"></div>
              <div className="flex-1 ml-4 md:ml-8"></div>
            </motion.div>
          ))}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-orange-500 -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  )
}

export default TimelineSection

