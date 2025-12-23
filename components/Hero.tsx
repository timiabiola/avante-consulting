'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  const scrollToForm = () => {
    const form = document.getElementById('guide')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-avante-light to-avante-sky/20" />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-avante-sky/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-avante-blue/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Arrow motif from logo - floating */}
      <motion.div
        className="absolute top-1/4 right-1/4 opacity-5"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path
            d="M100 20 L180 100 L100 100 L100 180 L20 100 Z"
            fill="#1A3A8C"
          />
        </svg>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-avante-navy mb-6 tracking-tight"
        >
          Developing Tomorrow's
          <span className="block italic text-avante-blue">Leaders Today</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-lg md:text-xl text-avante-slate max-w-2xl mx-auto mb-12"
        >
          Unlock your authentic leadership potential through a proven three-step
          journey with Maxwell Leadership certified coaches.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary CTA */}
          <button
            onClick={scrollToForm}
            className="group flex items-center gap-3 bg-avante-navy text-white px-8 py-5 rounded-full font-body font-medium text-lg btn-lift min-h-[56px]"
          >
            <Sparkles className="w-5 h-5" />
            <span className="sm:inline hidden">Get the Latent Leaders' Guide</span>
            <span className="sm:hidden">Get the Guide</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA */}
          <a
            href="#calendly"
            className="group flex items-center gap-2 text-avante-navy border-2 border-avante-navy px-8 py-5 rounded-full font-body font-medium text-lg transition-all hover:bg-avante-navy hover:text-white min-h-[56px]"
          >
            Book a Discovery Call
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-avante-slate/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-avante-blue rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
