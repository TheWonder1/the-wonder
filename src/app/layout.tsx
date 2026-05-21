import type { Metadata } from 'next'
import { Space_Grotesk, Manrope } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Wonder — Smart IT & Automation Studio',
  description:
    'We design reliable IT systems and automated workflows that help teams move faster with less manual work. Enterprise-grade automation, Microsoft 365, ServiceNow, and AI enablement.',
  keywords: ['IT automation', 'workflow automation', 'Microsoft 365', 'SharePoint', 'ServiceNow', 'Power Automate'],
  openGraph: {
    title: 'The Wonder — Smart IT & Automation Studio',
    description: 'Modern IT + Automation that removes friction.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${manrope.variable}`}
    >
      <head>
        {/* Prevent theme flash — sets dark class before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('wonder-theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(s===null&&d)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
