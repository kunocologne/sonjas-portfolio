export async function GET(req: Request): Promise<Response> {
  // Temporarily disabled to avoid Payload CMS dependency during build
  // TODO: Re-enable when PAYLOAD_SECRET is configured in Vercel
  return new Response('Preview mode is temporarily disabled', { status: 503 })
}
