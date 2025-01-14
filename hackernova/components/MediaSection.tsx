'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'

const MediaSection = () => {
  const [images, setImages] = useState<string[]>([])
  const [currentImage, setCurrentImage] = useState(0)

  const handleFileSelect = useCallback(async () => {
    try {
      const dirHandle = await window.showDirectoryPicker()
      const newImages: string[] = []

      for await (const entry of dirHandle.values()) {
        if (entry.kind === 'file' && entry.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
          const file = await entry.getFile()
          const imageUrl = URL.createObjectURL(file)
          newImages.push(imageUrl)
        }
      }

      setImages(newImages)
      setCurrentImage(0)
    } catch (error) {
      console.error('Error selecting folder:', error)
    }
  }, [])

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    return () => {
      // Cleanup object URLs when component unmounts
      images.forEach(URL.revokeObjectURL)
    }
  }, [images])

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-950 via-purple-900 to-black">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Media Gallery
        </motion.h2>
        <motion.button
          className="mb-8 mx-auto block px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
          onClick={handleFileSelect}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Select Image Folder
        </motion.button>
        {images.length > 0 ? (
          <div className="relative w-full max-w-3xl mx-auto">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={images[currentImage]}
                alt={`Gallery image ${currentImage + 1}`}
                width={800}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
            >
              &#8592;
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
            >
              &#8594;
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-400">No images selected. Please choose a folder.</p>
        )}
        <div className="mt-12 flex justify-center space-x-4">
          {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
            <a
              key={social}
              href="#"
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaSection
