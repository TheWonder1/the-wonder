'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, Download } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { NAV_LINKS } from '@/data/content'
import { cn } from '@/lib/utils'

interface NavbarProps {
  onCapabilityDeck: () => void
}

export default function Navbar({ onCapabilityDeck }: NavbarProps) {
  const { theme, toggle } = useTheme()
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scrollspy — track which section is in view
  useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.href.replace('#', ''))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Navbar background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? theme === 'dark' ? 'glass-dark' : 'glass-light'
            : 'bg-transparent',
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-primary rounded-md"
            aria-label="The Wonder — home"
          >
            <img
              src="/logos/wonder-icon-color.svg"
              alt=""
              aria-hidden="true"
              className="h-7 w-auto flex-shrink-0"
            />
            <span className="font-display font-semibold text-w-text text-base tracking-tight">
              The Wonder
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className={cn(
                      'relative px-3 py-1.5 rounded-md text-sm font-body font-medium transition-all duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-primary',
                      isActive
                        ? 'text-w-primary bg-w-primary/10'
                        : 'text-w-muted hover:text-w-text hover:bg-w-surface-2',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onCapabilityDeck}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-body font-medium',
                'text-w-muted border border-w-border hover:border-w-primary/50 hover:text-w-primary',
                'transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-primary',
              )}
              aria-label="Download capability deck"
            >
              <Download size={14} />
              <span>Deck</span>
            </button>

            {/* Dark / Light toggle */}
            <button
              onClick={toggle}
              className={cn(
                'w-8 h-8 rounded-md flex items-center justify-center',
                'text-w-muted hover:text-w-primary hover:bg-w-surface-2',
                'transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-primary',
              )}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
              className={cn(
                'px-4 py-1.5 rounded-lg text-sm font-body font-semibold',
                'gradient-primary text-[#0B1220] btn-shimmer',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-primary',
                'transition-all duration-200 hover:opacity-90',
              )}
            >
              Start a Project
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggle}
              className="w-8 h-8 rounded-md flex items-center justify-center text-w-muted hover:text-w-primary transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-8 h-8 rounded-md flex items-center justify-center text-w-muted hover:text-w-primary transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={cn(
              'fixed top-16 left-0 right-0 z-40 p-4',
              theme === 'dark' ? 'glass-dark' : 'glass-light',
            )}
          >
            <ul className="flex flex-col gap-1" role="list">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                      className={cn(
                        'block px-4 py-2.5 rounded-lg text-sm font-medium font-body transition-all',
                        isActive
                          ? 'text-w-primary bg-w-primary/10'
                          : 'text-w-muted hover:text-w-text hover:bg-w-surface-2',
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
            <div className="mt-3 pt-3 border-t border-w-border flex flex-col gap-2">
              <button
                onClick={() => { setMobileOpen(false); onCapabilityDeck() }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-w-muted hover:text-w-primary hover:bg-w-surface-2 transition-all"
              >
                <Download size={14} />
                Download Capability Deck
              </button>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
                className="px-4 py-2.5 rounded-lg text-sm font-semibold text-center gradient-primary text-[#0B1220] transition-opacity hover:opacity-90"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
