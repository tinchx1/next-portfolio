export const navItems = [
  // { key: 'about', link: '#about' },
  { key: 'projects', link: '#projects' },
  { key: 'testimonials', link: '#testimonials' },
  { key: 'contact', link: '#contact' }
] as const

export const gridItems = [
  {
    id: 1,
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: ''
  },
  {
    id: 2,
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: ''
  },
  {
    id: 3,
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[26rem] md:min-h-[28rem]',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: ''
  },
  {
    id: 4,
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg'
  },

  {
    id: 5,
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-96 opacity-50',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/solidity.svg',
    spareImg: '/grid.svg'
  },
  {
    id: 6,
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: ''
  }
] as const

export type Project = {
  id: number
  img: string
  iconLists: readonly string[]
  link: string
  sourceCode: string
  imgClassName?: string
}

export const projects = [
  {
    id: 1,
    img: "/p1.svg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/express.svg",
      "/mon.svg",
    ],
    link: "https://www.talksmart.app",
    sourceCode: "https://github.com/tinchx1",
  },
  {
    id: 2,
    img: "/p2.svg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/express.svg",
      "/mon.svg",
    ],
    link: "https://www.trackiify.com",
    sourceCode: "https://github.com/tinchx1",
  },
  // {
  //   id: 3,
  //   img: '/p3.svg',
  //   iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/nestjs.svg', '/postgresql.svg'],
  //   link: 'https://habitifytracker.vercel.app',
  //   sourceCode: 'https://github.com/tinchx1'
  // },
  // {
  //   id: 4,
  //   img: '/p4.svg',
  //   iconLists: ['/vue.svg', '/nuxt.svg', '/tail.svg', '/ts.svg', '/gsap.svg'],
  //   link: 'https://challenge-nuxt-gsap.vercel.app',
  //   sourceCode: 'https://github.com/tinchx1/challenge-nuxt-gsap'
  // },
  {
    id: 5,
    img: "/p5.png",
    iconLists: [
      "/next.svg",
      "/sass.png",
      "/ts.svg",
      "/express.svg",
      "/postgresql.svg",
    ],
    link: "https://github.com/tinchx1/red-social-front",
    sourceCode: "https://github.com/tinchx1/red-social-front",
  },
  {
    id: 6,
    img: "/p6.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/nestjs.svg",
      "/postgresql.svg",
      "/turborepo.png",
    ],
    link: "https://www.plyaz.net",
    sourceCode: "https://github.com/tinchx1",
  },
  {
    id: 7,
    img: "/p7.png",
    iconLists: [
      "/re.svg",
      "/react-query.svg",
      "/sass.png",
      "/express.svg",
      "/postgresql.svg",
    ],
    link: "https://flexy.com.ar/",
    sourceCode: "https://github.com/tinchx1/rental-dashboard",
  },
  {
    id: 8,
    img: "/p8.png",
    iconLists: [
      "/re.svg",
      "/react-query.svg",
      "/sass.png",
      "/express.svg",
      "/postgresql.svg",
    ],
    link: "https://subastas.desarrollosdelsud.com.ar",
    sourceCode: "https://github.com/tinchx1/dashboard-admin",
  },
  {
    id: 9,
    img: "/p9.png",
    iconLists: ["/re.svg", "/zustand.svg", "/sass.png", "/express.svg"],
    link: "https://testmulticotizador.mercibroker.com.ar/",
    sourceCode: "https://github.com/tinchx1/insurance-quoting-frontend",
  },
  {
    id: 10,
    img: "/p10.png",
    imgClassName:
      "absolute bottom-0 left-1/2 z-10 h-[92%] w-auto max-w-[42%] -translate-x-1/2 object-contain",
    iconLists: ["/re.svg", "/expo.svg", "/tail.svg", "/lottie.svg"],
    link: "https://github.com/tinchx1",
    sourceCode: "https://github.com/tinchx1",
  },
] satisfies readonly Project[];

export const testimonials = [
  {
    id: 1,
    img: "/igna.svg"
  },
  {
    id: 2,
    img: "/oa.svg"
  },
  {
    id: 3,
    img: "/plyaz.png"
  }
  // {
  //   quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
  //   name: 'Michael Johnson',
  //   title: 'Director of AlphaStream Technologies'
  // },
  // {
  //   quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
  //   name: 'Michael Johnson',
  //   title: 'Director of AlphaStream Technologies'
  // },
  // {
  //   quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
  //   name: 'Michael Johnson',
  //   title: 'Director of AlphaStream Technologies'
  // },
  // {
  //   quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
  //   name: 'Michael Johnson',
  //   title: 'Director of AlphaStream Technologies'
  // }
] as const

