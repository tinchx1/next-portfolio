'use client'

import Image from 'next/image'

import { techStack } from '@/data'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

export const TechStackDisplay = ({ className }: { className?: string }) => {
  const t = useTranslations('data.gridItems.3.stack')

  return (
    <div
      className={cn(
        'z-10 mt-4 w-full min-w-0 sm:mt-5',
        className
      )}
    >
      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-3">
        {techStack.map(({ key, items }) => (
          <div key={key} className="min-w-0">
            <span className="mb-1.5 block text-[9px] font-medium uppercase tracking-wider text-[#c1c2d3]/55">
              {t(`categories.${key}`)}
            </span>
            <div
              className={cn(
                'gap-1.5',
                items.length <= 2
                  ? 'flex flex-wrap'
                  : 'grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4'
              )}
            >
              {items.map(({ name, icon }) => (
                <div
                  key={icon}
                  title={name}
                  className={cn(
                    'flex min-w-0 flex-col items-center gap-1 rounded-md border border-white/[0.06] bg-[#10132e]/90 px-1 py-1.5 transition-colors hover:border-purple/25 hover:bg-[#161a31]',
                    items.length <= 2 && 'min-w-[4.25rem] flex-1'
                  )}
                >
                  <Image
                    src={icon}
                    alt={name}
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] shrink-0 object-contain"
                  />
                  <span className="w-full text-center text-[8px] font-medium leading-tight text-[#c1c2d3] line-clamp-2 sm:text-[9px]">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
