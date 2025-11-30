"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        
        <motion.div
          animate={{ rotate: -360, scale: [1, 0.9, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-24 h-24 border border-accent/20 rounded-md"
        />
      </div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex gap-2 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                <span className="block text-foreground mb-2">About{' '}</span>
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Me
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
              >
                I&apos;m a passionate full-stack developer with a unique blend of 
                <span className="text-primary font-semibold"> Electronics & Communication Engineering</span> background 
                and modern <span className="text-accent font-semibold">software development</span> expertise.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-base text-muted-foreground leading-relaxed"
              >
                My journey spans from circuit design and embedded systems to building scalable web applications. 
                I love creating innovative solutions that bridge the gap between hardware and software, 
                bringing ideas to life through code and creativity.
              </motion.p>

              
            </div>
          </motion.div>

          {/* Right Content - Interactive Image with Rocket */}
          <div className="relative h-[500px] lg:h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative w-full h-full flex items-center justify-end"
            >
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative w-[80%] h-80 mx-auto rounded-lg border-4 border-primary/20 shadow-2xl"
              >
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-80 rounded-lg"
                />
              </motion.div>

              {/* Pointing Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute top-3/4 -left-12 transform -translate-x-1/2 -translate-y-1/2 w-26 h-26 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-52 lg:h-52 z-10"
              >
                <Image
                  src="/pointing.png"
                  alt="Pointing"
                  width={1000}
                  height={1000}
                  className="object-contain"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 p-4 bg-card/80 backdrop-blur-sm rounded-lg border shadow-lg"
              >
                <span className="text-sm font-medium text-primary">ECE Engineer</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-10 p-4 bg-card/80 backdrop-blur-sm rounded-lg border shadow-lg"
              >
                <span className="text-sm font-medium text-accent">Full-Stack Dev</span>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-2 p-3 bg-card/80 backdrop-blur-sm rounded-lg border shadow-lg"
              >
                <span className="text-xs font-medium">Problem Solver</span>
              </motion.div>

             
              {/* Additional floating tech icons */}
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute top-16 right-16 p-2 bg-blue-500/20 rounded-full"
              >
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  JS
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360, scale: [1, 0.9, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-16 left-16 p-2 bg-green-500/20 rounded-full"
              >
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  ⚡
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 right-4 p-2 bg-purple-500/20 rounded-full"
              >
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  &lt;/&gt;
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}