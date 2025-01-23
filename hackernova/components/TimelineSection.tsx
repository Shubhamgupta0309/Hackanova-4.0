"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Clock, Rocket, Users, FileCheck, Trophy, PresentationIcon as PresentationChart } from "lucide-react"
import type React from "react"

const TimelineEvent = ({
  date,
  title,
  icon: Icon,
  index,
}: {
  date: string
  title: string
  icon: React.ElementType
  index: number
}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      ref={ref}
      className="mb-16 flex items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div className="flex-1 pr-8 text-right" style={{ y, opacity }}>
        <h3 className="text-xl font-bold text-orange-500 mb-2">{title}</h3>
        <p className="text-yellow-300">{date}</p>
      </motion.div>
      <motion.div
        className="w-16 h-16 bg-orange-500 rounded-full z-10 flex items-center justify-center text-black"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon size={24} />
      </motion.div>
      <div className="flex-1 pl-8">
        <motion.div className="h-0.5 bg-orange-500 origin-left" style={{ scaleX: scrollYProgress }} />
      </div>
    </motion.div>
  )
}

const TimelineSection = () => {
  const events = [
    { date: "February 1, 2025", title: "Registration Opens", icon: Clock },
    { date: "February 15, 2025", title: "Team Formation Deadline", icon: Users },
    { date: "February 21, 2025", title: "Hackathon Kickoff", icon: Rocket },
    { date: "February 22, 2025", title: "Project Submissions Due", icon: FileCheck },
    { date: "February 22, 2025", title: "Finalists Announced", icon: Trophy },
    { date: "February 22, 2025", title: "Final Presentations and Awards", icon: PresentationChart },
  ]

  return (
    <section id="timeline" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background decoration */}
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
            TIMELINE
          </div>
        ))}
      </div>

      <div className="container mx-auto relative">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Event Timeline
        </motion.h2>
        <div className="relative">
          {events.map((event, index) => (
            <TimelineEvent key={event.title} date={event.date} title={event.title} icon={event.icon} index={index} />
          ))}
          <motion.div
            className="absolute top-0 bottom-0 left-1/2 w-1 bg-orange-500 -translate-x-1/2"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-2xl text-yellow-300 font-bold">36-Hour Hackathon: February 21-22, 2025</p>
          <p className="text-lg text-gray-400 mt-2">Join us for an intense 36 hours of innovation and coding!</p>
        </motion.div>
      </div>
    </section>
  )
}

export default TimelineSection

