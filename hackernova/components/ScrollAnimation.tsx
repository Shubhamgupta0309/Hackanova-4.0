'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate'
}

export default function ScrollAnimation({ children, animation = 'fade' }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const springValue = useSpring(scrollYProgress, springConfig)

  const animations = {
    fade: {
      opacity: useTransform(springValue, [0, 0.5], [0, 1]),
    },
    slideUp: {
      opacity: useTransform(springValue, [0, 0.5], [0, 1]),
      y: useTransform(springValue, [0, 1], [100, 0]),
    },
    slideLeft: {
      opacity: useTransform(springValue, [0, 0.5], [0, 1]),
      x: useTransform(springValue, [0, 1], [-100, 0]),
    },
    slideRight: {
      opacity: useTransform(springValue, [0, 0.5], [0, 1]),
      x: useTransform(springValue, [0, 1], [100, 0]),
    },
    scale: {
      opacity: useTransform(springValue, [0, 0.5], [0, 1]),
      scale: useTransform(springValue, [0, 1], [0.8, 1]),
    },
    rotate: {
      opacity: useTransform(springValue, [0, 0.5], [0, 1]),
      rotate: useTransform(springValue, [0, 1], [-20, 0]),
    },
  }

  return (
    <motion.div
      ref={ref}
      style={animations[animation]}
    >
      {children}
    </motion.div>
  )
}

