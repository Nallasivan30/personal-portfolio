"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Code, Zap, Database, Cloud, Smartphone } from "lucide-react"
import { useRef, useEffect, useState } from "react"

const eceSkills = [
  { name: "Circuit Design", level: 90, icon: Cpu, category: "Hardware" },
  { name: "Signal Processing", level: 85, icon: Zap, category: "Analysis" },
  { name: "Embedded Systems", level: 88, icon: Smartphone, category: "Programming" },
  { name: "PCB Design", level: 82, icon: Cpu, category: "Hardware" },
  { name: "MATLAB/Simulink", level: 80, icon: Code, category: "Software" },
  { name: "VHDL/Verilog", level: 75, icon: Code, category: "Programming" },
]

const itSkills = [
  { name: "React/Next.js", level: 95, icon: Code, category: "Frontend" },
  { name: "Node.js", level: 90, icon: Database, category: "Backend" },
  { name: "TypeScript", level: 92, icon: Code, category: "Language" },
  { name: "AWS/Cloud", level: 85, icon: Cloud, category: "DevOps" },
  { name: "PostgreSQL", level: 88, icon: Database, category: "Database" },
  { name: "Python", level: 87, icon: Code, category: "Language" },
]

const ProgressBar = ({ level, delay }: { level: number; delay: number }) => {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setWidth(level), delay)
      return () => clearTimeout(timer)
    }
  }, [isInView, level, delay])

  return (
    <div ref={ref} className="w-full bg-muted rounded-full h-2 overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  )
}

const SkillCard = ({ skill, index, delay }: { skill: any; index: number; delay: number }) => {
  const Icon = skill.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/50 hover:border-l-primary">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{skill.name}</h3>
                <Badge variant="outline" className="text-xs mt-1">
                  {skill.category}
                </Badge>
              </div>
            </div>
            <span className="text-sm font-bold text-primary">{skill.level}%</span>
          </div>
          <ProgressBar level={skill.level} delay={delay * 100} />
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining electronics engineering fundamentals with modern software development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ECE Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">ECE Skills</h3>
                  <p className="text-muted-foreground">Electronics & Communication Engineering</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {eceSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* IT Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">IT Skills</h3>
                  <p className="text-muted-foreground">Software Development & Cloud</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {itSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  delay={index * 0.1 + 0.3}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Years Experience", value: "3+", color: "text-primary" },
            { label: "Projects Completed", value: "15+", color: "text-accent" },
            { label: "Technologies", value: "20+", color: "text-primary" },
            { label: "Certifications", value: "5+", color: "text-accent" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-xl bg-card border"
            >
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
