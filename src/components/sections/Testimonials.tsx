'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/data/content'
import { cn } from '@/lib/utils'

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div ref={ref} className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-w-muted font-body mb-2">
          Client Feedback
        </p>
        <h2 className="font-display font-semibold text-2xl md:text-3xl text-w-text tracking-tight">
          What clients say
        </h2>
      </div>

      <div className="space-y-4">
        {TESTIMONIALS.map((t, i) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: i * 0.12, duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
            className="card-base p-5 space-y-4"
            aria-label={`Testimonial from ${t.name}, ${t.role}`}
          >
            <Quote size={18} className="text-w-primary opacity-60" />

            <p className="text-sm text-w-muted font-body leading-relaxed italic">
              {t.quote}
            </p>

            <footer className="flex items-center gap-3">
              <div
                className={cn(
                  'w-9 h-9 rounded-full gradient-primary flex items-center justify-center',
                  'text-xs font-bold text-[#0B1220] font-display flex-shrink-0',
                )}
                aria-hidden="true"
              >
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-w-text font-body">{t.name}</p>
                <p className="text-xs text-w-muted font-body">
                  {t.role} · <span className="text-w-muted/70">{t.company}</span>
                </p>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  )
}
