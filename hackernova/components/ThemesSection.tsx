"use client"

import { motion } from "framer-motion"
import { Brain, Blocks, Sparkles, Network, Code2, Cpu } from "lucide-react"
import type React from "react"

const ThemeCard = ({
  theme,
  description,
  index,
  icon1: Icon1,
  icon2: Icon2,
  icon3: Icon3,
}: {
  theme: string
  description: string
  index: number
  icon1: React.ElementType
  icon2: React.ElementType
  icon3: React.ElementType
}) => (
  <motion.div
    className="relative h-[600px] bg-black bg-opacity-50 rounded-2xl p-8 border border-orange-500/20 overflow-hidden group"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    whileHover={{ scale: 1.02 }}
  >
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Floating icons */}
    <motion.div
      className="absolute top-12 right-8 text-orange-500/20 group-hover:text-orange-500/40 transition-colors"
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <Icon1 size={48} />
    </motion.div>
    <motion.div
      className="absolute bottom-20 left-8 text-orange-500/20 group-hover:text-orange-500/40 transition-colors"
      animate={{
        y: [0, 10, 0],
        rotate: [0, -5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: 0.5,
      }}
    >
      <Icon2 size={36} />
    </motion.div>
    <motion.div
      className="absolute top-1/2 right-12 text-orange-500/20 group-hover:text-orange-500/40 transition-colors"
      animate={{
        y: [0, 15, 0],
        rotate: [0, 10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: 1,
      }}
    >
      <Icon3 size={42} />
    </motion.div>

    {/* Content */}
    <div className="relative z-10">
      <motion.h3
        className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.3 }}
      >
        {theme}
      </motion.h3>
      <motion.p
        className="text-xl text-gray-300 mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.4 }}
      >
        {description}
      </motion.p>

      {/* Theme highlights */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.5 }}
      >
        <div className="flex items-center space-x-2 text-orange-500">
          <Sparkles className="w-5 h-5" />
          <span className="text-gray-300">Innovation Focus</span>
        </div>
        <div className="flex items-center space-x-2 text-orange-500">
          <Network className="w-5 h-5" />
          <span className="text-gray-300">Real-world Impact</span>
        </div>
        <div className="flex items-center space-x-2 text-orange-500">
          <Code2 className="w-5 h-5" />
          <span className="text-gray-300">Technical Excellence</span>
        </div>
      </motion.div>
    </div>

    {/* Decorative elements */}
    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange-500/5 to-transparent" />
    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-orange-500/5 to-transparent" />
  </motion.div>
)

const ThemesSection = () => {
  const themes = [
    {
      name: "Blockchain Innovation",
      description:
        "Revolutionize the future of decentralized systems. Build cutting-edge solutions using blockchain technology, smart contracts, and Web3 infrastructure. Create the next generation of transparent, secure, and efficient applications.",
      icons: [Blocks, Network, Code2],
    },
    {
      name: "Artificial Intelligence",
      description:
        "Push the boundaries of machine learning and AI. Develop innovative solutions using neural networks, natural language processing, and computer vision. Transform industries with intelligent automation and data-driven insights.",
      icons: [Brain, Cpu, Sparkles],
    },
  ]

  return (
    <section id="themes" className="py-20 px-4 bg-black relative overflow-hidden">
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
            THEME
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
          Hackanova Themes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {themes.map((theme, index) => (
            <ThemeCard
              key={theme.name}
              theme={theme.name}
              description={theme.description}
              index={index}
              icon1={theme.icons[0]}
              icon2={theme.icons[1]}
              icon3={theme.icons[2]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThemesSection

