"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface CountdownProps {
  targetDate: Date
}

const RegistrationCountdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

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
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null
    }

    return (
      <div key={interval} className="flex flex-col items-center">
        <motion.span
          className="text-3xl font-bold text-orange-500"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          {timeLeft[interval]}
        </motion.span>
        <span className="text-sm uppercase text-yellow-300">{interval}</span>
      </div>
    )
  })

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-center text-yellow-400 mb-4">Registration Closes In:</h3>
      <div className="flex justify-center space-x-4 md:space-x-8">
        {timerComponents.length ? timerComponents : <span className="text-2xl text-red-500">Registration Closed!</span>}
      </div>
    </div>
  )
}

export default RegistrationCountdown

