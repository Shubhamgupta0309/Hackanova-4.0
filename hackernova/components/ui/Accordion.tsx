'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AccordionProps {
  items: { question: string; answer: string }[]
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-orange-500/20 rounded-lg overflow-hidden">
          <button
            className="w-full text-left p-4 focus:outline-none text-white hover:text-orange-500 transition-colors flex justify-between items-center"
            onClick={() => toggleItem(index)}
          >
            <span>{item.question}</span>
            <span className="transform transition-transform duration-300" style={{ transform: expandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              ▼
            </span>
          </button>
          <AnimatePresence>
            {expandedIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 text-orange-400">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

