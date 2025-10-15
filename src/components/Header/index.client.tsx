'use client'
import { CMSLink } from '@/components/Link'
import Image from 'next/image'
import Link from 'next/link'

import type { Header } from 'src/payload-types'

import { cn } from '@/utilities/cn'
import { usePathname } from 'next/navigation'

type Props = {
  header: Header
}

export function HeaderClient({ header }: Props) {
  const menu = header.navItems || []
  const pathname = usePathname()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-neutral/30">
      <nav className="container mx-auto px-6 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <Link className="flex items-center group" href="/">
            <Image 
              src="/logo.svg" 
              alt="Logo" 
              width={40} 
              height={40}
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
            />
          </Link>

          {/* Wordmark - Center */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image 
              src="/wordmark.svg" 
              alt="Sonja Werner" 
              width={160} 
              height={40}
              className="h-8 md:h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Desktop Menu - Right */}
          {menu.length > 0 && (
            <ul className="hidden md:flex items-center gap-8">
              {menu.map((item) => (
                <li key={item.id}>
                  <CMSLink
                    {...item.link}
                    size={'clear'}
                    className={cn('relative text-brand-text hover:text-brand-dark font-medium transition-colors duration-300 text-sm', {
                      'text-brand-dark font-semibold': item.link.url && item.link.url !== '/' ? pathname.includes(item.link.url) : false,
                    })}
                    appearance="nav"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  )
}
