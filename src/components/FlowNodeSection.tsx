'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import {
  Shield, Zap, TrendingUp, Briefcase, GitBranch,
  Info, MessageSquare, Mail, type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, LucideIcon> = {
  Shield, Zap, TrendingUp, Briefcase, GitBranch,
  Info, MessageSquare, Mail,
}

interface FlowNodeSectionProps {
  id: string
  index: number          // 0-based; determines left/right alternation
  icon: string           // lucide icon name
  label: string
  children: React.ReactNode
  className?: string
  fullWidth?: boolean    // opt-out of alternating layout (e.g. trust strip)
}

export default function FlowNodeSection({
  id,
  index,
  icon,
  label,
  children,
  className,
  fullWidth = false,
}: FlowNodeSectionProps) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: false })
  const Icon = ICON_MAP[icon] ?? Zap

  // Even index → card on RIGHT side; Odd index → card on LEFT side
  const isRight = index % 2 === 0

  return (
    <section id={id} ref={ref} className={cn('relative py-12 md:py-20', className)}>
      {/* ── Node circle on the center rail ── */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-8 md:top-12 z-20"
        aria-hidden="true"
      >
        {/* Pulse ring — animates when active */}
        {inView && (
          <span className="absolute inset-0 rounded-full animate-pulse-ring bg-w-primary/40 scale-100" />
        )}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.2, 0.7, 0.2, 1] }}
          className={cn(
            'relative w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center',
            'border-2 transition-all duration-300',
            inView
              ? 'border-w-primary bg-w-surface shadow-node-active'
              : 'border-w-border bg-w-surface-2',
          )}
          title={label}
          aria-label={`Section: ${label}`}
        >
          <Icon
            size={18}
            className={cn(
              'transition-colors duration-300',
              inView ? 'text-w-primary' : 'text-w-muted',
            )}
          />
        </motion.div>
      </div>

      {/* ── Content area ── */}
      {fullWidth ? (
        /* Full-width mode: no alternation */
        <div className="mt-16 md:mt-24">{children}</div>
      ) : (
        /* Alternating two-column mode */
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 md:mt-28">
            {isRight ? (
              <>
                {/* Left slot — empty spacer on desktop */}
                <div className="hidden md:block" />
                {/* Right slot — card */}
                <motion.div
                  initial={{ opacity: 0, x: 32 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 32 }}
                  transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1], delay: 0.1 }}
                >
                  {children}
                </motion.div>
              </>
            ) : (
              <>
                {/* Left slot — card */}
                <motion.div
                  initial={{ opacity: 0, x: -32 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -32 }}
                  transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1], delay: 0.1 }}
                >
                  {children}
                </motion.div>
                {/* Right slot — empty spacer on desktop */}
                <div className="hidden md:block" />
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
