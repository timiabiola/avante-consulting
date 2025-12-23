'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  rating?: number
}

export default function TestimonialCard({
  quote,
  name,
  title,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl max-w-2xl mx-auto"
    >
      {/* Quote Icon */}
      <div className="mb-6">
        <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
          <Quote className="w-6 h-6 text-teal-500" />
        </div>
      </div>

      {/* Quote Text */}
      <blockquote className="font-display text-xl sm:text-2xl md:text-3xl text-avante-navy leading-relaxed mb-6">
        "{quote}"
      </blockquote>

      {/* Star Rating */}
      <div className="flex gap-1 mb-6" role="img" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 sm:w-6 sm:h-6 ${
              i < rating
                ? 'fill-amber-400 text-amber-400'
                : 'fill-gray-200 text-gray-200'
            }`}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Avatar placeholder */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-teal-200 to-teal-400 flex items-center justify-center flex-shrink-0">
          <span className="font-display text-lg sm:text-xl text-white font-semibold">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="min-w-0">
          <p className="font-body font-semibold text-avante-navy text-base sm:text-lg">
            {name}
          </p>
          <p className="font-body text-avante-slate text-sm sm:text-base">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
