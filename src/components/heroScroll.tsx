/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const HorizontalScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ["80%", "-380%"])

  const panels = [
    {
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      alt: "Creative workspace",
      title: "Innovative Solutions",
      description: "Building the future with cutting-edge technology.",
      layout: "split"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca6e97?w=400&h=800&fit=crop",
      alt: "Mountain landscape", 
      title: "Scalable Architecture",
      description: "Robust systems that grow with your ambitions.",
      layout: "sidebar"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop",
      alt: "Ocean waves",
      title: "Seamless Experiences", 
      description: "User-centric design that captivates and converts.",
      layout: "stacked"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop",
      alt: "Abstract art",
      title: "Endless Possibilities",
      description: "Unlock potential through collaborative innovation.",
      layout: "centered"
    }
  ]

  const renderPanel = (panel: any, index: number) => {
    const baseClasses = "flex h-screen w-screen flex-shrink-0 items-center justify-center p-8"
    
    switch (panel.layout) {
      case "split":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex h-full w-full max-w-7xl items-center gap-12">
              <div className="relative w-1/2 h-[70%]">
                <Image src={panel.imageUrl} alt={panel.alt} fill className="object-cover rounded-2xl shadow-2xl" />
              </div>
              <div className="w-1/2 space-y-6">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {panel.title}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {panel.description}
                </p>
                <div className="flex gap-4">
                  <div className="w-16 h-1 bg-primary rounded-full" />
                  <div className="w-8 h-1 bg-accent rounded-full" />
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
              </div>
              <div className="w-2/3 flex flex-col justify-center space-y-8 pl-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl" />
                  <h2 className="text-4xl font-bold text-foreground">
                    {panel.title}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  {panel.description}
                </p>
                <div className="grid grid-cols-3 gap-2 w-24">
                  <div className="h-2 bg-primary rounded-full" />
                  <div className="h-2 bg-accent rounded-full" />
                  <div className="h-2 bg-muted rounded-full" />
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
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-4">
                  <h2 className="text-6xl font-bold text-foreground">
                    {panel.title}
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl">
                    {panel.description}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-primary rounded-full" />
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
              </div>
              <div className="space-y-6">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                  {panel.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                  {panel.description}
                </p>
                <div className="flex justify-center gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${i === index ? 'bg-primary' : 'bg-muted'}`} />
                  ))}
                </div>
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