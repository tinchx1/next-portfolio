'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect'
import { cn } from '@/lib/utils'

export const Approach = () => {
  const t = useTranslations('Approach')

  return (
    <section className="w-full py-20">
      <h1 className="heading">
        {t('heading.part1')} {' '}
        <span className="text-purple">{t('heading.part2')}</span>
      </h1>

      <div className="my-20 flex flex-col items-center justify-center gap-4 lg:flex-row">
        <Card
          title={t('cards.1.title')}
          icon={<PhaseLabel label={t('cards.1.button')} />}
          description={t('cards.1.description')}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>

        <Card
          title={t('cards.2.title')}
          icon={<PhaseLabel label={t('cards.2.button')} />}
          description={t('cards.2.description')}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249]
            ]}
            dotSize={2}
          />
        </Card>

        <Card
          title={t('cards.3.title')}
          icon={<PhaseLabel label={t('cards.3.button')} />}
          description={t('cards.3.description')}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  )
}

const PhaseLabel = ({ label }: { label: string }) => (
  <span className="rounded-lg border border-white/15 bg-black/40 px-7 py-3 text-sm font-medium text-white backdrop-blur-md">
    {label}
  </span>
)

type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
};

const Card = ({ title, description, icon, children }: CardProps) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      className="relative mx-auto flex h-[35rem] w-full max-w-sm cursor-pointer items-center justify-center rounded-3xl border border-black/[0.2] p-4 dark:border-white/[0.2]"
    >
      <Icon className="absolute -left-3 -top-3 z-30 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 z-30 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 z-30 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 z-30 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden rounded-3xl"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 z-20">
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center transition duration-200',
            hovered ? '-translate-y-4 opacity-0' : 'opacity-100'
          )}
        >
          {icon}
        </div>

        <div
          className={cn(
            'absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center transition duration-200',
            hovered ? '-translate-y-2 opacity-100' : 'opacity-0'
          )}
        >
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            {title}
          </h2>

          <p
            className="text-sm font-medium leading-relaxed"
            style={{ color: '#e4ecff' }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export const Icon = ({ className, ...props }: { className: string;[key: string]: unknown }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}
