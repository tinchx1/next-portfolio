export const navItems = [
  { key: 'about', link: '#about' },
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
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
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

export const projects = [
  {
    id: 1,
    img: '/p1.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/express.svg', '/mon.svg'],
    link: 'https://www.talksmart.app',
    sourceCode: 'https://github.com/tinchx1'
  },
  {
    id: 2,
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/express.svg', '/mon.svg'],
    link: 'https://www.trackiify.com',
    sourceCode: 'https://github.com/tinchx1'
  },
  {
    id: 3,
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/nestjs.svg', '/postgresql.svg'],
    link: 'https://habitifytracker.vercel.app',
    sourceCode: 'https://github.com/tinchx1'
  },
  {
    id: 4,
    img: '/p4.svg',
    iconLists: ['/vue.svg', '/nuxt.svg', '/tail.svg', '/ts.svg', '/gsap.svg'],
    link: 'https://challenge-nuxt-gsap.vercel.app',
    sourceCode: 'https://github.com/tinchx1/challenge-nuxt-gsap'
  }
] as const

export const testimonials = [
  {
    id: 1,
    img: "/igna.svg"
  },
  {
    id: 2,
    img: "/oa.svg"
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
    // img: '/plyaz.png',
    nameImg: '/plyazLogo.png'
  },
  {
    id: 3,
    name: 'Upwork',
    // img: '/upwork.svg',
    link: 'https://www.upwork.com/freelancers/~01af98ca2cd428a73f',
    nameImg: '/upwork.svg'
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

export const techStack = {
  stack1: ['React.js', 'Next.js', 'Typescript'],
  stack2: ['PostgreSQL', 'Node.js', 'Nest.js']
} as const
