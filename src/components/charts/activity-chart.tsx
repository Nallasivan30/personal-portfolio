"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ActivityData {
  label: string
  value: number
  color: string
  icon: React.ReactNode
}

interface ActivityChartProps {
  data: ActivityData[]
  title: string
}

export function ActivityChart({ data, title }: ActivityChartProps) {
  const maxValue = Math.max(...data.map(d => d.value))

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="flex items-center gap-2 min-w-0 flex-1">
                {item.icon}
                <span className="text-sm font-medium truncate">{item.label}</span>
              </div>
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(item.value / maxValue) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
                <span className="text-sm font-bold min-w-fit">{item.value}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}