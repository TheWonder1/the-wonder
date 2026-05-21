'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TRUST_BADGES } from '@/data/content'
import { cn } from '@/lib/utils'

export default function TrustStrip() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6">
      <motion.p
        className="text-center text-xs font-semibold uppercase tracking-widest text-w-muted mb-6 font-body"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        Built on enterprise tools — designed for speed.
      </motion.p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {TRUST_BADGES.map((badge, i) => (
          <motion.div
            key={badge}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ delay: i * 0.07, duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className={cn(
              'px-4 py-2 rounded-full border border-w-border bg-w-surface',
              'text-sm font-medium text-w-muted font-body',
              'hover:border-w-primary/40 hover:text-w-text transition-all duration-200',
            )}
          >
            {badge}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
