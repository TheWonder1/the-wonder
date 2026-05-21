import { Linkedin, Github } from 'lucide-react'
import { NAV_LINKS } from '@/data/content'
import { cn } from '@/lib/utils'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-w-border bg-w-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/logos/wonder-icon-color.svg"
                alt=""
                aria-hidden="true"
                className="h-7 w-auto flex-shrink-0"
              />
              <span className="font-display font-semibold text-w-text text-base">The Wonder</span>
            </div>
            <p className="text-sm text-w-muted font-body leading-relaxed max-w-xs">
              Smart IT &amp; Automation Studio. We turn operational friction into reliable systems.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-w-muted mb-4">
              Navigate
            </p>
            <ul className="space-y-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      'text-sm text-w-muted hover:text-w-primary transition-colors font-body',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-primary rounded',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + socials */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-w-muted mb-4">
              Connect
            </p>
            <a
              href="mailto:hello@thewonder.studio"
              className="text-sm text-w-primary hover:underline font-body block mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-primary rounded"
            >
              hello@thewonder.studio
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'w-8 h-8 rounded-lg border border-w-border flex items-center justify-center',
                  'text-w-muted hover:text-w-primary hover:border-w-primary/50 transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-primary',
                )}
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'w-8 h-8 rounded-lg border border-w-border flex items-center justify-center',
                  'text-w-muted hover:text-w-primary hover:border-w-primary/50 transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-primary',
                )}
                aria-label="GitHub"
              >
                <Github size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-w-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-w-muted font-body">
            © {year} The Wonder Studio. All rights reserved.
          </p>
          <p className="text-xs text-w-muted font-body">
            Built on enterprise tools — designed for speed.
          </p>
        </div>
      </div>
    </footer>
  )
}
