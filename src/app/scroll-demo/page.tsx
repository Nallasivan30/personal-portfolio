'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function ScrollDemo() {
  return (
    <div className="overflow-y-auto" style={{ scrollBehavior: 'smooth' }}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  )
}

function Section1() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={ref} className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900 relative overflow-hidden">
      <motion.div style={{ scale, opacity, y }} className="relative w-64 h-64">
        <Image
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800"
          alt="Abstract gradient"
          fill
          className="object-cover rounded-2xl"
        />
      </motion.div>
      <div className="absolute bottom-10 text-white text-center">
        <h2 className="text-4xl font-bold">Section 1</h2>
        <p className="text-sm mt-2 opacity-70">Scroll to zoom image</p>
      </div>
    </section>
  )
}

function Section2() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1.3, 0.7])
  const rotate = useTransform(scrollYProgress, [0, 1], [-450, 450])
  const x = useTransform(scrollYProgress, [0, 1], [-1110, 1500])

  return (
    <section ref={ref} className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-900 to-rose-900 relative overflow-hidden">
      <motion.div style={{ scale, rotate, x }} className="relative w-72 h-72">
        <Image
          src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800"
          alt="Abstract waves"
          fill
          className="object-cover rounded-full"
        />
      </motion.div>
      <div className="absolute bottom-10 text-white text-center">
        <h2 className="text-4xl font-bold">Section 2</h2>
        <p className="text-sm mt-2 opacity-70">Zoom + Rotate effect</p>
      </div>
    </section>
  )
}

function Section3() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1.4, 0.6])
  const y = useTransform(scrollYProgress, [0, 1], [180, -180])
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15])

  return (
    <section ref={ref} className="h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 to-cyan-900 relative overflow-hidden">
      <motion.div style={{ scale, y, rotateX }} className="relative w-80 h-52">
        <Image
          src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800"
          alt="Abstract colors"
          fill
          className="object-cover rounded-3xl"
        />
      </motion.div>
      <div className="absolute bottom-10 text-white text-center">
        <h2 className="text-4xl font-bold">Section 3</h2>
        <p className="text-sm mt-2 opacity-70">Zoom + Vertical movement</p>
      </div>
    </section>
  )
}

function Section4() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.6], [0.8, 1.2, 0.8])
  const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], [50, 10, 50])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 99999999999999])

  return (
    <section ref={ref} className="h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 to-orange-900 relative overflow-hidden">
      <motion.div style={{ scale, borderRadius, rotate }} className="relative w-64 h-64 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800"
          alt="Abstract art"
          fill
          className="object-cover"
        />
      </motion.div>
      <div className="absolute bottom-10 text-white text-center">
        <h2 className="text-4xl font-bold">Section 4</h2>
        <p className="text-sm mt-2 opacity-70">Zoom + Shape morph</p>
      </div>
    </section>
  )
}
