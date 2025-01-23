"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { IMAGES } from "./constants/images"

const SponsorsSection = () => {
  const sponsors = [
    { name: "Devfolio", logo: IMAGES.sponsors[0] },
    { name: "Echo", logo: IMAGES.sponsors[1] },
    { name: "Polygon", logo: IMAGES.sponsors[2] },
    { name: "replit", logo: IMAGES.sponsors[3] },
    { name: "rosenfeld", logo: IMAGES.sponsors[4] },
    { name: "xyz", logo: IMAGES.sponsors[5] },
  ]

  return (
    <section id="sponsors" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-orange-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Sponsors
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-32 h-32">
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                  className="transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110 object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SponsorsSection

