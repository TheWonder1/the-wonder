'use client'

interface FlowRailProps {
  width: number
  height: number
  progress: number
}

export default function FlowRail({ width, height, progress }: FlowRailProps) {
  // Render the static CSS track immediately (no flash) even before the
  // ResizeObserver has measured dimensions. The SVG progress layer only
  // appears once we have real dimensions.
  return (
    <>
      {/* ── Static dashed background track ── always present, pure CSS ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 2,
          height: '100%',
          // Dashed track using repeating-linear-gradient
          backgroundImage:
            'repeating-linear-gradient(to bottom, rgba(167,139,250,0.18) 0px, rgba(167,139,250,0.18) 6px, transparent 6px, transparent 14px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ── Animated SVG progress fill — only renders once measured ── */}
      {width > 0 && height > 0 && (
        <svg
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width,
            height,
            pointerEvents: 'none',
            zIndex: 1,
            overflow: 'visible',
          }}
        >
          <defs>
            <linearGradient
              id="railGradient"
              x1="0"
              y1="0"
              x2="0"
              y2={height}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%"   stopColor="#A78BFA" />
              <stop offset="60%"  stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.5" />
            </linearGradient>

            <filter id="railGlow" x="-400%" y="0%" width="900%" height="100%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Progress path — draws downward as the user scrolls */}
          <line
            x1={width / 2}
            y1="0"
            x2={width / 2}
            y2={height}
            stroke="url(#railGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={height}
            strokeDashoffset={height * (1 - progress)}
            filter="url(#railGlow)"
            style={{ transition: 'stroke-dashoffset 0.06s linear' }}
          />
        </svg>
      )}
    </>
  )
}
