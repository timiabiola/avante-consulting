'use client'

import { motion } from 'framer-motion'
import { Compass, Zap, Target } from 'lucide-react'
import JourneyStep from './JourneyStep'

const steps = [
  {
    number: 1,
    title: 'Discover',
    description: 'Uncover your natural leadership style through proven assessments and deep reflection. Understand the unique strengths you bring to every team and situation.',
    icon: Compass,
  },
  {
    number: 2,
    title: 'Develop',
    description: 'Develop your latent leadership potential with personalized coaching and practical frameworks. Transform hidden capabilities into actionable skills.',
    icon: Zap,
  },
  {
    number: 3,
    title: 'Deploy',
    description: 'Implement your influence blueprint with confidence. Apply your refined leadership approach to create lasting impact in your organization.',
    icon: Target,
  },
]

export default function Journey() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-avante-light overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(122, 180, 232, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <span className="editorial-label mb-4 block">Your Transformation</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-avante-navy mb-4 md:mb-6">
            The Leadership Journey
          </h2>
          <p className="font-body text-lg md:text-xl text-avante-slate max-w-2xl mx-auto px-4">
            A proven three-step process that takes you from where you are
            to where you want to be as a leader.
          </p>
        </motion.div>

        {/* Journey steps with connecting line */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-avante-sky via-avante-blue to-avante-navy -translate-x-1/2 hidden md:block" />

          {/* Steps */}
          {steps.map((step, index) => (
            <JourneyStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLeft={index % 2 === 0}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
