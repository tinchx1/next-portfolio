'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect'
import { MagicButton } from '@/components/ui/magic-button'

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
          icon={<MagicButton title={t('cards.1.button')} asChild />}
          description={t('cards.1.description')}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>

        <Card
          title={t('cards.2.title')}
          icon={<MagicButton title={t('cards.2.button')} asChild />}
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
          icon={<MagicButton title={t('cards.3.button')} asChild />}
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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex w-full max-w-sm items-center justify-center rounded-3xl border border-black/[0.2] p-4 dark:border-white/[0.2] lg:h-[35rem]"
    >
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute left-[50%] top-[50%] mx-auto flex w-full -translate-x-[50%] -translate-y-[50%] items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>

        <h2 className="relative z-10 mt-4 text-3xl font-bold text-black opacity-0 transition  duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white">
          {title}
        </h2>

        <p
          className="relative z-10 mt-4 text-sm font-bold text-black opacity-0 transition  duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white"
          style={{
            color: '#e4ecff'
          }}
        >
          {description}
        </p>
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
