'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { type Link as Links } from '@/types'

export function ResponsiveLayoutComponent({
  links,
  children,
}: {
  links: Links[]
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen flex-col lg:flex-row">
      {/* Sidebar for lg screens and above */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:border-r">
        <div className="flex h-16 items-center justify-center border-b">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
        <nav className="flex flex-1 flex-col p-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                'mb-2 flex items-center rounded-lg p-2 text-sm font-medium',
                {
                  'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100':
                    pathname === href,
                  'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100':
                    pathname !== href,
                },
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto p-4 pb-16 lg:pb-4">
        {children}
      </main>

      {/* Bottom tab bar for screens smaller than lg */}
      <nav className="fixed bottom-0 left-0 right-0 border-t bg-white lg:hidden">
        <ul className="flex justify-around">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={clsx('flex flex-col items-center p-2 text-xs', {
                  'bg-blue-500 text-white': pathname === href,
                  'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100':
                    pathname !== href,
                })}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
