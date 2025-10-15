import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export default function Checkout() {
  // Temporarily disabled to avoid Payload CMS dependency during build
  // TODO: Re-enable when PAYLOAD_SECRET is configured in Vercel
  notFound()
}

export const metadata: Metadata = {
  description: 'Checkout.',
  openGraph: mergeOpenGraph({
    title: 'Checkout',
    url: '/checkout',
  }),
  title: 'Checkout',
}
