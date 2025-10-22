"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface ContributionDay {
  date: string
  count: number
}

interface ContributionChartProps {
  contributions: ContributionDay[]
}

export function ContributionChart({ contributions }: ContributionChartProps) {
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null)
  const maxCount = Math.max(...contributions.map(c => c.count), 1)

  const getIntensityClass = (count: number) => {
    if (count === 0) return 'bg-muted'
    const intensity = count / maxCount
    if (intensity <= 0.25) return 'bg-primary/25'
    if (intensity <= 0.5) return 'bg-primary/50'
    if (intensity <= 0.75) return 'bg-primary/75'
    return 'bg-primary'
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-7 gap-1 mb-4">
        {contributions.map((day, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.02, duration: 0.3 }}
            whileHover={{ scale: 1.2 }}
            className={`w-3 h-3 rounded-sm cursor-pointer transition-all ${getIntensityClass(day.count)}`}
            onMouseEnter={() => setHoveredDay(day)}
            onMouseLeave={() => setHoveredDay(null)}
          />
        ))}
      </div>
      
      {hoveredDay && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-full left-0 mb-2 p-2 bg-popover border rounded-lg shadow-lg text-sm z-10"
        >
          <div className="font-medium">{hoveredDay.count} contributions</div>
          <div className="text-muted-foreground">{hoveredDay.date}</div>
        </motion.div>
      )}
      
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-sm bg-muted" />
          <div className="w-2 h-2 rounded-sm bg-primary/25" />
          <div className="w-2 h-2 rounded-sm bg-primary/50" />
          <div className="w-2 h-2 rounded-sm bg-primary/75" />
          <div className="w-2 h-2 rounded-sm bg-primary" />
        </div>
        <span>More</span>
      </div>
    </div>
  )
}