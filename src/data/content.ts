// ============================================================
// The Wonder — site content constants
// ============================================================

export const NAV_LINKS = [
  { label: 'Home',         href: '#hero'         },
  { label: 'Services',     href: '#services'     },
  { label: 'Work',         href: '#work'         },
  { label: 'Process',      href: '#process'      },
  { label: 'About',        href: '#about'        },
  { label: 'Contact',      href: '#contact'      },
]

export const TRUST_BADGES = [
  'Microsoft 365',
  'Power Automate',
  'SharePoint',
  'ServiceNow',
  'Azure',
  'Endpoint Support',
]

export const SERVICES = [
  {
    id: 'it-support',
    icon: 'Monitor',
    title: 'IT Support & Device Readiness',
    oneliner: 'Fast, reliable support that keeps your team moving.',
    bullets: ['Zero-touch device provisioning', 'Proactive endpoint health monitoring'],
    cta: 'See how it works',
    color: 'primary' as const,
  },
  {
    id: 'workflow-auto',
    icon: 'Workflow',
    title: 'Workflow Automation',
    oneliner: 'Replace manual steps with smart, connected flows.',
    bullets: ['Approval & onboarding flows', 'Form-triggered automations'],
    cta: 'See how it works',
    color: 'secondary' as const,
  },
  {
    id: 'microsoft-365',
    icon: 'LayoutGrid',
    title: 'Microsoft 365 Solutions',
    oneliner: 'Unlock the full power of your M365 investment.',
    bullets: ['SharePoint intranets & portals', 'Teams governance & automation'],
    cta: 'See how it works',
    color: 'primary' as const,
  },
  {
    id: 'itsm',
    icon: 'Ticket',
    title: 'ITSM Optimization',
    oneliner: 'Streamline your ServiceNow instance for speed.',
    bullets: ['Catalog & fulfillment cleanup', 'SLA improvement strategies'],
    cta: 'See how it works',
    color: 'secondary' as const,
  },
  {
    id: 'reporting',
    icon: 'BarChart3',
    title: 'Reporting & Dashboards',
    oneliner: 'Turn operational data into visible, actionable insight.',
    bullets: ['Power BI & SharePoint reporting', 'Automated status dashboards'],
    cta: 'See how it works',
    color: 'primary' as const,
  },
  {
    id: 'ai-enablement',
    icon: 'Sparkles',
    title: 'AI Enablement',
    oneliner: 'Build Copilot-ready processes before the wave hits.',
    bullets: ['Knowledge base structuring', 'Prompt-friendly data architecture'],
    cta: 'See how it works',
    color: 'secondary' as const,
  },
]

export const OUTCOMES = [
  {
    stat: '3×',
    label: 'Faster Request Turnaround',
    desc: 'Automated intake and routing eliminates the bottleneck before it starts.',
  },
  {
    stat: '80%',
    label: 'Less Manual Approvals',
    desc: 'Rule-based flows handle routine decisions so people focus on exceptions.',
  },
  {
    stat: '100%',
    label: 'Standardized Processes',
    desc: 'Every workflow documented, tested, and repeatable from day one.',
  },
  {
    stat: '↑↑',
    label: 'Better Visibility & Reporting',
    desc: 'Real-time dashboards replace spreadsheets and status-update meetings.',
  },
]

