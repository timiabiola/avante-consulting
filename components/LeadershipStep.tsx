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
}

export default function LeadershipStep({
  level,
  title,
  influenceType,
  principle,
  color,
  delay,
}: LeadershipStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, x: -20 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="relative"
      style={{
        marginLeft: `${(level - 1) * 12}%`,
        marginTop: level === 1 ? '0' : '-1rem',
      }}
    >
      {/* Connecting arrow to next step */}
      {level < 5 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          className="absolute -bottom-8 right-1/4 text-avante-sky/60 hidden md:block"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M8 32 L32 8 M24 8 L32 8 L32 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      )}

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
