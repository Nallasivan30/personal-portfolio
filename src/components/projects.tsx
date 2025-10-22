"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Github, Cpu, Code, Zap, Database } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Smart IoT Monitoring System",
    description: "Real-time sensor data collection and analysis using ESP32, cloud integration, and responsive web dashboard.",
    category: "ECE + IT",
    tools: ["ESP32", "React", "Node.js", "MongoDB", "WebSocket"],
    image: "/api/placeholder/400/250",
    gradient: "from-blue-500/20 to-purple-500/20",
    icon: Cpu,
    github: "#",
    demo: "#",
    featured: true
  },
  {
    id: 2,
    title: "Signal Processing Web App",
    description: "Interactive web application for digital signal processing with real-time visualization and analysis tools.",
    category: "ECE",
    tools: ["Python", "NumPy", "React", "WebAssembly", "Chart.js"],
    image: "/api/placeholder/400/250",
    gradient: "from-green-500/20 to-teal-500/20",
    icon: Zap,
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    category: "IT",
    tools: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    image: "/api/placeholder/400/250",
    gradient: "from-orange-500/20 to-red-500/20",
    icon: Code,
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "PCB Design Automation Tool",
    description: "Automated PCB layout generation tool with component placement optimization and routing algorithms.",
    category: "ECE",
    tools: ["Python", "KiCad", "OpenGL", "Qt", "Algorithm Design"],
    image: "/api/placeholder/400/250",
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: Cpu,
    github: "#",
    demo: "#"
  },
  {
    id: 5,
    title: "Cloud Analytics Dashboard",
    description: "Scalable analytics platform with real-time data processing, machine learning insights, and interactive visualizations.",
    category: "IT",
    tools: ["React", "AWS", "Lambda", "DynamoDB", "D3.js"],
    image: "/api/placeholder/400/250",
    gradient: "from-cyan-500/20 to-blue-500/20",
    icon: Database,
    github: "#",
    demo: "#"
  },
  {
    id: 6,
    title: "Embedded ML System",
    description: "Edge AI system for real-time object detection using TensorFlow Lite on embedded hardware.",
    category: "ECE + IT",
    tools: ["TensorFlow", "C++", "Raspberry Pi", "OpenCV", "Python"],
    image: "/api/placeholder/400/250",
    gradient: "from-indigo-500/20 to-purple-500/20",
    icon: Zap,
    github: "#",
    demo: "#",
    featured: true
  }
]

const categories = ["All", "ECE", "IT", "ECE + IT"]

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <Card className="overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="relative p-6 space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <Badge variant="outline" className="mb-2">
                  {project.category}
                </Badge>
                {project.featured && (
                  <Badge className="ml-2 bg-gradient-to-r from-primary to-accent">
                    Featured
                  </Badge>
                )}
              </div>
            </div>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
            <Icon className="h-12 w-12 text-muted-foreground/50" />
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool: string) => (
              <Badge key={tool} variant="secondary" className="text-xs">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  
  const filteredProjects = projects.filter(project => 
    activeCategory === "All" || project.category === activeCategory
  )

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Showcasing the intersection of electronics engineering and software development
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button size="lg" className="group">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
