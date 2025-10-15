import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default function ConfirmOrderPage({
  searchParams: searchParamsPromise,
}: {
  searchParams: SearchParams
}) {
  // Temporarily disabled to avoid Payload CMS dependency during build
  // TODO: Re-enable when PAYLOAD_SECRET is configured in Vercel
  notFound()
}

export const metadata: Metadata = {
  description: 'Confirm order.',
  openGraph: mergeOpenGraph({
    title: 'Confirming order',
    url: '/checkout/confirm-order',
  }),
  title: 'Confirming order',
}
