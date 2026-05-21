'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const CREDIBILITY = [
  'Documentation discipline — everything handed over, nothing left tribal.',
  'Security mindset — least-privilege, audit trails, and change control baked in.',
  'Operational excellence — we design for maintainability, not just launch day.',
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <div ref={ref} className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-w-muted font-body mb-2">
          The Studio
        </p>
        <h2 className="font-display font-semibold text-2xl md:text-3xl text-w-text tracking-tight">
          About The Wonder
        </h2>
      </div>

      <motion.p
        className="text-base text-w-muted font-body leading-relaxed"
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
      >
        We turn operational friction into reliable systems. Our work sits at the
        intersection of IT infrastructure, smart process design, and practical
        automation — applied to the platforms your teams already use.
      </motion.p>

      {/* Founder card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ delay: 0.15, duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
        className="card-base p-5 flex items-start gap-4"
      >
        <div className="w-11 h-11 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
          <User size={18} className="text-[#0B1220]" />
        </div>
        <div className="space-y-1">
          <p className="font-display font-semibold text-sm text-w-text">Founder</p>
          <p className="text-xs text-w-muted font-body leading-relaxed">
            Led by an experienced IT specialist with 6+ years in enterprise support
            and automation — across ITSM, Microsoft 365, device management, and
            workflow design for organisations up to 5,000 seats.
          </p>
        </div>
      </motion.div>

      {/* Credibility bullets */}
      <ul className="space-y-3" role="list">
        {CREDIBILITY.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
            transition={{ delay: 0.25 + i * 0.1, duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="flex items-start gap-3 text-sm text-w-muted font-body"
          >
            <CheckCircle2 size={15} className="text-w-secondary flex-shrink-0 mt-0.5" />
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
