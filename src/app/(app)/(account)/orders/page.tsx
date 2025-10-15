import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

export default function Orders() {
  // Temporarily disabled to avoid Payload CMS dependency during build
  // TODO: Re-enable when PAYLOAD_SECRET is configured in Vercel
  notFound()
}

export const metadata: Metadata = {
  description: 'Your orders.',
  openGraph: mergeOpenGraph({
    title: 'Orders',
    url: '/orders',
  }),
  title: 'Orders',
}
