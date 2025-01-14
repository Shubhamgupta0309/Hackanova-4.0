'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const campusImages = [
  '/placeholder.svg?height=300&width=400',
  '/placeholder.svg?height=300&width=400',
  '/placeholder.svg?height=300&width=400',
  '/placeholder.svg?height=300&width=400'
]

export default function CampusGallery() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Campus Gallery
        </motion.h2>
        <div className="grid grid-cols-4 gap-4">
          {campusImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-[300px] overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={image}
                alt={`Campus ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

