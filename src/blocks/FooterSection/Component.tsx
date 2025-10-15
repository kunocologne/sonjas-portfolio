import type { FooterSectionBlock as FooterSectionProps } from '@/payload-types'
import { cn } from '@/utilities/cn'
import React from 'react'
import Link from 'next/link'

export const FooterSectionBlock: React.FC<
  FooterSectionProps & {
    id?: string | number
    className?: string
  }
> = ({ className, copyrightText, links }) => {
  return (
    <footer className={cn('bg-brand-neutral text-center text-sm text-brand-text/80 py-8', className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <span>{copyrightText}</span>
          {links && links.length > 0 && (
            <>
              {links.map((link, index) => (
                <React.Fragment key={index}>
                  <span className="hidden sm:inline text-brand-text/40">·</span>
                  <Link
                    href={link.url || '#'}
                    className="hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </React.Fragment>
              ))}
            </>
          )}
        </div>
      </div>
    </footer>
  )
}

