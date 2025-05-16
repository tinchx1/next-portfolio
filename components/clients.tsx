import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { testimonials } from '@/data'
import { useTranslations } from 'next-intl'

export const Clients = () => {
  const t = useTranslations('Clients')

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        {t('heading.part1')}{' '}
        <span className="text-purple">{t('heading.part2')}</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="relative flex h-[50vh] flex-col items-center justify-center  overflow-hidden rounded-md antialiased md:h-[30rem]">
          <InfiniteMovingCards
            key={t('heading.part1')}
            items={testimonials}
            direction="right"
            speed="slow"
          />

        </div>
      </div>
    </section>
  )
}
