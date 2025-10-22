"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { useRef } from "react"

const FloatingCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="absolute"
  >
    {children}
  </motion.div>
)

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <Badge variant="outline" className="w-fit">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Available for work
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="block text-foreground"
                >
                  ECE & IT
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                >
                  Engineer
                </motion.span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              >
                Bridging hardware and software with expertise in{" "}
                <span className="text-primary font-semibold">Electronics & Communication</span> and{" "}
                <span className="text-accent font-semibold">Full-Stack Development</span>.
                Creating innovative solutions from circuit design to cloud deployment.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#contact">
                <Button size="lg" className="group">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="group">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-4"
            >
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-card border hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Interactive Cards */}
          <div className="relative h-[600px] hidden lg:block">
            <FloatingCard delay={0.2}>
              <div className="top-0 right-0 bg-card border rounded-2xl p-6 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">ECE Skills</span>
                </div>
                <div className="space-y-2">
                  {["Circuit Design", "Signal Processing", "Embedded Systems"].map((skill) => (
                    <div key={skill} className="text-sm text-muted-foreground">{skill}</div>
                  ))}
                </div>
              </div>
            </FloatingCard>

            <FloatingCard delay={0.4}>
              <div className="top-32 left-0 bg-card border rounded-2xl p-6 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">IT Skills</span>
                </div>
                <div className="space-y-2">
                  {["React/Next.js", "Node.js", "Cloud Computing"].map((skill) => (
                    <div key={skill} className="text-sm text-muted-foreground">{skill}</div>
                  ))}
                </div>
              </div>
            </FloatingCard>

            <FloatingCard delay={0.6}>
              <div className="top-64 right-8 bg-gradient-to-br from-primary/10 to-accent/10 border rounded-2xl p-6 shadow-lg backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>
            </FloatingCard>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-96 left-16 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
