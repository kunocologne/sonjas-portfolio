export const maxDuration = 60

export async function POST(): Promise<Response> {
  // Temporarily disabled to avoid Payload CMS dependency during build
  // TODO: Re-enable when PAYLOAD_SECRET is configured in Vercel
  return new Response('Seed endpoint is temporarily disabled', { status: 503 })
}
