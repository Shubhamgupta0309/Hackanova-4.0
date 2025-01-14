'use client'

import { motion } from 'framer-motion'

const LocationSection = () => {
  return (
    <section id="location" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-orange-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Event Location
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Thakur College of Engineering and Technology</h3>
            <p className="text-gray-300 mb-4">
              A-Block, Gate No 5, Thakur Educational Campus, <br /> 
              Thakur Rd, Thakur Village, <br />
              Kandivali East, Mumbai, <br />
              Maharashtra , India 
            </p>
            <p className="text-gray-300">
              Join us at the prestigious Thakur College for an enriching tech event experience!
            </p>
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
