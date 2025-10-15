import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

export default function AddressesPage() {
  // Temporarily disabled to avoid Payload CMS dependency during build
  // TODO: Re-enable when PAYLOAD_SECRET is configured in Vercel
  notFound()
}

export const metadata: Metadata = {
  description: 'Manage your addresses.',
  openGraph: mergeOpenGraph({
    title: 'Addresses',
    url: '/account/addresses',
  }),
  title: 'Addresses',
}
