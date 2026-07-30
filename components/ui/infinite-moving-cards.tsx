'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

import { testimonials } from '@/data'
import { cn } from '@/lib/utils'

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className
}: {
  items: typeof testimonials;
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [start, setStart] = useState(false)
  const [manualPause, setManualPause] = useState(false)
  const t = useTranslations('data.testimonials')

  const getCardStep = () => {
    const card = scrollerRef.current?.querySelector('li')
    if (!card || !scrollerRef.current) return 0
    const styles = window.getComputedStyle(scrollerRef.current)
    const gap = parseFloat(styles.columnGap || styles.gap) || 64
    return card.getBoundingClientRect().width + gap
  }

  const getLoopWidth = () => {
    if (!scrollerRef.current) return 0
    return scrollerRef.current.scrollWidth / 2
  }

  const wrapOffset = (value: number, loop: number) => {
    if (loop <= 0) return 0
    let next = ((value % loop) + loop) % loop
    if (next > loop / 2) next -= loop
    return next
  }

  const step = (dir: 1 | -1) => {
    const track = trackRef.current
    const amount = getCardStep()
    const loop = getLoopWidth()
    if (!track || !amount) return

    setManualPause(true)
    if (resumeTimer.current) clearTimeout(resumeTimer.current)

    const sign = direction === 'right' ? 1 : -1
    const delta = sign * dir * amount
    const current = new DOMMatrix(getComputedStyle(track).transform).m41
    const next = wrapOffset(current + delta, loop)

    // Snap without transition when wrapping; animate one-card steps
    const wrapped = Math.abs(next - current) > amount * 1.5
    track.style.transition = wrapped ? 'none' : 'transform 0.45s ease-out'
    track.style.transform = `translateX(${next}px)`

    if (wrapped) {
      // re-enable transition on next frame after snap
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = 'transform 0.45s ease-out'
          }
        })
      })
    }

    // Resume CSS marquee after idle; keep wrapped offset so it never drifts off-screen
    resumeTimer.current = setTimeout(() => {
      setManualPause(false)
    }, 2200)
  }

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)

        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        )
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }

  useEffect(() => {
    addAnimation()
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current)
    }
  }, [])

  return (
    <div className="relative w-full">
      <button
        type="button"
        aria-label="Previous testimonial"
        onClick={() => step(-1)}
        className="absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full border border-slate-700 bg-black-100/80 p-3 text-white backdrop-blur-sm transition hover:border-purple hover:bg-black-100 md:left-4"
      >
        <FaChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Next testimonial"
        onClick={() => step(1)}
        className="absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full border border-slate-700 bg-black-100/80 p-3 text-white backdrop-blur-sm transition hover:border-purple hover:bg-black-100 md:right-4"
      >
        <FaChevronRight className="h-4 w-4" />
      </button>

      <div
        ref={containerRef}
        className={cn(
          'scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
          className
        )}
      >
        <div ref={trackRef} className="will-change-transform">
          <ul
            ref={scrollerRef}
            className={cn(
              'flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4',
              start && 'animate-scroll',
              (manualPause || pauseOnHover) &&
                (manualPause
                  ? '[animation-play-state:paused]'
                  : 'hover:[animation-play-state:paused]')
            )}
          >
            {items.map((item, idx) => (
              <li
                className="relative w-[90vw] max-w-full flex-shrink-0 rounded-2xl border border-b-0 border-slate-800 p-5 md:w-[50vw] md:p-16"
                style={{
                  background: 'rgb(4,7,29)',
                  backgroundColor:
                    'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)'
                }}
                key={idx}
              >
                <blockquote className='flex flex-col h-full'>
                  <div
                    aria-hidden="true"
                    className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                  />
                  <span className="relative z-20 text-sm font-normal leading-[1.6] text-white md:text-lg">
                    "{t(`${item.id}.quote`)}"
                  </span>

                  <div className="relative z-20 mt-6 flex flex-row items-center">
                    <div className="me-3 rounded-full overflow-hidden">
                      <Image
                        height={60}
                        width={60}
                        src={item.img}
                        alt={t(`${item.id}.name`)}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-xl font-bold leading-[1.6] text-white">
                        {t(`${item.id}.name`)}
                      </span>

                      <span className=" text-sm font-normal leading-[1.6] text-white-200">
                        {t(`${item.id}.title`)}
                      </span>
                    </div>
                  </div>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
