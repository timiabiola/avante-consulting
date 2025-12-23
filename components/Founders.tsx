'use client'

import { motion } from 'framer-motion'
import { Award, User } from 'lucide-react'

const founders = [
  {
    name: 'Shaun Hammond',
    title: 'Principal',
    credentials: 'Maxwell Leadership Certified Coach',
    bio: 'With extensive experience in executive leadership development, Shaun brings a transformative approach to unlocking leadership potential in organizations of all sizes.',
  },
  {
    name: 'Kelly Hallock',
    title: 'Co-Founder',
    credentials: 'RN BScN, Maxwell Leadership Certified Coach',
    bio: 'Kelly combines healthcare leadership expertise with Maxwell Leadership principles to help leaders develop authentic influence and create lasting positive change.',
  },
]

export default function Founders() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <span className="editorial-label mb-4 block">Meet Your Guides</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-avante-navy mb-4 md:mb-6">
            The Founders
          </h2>
          <p className="font-body text-lg md:text-xl text-avante-slate max-w-2xl mx-auto px-4">
            Certified leadership coaches dedicated to helping you unlock
            your full potential.
          </p>
        </motion.div>

        {/* Founder cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-avante-light rounded-3xl p-8 lg:p-10 border border-avante-sky/20"
            >
              {/* Photo placeholder */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-avante-sky to-avante-blue flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-avante-blue/20 scale-110" />
              </div>

              {/* Name and title */}
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl lg:text-3xl text-avante-navy mb-1">
                  {founder.name}
                </h3>
                <p className="font-body font-medium text-avante-blue">
                  {founder.title}
                </p>
              </div>

              {/* Credentials badge */}
              <div className="flex items-center justify-center gap-2 bg-white rounded-full px-4 py-2 mb-6 mx-auto w-fit">
                <Award className="w-4 h-4 text-avante-blue" />
                <span className="font-body text-sm text-avante-slate">
                  {founder.credentials}
                </span>
              </div>

              {/* Bio */}
              <p className="font-body text-avante-slate text-center leading-relaxed">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Maxwell Leadership badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-avante-navy/5 rounded-full px-6 py-3">
            <Award className="w-5 h-5 text-avante-navy" />
            <span className="font-body text-avante-navy font-medium">
              Maxwell Leadership Certified Team
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
