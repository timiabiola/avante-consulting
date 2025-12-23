'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface JourneyStepProps {
  number: number
  title: string
  description: string
  icon: LucideIcon
  isLeft: boolean
  isLast?: boolean
}

export default function JourneyStep({
  number,
  title,
  description,
  icon: Icon,
  isLeft,
  isLast = false,
}: JourneyStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} ${!isLast ? 'mb-16 md:mb-24' : ''}`}
    >
      {/* Content card */}
      <div className={`flex-1 w-full md:w-auto ${isLeft ? 'md:text-right' : 'md:text-left'} text-center`}>
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-lg shadow-avante-sky/10 border border-avante-light"
        >
          <span className="editorial-label mb-3 block">Step {number}</span>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-avante-navy mb-3 md:mb-4">
            {title}
          </h3>
          <p className="font-body text-avante-slate text-base md:text-lg">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Center node with icon */}
      <div className="relative z-10 flex-shrink-0 order-first md:order-none">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-avante-sky to-avante-blue flex items-center justify-center shadow-lg shadow-avante-blue/30"
        >
          <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
        </motion.div>

        {/* Arrow pointing down (except for last step) */}
        {!isLast && (
          <motion.div
            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 md:block"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-avante-sky">
              <path
                d="M12 0 L12 32 M4 24 L12 32 L20 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        )}
      </div>

      {/* Empty space for alignment on desktop only */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}
