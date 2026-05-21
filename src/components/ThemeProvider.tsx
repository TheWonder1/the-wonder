'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggle: () => {},
})

/**
 * Reads the theme that the anti-FOUC inline script already applied to <html>.
 * Safe to call on client; falls back to 'dark' on server (SSR pass).
 */
function readCurrentTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Lazy initialiser: reads the real HTML class set by the inline script.
  // Eliminates the flash caused by starting with a hardcoded 'dark' default
  // when the user actually prefers light (or vice-versa).
  const [theme, setTheme] = useState<Theme>(readCurrentTheme)

  // Keep state in sync if the system preference changes while the page is open.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if the user hasn't stored a manual preference.
      if (!localStorage.getItem('wonder-theme')) {
        const next: Theme = e.matches ? 'dark' : 'light'
        setTheme(next)
        document.documentElement.classList.toggle('dark', next === 'dark')
      }
    }

    mq.addEventListener('change', handleChange)
    return () => mq.removeEventListener('change', handleChange)
  }, [])

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem('wonder-theme', next)
      document.documentElement.classList.toggle('dark', next === 'dark')
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
