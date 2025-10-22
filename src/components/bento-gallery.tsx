"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const tiles = [
  { src: "/landing-page-mock.jpg", span: "md:col-span-2", title: "Landing UI" },
  { src: "/dashboard-chart.png", span: "", title: "Dashboards" },
  { src: "/mobile-app-screens.png", span: "", title: "Mobile" },
  { src: "/design-system-tokens.jpg", span: "md:row-span-2", title: "Design System" },
  { src: "/3d-hero-render.jpg", span: "", title: "3D" },
  { src: "/marketing-site.jpg", span: "", title: "Marketing" },
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
          className={`relative overflow-hidden rounded-lg border bg-card/60 ${t.span}`}
        >
          <Image
            src={t.src || "/placeholder.svg"}
            alt={t.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-3 text-sm">
            {t.title}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  )
}
