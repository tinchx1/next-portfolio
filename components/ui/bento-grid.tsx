'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { IoCopyOutline } from 'react-icons/io5'
import dynamic from 'next/dynamic'

import { links } from '@/config'
import { TechStackDisplay } from '@/components/tech-stack-display'
import animationData from '@/data/confetti.json'
import { cn } from '@/lib/utils'

import { useTranslations } from 'next-intl'

import { BackgroundGradientAnimation } from './background-gradient-animation'
import { MagicButton } from './magic-button'

import { GridGlobe } from '../grid-globe'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export const BentoGrid = ({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-5',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  id,
  className,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  id: number;
  className?: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const t = useTranslations('data.gridItems')
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(links.ownerEmail)
    setCopied(true)
  }

  useEffect(() => {
    if (!copied) return

    const copyTimeout = setTimeout(() => {
      setCopied(false)
    }, 3500)

    return () => clearTimeout(copyTimeout)
  }, [copied])

  return (
    <div
      className={cn(
        'group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none',
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)'
      }}
    >
      <div className={cn('h-full', id === 6 && 'flex justify-center')}>
        <div className="absolute h-full w-full">
          {img && (
            <Image
              width={689}
              height={541}
              src={img}
              alt={img}
              className={cn('object-cover object-center', imgClassName)}
            />
          )}
        </div>

        <div
          className={cn(
            'absolute right-0 -mb-5',
            id === 5 && 'w-full opacity-80'
          )}
        >
          {spareImg && (
            <Image
              width={208}
              height={96}
              src={spareImg}
              alt={spareImg}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>

        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            'relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10',
            id === 3 && 'justify-start',
            titleClassName
          )}
        >
          <div
            className={cn(
              'z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base',
              id === 3 && 'mb-1 shrink-0'
            )}
          >
            {t(`${id}.description`)}
          </div>

          <div
            className={cn(
              'z-10 font-sans text-lg font-bold lg:text-3xl',
              id === 3 ? 'mb-3 max-w-full shrink-0 lg:mb-4' : 'max-w-96'
            )}
          >
            {t(`${id}.title`)}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && <TechStackDisplay className="flex-1" />}

          {id === 6 && (
            <div className="group relative mt-5">
              <button
                tabIndex={-1}
                className="pointer-events-none absolute -bottom-5 right-0 cursor-default"
              >
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                  rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                />
              </button>

              <MagicButton
                title={copied ? 'Email copiado!' : 'Copiar mi email'}
                icon={<IoCopyOutline />}
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
                asChild
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
