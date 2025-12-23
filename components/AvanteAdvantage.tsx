'use client'

import { motion } from 'framer-motion'
import LeadershipStep from './LeadershipStep'

const leadershipLevels = [
  {
    level: 1,
    title: 'Position',
    influenceType: 'Rights',
    principle: "Don't rely on your title to lead",
    color: '#7AB4E8', // avante-sky
  },
  {
    level: 2,
    title: 'Permission',
    influenceType: 'Relationship',
    principle: 'Practice servant leadership',
    color: '#5A9AD8', // blend sky/blue
  },
  {
    level: 3,
    title: 'Production',
    influenceType: 'Results',
    principle: 'Lead by example, produce results',
    color: '#2B6FC2', // avante-blue
  },
  {
    level: 4,
    title: 'People Development',
    influenceType: 'Reproduction',
    principle: 'People are your most valuable asset',
    color: '#2254A1', // blend blue/navy
  },
  {
    level: 5,
    title: 'Pinnacle',
    influenceType: 'Respect',
    principle: 'Use your influence to make a difference',
    color: '#1A3A8C', // avante-navy
  },
]

export default function AvanteAdvantage() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-avante-light via-white to-avante-sky/10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Ascending diagonal line */}
        <svg
          className="absolute w-full h-full opacity-10"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7AB4E8" />
              <stop offset="100%" stopColor="#1A3A8C" />
            </linearGradient>
          </defs>
          <line
            x1="0%"
            y1="90%"
            x2="100%"
            y2="10%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="10,10"
          />
        </svg>

        {/* Floating circles */}
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 rounded-full bg-avante-sky/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-avante-navy/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="editorial-label mb-4 block">The Framework</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-avante-navy mb-6">
            The Avante Advantage
          </h2>
          <p className="font-body text-lg md:text-xl text-avante-slate max-w-3xl mx-auto">
            Master the 5 Levels of Leadership—a proven framework for building
            influence that lasts beyond any title or position.
          </p>
        </motion.div>

        {/* Staircase Container */}
        <div className="relative">
          {/* Desktop: Diagonal ascending layout - Pinnacle at top */}
          <div className="hidden md:block space-y-0">
            {leadershipLevels.slice().reverse().map((level, index) => (
              <LeadershipStep
                key={level.level}
                {...level}
                delay={index * 0.15}
                isFirst={level.level === 5}
              />
            ))}
          </div>

          {/* Mobile: Vertical stack - Pinnacle at top, climb from bottom */}
          <div className="md:hidden space-y-10">
            {leadershipLevels.slice().reverse().map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className="relative bg-white rounded-2xl p-6 sm:p-7 shadow-lg border-l-4 touch-manipulation"
                  style={{
                    borderLeftColor: level.color,
                    boxShadow: `0 8px 30px -8px ${level.color}30`
                  }}
                >
                  {/* Level Badge */}
                  <div
                    className="absolute -top-3 -left-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-display font-bold text-white text-base sm:text-lg shadow-md"
                    style={{ backgroundColor: level.color }}
                    aria-label={`Level ${level.level}`}
                  >
                    {level.level}
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <span
                      className="inline-block px-2.5 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider mb-3"
                      style={{
                        backgroundColor: `${level.color}15`,
                        color: level.color
                      }}
                    >
                      {level.influenceType}
                    </span>
                    <h3
                      className="font-display text-xl sm:text-2xl font-semibold mb-3"
                      style={{ color: level.color }}
                    >
                      {level.title}
                    </h3>
                    <p className="font-body text-avante-slate text-sm sm:text-base italic leading-relaxed">
                      "{level.principle}"
                    </p>
                  </div>

                  {/* Arrow pointing UP to next level (except Pinnacle) */}
                  {level.level < 5 && (
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-avante-sky/50" aria-hidden="true">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 20 L12 4 M6 10 L12 4 L18 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="font-body text-avante-slate mb-6 text-base sm:text-lg">
            Ready to climb to the next level?
          </p>
          <a
            href="#guide"
            className="inline-flex items-center justify-center gap-2 bg-avante-navy text-white px-8 sm:px-10 py-5 sm:py-4 rounded-full font-body font-medium text-base sm:text-lg btn-lift active:scale-95 transition-transform touch-manipulation min-h-[56px]"
          >
            Start Your Ascent
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
              <path
                d="M4 16 L16 4 M10 4 L16 4 L16 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
