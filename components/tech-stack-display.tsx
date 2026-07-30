'use client'

import Image from 'next/image'

import { techStack } from '@/data'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

export const TechStackDisplay = ({ className }: { className?: string }) => {
  const t = useTranslations('data.gridItems.3.stack')

  return (
    <div className={cn('z-10 mt-3 w-full min-w-0 sm:mt-4', className)}>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4">
        {techStack.map(({ key, items }) => (
          <div
            key={key}
            className={cn(
              'min-w-0',
              (key === 'frontend' || key === 'backend') && 'sm:col-span-2'
            )}
          >
            <span className="mb-2 block text-[9px] font-medium uppercase tracking-wider text-[#c1c2d3]/55 sm:text-[10px]">
              {t(`categories.${key}`)}
            </span>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2.5 sm:gap-x-3 sm:gap-y-3">
              {items.map(({ name, icon }) => (
                <Image
                  key={icon}
                  src={icon}
                  alt={name}
                  title={name}
                  width={36}
                  height={36}
                  className="h-8 w-8 shrink-0 object-contain opacity-85 transition-opacity hover:opacity-100 sm:h-9 sm:w-9"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
