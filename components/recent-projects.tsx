import Image from 'next/image'
import Link from 'next/link'
import { FaLocationArrow } from 'react-icons/fa6'

import { projects } from '@/data'
import { useTranslations } from 'next-intl'

import { PinContainer } from './ui/3d-pin'

export const RecentProjects = () => {
  const tHeading = useTranslations('RecentProjects')
  const t = useTranslations('data.projects')

  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        {tHeading('heading.part1')}{' '}
        <span className="text-purple">
          {tHeading('heading.part2')}
        </span>
      </h1>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(
          ({ id, iconLists, img, link, sourceCode }) => (
            <div
              key={id}
              className="flex h-[32rem] w-[90vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
            >
              <PinContainer title="Visit" href={link}>
                <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                  <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                    <Image
                      height={330}
                      width={552}
                      src="/bg.png"
                      alt="bg-img"
                    />
                  </div>

                  <Image
                    height={300}
                    width={464}
                    src={img}
                    alt={t(`${id}.title`)}
                    className="absolute bottom-0 z-10"
                  />
                </div>

                <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                  {t(`${id}.title`)}
                </h1>

                <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                  {t(`${id}.description`)}
                </p>

                <div className="mb-3 mt-7 flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.map((icon, i) => (
                      <div
                        key={icon}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{
                          transform: `translateX(-${5 * i * 2}px)`
                        }}
                      >
                        <Image
                          height={40}
                          width={40}
                          src={icon}
                          alt={icon}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center">
                    <Link
                      href={sourceCode}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex text-sm text-purple md:text-xs lg:text-xl"
                    >
                      Source Code
                    </Link>

                    <FaLocationArrow className="ms-3" color="#cbacf9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </section>
  )
}
