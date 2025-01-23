"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: "fade" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "rotate"
}

export default function ScrollAnimation({ children, animation = "fade" }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "slideUp" ? 100 : 0,
      x: animation === "slideLeft" ? -100 : animation === "slideRight" ? 100 : 0,
      scale: animation === "scale" ? 0.8 : 1,
      rotate: animation === "rotate" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  )
}

