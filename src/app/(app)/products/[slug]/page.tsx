import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default function ProductPage() {
  // Temporarily disabled to avoid Payload CMS dependency during build
  // TODO: Re-enable when PAYLOAD_SECRET is configured in Vercel
  notFound()
}
