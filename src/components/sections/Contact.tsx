'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Copy, Check, Send, Loader2, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ── Set NEXT_PUBLIC_FORMSPREE_ID in .env.local (see .env.example) ──
   Sign up at formspree.io, create a form, paste the ID in .env.local.
   The form still shows a mock success locally when the variable is unset. */
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? ''
const EMAIL = 'hello@thewonder.studio'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface FormState {
  name: string
  email: string
  company: string
  message: string
}

const INITIAL: FormState = { name: '', email: '', company: '', message: '' }

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [copied, setCopied] = useState(false)

  const validate = (): boolean => {
    const next: Partial<FormState> = {}
    if (!form.name.trim())  next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Enter a valid email address'
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = 'Please write at least 10 characters'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((err) => ({ ...err, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')

    try {
      if (!FORMSPREE_ID) {
        await new Promise((r) => setTimeout(r, 1200))
        setStatus('success')
        setForm(INITIAL)
        return
      }

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm(INITIAL)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const inputBase = cn(
    'w-full px-4 py-2.5 rounded-xl bg-w-surface-2 border text-sm text-w-text font-body',
    'placeholder:text-w-muted/60 transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-primary focus-visible:border-transparent',
  )

  return (
    <div ref={ref} className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-w-muted font-body mb-2">
          Let's Talk
        </p>
        <h2 className="font-display font-semibold text-2xl md:text-3xl text-w-text tracking-tight">
          Start a Conversation
        </h2>
        <p className="mt-2 text-sm text-w-muted font-body leading-relaxed flex items-center gap-1.5">
          <Clock size={12} className="text-w-secondary" />
          We respond within 24 hours.
        </p>
      </div>

      {/* Email fallback */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
        className="flex flex-wrap items-center gap-3"
      >
        <a
          href={`mailto:${EMAIL}`}
          className={cn(
            'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium font-body',
            'border border-w-border hover:border-w-primary/50 text-w-text',
            'transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-primary',
          )}
        >
          <Mail size={13} />
          {EMAIL}
        </a>
        <button
          onClick={copyEmail}
          className={cn(
            'inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium font-body',
            'border border-w-border hover:border-w-primary/50 text-w-muted hover:text-w-primary',
            'transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-primary',
          )}
          aria-label="Copy email address"
        >
          {copied ? <Check size={12} className="text-w-secondary" /> : <Copy size={12} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        noValidate
        aria-label="Contact form"
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ delay: 0.1, duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
        className="space-y-4"
      >
        {/* Name + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-xs font-semibold text-w-muted font-body">
              Name <span className="text-w-primary" aria-hidden>*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className={cn(inputBase, errors.name ? 'border-red-500/60' : 'border-w-border')}
              aria-required="true"
              aria-describedby={errors.name ? 'name-error' : undefined}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p id="name-error" role="alert" className="text-xs text-red-400 font-body">
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-semibold text-w-muted font-body">
              Email <span className="text-w-primary" aria-hidden>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              className={cn(inputBase, errors.email ? 'border-red-500/60' : 'border-w-border')}
              aria-required="true"
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p id="email-error" role="alert" className="text-xs text-red-400 font-body">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Company */}
        <div className="space-y-1.5">
          <label htmlFor="company" className="text-xs font-semibold text-w-muted font-body">
            Company <span className="text-w-muted/50 font-normal">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className={cn(inputBase, 'border-w-border')}
          />
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-xs font-semibold text-w-muted font-body">
            Message <span className="text-w-primary" aria-hidden>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project or the problem you're trying to solve..."
            className={cn(
              inputBase,
              'resize-none',
              errors.message ? 'border-red-500/60' : 'border-w-border',
            )}
            aria-required="true"
            aria-describedby={errors.message ? 'message-error' : undefined}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p id="message-error" role="alert" className="text-xs text-red-400 font-body">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={cn(
            'w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl',
            'gradient-primary text-[#0B1220] font-semibold font-body text-sm',
            'btn-shimmer transition-opacity',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-primary focus-visible:ring-offset-2',
            status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90',
          )}
          aria-busy={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send size={14} />
              Send Message
            </>
          )}
        </button>

        {/* Status messages */}
        {status === 'success' && (
          <motion.p
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-center text-w-secondary font-body"
          >
            Message sent — we'll be in touch within 24 hours.
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            role="alert"
            aria-live="assertive"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-center text-red-400 font-body"
          >
            Something went wrong. Please email us directly at{' '}
            <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a>
          </motion.p>
        )}
      </motion.form>
    </div>
  )
}
