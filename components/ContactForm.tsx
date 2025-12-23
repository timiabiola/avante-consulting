'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle, ChevronDown } from 'lucide-react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  currentRole: string
  biggestChallenge: string
}

const roleOptions = [
  { value: '', label: 'Select your current role...' },
  { value: 'aspiring', label: 'Aspiring Leader / First-Time Manager' },
  { value: 'middle', label: 'Middle Manager' },
  { value: 'senior', label: 'Senior Leader / Executive' },
  { value: 'coach', label: 'Executive Coach / Consultant' },
  { value: 'other', label: 'Other' },
]

const challengeOptions = [
  { value: '', label: 'Select your biggest challenge...' },
  { value: 'influence', label: 'Building influence with my team' },
  { value: 'managing-up', label: 'Managing up (working with senior leadership)' },
  { value: 'change', label: 'Navigating organizational change' },
  { value: 'voice', label: 'Developing my authentic leadership voice' },
  { value: 'scaling', label: 'Scaling my impact as I grow' },
  { value: 'other', label: 'Other' },
]

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    console.log('Form submitted:', data)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
  }

  return (
    <section id="guide" className="py-16 md:py-24 lg:py-32 bg-avante-light">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="editorial-label mb-4 block">Start Your Journey</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-avante-navy mb-4 md:mb-6">
            Get Your Latent Leaders' Guide
          </h2>
          <p className="font-body text-lg md:text-xl text-avante-slate max-w-xl mx-auto px-4">
            Take the first step toward unlocking your leadership potential.
            Share a few details and we'll send you our exclusive guide.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl shadow-avante-sky/10 border border-avante-sky/10"
            >
              {/* Name row */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block font-body font-medium text-avante-navy mb-2 text-sm md:text-base">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    autoComplete="given-name"
                    {...register('firstName', { required: 'First name is required' })}
                    className={`w-full px-4 py-4 rounded-xl border ${
                      errors.firstName ? 'border-red-400' : 'border-avante-sky/30'
                    } font-body text-avante-slate bg-avante-light/50 transition-colors text-base`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1 font-body"
                    >
                      {errors.firstName.message}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block font-body font-medium text-avante-navy mb-2 text-sm md:text-base">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    autoComplete="family-name"
                    {...register('lastName', { required: 'Last name is required' })}
                    className={`w-full px-4 py-4 rounded-xl border ${
                      errors.lastName ? 'border-red-400' : 'border-avante-sky/30'
                    } font-body text-avante-slate bg-avante-light/50 transition-colors text-base`}
                    placeholder="Smith"
                  />
                  {errors.lastName && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1 font-body"
                    >
                      {errors.lastName.message}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block font-body font-medium text-avante-navy mb-2 text-sm md:text-base">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address',
                    },
                  })}
                  className={`w-full px-4 py-4 rounded-xl border ${
                    errors.email ? 'border-red-400' : 'border-avante-sky/30'
                  } font-body text-avante-slate bg-avante-light/50 transition-colors text-base`}
                  placeholder="john@company.com"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 font-body"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label htmlFor="phone" className="block font-body font-medium text-avante-navy mb-2 text-sm md:text-base">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  {...register('phone', { required: 'Phone number is required' })}
                  className={`w-full px-4 py-4 rounded-xl border ${
                    errors.phone ? 'border-red-400' : 'border-avante-sky/30'
                  } font-body text-avante-slate bg-avante-light/50 transition-colors text-base`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 font-body"
                  >
                    {errors.phone.message}
                  </motion.p>
                )}
              </div>

              {/* Current Role */}
              <div className="mb-6">
                <label htmlFor="currentRole" className="block font-body font-medium text-avante-navy mb-2 text-sm md:text-base">
                  Which best describes your current role? *
                </label>
                <div className="relative">
                  <select
                    id="currentRole"
                    autoComplete="organization-title"
                    {...register('currentRole', { required: 'Please select your role' })}
                    className={`w-full px-4 py-4 rounded-xl border ${
                      errors.currentRole ? 'border-red-400' : 'border-avante-sky/30'
                    } font-body text-avante-slate bg-avante-light/50 appearance-none cursor-pointer transition-colors text-base`}
                  >
                    {roleOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-avante-slate pointer-events-none" />
                </div>
                {errors.currentRole && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 font-body"
                  >
                    {errors.currentRole.message}
                  </motion.p>
                )}
              </div>

              {/* Biggest Challenge */}
              <div className="mb-8">
                <label htmlFor="biggestChallenge" className="block font-body font-medium text-avante-navy mb-2 text-sm md:text-base">
                  What's your biggest leadership challenge right now? *
                </label>
                <div className="relative">
                  <select
                    id="biggestChallenge"
                    {...register('biggestChallenge', { required: 'Please select your challenge' })}
                    className={`w-full px-4 py-4 rounded-xl border ${
                      errors.biggestChallenge ? 'border-red-400' : 'border-avante-sky/30'
                    } font-body text-avante-slate bg-avante-light/50 appearance-none cursor-pointer transition-colors text-base`}
                  >
                    {challengeOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-avante-slate pointer-events-none" />
                </div>
                {errors.biggestChallenge && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 font-body"
                  >
                    {errors.biggestChallenge.message}
                  </motion.p>
                )}
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 bg-avante-navy text-white px-8 py-5 rounded-full font-body font-medium text-base md:text-lg btn-lift disabled:opacity-70 disabled:cursor-not-allowed min-h-[56px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Get My Latent Leaders' Guide
                  </>
                )}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-12 shadow-xl shadow-avante-sky/10 border border-avante-sky/10 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-10 h-10 text-green-600" />
              </motion.div>
              <h3 className="font-display text-3xl text-avante-navy mb-4">
                You're on Your Way!
              </h3>
              <p className="font-body text-xl text-avante-slate mb-6">
                Check your inbox for the Latent Leaders' Guide.
                Your leadership journey begins now.
              </p>
              <p className="font-body text-avante-slate/70">
                We'll be in touch soon to discuss your leadership goals.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
