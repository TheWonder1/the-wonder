'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  maxWidth?: string
}

export default function Modal({
  open,
  onClose,
  title,
  children,
  maxWidth = 'max-w-xl',
}: ModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  // Focus trap and keyboard close
  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            className={cn(
              'relative w-full rounded-2xl bg-w-surface border border-w-border',
              'shadow-elev-3 p-6 md:p-8 z-10',
              maxWidth,
            )}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.24, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-5">
              <h2
                id="modal-title"
                className="font-display font-semibold text-xl text-w-text"
              >
                {title}
              </h2>
              <button
                ref={closeRef}
                onClick={onClose}
                className={cn(
                  'w-8 h-8 rounded-lg flex items-center justify-center',
                  'text-w-muted hover:text-w-text hover:bg-w-surface-2',
                  'transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-primary',
                )}
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
