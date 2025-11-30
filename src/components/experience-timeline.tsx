"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const items = [
  {
    range: "2024 — Present",
    role: "Senior Full‑Stack Engineer · TechCorp",
    summary: "Leading UI platform initiatives, building component systems and performance-first experiences. Architecting scalable solutions for enterprise applications.",
    tags: ["Next.js", "TypeScript", "Design Systems", "Accessibility", "AWS"],
    achievements: ["Led team of 5 developers", "Improved performance by 40%", "Built design system used by 10+ teams"]
  },
  {
    range: "2022 — 2024",
    role: "Frontend Engineer · ProductLab",
    summary: "Shipped multi-tenant dashboards, SSR content, and secure auth flows across teams. Collaborated with design and backend teams to deliver pixel-perfect UIs.",
    tags: ["React", "SWR", "Postgres", "Node.js"],
    achievements: ["Delivered 15+ features", "Reduced load time by 60%", "Mentored 3 junior developers"]
  },
  {
    range: "2021 — 2022",
    role: "Electronics Engineer · InnovateTech",
    summary: "Designed and developed IoT solutions, embedded systems, and PCB layouts. Bridged hardware-software integration for smart devices.",
    tags: ["Arduino", "Raspberry Pi", "C/C++", "PCB Design", "IoT"],
    achievements: ["Designed 8 IoT products", "Reduced power consumption by 30%", "Filed 2 patents"]
  },
  {
    range: "2020 — 2021",
    role: "Junior Developer · StartupXYZ",
    summary: "Full-stack development using modern web technologies. Built responsive web applications and RESTful APIs from scratch.",
    tags: ["JavaScript", "Python", "MongoDB", "Express.js"],
    achievements: ["Built 5 web applications", "Implemented CI/CD pipeline", "Achieved 99.9% uptime"]
  },
]

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="mb-12 md:mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-4"
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
            From electronics engineering to full-stack development - a journey of continuous learning and innovation.
          </motion.p>
        </header>
        
        <div className="relative">
          <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-primary md:left-1/2" />
          <div className="space-y-12">
            {items.map((it, idx) => (
              <motion.div
                key={it.role}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${idx % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className="pl-8 md:pl-0 flex items-center">
                  <div className="relative">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                      className="absolute -left-6 md:-left-1/2 md:ml-[-8px] w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"
                    />
                    <motion.p 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.4 }}
                      className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit"
                    >
                      {it.range}
                    </motion.p>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Card className="bg-card/80 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="space-y-4 p-6">
                      <h3 className="text-xl font-semibold text-foreground">{it.role}</h3>
                      <p className="text-muted-foreground leading-relaxed">{it.summary}</p>
                      
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-foreground">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {it.achievements.map((achievement, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 + 0.5 + i * 0.1 }}
                              className="text-sm text-muted-foreground flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {it.tags.map((t, i) => (
                          <motion.span 
                            key={t}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 + 0.6 + i * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                            className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 font-medium cursor-default"
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
