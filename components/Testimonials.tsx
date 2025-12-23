'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import TestimonialCard from './TestimonialCard'

const testimonials = [
  {
    id: 1,
    quote: "The 5 Levels framework transformed how I lead my team. I finally understand that true leadership is about influence, not authority.",
    name: "Alex Chen",
    title: "Senior Manager",
    rating: 5,
  },
  {
    id: 2,
    quote: "I finally understand the difference between position and influence. Avante gave me the tools to become a leader people actually want to follow.",
    name: "Maria Santos",
    title: "Director of Operations",
    rating: 5,
  },
  {
    id: 3,
    quote: "Avante helped me unlock leadership potential I didn't know I had. The journey from Level 1 to Level 3 changed everything.",
    name: "James Wright",
    title: "Executive Coach",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeThreshold = 50 // Minimum swipe distance in pixels
    const diff = touchStartX.current - touchEndX.current

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide() // Swipe left = next
      } else {
        prevSlide() // Swipe right = previous
      }
    }
  }

  // Auto-advance
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  return (
    <section
      className="py-20 md:py-32"
      style={{ backgroundColor: '#E8F5E9' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-avante-navy mb-4">
            Success Stories
          </h2>
          <p className="font-body text-lg md:text-xl text-avante-slate max-w-2xl mx-auto">
            Hear from leaders who've transformed their careers with Avante.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows - Optimized for mobile touch */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-4 md:-translate-x-12 z-10 w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-avante-slate hover:text-avante-navy hover:shadow-xl active:scale-95 transition-all touch-manipulation"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-4 md:translate-x-12 z-10 w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-avante-slate hover:text-avante-navy hover:shadow-xl active:scale-95 transition-all touch-manipulation"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>

          {/* Testimonial Cards - Swipe enabled */}
          <div
            className="overflow-hidden px-4 sm:px-20 md:px-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <TestimonialCard
                key={testimonials[currentIndex].id}
                {...testimonials[currentIndex]}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Dot Indicators - Mobile optimized with larger touch targets */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="relative p-3 touch-manipulation"
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            >
              {/* Visual indicator (small) */}
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-teal-500'
                    : 'w-2 bg-teal-300'
                }`}
              />
              {/* Invisible touch target overlay (large) - ensures 44x44px minimum */}
              <span className="absolute inset-0 min-w-[44px] min-h-[44px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
