import Image from 'next/image'

import { Button } from '@/components/ui/moving-borders'
import { workExperience } from '@/data'
import { companies } from '@/data'
import Link from 'next/link'

export const Experience = () => {

  return (
    <section id="experience" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>
      <div className="flex  flex-wrap items-center justify-center gap-8 md:gap-16">
        {companies.map(({ id, name, nameImg, link }) => (
          <div key={id} className="flex max-w-32 gap-2 md:max-w-60">
            {/* {img && <Image
              height={29}
              width={43}
              src={img}
              alt={`${name}'s logo`}
              className="w-5 md:w-10"
            />} */}
        <Link
        href={link}>
            <Image
              height={28}
              width={131}
              src={nameImg}
              alt={name}
              className="w-20 md:w-24"
              />
              </Link>
          </div>
        ))}
      </div>
      <div className=" grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
        {workExperience.map((experience) => (
          <Button
            key={experience.id}
            borderRadius="1.75rem"
            className="flex-1 border-neutral-200 text-white dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
              <Image
                width={95}
                height={87}
                src={experience.thumbnail}
                alt={experience.title}
                className="w-16 md:w-20 lg:w-32"
              />

              <div className="lg:ms-5">
                <h1 className="text-start text-xl font-bold md:text-2xl">
                  {experience.title}
                </h1>
                <p className="mt-3 text-start font-semibold text-white-100">
                  {experience.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  )
}
