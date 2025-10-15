'use client'
import Image from 'next/image'
import Link from 'next/link'

import type { Header } from 'src/payload-types'

type Props = {
  header: Header
}

export function HeaderClient({ header }: Props) {

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-neutral/30">
      <nav className="container mx-auto px-6 lg:px-16 py-4">
        <div className="flex items-center justify-center">
          {/* Orange Wordmark Only */}
          <Link href="/" className="flex justify-center">
            <Image 
              src="/orange_word.svg" 
              alt="Sonja Werner" 
              width={200} 
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </nav>
    </div>
  )
}
