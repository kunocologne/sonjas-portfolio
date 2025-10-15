import { notFound } from 'next/navigation'

export const metadata = {
  description: 'Search for products in the store.',
  title: 'Shop',
}

export default function ShopPage() {
  // Temporarily disabled to avoid Payload CMS dependency during build
  // TODO: Re-enable when PAYLOAD_SECRET is configured in Vercel
  notFound()
}
