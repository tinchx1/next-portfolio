import Link from 'next/link'
import { FaLocationArrow } from 'react-icons/fa6'

import { Spotlight } from '@/components/ui/spotlight'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { MagicButton } from '@/components/ui/magic-button'
import { links } from '@/config'
import { useTranslations } from 'next-intl'

export const Hero = () => {
  const t = useTranslations('Hero')

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            {t('title')}
          </h2>

          <TextGenerateEffect
            key={t('subtitle')}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words={t('subtitle')}
          />
          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl flex items-center justify-center">
            {t('greeting', { ownerName: links.ownerName })} <img className='pl-2' src="/arg.svg" alt={t('argentinaAlt')} width={36} height={36} />
          </p>
          <Link href="https://www.linkedin.com/in/martin-marchionni-16104127a/" className="md:mt-10">
            <MagicButton
              title={t('contact')}
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
