/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { BlobBackground } from "./BlobBackground"

export const HorizontalScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ["80%", "-380%"])

  const panels = [
    {
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      alt: "Electronics workspace with circuits",
      title: "ECE Foundation",
      description: "From circuit design to embedded systems - building the hardware that powers innovation.",
      layout: "split",
      stats: ["5+ Projects", "Arduino & ESP32", "PCB Design"],
      accent: "Electronics Engineering"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=800&fit=crop",
      alt: "Code on multiple screens", 
      title: "Full-Stack Development",
      description: "Modern web technologies meet embedded systems - creating seamless digital experiences.",
      layout: "sidebar",
      stats: ["React/Next.js", "Node.js & AWS", "TypeScript"],
      accent: "Software Engineering"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=400&fit=crop",
      alt: "IoT devices and sensors",
      title: "IoT Innovation", 
      description: "Bridging hardware and software to create intelligent, connected systems.",
      layout: "stacked",
      stats: ["Smart Monitoring", "Real-time Data", "Cloud Integration"],
      accent: "Internet of Things"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
      alt: "Professional headshot",
      title: "Let's Collaborate",
      description: "Ready to bring your ideas to life with cutting-edge technology and innovative solutions.",
      layout: "centered",
      stats: ["Available for Projects", "Remote & On-site", "Quick Response"],
      accent: "Get In Touch"
    }
  ]

  const renderPanel = (panel: any, index: number) => {
    const baseClasses = "flex h-screen w-screen flex-shrink-0 items-center justify-center p-8"
    
    switch (panel.layout) {
      case "split":
        return (
          <div key={index} className={baseClasses}>
  <div className="flex h-full w-full max-w-7xl items-center gap-16">
    
    {/* LEFT — Image with SVG Background */}
    <div className="relative w-1/2 h-[420px] flex items-center justify-center">
      
      {/* SVG Background */}
      <div className="absolute inset-0 text-primary/80">
        <BlobBackground />
      </div>

      {/* Image on top */}
      <div className="relative z-10 w-[75%] h-[75%]">
        <Image
          src={panel.imageUrl}
          alt={panel.alt}
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>

      {/* Accent Badge */}
      <div className="absolute top-6 left-6 z-20 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
        {panel.accent}
      </div>
    </div>

    {/* RIGHT — Content */}
    <div className="w-1/2 space-y-6">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {panel.title}
      </h2>

      <p className="text-xl text-muted-foreground leading-relaxed">
        {panel.description}
      </p>

      <div className="grid grid-cols-1 gap-3">
        {panel.stats.map((stat: any, i: any) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-foreground font-medium">{stat}</span>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>

        )
      
      case "sidebar":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex h-full w-full max-w-7xl items-center gap-8">
              <div className="relative w-1/3 h-full">
                <Image src={panel.imageUrl} alt={panel.alt} fill className="object-cover rounded-3xl shadow-xl" />
                <div className="absolute bottom-4 left-4 bg-accent/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {panel.accent}
                </div>
              </div>
              <div className="w-2/3 flex flex-col justify-center space-y-8 pl-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">&lt;/&gt;</span>
                  </div>
                  <h2 className="text-4xl font-bold text-foreground">
                    {panel.title}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  {panel.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {panel.stats.map((stat:any, i:any) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      
      case "stacked":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex flex-col h-full w-full max-w-6xl justify-center space-y-8">
              <div className="relative w-full h-1/2">
                <Image src={panel.imageUrl} alt={panel.alt} fill className="object-cover rounded-xl shadow-lg" />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                  {panel.accent}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-4">
                  <h2 className="text-6xl font-bold text-foreground">
                    {panel.title}
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl">
                    {panel.description}
                  </p>
                  <div className="flex gap-4">
                    {panel.stats.map((stat:any, i:any) => (
                      <div key={i} className="text-center">
                        <div className="w-3 h-3 bg-accent rounded-full mx-auto mb-1" />
                        <span className="text-sm text-muted-foreground">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">IoT</span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full" />
                </div>
              </div>
            </div>
          </div>
        )
      
      case "centered":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex flex-col items-center justify-center h-full w-full max-w-4xl text-center space-y-8">
              <div className="relative w-80 h-80">
                <Image src={panel.imageUrl} alt={panel.alt} fill className="object-cover rounded-full shadow-2xl" />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-medium">
                  {panel.accent}
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                  {panel.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                  {panel.description}
                </p>
                <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
                  {panel.stats.map((stat:any, i:any) => (
                    <div key={i} className="text-center">
                      <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${
                        i === 0 ? 'bg-primary' : i === 1 ? 'bg-accent' : 'bg-muted'
                      }`} />
                      <span className="text-xs text-muted-foreground">{stat}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div 
          className="flex h-full will-change-transform"
          style={{ x }}
        >
          {panels.map((panel, index) => renderPanel(panel, index))}
        </motion.div>
      </div>
    </div>
  )
}