import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'

import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  // Temporarily disabled to avoid Payload CMS dependency during build
  // TODO: Re-enable when PAYLOAD_SECRET is configured in Vercel
  return []
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params }: Args) {
  const { slug = 'home' } = await params
  
  // Temporarily disable CMS queries to avoid build errors
  // TODO: Re-enable when PAYLOAD_SECRET is configured
  if (slug === 'home') {
    // Redirect to the main homepage
    return notFound()
  }

  // For other pages, show not found until CMS is configured
  return notFound()
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug = 'home' } = await params
  
  // Temporarily disabled to avoid CMS dependency
  return {
    title: `Page - ${slug}`,
    description: 'Page description',
  }
}

const queryPageBySlug = async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        ...(draft ? [] : [{ _status: { equals: 'published' } }]),
      ],
    },
  })

  return result.docs?.[0] || null
}
