"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useRef, type ChangeEvent } from "react"

const MediaSection = () => {
  const [images, setImages] = useState<string[]>([
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ])
  const [currentIndex, setCurrentIndex] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file))
      setImages((prevImages) => [...prevImages, ...newImages])
    }
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-orange-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Media Gallery
        </motion.h2>
        <div className="relative w-full max-w-3xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`Gallery image ${currentIndex + 1}`}
              width={800}
              height={450}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            &#8592;
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            &#8594;
          </button>
        </div>
        <div className="mt-8 text-center">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept="image/*"
            multiple
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            Add Images
          </button>
        </div>
        <div className="mt-12 flex justify-center space-x-4">
          {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
            <a key={social} href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
              {social}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaSection

