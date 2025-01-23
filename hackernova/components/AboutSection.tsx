"use client"

import { motion } from "framer-motion"
import ScrollAnimation from "./ScrollAnimation"

const BorderCorner = ({ className }: { className?: string }) => (
  <div className={`absolute w-4 h-4 border-orange-500 ${className}`} />
)

const StatBox = ({ number, text, delay = 0 }: { number: string; text: string; delay?: number }) => {
  return (
    <motion.div
      className="text-center relative p-1"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative">
        <BorderCorner className="top-0 left-0 border-t-2 border-l-2" />
        <BorderCorner className="top-0 right-0 border-t-2 border-r-2" />
        <BorderCorner className="bottom-0 left-0 border-b-2 border-l-2" />
        <BorderCorner className="bottom-0 right-0 border-b-2 border-r-2" />
        <motion.div
          className="text-6xl font-bold text-orange-500 p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          {number}
        </motion.div>
        <motion.div
          className="text-lg mt-2 text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
        >
          {text}
        </motion.div>
      </div>
    </motion.div>
  )
}

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <ScrollAnimation animation="fade">
          <motion.h2
            className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-500"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            About Hackernova 4.0
          </motion.h2>

          <motion.p
            className="text-xl text-center max-w-2xl mx-auto mb-16 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Hackernova 4.0 is a dynamic journey that brings together talented students, mentors, and institutions to
            solve real-world problems through code. It's a space where passion meets technology, and every line of code
            has the power to change the world. <br />
            <span className="text-orange-500">Join us as we build, innovate, and learn together!</span>
          </motion.p>

          <div className="relative p-8">
            <BorderCorner className="top-0 left-0 border-t-2 border-l-2" />
            <BorderCorner className="top-0 right-0 border-t-2 border-r-2" />
            <BorderCorner className="bottom-0 left-0 border-b-2 border-l-2" />
            <BorderCorner className="bottom-0 right-0 border-b-2 border-r-2" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatBox number="400+" text="Student Ready to Compete" delay={0.2} />
              <StatBox number="100+" text="Teams Participating" delay={0.4} />
              <StatBox number="50+" text="Colleges Participating" delay={0.6} />
              <StatBox number="20+" text="Mentors" delay={0.8} />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default AboutSection

