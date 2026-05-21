'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { OUTCOMES } from '@/data/content'
import { cn } from '@/lib/utils'

export default function Outcomes() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <div ref={ref} className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-w-muted font-body mb-2">
          Outcomes
        </p>
        <h2 className="font-display font-semibold text-2xl md:text-3xl text-w-text tracking-tight">
          What changes after we deliver.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {OUTCOMES.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: i * 0.1, duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
            className="card-base p-5 space-y-2"
          >
            <div className="font-display font-semibold text-3xl gradient-text">
              {item.stat}
            </div>
            <p className="font-display font-semibold text-sm text-w-text">{item.label}</p>
            <p className="text-xs text-w-muted font-body leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-xs text-w-muted font-body italic">
        Results vary — metrics depend on scope and baseline.
      </p>
    </div>
  )
}
