'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { FLOW_MINI_NODES } from '@/data/content'
import { cn } from '@/lib/utils'

/* ─────────────────────────────────────────────────────────────────────────────
   Mini workflow preview  (Intake → Automate → Deliver → Optimize)
   Lives inside the hero, below the CTAs.
───────────────────────────────────────────────────────────────────────────── */
function MiniFlow() {
  return (
    <div
      className="flex flex-wrap items-end gap-x-2 gap-y-4 mt-10"
      role="img"
      aria-label="Sample workflow: Intake → Automate → Deliver → Optimize"
    >
      {FLOW_MINI_NODES.map((node, i) => (
        <div key={node.label} className="flex items-center">
          {/* Node bubble */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.55 + i * 0.13,
              duration: 0.38,
              ease: [0.2, 0.7, 0.2, 1],
            }}
          >
            <div
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-mono font-semibold text-w-text"
              style={{
                borderColor: node.color,
                background: `${node.color}18`,
                boxShadow: `0 0 14px ${node.color}44`,
              }}
            >
              {i + 1}
            </div>
            <span className="text-[11px] text-w-muted font-body whitespace-nowrap leading-none">
              {node.label}
            </span>
          </motion.div>

          {/* Connector */}
          {i < FLOW_MINI_NODES.length - 1 && (
            <motion.div
              className="w-7 sm:w-9 h-px mx-2 mb-5 flex-shrink-0"
              style={{
                background: `linear-gradient(90deg, ${node.color}, ${FLOW_MINI_NODES[i + 1].color})`,
              }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.65 + i * 0.13,
                duration: 0.3,
                ease: 'easeOut',
              }}
            />
          )}
        </div>
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   Hero section
   Layout: pure padding — NO flex items-center which can collapse before CSS
   settles, causing the mini-flow nodes to float up to navbar level on the
   initial paint and after a tab-switch re-paint.
───────────────────────────────────────────────────────────────────────────── */
export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen"
      aria-label="Hero"
    >
      {/* ── Aurora gradient background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 gradient-aurora animate-gradient-shift opacity-80" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: [
              'linear-gradient(rgba(167,139,250,1) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(167,139,250,1) 1px, transparent 1px)',
            ].join(','),
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* ── Content ──
          pt-28 = 112 px → clears the 64 px fixed navbar with breathing room.
          pb-24 gives space above the FlowCanvas below.
          No flex centering: padding is the single source of truth for position.
      ── */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-24 md:pt-40 md:pb-28">
        <div className="max-w-3xl">

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <span
              className={cn(
                'inline-flex items-center gap-2 px-3 py-1.5 rounded-full',
                'text-xs font-medium font-body mb-6',
                'border border-w-primary/30 bg-w-primary/10 text-w-primary',
              )}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-w-primary animate-pulse" />
              Smart IT &amp; Automation Studio
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display font-semibold text-4xl sm:text-5xl md:text-[58px] lg:text-[64px] text-w-text leading-[1.1] tracking-[-0.025em] mb-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          >
            Modern IT + Automation{' '}
            <span className="gradient-text">that removes friction.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="font-body text-lg sm:text-xl text-w-muted leading-[1.65] max-w-2xl mb-8"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
          >
            We design reliable IT systems and automated workflows that help teams
            move faster with less manual work.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
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

      {/* ── Bottom fade into the FlowCanvas ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--w-bg))' }}
        aria-hidden="true"
      />
    </section>
  )
}
