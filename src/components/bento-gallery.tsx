"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const tiles = [
  { 
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop", 
    span: "md:col-span-2", 
    title: "Web Development",
    description: "Modern responsive web applications built with React and Next.js"
  },
  { 
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop", 
    span: "", 
    title: "Data Analytics",
    description: "Interactive dashboards and data visualization solutions"
  },
  { 
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop", 
    span: "", 
    title: "Mobile Apps",
    description: "Cross-platform mobile applications with React Native"
  },
  { 
    src: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=800&fit=crop", 
    span: "md:row-span-2", 
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces with modern design systems"
  },
  { 
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop", 
    span: "", 
    title: "IoT Projects",
    description: "Internet of Things solutions combining hardware and software"
  },
  { 
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop", 
    span: "", 
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment strategies"
  },
]

export function BentoGallery() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px]">
      {tiles.map((t, i) => (
        <motion.figure
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: i * 0.03 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className={`group relative overflow-hidden rounded-md border bg-card/60 cursor-pointer ${t.span}`}
        >
          <Image
            src={t.src}
            alt={t.title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-semibold text-sm mb-1">{t.title}</h3>
            <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {t.description}
            </p>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  )
}