export const CASES = [
  {
    id: 'onboarding',
    title: 'Employee Onboarding Automation',
    problem: 'Manual onboarding took 3+ days and missed steps regularly.',
    solution: 'Power Automate flow provisioned accounts, sent comms, and tracked completion.',
    result: 'Day-1 readiness improved from 40% to 95%.',
    tag: 'Power Automate',
  },
  {
    id: 'device-provisioning',
    title: 'Device Provisioning Workflow',
    problem: 'IT received requests via email with no tracking or SLA.',
    solution: 'SharePoint list + Intune enrollment triggers replaced the inbox.',
    result: 'Provisioning time cut from 4h to under 45 minutes.',
    tag: 'Intune + SharePoint',
  },
  {
    id: 'sharepoint-portal',
    title: 'SharePoint Request Intake Portal',
    problem: 'Teams submitted requests in five different channels, causing duplicate work.',
    solution: 'Centralized SharePoint portal with Power Automate routing to the right queue.',
    result: 'Duplicate requests dropped to near zero; CSAT up 28%.',
    tag: 'SharePoint',
  },
  {
    id: 'servicenow',
    title: 'ServiceNow Request Optimization',
    problem: 'Catalog bloat caused a 60% ticket misroute rate and constant reassignments.',
    solution: 'Catalog audit, retired unused items, rebuilt top-10 most-used items with guided forms.',
    result: 'Misroute rate fell to 12%; resolution time improved by 35%.',
    tag: 'ServiceNow',
  },
  {
    id: 'nps-automation',
    title: 'Feedback & NPS Automation',
    problem: 'Satisfaction surveys were sent manually and tracked in a shared spreadsheet.',
    solution: 'Automated trigger after ticket close → survey → Power BI aggregation.',
    result: 'Response rate tripled; leadership got weekly trends instead of monthly guesses.',
    tag: 'Power Automate + Power BI',
  },
  {
    id: 'knowledge-base',
    title: 'Knowledge Base & Self-Service Portal',
    problem: 'First-contact resolution was low because agents lacked accessible documentation.',
    solution: 'Structured SharePoint knowledge hub with search, tagging, and Copilot-ready articles.',
    result: 'Self-service deflection up 42%; new staff ramp time cut by half.',
    tag: 'SharePoint + Copilot',
  },
]

export const PROCESS_STEPS = [
  {
    id: 'discover',
    icon: 'Search',
    label: 'Discover',
    desc: 'We map your current state — interviews, process walks, and tool audits to find real friction.',
  },
  {
    id: 'design',
    icon: 'Pencil',
    label: 'Design',
    desc: 'Flow diagrams, wireframes, and logic specs reviewed with your team before any build.',
  },
  {
    id: 'automate',
    icon: 'Zap',
    label: 'Automate',
    desc: 'We build in sprints with clear checkpoints. You see working automation, not promises.',
  },
  {
    id: 'optimize',
    icon: 'TrendingUp',
    label: 'Optimize',
    desc: 'Post-launch monitoring, refinement, and documentation so outcomes last.',
  },
]

export const OPTIONAL_BRANCHES = [
  { id: 'security',  icon: 'ShieldCheck', label: 'Security Review'    },
  { id: 'docs',      icon: 'FileText',    label: 'Documentation'      },
  { id: 'training',  icon: 'GraduationCap', label: 'Training & Handover' },
]

export const TESTIMONIALS = [
  {
    quote:
      '"The Wonder mapped our entire onboarding process and automated it inside of three weeks. The clarity and execution speed were unlike anything we had seen from a typical IT vendor."',
    name: 'Sarah K.',
    role: 'IT Manager',
    company: 'SaaS Company, 400 staff',
    initials: 'SK',
  },
  {
    quote:
      '"We finally have a ServiceNow catalog that people actually use. Clean forms, the right routing, no more calls asking where to submit things. Exactly what we needed."',
    name: 'James T.',
    role: 'Operations Lead',
    company: 'Financial Services, 1,200 staff',
    initials: 'JT',
  },
  {
    quote:
      '"What surprised me most was the documentation. Everything was handed over in a state we could maintain ourselves, and the training meant our team was genuinely self-sufficient."',
    name: 'Priya M.',
    role: 'Project Owner',
    company: 'Professional Services, 250 staff',
    initials: 'PM',
  },
]

export const FLOW_MINI_NODES = [
  { label: 'Intake',   color: '#A78BFA' },
  { label: 'Automate', color: '#22D3EE' },
  { label: 'Deliver',  color: '#A78BFA' },
  { label: 'Optimize', color: '#22D3EE' },
]

export const NODE_SECTIONS = [
  { id: 'trust',        icon: 'Shield',     label: 'Trust'        },
  { id: 'services',     icon: 'Zap',        label: 'Services'     },
  { id: 'outcomes',     icon: 'TrendingUp', label: 'Outcomes'     },
  { id: 'work',         icon: 'Briefcase',  label: 'Work'         },
  { id: 'process',      icon: 'GitBranch',  label: 'Process'      },
  { id: 'about',        icon: 'Info',       label: 'About'        },
  { id: 'testimonials', icon: 'MessageSquare', label: 'Testimonials' },
  { id: 'contact',      icon: 'Mail',       label: 'Contact'      },
]
