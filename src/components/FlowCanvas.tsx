'use client'

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from 'react'
import FlowRail from './FlowRail'

interface FlowContextValue {
  scrollProgress: number
  containerRef: RefObject<HTMLDivElement>
}

const FlowContext = createContext<FlowContextValue>({
  scrollProgress: 0,
  containerRef: { current: null },
})

export const useFlowContext = () => useContext(FlowContext)

export default function FlowCanvas({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [dims, setDims] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // ── Measure container ────────────────────────────────────────────────────
    const measure = () => {
      setDims({ width: el.offsetWidth, height: el.offsetHeight })
    }

    const ro = new ResizeObserver(measure)
    ro.observe(el)
    measure()

    // ── Scroll progress ──────────────────────────────────────────────────────
    const computeProgress = () => {
      const rect = el.getBoundingClientRect()
      const scrolled = Math.max(0, -rect.top)
      const total = Math.max(1, rect.height - window.innerHeight)
      setScrollProgress(Math.min(1, scrolled / total))
    }

    window.addEventListener('scroll', computeProgress, { passive: true })

    // Re-compute when the tab becomes visible again.
    // This is the key fix for the "leave-and-return" glitch: the scroll
    // position reported by the browser can be stale after a tab switch.
    const onVisibility = () => {
      if (document.visibilityState === 'visible') computeProgress()
    }
    document.addEventListener('visibilitychange', onVisibility)

    // Initial calculation
    computeProgress()

    return () => {
      ro.disconnect()
      window.removeEventListener('scroll', computeProgress)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <FlowContext.Provider value={{ scrollProgress, containerRef }}>
      <div ref={containerRef} className="relative">
        <FlowRail
          width={dims.width}
          height={dims.height}
          progress={scrollProgress}
        />
        {children}
      </div>
    </FlowContext.Provider>
  )
}
