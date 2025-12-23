'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-avante-sky/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <Image
              src="/logo.png"
              alt="Avante Leadership Consulting"
              width={100}
              height={100}
              className="mx-auto md:mx-0 mb-4"
            />
            <p className="font-display text-lg text-avante-navy italic">
              Developing Tomorrow's Leaders Today
            </p>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <p className="editorial-label mb-2">Get in Touch</p>
            <a
              href="mailto:info@avanteleadership.com"
              className="font-body text-avante-blue hover:text-avante-navy transition-colors"
            >
              info@avanteleadership.com
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <a
              href="#linkedin"
              className="w-12 h-12 rounded-full bg-avante-light flex items-center justify-center text-avante-blue hover:bg-avante-sky/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#twitter"
              className="w-12 h-12 rounded-full bg-avante-light flex items-center justify-center text-avante-blue hover:bg-avante-sky/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@avanteleadership.com"
              className="w-12 h-12 rounded-full bg-avante-light flex items-center justify-center text-avante-blue hover:bg-avante-sky/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-avante-sky/10 text-center"
        >
          <p className="font-body text-sm text-avante-slate/70">
            © {currentYear} Avante Leadership Consulting Ltd. All rights reserved.
          </p>
          <p className="font-body text-xs text-avante-slate/50 mt-2">
            Maxwell Leadership Certified Coaches
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
