'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { FLOW_MINI_NODES } from '@/data/content'
import { cn } from '@/lib/utils'

/* ── Mini workflow preview ── */
function MiniFlow() {
  return (
    <div
      className="flex items-end gap-2 sm:gap-3 mt-10 px-1"
      aria-label="Sample workflow: Intake to Automate to Deliver to Optimize"
      role="img"
    >
      {FLOW_MINI_NODES.map((node, i) => (
        <div key={node.label} className="flex items-center">
          {/* Node */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div
              className={cn(
                'w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 flex items-center justify-center',
                'text-xs font-mono font-semibold text-w-text',
              )}
              style={{
                borderColor: node.color,
                boxShadow: `0 0 14px ${node.color}44`,
                background: `${node.color}14`,
              }}
            >
              {i + 1}
            </div>
            <span className="text-[10px] sm:text-xs text-w-muted font-body whitespace-nowrap">
              {node.label}
            </span>
          </motion.div>

          {/* Connector */}
          {i < FLOW_MINI_NODES.length - 1 && (
            <motion.div
              className="w-6 sm:w-8 h-px mx-1 sm:mx-1.5 mb-5"
              style={{
                background: `linear-gradient(90deg, ${node.color}, ${FLOW_MINI_NODES[i + 1].color})`,
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.55 + i * 0.15, duration: 0.35, ease: 'easeOut' }}
            />
          )}
        </div>
      ))}
    </div>
  )
}

/* ── Hero section ── */
export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Aurora gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 gradient-aurora animate-gradient-shift opacity-80" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(167,139,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <span
              className={cn(
                'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium font-body',
                'border border-w-primary/30 bg-w-primary/10 text-w-primary mb-6',
              )}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-w-primary animate-pulse" />
              Smart IT &amp; Automation Studio
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-w-text leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
          >
            Modern IT + Automation{' '}
            <span className="gradient-text">that removes friction.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="font-body text-lg sm:text-xl text-w-muted leading-relaxed max-w-2xl mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          >
            We design reliable IT systems and automated workflows that help teams
            move faster with less manual work.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <a
              href="mailto:hello@thewonder.studio"
              className={cn(
                'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl',
                'gradient-primary text-[#0B1220] font-semibold font-body text-sm',
                'btn-shimmer hover:opacity-90 transition-opacity',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-primary focus-visible:ring-offset-2',
              )}
            >
              <Mail size={15} />
              Email Us
            </a>
            <button
              onClick={scrollToContact}
              className={cn(
                'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl',
                'border border-w-border bg-w-surface hover:border-w-primary/50 hover:bg-w-surface-2',
                'text-w-text font-semibold font-body text-sm',
                'transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-primary',
              )}
            >
              Start a Project
              <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* Mini workflow preview */}
          <MiniFlow />
        </div>
      </div>

      {/* Bottom fade into the flow canvas */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--w-bg))' }}
        aria-hidden="true"
      />
    </section>
  )
}
