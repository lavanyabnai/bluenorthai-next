import clsx from 'clsx'

import { Icon } from '@/components/Icon'

export function Kpilayout({ children }) {
  return (
    <div className="my-8 grid grid-cols-2 gap-4 ">
      {children}
    </div>
  )
}

export function Kpicard({ title, description, href, icon }) {
  return (
    <div className="rounded-xl bg-sky-50 p-6 lg:grid-cols-3 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10 ">
      <div className="flex overflow-hidden rounded-xl">
        <Icon icon={icon} className="h-10 w-10" />
        <p className="m-0 font-display text-xl text-sky-900 dark:text-sky-400">
          {title}
        </p>
      </div>
      <div className="mt-2.5 text-sky-800 dark:text-slate-300 ">
        {description}
      </div>
    </div>
  )
}
