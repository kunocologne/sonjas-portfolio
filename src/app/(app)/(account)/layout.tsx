import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'

export default function RootLayout({ children }: { children: ReactNode }) {
  // Temporarily disabled to avoid Payload CMS dependency during build
  // TODO: Re-enable when PAYLOAD_SECRET is configured in Vercel
  notFound()
}
