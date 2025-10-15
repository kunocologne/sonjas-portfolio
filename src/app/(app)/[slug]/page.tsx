import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params }: Args) {
  const { slug = 'home' } = await params
  
  // Temporarily disable CMS queries to avoid build errors
  // TODO: Re-enable when PAYLOAD_SECRET is configured
  notFound()
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug = 'home' } = await params
  
  // Temporarily disabled to avoid CMS dependency
  return {
    title: `Page - ${slug}`,
    description: 'Page description',
  }
}
