'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Pencil, Zap, TrendingUp, ShieldCheck, FileText, GraduationCap } from 'lucide-react'
import { PROCESS_STEPS, OPTIONAL_BRANCHES } from '@/data/content'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

const ICON_MAP: Record<string, LucideIcon> = {
  Search, Pencil, Zap, TrendingUp, ShieldCheck, FileText, GraduationCap,
}

export default function Process() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <div ref={ref} className="space-y-8 w-full">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-w-muted font-body mb-2">
          How We Work
        </p>
        <h2 className="font-display font-semibold text-2xl md:text-3xl text-w-text tracking-tight">
          The Process
        </h2>
        <p className="mt-2 text-sm text-w-muted font-body leading-relaxed max-w-lg">
          Every engagement follows a structured flow — from discovery to a self-sustaining system.
        </p>
      </div>

      {/* Main workflow map */}
      <div className="relative">
        {/* Horizontal connector line (desktop) */}
        <div className="hidden md:block absolute top-[22px] left-[10%] right-[10%] h-px" aria-hidden="true">
          <motion.div
            className="h-full bg-gradient-to-r from-w-primary via-w-secondary to-w-primary"
            style={{ originX: 0 }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICON_MAP[step.icon] ?? Zap
            return (
              <motion.div
                key={step.id}
                className="flex flex-col items-center text-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
              >
                {/* Node */}
                <div className="relative">
                  {inView && (
                    <span className="absolute inset-0 rounded-full animate-pulse-ring bg-w-primary/30" />
                  )}
                  <div
                    className={cn(
                      'relative w-11 h-11 rounded-full border-2 border-w-primary',
                      'bg-w-surface flex items-center justify-center',
                      'shadow-node-active',
                    )}
                  >
                    <Icon size={16} className="text-w-primary" />
                  </div>
                </div>

                {/* Step number */}
                <span className="text-[10px] font-mono font-semibold text-w-muted">
                  0{i + 1}
                </span>

                {/* Label */}
                <h3 className="font-display font-semibold text-sm text-w-text">{step.label}</h3>

                {/* Description */}
                <p className="text-xs text-w-muted font-body leading-relaxed">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Optional branches */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-w-border" />
          <span className="text-xs font-semibold uppercase tracking-widest text-w-muted font-body whitespace-nowrap">
            Optional add-ons
          </span>
          <div className="h-px flex-1 bg-w-border" />
        </div>

        {/* Vertical connector from main flow */}
        <div className="flex justify-center" aria-hidden="true">
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-w-primary/60 to-transparent"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ delay: 0.9, duration: 0.3 }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {OPTIONAL_BRANCHES.map((branch, i) => {
            const Icon = ICON_MAP[branch.icon] ?? ShieldCheck
            return (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl',
                  'border border-w-border border-dashed bg-w-surface',
                  'hover:border-w-secondary/40 hover:bg-w-surface-2 transition-all duration-200',
                )}
              >
                <div className="w-8 h-8 rounded-lg bg-w-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={14} className="text-w-secondary" />
                </div>
                <span className="text-xs font-semibold text-w-muted font-body">{branch.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
