/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Database, Server, Smartphone, Globe, Zap, Terminal, Cpu } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import { Span } from "next/dist/trace"

const techStack = [
  { name: "React", icon: Code, color: "text-blue-500" },
  { name: "Node.js", icon: Server, color: "text-green-500" },
  { name: "TypeScript", icon: Terminal, color: "text-blue-600" },
  { name: "MongoDB", icon: Database, color: "text-green-600" },
  { name: "Next.js", icon: Globe, color: "text-gray-800" },
  { name: "AWS", icon: Zap, color: "text-orange-500" },
  { name: "React Native", icon: Smartphone, color: "text-cyan-500" },
  { name: "Arduino", icon: Cpu, color: "text-teal-500" }
]

const TypewriterText = ({ texts, className }: { texts: string[]; className?: string }) => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentIndex((currentIndex + 1) % texts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  )
}

const FloatingTechIcon = ({ tech, index }: { tech: any; index: number }) => {
  const Icon = tech.icon
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.2, rotate: 360 }}
      className={`absolute p-3 rounded-full bg-card/80 backdrop-blur-sm border shadow-lg cursor-pointer ${tech.color}`}
      style={{
        top: `${20 + (index % 3) * 30}%`,
        left: `${10 + (index % 4) * 20}%`,
        animationDelay: `${index * 0.5}s`
      }}
    >
      <Icon className="h-6 w-6" />
    </motion.div>
  )
}

const ParticleField = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
      
      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight })
      }
      
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const x = useSpring(0, springConfig)
  const rotateX = useSpring(0, springConfig)
  const rotateY = useSpring(0, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateXValue = (e.clientY - centerY) / 10
    const rotateYValue = (centerX - e.clientX) / 10
    
    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <section
      ref={containerRef}
      className="relative bg-secondary min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <ParticleField />
        
        {/* Geometric Shapes */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 0.9, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-24 h-24 border border-accent/20 rounded-md"
        />
      </div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Badge variant="outline" className="w-fit px-4 py-2">
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-green-500 rounded-full mr-2" 
                  />
                  Full-Stack Developer
                </Badge>
              </motion.div>
              
              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
                >
                  <span className="block text-foreground mb-2">Hi, I&apos;m</span>
                  <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    <TypewriterText 
                      texts={["Developer", "Engineer", "Innovator", "Problem Solver"]} 
                    />
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                >
                  Crafting digital experiences with modern technologies. 
                  Specialized in <span className="text-primary font-semibold">React</span>, 
                  <span className="text-accent font-semibold"> Node.js</span>, and 
                  <span className="text-primary font-semibold"> Cloud Architecture</span>.
                  Let&#39;s build something amazing together.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#contact">
                <Button size="lg" className="group relative overflow-hidden">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Let&lsquo;s Work Together</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="group">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Download CV
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-4"
            >
              {[
                { Icon: Github, href: "https://github.com/Nallasivan30", color: "hover:text-gray-800" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/nallasivan-m/", color: "hover:text-blue-600" },
                { Icon: Mail, href: "mailto:nallasivan30@gmail.com", color: "hover:text-red-500" }
              ].map(({ Icon, href, color }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full bg-card/80 backdrop-blur-sm border shadow-lg transition-all duration-300 ${color}`}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Tech Stack */}
          <div className="relative h-[600px] hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative w-full h-full"
            >
              {/* Central Avatar/Logo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl"
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-white text-4xl font-bold"
                >
                  &lt;/&gt;
                </motion.div>
              </motion.div>

              {/* Floating Tech Icons */}
              {techStack.map((tech, index) => (
                <FloatingTechIcon key={tech.name} tech={tech} index={index} />
              ))}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {techStack.map((_, index) => (
                  <motion.line
                    key={index}
                    x1="50%"
                    y1="50%"
                    x2={`${10 + (index % 4) * 20 + 3}%`}
                    y2={`${20 + (index % 3) * 30 + 3}%`}
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-primary/20"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: index * 0.1 + 1, duration: 0.8 }}
                  />
                ))}
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
