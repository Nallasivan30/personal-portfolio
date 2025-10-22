"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const items = [
  {
    range: "2024 — Present",
    role: "Senior Full‑Stack Engineer · Example Co.",
    summary: "Leading UI platform initiatives, building component systems and performance-first experiences.",
    tags: ["Next.js", "TypeScript", "Design Systems", "Accessibility"],
  },
  {
    range: "2022 — 2024",
    role: "Frontend Engineer · ProductLab",
    summary: "Shipped multi-tenant dashboards, SSR content, and secure auth flows across teams.",
    tags: ["React", "SWR", "Postgres"],
  },
]

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
          <p className="text-muted-foreground mt-2">Highlights from my journey.</p>
        </header>
        <div className="relative">
          <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
          <div className="space-y-8">
            {items.map((it, idx) => (
              <motion.div
                key={it.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${idx % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className="pl-8 md:pl-0">
                  <p className="text-sm text-muted-foreground">{it.range}</p>
                </div>
                <Card className="bg-card/60">
                  <CardContent className="space-y-3 p-6">
                    <h3 className="text-lg font-medium">{it.role}</h3>
                    <p className="text-muted-foreground">{it.summary}</p>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground/90">
                      {it.tags.map((t) => (
                        <span key={t} className="rounded border border-border/60 px-2 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
