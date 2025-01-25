"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { IMAGES } from "./constants/images"
import ScrollAnimation from "./ScrollAnimation"

export default function CampusGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const timer = setInterval(scroll, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
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
            CAMPUS
          </div>
        ))}
      </div>

      <div className="container mx-auto relative">
        <ScrollAnimation animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              <span className="text-white">CAMPUS</span>{" "}
              <span className="bg-red-700 px-4 py-1 text-white inline-block">GALLERY</span>
            </h2>
          </div>

          <div
            ref={scrollRef}
            className="relative overflow-x-hidden w-full"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="flex gap-8 pb-4">
              {[...IMAGES.campus, ...IMAGES.campus].map((image, index) => (
                <motion.div
                  key={index}
                  className="relative flex-none w-[300px] md:w-[400px] h-[200px] rounded-lg overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Campus ${index + 1}`}
                    fill
                    className="object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 300px, 400px"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {IMAGES.campus.map((_, index) => (
              <button
                key={index}
                className="w-2 h-2 rounded-full bg-red-700 opacity-50 hover:opacity-100 transition-opacity"
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollLeft = index * (scrollRef.current.clientWidth / 3)
                  }
                }}
              />
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

