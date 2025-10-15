import { HeaderClient } from './index.client'
import './index.css'

export async function Header() {
  // Temporarily use static header data to avoid Payload CMS dependency
  // TODO: Re-enable when PAYLOAD_SECRET is configured in Vercel
  const header = {
    id: 1,
    navItems: [],
  }

  return <HeaderClient header={header} />
}
