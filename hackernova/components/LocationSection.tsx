"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

const LocationSection = () => {
  return (
    <section id="location" className="py-20 px-4 bg-black relative overflow-hidden">
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
            LOCATION
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
          Event Location
        </motion.h2>
        <div className="flex flex-col md:flex-row items-start justify-center">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Thakur College of Engineering and Technology</h3>
            <p className="text-gray-300 mb-4">
              A-Block, Gate No 5, Thakur Educational Campus,
              <br /> Thakur Rd, Thakur Village,
              <br /> Kandivali East, Mumbai,
              <br /> Maharashtra , India
            </p>
            <p className="text-gray-300 mb-6">
              Join us at the prestigious Thakur College for an enriching tech event experience!
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-2 text-orange-500" />
                <span>Email: </span>
                <a href="mailto:tcet.hackanova@gmail.com" className="ml-2 text-orange-500 hover:underline">
                  tcet.hackanova@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-2 text-orange-500" />
                <span>Call: </span>
                <div className="ml-2">
                  <p>Joint Technical: +91 90214 40961</p>
                  <p>Joint Technical: +91 93216 79469</p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <h4 className="text-xl font-bold text-orange-500">Socials</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/tsdw_tcet?igsh=eXN1NDdyNjd5cG8z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-500"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.youtube.com/@tcet_tsdw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-500"
                >
                  <Youtube className="w-6 h-6" />
                </Link>
                <Link
                  href="https://t.me/+T-xYOtvS4IwwY2U9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d72.7836251!3d19.2416459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1683705484416!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection

