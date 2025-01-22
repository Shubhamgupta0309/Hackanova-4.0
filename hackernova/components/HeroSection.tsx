"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import NovaScene from "./NovaModel"

const CountdownTimer = ({ targetDate, label }: { targetDate: Date; label: string }) => {
  // Start with null to avoid hydration mismatch
  const [timeLeft, setTimeLeft] = useState<Record<string, number> | null>(null)
  const [mounted, setMounted] = useState(false)

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date()
    let timeLeft: Record<string, number> = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  useEffect(() => {
    setMounted(true)
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, []) // Only run once on mount

  // Don't render anything until after mount to prevent hydration mismatch
  if (!mounted) return null

  const timerComponents =
    timeLeft &&
    Object.keys(timeLeft).map((interval) => {
      if (!timeLeft[interval]) {
        return null
      }

      return (
        <div key={interval} className="flex flex-col items-center">
          <span className="text-4xl font-bold text-yellow-400">{timeLeft[interval]}</span>
          <span className="text-sm uppercase text-orange-500">{interval}</span>
        </div>
      )
    })

  return (
    <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg">
      <h3 className="text-xl font-bold text-center text-yellow-400 mb-4">{label}</h3>
      <div className="flex justify-center space-x-4 md:space-x-8">
        {timerComponents && timerComponents.length > 0 ? (
          timerComponents
        ) : (
          <span className="text-2xl text-yellow-400">Time's up!</span>
        )}
      </div>
    </div>
  )
}

const HeroSection = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <NovaScene />
      </div>
      <motion.div className="relative z-10 text-center px-4 py-8 rounded-lg w-full max-w-4xl" style={{ y, opacity }}>
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 glow"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hackanova 4.0
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-yellow-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          21 - 22 February 2025
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CountdownTimer targetDate={new Date("2025-02-21T00:00:00")} label="Event Starts In:" />
          <CountdownTimer targetDate={new Date("2025-02-18T00:00:00")} label="Registration Closes In:" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection

