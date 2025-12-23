'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LeadershipStepProps {
  level: number
  title: string
  influenceType: string
  principle: string
  color: string
  delay: number
  isFirst?: boolean
}

export default function LeadershipStep({
  level,
  title,
  influenceType,
  principle,
  color,
  delay,
  isFirst = false,
}: LeadershipStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40, x: 20 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="relative"
      style={{
        marginLeft: `${(level - 1) * 15}%`,
        marginTop: level === 5 ? '0' : '-0.2rem',
      }}
    >
      
      {/* Step Card */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "relative bg-white rounded-2xl p-6 md:p-8 shadow-xl border-l-4 max-w-md",
          "hover:shadow-2xl transition-shadow duration-300"
        )}
        style={{
          borderLeftColor: color,
          boxShadow: `0 10px 40px -10px ${color}40`
        }}
      >
        {/* Level Badge */}
        <div
          className="absolute -top-4 -left-2 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-white text-lg shadow-lg"
          style={{ backgroundColor: color }}
        >
          {level}
        </div>

        {/* Influence Type Tag */}
        <div className="mb-3 pt-2">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider"
            style={{
              backgroundColor: `${color}15`,
              color: color
            }}
          >
            {influenceType}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-display text-2xl md:text-3xl font-semibold mb-3"
          style={{ color }}
        >
          {title}
        </h3>

        {/* Principle Quote */}
        <p className="font-body text-avante-slate text-base md:text-lg leading-relaxed italic">
          "{principle}"
        </p>

        {/* Decorative gradient line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-60"
          style={{
            background: `linear-gradient(90deg, ${color} 0%, transparent 100%)`
          }}
        />
      </motion.div>
    </motion.div>
  )
}