export const companies = [
  {
    id: 1,
    name: 'swaplyar',
    link: 'https://www.swaplyar.com/',
    nameImg: '/swaplyar.svg'
  },
  {
    id: 2,
    name: 'PLYAZ',
    link: 'https://bento.me/plyaz',
    nameImg: '/plyaz.svg'
  },
  {
    id: 3,
    name: 'Delsud',
    link: 'https://grupodelsud.com/',
    nameImg: '/delsud.svg'
  },
  // {
  //   id: 4,
  //   name: 'stream',
  //   img: '/s.svg',
  //   nameImg: '/streamName.svg'
  // },
  // {
  //   id: 5,
  //   name: 'docker.',
  //   img: '/dock.svg',
  //   nameImg: '/dockerName.svg'
  // }
] as const

export const workExperience = [
  {
    id: 1,
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg'
  },
  {
    id: 2,
    thumbnail: '/exp2.svg'
  },
  {
    id: 3,
    className: 'md:col-span-2',
    thumbnail: '/exp3.svg'
  },
  {
    id: 4,
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg'
  }
] as const

export const socialMedia = [
  {
    name: 'GitHub',
    img: '/git.svg',
    link: 'https://github.com/tinchx1'
  },
  {
    name: 'Instagram',
    img: '/twit.svg',
    link: 'https://instagram/tinchomarchionni'
  },
  {
    name: 'LinkedIn',
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/martin-marchionni-16104127a/'
  }
] as const

export type TechStackItem = {
  name: string
  icon: string
}

export type TechStackCategoryKey = 'frontend' | 'backend' | 'mobile' | 'tooling'

export type TechStackCategory = {
  key: TechStackCategoryKey
  items: TechStackItem[]
}

const TECH_BY_ICON: Record<
  string,
  { name: string; category: TechStackCategoryKey }
> = {
  '/re.svg': { name: 'React', category: 'frontend' },
  '/next.svg': { name: 'Next.js', category: 'frontend' },
  '/ts.svg': { name: 'TypeScript', category: 'frontend' },
  '/tail.svg': { name: 'Tailwind CSS', category: 'frontend' },
  '/sass.png': { name: 'Sass', category: 'frontend' },
  '/react-query.svg': { name: 'TanStack Query', category: 'frontend' },
  '/zustand.svg': { name: 'Zustand', category: 'frontend' },
  '/lottie.svg': { name: 'Lottie', category: 'frontend' },
  '/node.svg': { name: 'Node.js', category: 'backend' },
  '/express.svg': { name: 'Express', category: 'backend' },
  '/nestjs.svg': { name: 'NestJS', category: 'backend' },
  '/postgresql.svg': { name: 'PostgreSQL', category: 'backend' },
  '/mon.svg': { name: 'MongoDB', category: 'backend' },
  '/expo.svg': { name: 'Expo', category: 'mobile' },
  '/turborepo.png': { name: 'Turborepo', category: 'tooling' }
}

const EXTRA_STACK_ICONS = ['/node.svg'] as const

const CATEGORY_ORDER: TechStackCategoryKey[] = [
  'frontend',
  'backend',
  'mobile',
  'tooling'
]

function buildTechStack(): TechStackCategory[] {
  const byCategory: Record<TechStackCategoryKey, TechStackItem[]> = {
    frontend: [],
    backend: [],
    mobile: [],
    tooling: []
  }
  const seen = new Set<string>()

  const addIcon = (icon: string) => {
    if (seen.has(icon)) return
    const meta = TECH_BY_ICON[icon]
    if (!meta) return
    seen.add(icon)
    byCategory[meta.category].push({ name: meta.name, icon })
  }

  for (const project of projects) {
    for (const icon of project.iconLists) addIcon(icon)
  }
  for (const icon of EXTRA_STACK_ICONS) addIcon(icon)

  return CATEGORY_ORDER.filter((key) => byCategory[key].length > 0).map(
    (key) => ({ key, items: byCategory[key] })
  )
}

export const techStack = buildTechStack()
