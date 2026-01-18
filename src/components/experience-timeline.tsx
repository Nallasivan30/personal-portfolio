"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    range: "2024 — Present",
    role: "Senior Full‑Stack Engineer",
    company: "TechCorp",
    summary: "Leading UI platform initiatives, building component systems and performance-first experiences. Architecting scalable solutions for enterprise applications.",
    tags: ["Next.js", "TypeScript", "Design Systems", "Accessibility", "AWS"],
    achievements: ["Led team of 5 developers", "Improved performance by 40%", "Built design system used by 10+ teams"],
    layout: "hero",
    bgGradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20"
  },
  {
    range: "2022 — 2024",
    role: "Frontend Engineer",
    company: "ProductLab",
    summary: "Shipped multi-tenant dashboards, SSR content, and secure auth flows across teams. Collaborated with design and backend teams to deliver pixel-perfect UIs.",
    tags: ["React", "SWR", "Postgres", "Node.js"],
    achievements: ["Delivered 15+ features", "Reduced load time by 60%", "Mentored 3 junior developers"],
    layout: "split",
    bgGradient: "from-green-500/20 via-teal-500/20 to-blue-500/20"
  },
  {
    range: "2021 — 2022",
    role: "Electronics Engineer",
    company: "InnovateTech",
    summary: "Designed and developed IoT solutions, embedded systems, and PCB layouts. Bridged hardware-software integration for smart devices.",
    tags: ["Arduino", "Raspberry Pi", "C/C++", "PCB Design", "IoT"],
    achievements: ["Designed 8 IoT products", "Reduced power consumption by 30%", "Filed 2 patents"],
    layout: "card",
    bgGradient: "from-orange-500/20 via-red-500/20 to-pink-500/20"
  },
  {
    range: "2020 — 2021",
    role: "Junior Developer",
    company: "StartupXYZ",
    summary: "Full-stack development using modern web technologies. Built responsive web applications and RESTful APIs from scratch.",
    tags: ["JavaScript", "Python", "MongoDB", "Express.js"],
    achievements: ["Built 5 web applications", "Implemented CI/CD pipeline", "Achieved 99.9% uptime"],
    layout: "minimal",
    bgGradient: "from-purple-500/20 via-indigo-500/20 to-blue-500/20"
  },
]

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-400%"])

  const renderExperience = (exp: typeof experiences[0], index: number) => {
    const baseClasses = "flex h-[90%] w-screen flex-shrink-0 items-center justify-center p-8 snap-center"
    
    switch (exp.layout) {
      case "hero":
        return (
          <div key={index} className={`${baseClasses} bg-gradient-to-br ${exp.bgGradient}`}>
            <div className="flex flex-col items-center justify-center h-full w-full max-w-4xl text-center space-y-8">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4"
              >
                <span className="text-white font-bold text-2xl">01</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <p className="text-primary font-medium text-lg">{exp.range}</p>
                <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {exp.role}
                </h2>
                <p className="text-xl text-accent font-semibold">{exp.company}</p>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  {exp.summary}
                </p>
              </motion.div>
              
              <div className="flex flex-wrap gap-2 justify-center max-w-md">
                {exp.tags.map((tag, i) => (
                  <motion.span 
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-foreground rounded-full text-sm font-medium border border-white/20"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        )
      
      case "split":
        return (
          <div key={index} className={`${baseClasses} bg-gradient-to-br ${exp.bgGradient}`}>
            <div className="flex h-full w-full max-w-7xl items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="w-1/2 space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">02</span>
                  </div>
                  <p className="text-accent font-medium">{exp.range}</p>
                </div>
                
                <h2 className="text-4xl font-bold text-foreground">
                  {exp.role}
                </h2>
                <p className="text-xl text-primary font-semibold">{exp.company}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {exp.summary}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="w-1/2"
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-xl">
                  <CardContent className="p-8 space-y-6">
                    <h3 className="text-xl font-semibold text-foreground">Key Achievements</h3>
                    <div className="space-y-4">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-foreground">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        )
      
      case "card":
        return (
          <div key={index} className={`${baseClasses} bg-gradient-to-br ${exp.bgGradient}`}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-4xl"
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
                <CardContent className="p-12 text-center space-y-8">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">03</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-accent font-medium text-lg">{exp.range}</p>
                    <h2 className="text-4xl font-bold text-foreground">{exp.role}</h2>
                    <p className="text-xl text-primary font-semibold">{exp.company}</p>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                      {exp.summary}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Technologies</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Achievements</h4>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="text-sm text-muted-foreground">
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        )
      
      case "minimal":
        return (
          <div key={index} className={`${baseClasses} bg-gradient-to-br ${exp.bgGradient}`}>
            <div className="flex flex-col justify-center h-full w-full max-w-3xl space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center space-y-6"
              >
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">04</span>
                  </div>
                </div>
                
                <p className="text-accent font-medium">{exp.range}</p>
                <h2 className="text-6xl font-bold text-foreground">{exp.role}</h2>
                <p className="text-2xl text-primary font-semibold">{exp.company}</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center space-y-8"
              >
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {exp.summary}
                </p>
                
                <div className="flex justify-center gap-8">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="text-center">
                      <div className="w-3 h-3 bg-accent rounded-full mx-auto mb-2" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <section id="experience" className="relative sticky">
      <div className="py-16 text-center bg-background">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Professional <span className="text-primary">Journey</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Scroll to explore my career evolution - from electronics to full-stack development
        </motion.p>
      </div>
      
      <div ref={containerRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div 
            className="flex h-full will-change-transform snap-x snap-mandatory"
            style={{ x }}
          >
            {experiences.map((exp, index) => renderExperience(exp, index))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
