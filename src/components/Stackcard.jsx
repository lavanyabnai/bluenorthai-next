import React from 'react'
import Gradient from './Gradient'
import Link from 'next/link'
// import { DarkMode, Gradient, LightMode } from '@/components/Icon'
import { Icon } from '@/components/Icon'



export function Stacklayout({ children }) {
  return (
    <div className="not-prose my-6 grid grid-cols-2 gap-6 lg:grid-cols-3">
      {children}
    </div>
  )
}

export function Stackcard({ title, description, href, icon }) {
  return (
    <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="absolute -inset-px rounded-xl border-2 border-sky-950" />

      <div className="relative overflow-hidden rounded-xl p-4">
        <h2 className="flex justify-center font-display text-base text-slate-900 dark:text-white">
          <Link href={href}>
            <span className="absolute -inset-px rounded-xl" />
            {title}
          </Link>
        </h2>
        <div className="flex justify-center">
          <p className="p-1 inline-block bg-gradient-blue bg-clip-text text-6xl font-bold text-slate-700 dark:text-transparent">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}