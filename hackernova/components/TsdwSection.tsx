"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import ScrollAnimation from "./ScrollAnimation"

export default function TsdwSection() {
  return (
    <section className="py-20 px-4 ">

      <div className="container mx-auto relative">
        <ScrollAnimation animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              <span className="text-white">MEET THE</span>{" "}
              <span className="bg-red-700 px-4 py-1 text-white inline-block">TEAM</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-orange-500">TSDW Technical Team</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                The TSDW Technical Team is the backbone of Hackananova, ensuring seamless execution with cutting-edge
                technologies and innovative solutions. From setting up platforms to troubleshooting in real-time, the
                team fosters a collaborative environment for an exceptional hackathon experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/tsdw.png"
                alt="TSDW Technical Team"
                fill
                className="object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">TSDW Technical Team</h3>
                  <p className="text-gray-200">Driving Innovation & Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

