import { links } from '@/config'

export const navItems = [
  { name: 'Sobre mi', link: '#about' },
  { name: 'Proyectos', link: '#projects' },
  { name: 'Testimonios', link: '#testimonials' },
  { name: 'Contacto', link: '#contact' }
] as const

export const gridItems = [
  {
    id: 1,
    title: 'Priorizo la colaboración con el cliente, fomentando una comunicación abierta',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: ''
  },
  {
    id: 2,
    title: 'Soy muy flexible con las comunicaciones en diferentes zonas horarias',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: ''
  },
  {
    id: 3,
    title: 'Mi stack de tecnologías',
    description: 'Siempre intento mejorar',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: ''
  },
  {
    id: 4,
    title: 'Entusiasta de la tecnología con una pasión por el desarrollo de productos.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg'
  },

  {
    id: 5,
    title: 'Estoy aprendiendo a crear contratos inteligentes con Solidity',
    description: 'En el presente',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-96',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/solidity.svg',
    spareImg: '/grid.svg'
  },
  {
    id: 6,
    title: '¿Quieres empezar un proyecto juntos?',
    description: '',
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
    title: 'TalkSmart - Un chat con IA',
    des: 'Chat con IA para conversar en otros idiomas, con traducción instantánea y explicaciones de contexto.',
    img: '/p1.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/express.svg', '/mon.svg'],
    link: 'https://www.talksmart.app',
    sourceCode: 'https://github.com/tinchx1'
  },
  {
    id: 2,
    title: 'Trackiify - Gestor de Rutinas',
    des: 'Gestor de rutinas con dashboards para entrenadores y clientes y bot de WhatsApp para seguimiento automatizado.',
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/express.svg', '/mon.svg'],
    link: 'https://www.trackiify.com',
    sourceCode: 'https://github.com/tinchx1'
  },
  {
    id: 3,
    title: 'Habitify - Tracker de Hábitos',
    des: 'Aplicación de rastreo de hábitos diseñada para ayudar a los usuarios a construir y mantener rutinas saludables.',
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/nestjs.svg', '/postgresql.svg'],
    link: 'https://habitifytracker.vercel.app',
    sourceCode: 'https://github.com/tinchx1'
  },
  {
    id: 4,
    title: 'Carrusel complejo animado',
    des: 'Carrusel animado con líneas de tiempo de GSAP, múltiples animaciones y efectos de máscara con clip-path.',
    img: '/p4.svg',
    iconLists: ['/vue.svg', '/nuxt.svg', '/tail.svg', '/ts.svg', '/gsap.svg'],
    link: 'https://challenge-nuxt-gsap.vercel.app',
    sourceCode: 'https://github.com/tinchx1/challenge-nuxt-gsap'
  }
] as const

export const testimonials = [
  {
    quote: 'Tuve la oportunidad de supervisar a Martin durante su tiempo en el equipo y fue una experiencia muy positiva. Desde el primer momento demostró una gran proactividad y compromiso, especialmente en el desarrollo Front-End. Se destacó por su capacidad para resolver problemas de forma autónoma y por su disposición constante a mejorar tanto a nivel técnico como en la dinámica del equipo. Es una persona con una actitud muy profesional, con la que da gusto trabajar.',
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies'
  },
  {
    quote: 'Tuve la oportunidad de supervisar a Martin durante su tiempo en el equipo y fue una experiencia muy positiva. Desde el primer momento demostró una gran proactividad y compromiso, especialmente en el desarrollo Front-End. Se destacó por su capacidad para resolver problemas de forma autónoma y por su disposición constante a mejorar tanto a nivel técnico como en la dinámica del equipo. Es una persona con una actitud muy profesional, con la que da gusto trabajar.',
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies'
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
    link:  'https://bento.me/plyaz',
    // img: '/plyaz.png',
    nameImg: '/plyazLogo.png'
  }
  // {
  //   id: 3,
  //   name: 'HOSTINGER',
  //   img: '/host.svg',
  //   nameImg: '/hostName.svg'
  // },
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
    title: 'Frontend Engineer Intern',
    desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg'
  },
  {
    id: 2,
    title: 'Mobile App Dev - JSM Tech',
    desc: 'Designed and developed mobile app for both iOS & Android platforms using React Native.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg'
  },
  {
    id: 3,
    title: 'Freelance App Dev Project',
    desc: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg'
  },
  {
    id: 4,
    title: 'Lead Frontend Developer',
    desc: 'Developed and maintained user-facing features using modern frontend technologies.',
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
