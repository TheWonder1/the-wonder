'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Monitor, Workflow, LayoutGrid, Ticket,
  BarChart3, Sparkles, ArrowRight, type LucideIcon,
} from 'lucide-react'
import { SERVICES } from '@/data/content'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, LucideIcon> = {
  Monitor, Workflow, LayoutGrid, Ticket, BarChart3, Sparkles,
}

function ServiceCard({
  service,
  index,
  parentInView,
}: {
  service: typeof SERVICES[number]
  index: number
  parentInView: boolean
}) {
  const Icon = ICON_MAP[service.icon] ?? Monitor
  const isPrimary = service.color === 'primary'

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={parentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.08, duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
      className="card-base p-5 flex flex-col gap-4"
      aria-label={service.title}
    >
      {/* Icon */}
      <div
        className={cn(
          'w-10 h-10 rounded-xl flex items-center justify-center',
          isPrimary
            ? 'bg-w-primary/10 text-w-primary'
            : 'bg-w-secondary/10 text-w-secondary',
        )}
      >
        <Icon size={18} />
      </div>

      {/* Text */}
      <div className="flex-1 space-y-2">
        <h3 className="font-display font-semibold text-base text-w-text leading-snug">
          {service.title}
        </h3>
        <p className="text-sm text-w-muted font-body leading-relaxed">
          {service.oneliner}
        </p>
        <ul className="space-y-1" role="list">
          {service.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-1.5 text-xs text-w-muted font-body"
            >
              <span
                className={cn(
                  'mt-1 w-1 h-1 rounded-full flex-shrink-0',
                  isPrimary ? 'bg-w-primary' : 'bg-w-secondary',
                )}
              />
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Micro CTA */}
      <button
        className={cn(
          'flex items-center gap-1.5 text-xs font-semibold font-body transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-primary rounded',
          isPrimary
            ? 'text-w-primary hover:gap-2.5'
            : 'text-w-secondary hover:gap-2.5',
        )}
        aria-label={`${service.cta} — ${service.title}`}
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        {service.cta}
        <ArrowRight size={12} />
      </button>
    </motion.article>
  )
}

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div ref={ref} className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-w-muted font-body mb-2">
          What We Do
        </p>
        <h2 className="font-display font-semibold text-2xl md:text-3xl text-w-text tracking-tight">
          Services
        </h2>
        <p className="mt-2 text-sm text-w-muted font-body leading-relaxed">
          From first request to finished workflow — we handle the full picture.
        </p>
      </div>

      {/* Bento grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        role="list"
        aria-label="Service offerings"
      >
        {SERVICES.map((service, i) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={i}
            parentInView={inView}
          />
        ))}
      </div>
    </div>
  )
}
