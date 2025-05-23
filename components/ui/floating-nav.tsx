'use client'

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent
} from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { navItems } from '@/data'
import { cn } from '@/lib/utils'
import { useLocale, useTranslations } from 'next-intl'

type FloatingNavProps = {
  className?: string;
};
type NavItem = {
  key: string;
  link: string;
};
export const FloatingNav = ({ className }: FloatingNavProps) => {
  const t = useTranslations('data.navItems')
  const { scrollY } = useScroll()
  const router = useRouter()
  const locale = useLocale()
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useMotionValueEvent(scrollY, 'change', (current) => {
    if (typeof current === 'number') {
      if (current < 50) {
        setVisible(true)
      } else {
        if (current > lastScrollY) {
          setVisible(false) // Scrolling down
        } else {
          setVisible(true) // Scrolling up
        }
      }

      setLastScrollY(current)
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.2
        }}
        className={cn(
          'fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-3xl border backdrop-blur border-white/[0.2] bg-black-100  px-6  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]',
          className
        )}
      >
        {navItems.map((navItem: NavItem, idx: number) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              'relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300'
            )}
          >
            <span className="!cursor-pointer text-sm whitespace-nowrap">{t(navItem.key)}</span>
          </Link>
        ))}
        <select
          id="locale-select"
          defaultValue={locale}
          className={cn(
            'relative bg-transparent text-sm block px-1 py-2 outline-none transition text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300',
            'focus:text-neutral-900 dark:focus:text-neutral-50'
          )}
          onChange={(e) => {
            document.cookie = `NEXT_LOCALE=${e.currentTarget.value}; path=/`
            router.refresh()
          }}
        >
          <option value="es" className="bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50">ES</option>
          <option value="en" className="bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50">EN</option>
        </select>
      </motion.nav>
    </AnimatePresence>
  )
}
