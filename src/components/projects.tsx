/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { motion, useMotionValue, animate } from "framer-motion"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

const projects = [
  {
    id: 1,
    title: "Smart IoT Monitoring System",
    description: "Real-time sensor data collection and analysis using ESP32",
    category: "ECE + IT",
    tools: ["ESP32", "React", "Node.js"],
    gradient: "from-blue-500 to-purple-500",
    icon: "📡",
  },
  {
    id: 2,
    title: "Signal Processing Web App",
    description: "Interactive web application for digital signal processing",
    category: "ECE",
    tools: ["Python", "NumPy", "React"],
    gradient: "from-green-500 to-teal-500",
    icon: "⚡",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    category: "IT",
    tools: ["Next.js", "TypeScript", "Stripe"],
    gradient: "from-orange-500 to-red-500",
    icon: "🛒",
  },
  {
    id: 4,
    title: "PCB Design Automation Tool",
    description: "Automated PCB layout generation with optimization",
    category: "ECE",
    tools: ["Python", "KiCad", "OpenGL"],
    gradient: "from-purple-500 to-pink-500",
    icon: "🔧",
  },
  {
    id: 5,
    title: "Cloud Analytics Dashboard",
    description: "Scalable analytics platform with real-time processing",
    category: "IT",
    tools: ["React", "AWS", "D3.js"],
    gradient: "from-cyan-500 to-blue-500",
    icon: "📊",
  },
  {
    id: 6,
    title: "Embedded ML System",
    description: "Edge AI system for real-time object detection",
    category: "ECE + IT",
    tools: ["TensorFlow", "C++", "OpenCV"],
    gradient: "from-indigo-500 to-purple-500",
    icon: "🤖",
  },
  {
    id: 7,
    title: "Mobile App Framework",
    description: "Cross-platform mobile development framework",
    category: "IT",
    tools: ["React Native", "Firebase", "Redux"],
    gradient: "from-red-500 to-pink-500",
    icon: "📱",
  },
  {
    id: 8,
    title: "AI Chatbot Engine",
    description: "Advanced conversational AI with NLP integration",
    category: "ECE + IT",
    tools: ["Python", "TensorFlow", "FastAPI"],
    gradient: "from-yellow-500 to-orange-500",
    icon: "💬",
  },
]

/* ================= CARD ================= */

const CARD_WIDTH = 280 // w-64 + gap + scale compensation

const ProjectCard = ({
  project,
  isCenter,
}: {
  project: any
  isCenter: boolean
}) => {
  return (
    <motion.div
      animate={{ scale: isCenter ? 1.1 : 0.8, opacity: isCenter ? 1 : 0.6 }}
      transition={{ duration: 0.4 }}
      className="flex-shrink-0 w-64"
    >
      <div
        className={`relative h-80 rounded-2xl bg-gradient-to-br ${project.gradient} p-6 overflow-hidden shadow-lg`}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="text-5xl mb-3">{project.icon}</div>
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs text-white">
              {project.category}
            </span>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-sm text-white/90 line-clamp-2">
              {project.description}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {project.tools.slice(0, 2).map((tool: string) => (
                <span
                  key={tool}
                  className="px-2 py-1 bg-white/10 rounded text-xs text-white"
                >
                  {tool}
                </span>
              ))}
              {project.tools.length > 2 && (
                <span className="px-2 py-1 bg-white/10 rounded text-xs text-white">
                  +{project.tools.length - 2}
                </span>
              )}
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-white/20 rounded-lg py-2 text-white flex justify-center gap-2">
                <Github size={16} />
                Code
              </button>
              <button className="flex-1 bg-white/20 rounded-lg py-2 text-white flex justify-center gap-2">
                <ExternalLink size={16} />
                Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ================= CAROUSEL ================= */

export function Projects() {
  const total = projects.length
  const duplicated = useMemo(() => [...projects, ...projects, ...projects], [])
  const [index, setIndex] = useState(total) // Start at center

  const x = useMotionValue(-total * CARD_WIDTH) // Start centered

  const animateTo = (i: number) => {
    animate(x, -i * CARD_WIDTH, {
      duration: 0.5,
      ease: "easeOut",
    })
  }

  const next = () => {
    const newIndex = index + 1
    setIndex(newIndex)
    animateTo(newIndex)
  }

  const prev = () => {
    const newIndex = index - 1
    setIndex(newIndex)
    animateTo(newIndex)
  }

  /* LOOP FIX */
  useEffect(() => {
    if (index >= total * 2) {
      setTimeout(() => {
        x.set(-total * CARD_WIDTH)
        setIndex(total)
      }, 500)
    }
    if (index < total) {
      setTimeout(() => {
        x.set(-(total * 2 - 1) * CARD_WIDTH)
        setIndex(total * 2 - 1)
      }, 500)
    }
  }, [index, total, x])

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        {/* CAROUSEL */}
        <div className="relative flex items-center justify-center gap-4">

          <button onClick={prev} className="p-3 bg-cyan-500 rounded-full">
            <ChevronLeft className="text-white" />
          </button>

          <div className="overflow-hidden w-full" style={{ width: '1400px' }}>
            <motion.div
              className="flex gap-4 justify-start"
              style={{ x, paddingLeft: '560px' }} // Center the first 5 cards
            >
              {duplicated.map((project, i) => (
                <ProjectCard
                  key={`${project.id}-${i}`}
                  project={project}
                  isCenter={i === index}
                />
              ))}
            </motion.div>
          </div>

          <button onClick={next} className="p-3 bg-cyan-500 rounded-full">
            <ChevronRight className="text-white" />
          </button>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const newIndex = i + total
                setIndex(newIndex)
                animateTo(newIndex)
              }}
              className={`h-2 rounded-full ${
                (index - total) === i ? "w-8 bg-cyan-400" : "w-2 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
