'use client'
import Image from 'next/image'
import Link from 'next/link'

import type { Header } from 'src/payload-types'

type Props = {
  header: Header
}

export function HeaderClient({ header: _header }: Props) {

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-neutral/30">
      <nav className="container mx-auto px-6 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Orange Wordmark - Left */}
          <Link href="/" className="flex justify-center">
            <Image 
              src="/orange_word.svg" 
              alt="Sonja Werner" 
              width={200} 
              height={40}
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Contact Button - Right */}
          <Link
            href="mailto:kontakt.sonja.werner@outlook.de"
            className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-brand-dark hover:bg-brand-orange text-white rounded-full font-semibold text-sm md:text-base transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="hidden sm:inline">Kontakt</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
