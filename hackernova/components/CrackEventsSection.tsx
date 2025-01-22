"use client"

import { motion } from "framer-motion"
import { Trophy } from "lucide-react"

const PrizeCard = ({
  position,
  amount,
  delay,
}: {
  position: "1st" | "2nd" | "3rd"
  amount: string
  delay: number
}) => {
  const colors = {
    "1st": {
      bg: "from-orange-500 to-yellow-500",
      medal: "text-yellow-400",
      shadow: "shadow-yellow-500/20",
    },
    "2nd": {
      bg: "from-gray-400 to-gray-300",
      medal: "text-gray-300",
      shadow: "shadow-gray-500/20",
    },
    "3rd": {
      bg: "from-amber-700 to-amber-600",
      medal: "text-amber-600",
      shadow: "shadow-amber-500/20",
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className={`relative p-8 rounded-2xl bg-gradient-to-br ${colors[position].bg} shadow-xl ${colors[position].shadow}`}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <Trophy className={`w-16 h-16 ${colors[position].medal}`} />
        <div className="text-2xl font-bold text-white">{position}</div>
        <div className="text-4xl font-bold text-white">₹{amount}</div>
      </div>
      <div className="absolute -inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  )
}

const CrackEventsSection = () => {
  const events = [
    { name: "Code Sprint", description: "Race against time to solve coding challenges", prize: "15,000" },
    { name: "Bug Bash", description: "Find and fix the most bugs in a given codebase", prize: "12,000" },
    { name: "AI Showdown", description: "Create the most impressive AI model", prize: "15,000" },
    { name: "Design Duel", description: "Design the best UI/UX for a given problem", prize: "8,000" },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Prizes & Rewards
        </motion.h2>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <PrizeCard position="2nd" amount="20,000" delay={0.2} />
          <PrizeCard position="1st" amount="30,000" delay={0} />
          <PrizeCard position="3rd" amount="10,000" delay={0.4} />
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Total Prize Pool
          </h3>
          <p className="text-6xl font-bold text-white">₹60,000</p>
        </motion.div>
      </div>
    </section>
  )
}

export default CrackEventsSection

