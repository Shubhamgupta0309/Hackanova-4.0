"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { IMAGES } from "./constants/images"

export default function HighlightsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.highlights.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
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
            HIGHLIGHTS
          </div>
        ))}
      </div>
      <div className="container mx-auto relative">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
            HACKERNOVA 4.0
          </span>
          <span className="ml-4 bg-red-600 px-4 py-1 text-white">HIGHLIGHTS</span>
        </motion.h2>
        <div className="relative h-[400px] overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {IMAGES.highlights.map((image, index) => (
              <motion.div
                key={index}
                className="min-w-full h-full relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Highlight ${index + 1}`}
                  fill
                  sizes="100vw"
                  className="rounded-lg object-cover"
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4 gap-2">
          {IMAGES.highlights.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-red-500" : "bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

