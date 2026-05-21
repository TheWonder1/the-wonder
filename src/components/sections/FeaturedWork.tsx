'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { CASES } from '@/data/content'
import Modal from '../Modal'
import { cn } from '@/lib/utils'

function CaseCard({
  c,
  index,
  parentInView,
  onClick,
}: {
  c: typeof CASES[number]
  index: number
  parentInView: boolean
  onClick: () => void
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={parentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ delay: index * 0.08, duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
      className="card-base p-5 space-y-3 cursor-pointer group"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick() }}
      aria-label={`View case: ${c.title}`}
    >
      {/* Tag */}
      <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-wider font-body text-w-muted border border-w-border rounded-full px-2.5 py-0.5">
        {c.tag}
      </span>

      <h3 className="font-display font-semibold text-sm text-w-text group-hover:text-w-primary transition-colors duration-200">
        {c.title}
      </h3>

      <div className="space-y-1.5 text-xs font-body">
        <p className="text-w-muted"><span className="font-semibold text-w-muted/70">Problem — </span>{c.problem}</p>
        <p className="text-w-muted"><span className="font-semibold text-w-muted/70">Solution — </span>{c.solution}</p>
        <p className="text-w-secondary font-medium"><span className="font-semibold">Result — </span>{c.result}</p>
      </div>

      <div className="flex items-center gap-1.5 text-xs font-semibold text-w-primary font-body group-hover:gap-2.5 transition-all duration-200">
        View details <ArrowRight size={11} />
      </div>
    </motion.article>
  )
}

export default function FeaturedWork() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [activeCase, setActiveCase] = useState<typeof CASES[number] | null>(null)
  const [allOpen, setAllOpen] = useState(false)

  return (
    <div ref={ref} className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-w-muted font-body mb-2">
            Case Studies
          </p>
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-w-text tracking-tight">
            Featured Work
          </h2>
        </div>
        <button
          onClick={() => setAllOpen(true)}
          className={cn(
            'flex-shrink-0 flex items-center gap-1.5 text-xs font-semibold font-body',
            'text-w-muted hover:text-w-primary transition-colors duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-primary rounded',
          )}
        >
          View all <ExternalLink size={11} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CASES.slice(0, 4).map((c, i) => (
          <CaseCard
            key={c.id}
            c={c}
            index={i}
            parentInView={inView}
            onClick={() => setActiveCase(c)}
          />
        ))}
      </div>

      {/* Case detail modal */}
      <Modal
        open={!!activeCase}
        onClose={() => setActiveCase(null)}
        title={activeCase?.title ?? ''}
      >
        {activeCase && (
          <div className="space-y-4">
            <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-wider font-body text-w-muted border border-w-border rounded-full px-2.5 py-0.5">
              {activeCase.tag}
            </span>
            <div className="space-y-3 text-sm font-body">
              <div className="space-y-1">
                <p className="font-semibold text-w-text">Problem</p>
                <p className="text-w-muted">{activeCase.problem}</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-w-text">Solution</p>
                <p className="text-w-muted">{activeCase.solution}</p>
              </div>
              <div className="space-y-1 p-3 rounded-xl bg-w-surface-2 border border-w-border">
                <p className="font-semibold text-w-secondary">Result</p>
                <p className="text-w-text">{activeCase.result}</p>
              </div>
            </div>
            <button
              onClick={() => { setActiveCase(null); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="w-full mt-2 px-4 py-2.5 rounded-xl gradient-primary text-[#0B1220] font-semibold font-body text-sm btn-shimmer"
            >
              Discuss a Similar Project
            </button>
          </div>
        )}
      </Modal>

      {/* View all capabilities modal */}
      <Modal
        open={allOpen}
        onClose={() => setAllOpen(false)}
        title="All Capabilities"
        maxWidth="max-w-2xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CASES.map((c) => (
            <button
              key={c.id}
              onClick={() => { setAllOpen(false); setActiveCase(c) }}
              className="text-left card-base p-4 space-y-1.5 hover:border-w-primary/40 transition-all"
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider text-w-muted font-body">
                {c.tag}
              </span>
              <p className="text-sm font-semibold text-w-text font-display">{c.title}</p>
              <p className="text-xs text-w-secondary font-body">{c.result}</p>
            </button>
          ))}
        </div>
      </Modal>
    </div>
  )
}
