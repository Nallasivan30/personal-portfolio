/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Cpu, Code, Zap, Database, Cloud, Smartphone } from "lucide-react"

const eceSkills = [
  { name: "Circuit Design", icon: Cpu, category: "Hardware" },
  { name: "Signal Processing", icon: Zap, category: "Analysis" },
  { name: "Embedded Systems", icon: Smartphone, category: "Programming" },
  { name: "PCB Design", icon: Cpu, category: "Hardware" },
  { name: "MATLAB/Simulink", icon: Code, category: "Software" },
  { name: "VHDL/Verilog", icon: Code, category: "Programming" },
]

const itSkills = [
  { name: "React/Next.js", icon: Code, category: "Frontend" },
  { name: "Node.js", icon: Database, category: "Backend" },
  { name: "TypeScript", icon: Code, category: "Language" },
  { name: "AWS/Cloud", icon: Cloud, category: "DevOps" },
  { name: "PostgreSQL", icon: Database, category: "Database" },
  { name: "Python", icon: Code, category: "Language" },
]

const SkillCard = ({ skill, variant }: { skill: any; variant: "ece" | "it" }) => {
  const Icon = skill.icon
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className={`inline-flex flex-col items-start justify-center border rounded-2xl px-5 py-4 w-64 sm:w-72 mx-6 flex-shrink-0 backdrop-blur-md shadow-md transition-all duration-300
        ${
          variant === "ece"
            ? "bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover:from-primary/20 hover:to-accent/20"
            : "bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20 hover:from-accent/20 hover:to-primary/20"
        }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className={`p-2 rounded-xl ${
            variant === "ece" ? "bg-primary/15" : "bg-accent/15"
          }`}
        >
          <Icon
            className={`h-5 w-5 ${
              variant === "ece" ? "text-primary" : "text-accent"
            }`}
          />
        </div>
        <div>
          <h3 className="font-semibold text-sm">{skill.name}</h3>
          <Badge
            variant="outline"
            className={`text-xs mt-1 ${
              variant === "ece"
                ? "border-primary/40 text-primary"
                : "border-accent/40 text-accent"
            }`}
          >
            {skill.category}
          </Badge>
        </div>
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/40 to-muted/20 relative overflow-hidden">
      {/* Floating glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/3 w-72 h-72 bg-primary/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-accent/10 blur-3xl rounded-full animate-pulse"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Technical <span className="text-primary">Expertise</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A fusion of <span className="text-primary font-medium">electronics engineering</span> and{" "}
            <span className="text-accent font-medium">modern software technologies</span>.
          </p>
        </div>

        {/* ECE Skills Row */}
        <div className="relative w-full overflow-hidden py-6 mb-">
          <div className="flex animate-scroll-horizontal whitespace-nowrap">
            {[...eceSkills, ...eceSkills].map((skill, index) => (
              <SkillCard key={`ece-${index}`} skill={skill} variant="ece" />
            ))}
          </div>
        </div>

        {/* IT Skills Row */}
        <div className="relative w-full overflow-hidden py-6">
          <div className="flex animate-scroll-horizontal-reverse whitespace-nowrap">
            {[...itSkills, ...itSkills].map((skill, index) => (
              <SkillCard key={`it-${index}`} skill={skill} variant="it" />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
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
              className="text-center p-6 rounded-2xl bg-card/60 backdrop-blur-md border shadow-sm hover:shadow-lg transition-all"
            >
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll animations */}
      <style jsx global>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-horizontal-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-horizontal {
          animation: scroll-horizontal 28s linear infinite;
          display: inline-flex;
        }
        .animate-scroll-horizontal-reverse {
          animation: scroll-horizontal-reverse 32s linear infinite;
          display: inline-flex;
        }
        @media (max-width: 640px) {
          .animate-scroll-horizontal {
            animation-duration: 24s;
          }
          .animate-scroll-horizontal-reverse {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  )
}
