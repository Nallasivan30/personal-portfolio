"use client"

import { motion } from "framer-motion"

export function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center space-x-4"
        >
          <div className="w-12 h-12 bg-muted rounded-md animate-pulse" />
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-muted rounded animate-pulse" />
            <div className="h-3 bg-muted rounded w-3/4 animate-pulse" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}