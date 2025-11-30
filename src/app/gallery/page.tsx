"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { BentoGallery } from "@/components/bento-gallery"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="section-pad">
        <section className="mx-auto max-w-6xl px-4 md:px-6">
          <header className="mb-8 md:mb-12 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-semibold text-balance mb-4"
            >
              Project <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Gallery</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              A curated collection of my work spanning web development, mobile apps, IoT projects, and creative experiments.
            </motion.p>
          </header>
          <BentoGallery />
        </section>
      </main>
      <Footer />
    </>
  )
}
