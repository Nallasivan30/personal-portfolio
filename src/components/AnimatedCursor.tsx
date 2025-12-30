/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function AnimatedCursor() {
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)

  // Cursor animation values
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      cursorX.set(event.clientX - 12)
      cursorY.set(event.clientY - 12)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-cursor-interactive]")
      ) {
        setIsHoveringInteractive(true)
      }
    }

    const handleMouseOut = () => {
      setIsHoveringInteractive(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-primary/80 dark:bg-white pointer-events-none mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHoveringInteractive ? 1.8 : 1,
          opacity: isHoveringInteractive ? 0.7 : 0.5,
          zIndex: 99999,
        }}
      />

      {/* Secondary dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHoveringInteractive ? 0.5 : 1,
          zIndex: 99999,
        }}
      />
    </>
  )
}
