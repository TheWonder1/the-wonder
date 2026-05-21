'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import FlowCanvas from '@/components/FlowCanvas'
import FlowNodeSection from '@/components/FlowNodeSection'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import Modal from '@/components/Modal'

import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import Services from '@/components/sections/Services'
import Outcomes from '@/components/sections/Outcomes'
import FeaturedWork from '@/components/sections/FeaturedWork'
import Process from '@/components/sections/Process'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

import { FileDown, ExternalLink } from 'lucide-react'

export default function Page() {
  const [deckOpen, setDeckOpen] = useState(false)

  return (
    <>
      <Navbar onCapabilityDeck={() => setDeckOpen(true)} />

      {/* ── Hero — outside the alternating flow, full-width ── */}
      <Hero />

      {/* ── FlowCanvas — all flow nodes from Trust Strip onwards ── */}
      <FlowCanvas>
        {/* Node 2 — Trust Strip */}
        <FlowNodeSection
          id="trust"
          index={0}
          icon="Shield"
          label="Trust"
          fullWidth
        >
          <TrustStrip />
        </FlowNodeSection>

        {/* Node 3 — Services */}
        <FlowNodeSection
          id="services"
          index={1}
          icon="Zap"
          label="Services"
        >
          <Services />
        </FlowNodeSection>

        {/* Node 4 — Outcomes */}
        <FlowNodeSection
          id="outcomes"
          index={2}
          icon="TrendingUp"
          label="Outcomes"
        >
          <Outcomes />
        </FlowNodeSection>

        {/* Node 5 — Featured Work */}
        <FlowNodeSection
          id="work"
          index={3}
          icon="Briefcase"
          label="Work"
        >
          <FeaturedWork />
        </FlowNodeSection>

        {/* Node 6 — Process (full-width for the workflow map) */}
        <FlowNodeSection
          id="process"
          index={4}
          icon="GitBranch"
          label="Process"
          fullWidth
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <Process />
          </div>
        </FlowNodeSection>

        {/* Node 7 — About */}
        <FlowNodeSection
          id="about"
          index={5}
          icon="Info"
          label="About"
        >
          <About />
        </FlowNodeSection>

        {/* Node 8 — Testimonials */}
        <FlowNodeSection
          id="testimonials"
          index={6}
          icon="MessageSquare"
          label="Testimonials"
        >
          <Testimonials />
        </FlowNodeSection>

        {/* Node 9 — Contact */}
        <FlowNodeSection
          id="contact"
          index={7}
          icon="Mail"
          label="Contact"
        >
          <Contact />
        </FlowNodeSection>
      </FlowCanvas>

      <Footer />
      <BackToTop />

      {/* Capability Deck modal */}
      <Modal
        open={deckOpen}
        onClose={() => setDeckOpen(false)}
        title="Capability Deck"
      >
        <div className="space-y-5">
          <p className="text-sm text-w-muted font-body leading-relaxed">
            Our capability deck covers service scope, engagement models, case studies,
            and how we approach automation projects from discovery to delivery.
          </p>

          <div className="p-4 rounded-xl bg-w-surface-2 border border-w-border space-y-2">
            <p className="text-xs font-semibold text-w-muted font-body uppercase tracking-wide">
              What's inside
            </p>
            <ul className="space-y-1.5">
              {[
                'Service definitions & scope',
                'Engagement and delivery model',
                'Platform expertise summary',
                'Case study highlights',
                'How to start a project',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-w-muted font-body">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-w-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="/capability-deck.pdf"
              download
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl gradient-primary text-[#0B1220] font-semibold font-body text-sm btn-shimmer hover:opacity-90 transition-opacity"
              aria-label="Download capability deck PDF"
            >
              <FileDown size={14} />
              Download PDF
            </a>
            <button
              onClick={() => {
                setDeckOpen(false)
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-w-border text-sm font-medium text-w-muted hover:text-w-primary hover:border-w-primary/40 font-body transition-all"
            >
              <ExternalLink size={13} />
              Request a custom walkthrough
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}
