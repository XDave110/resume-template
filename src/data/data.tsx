import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm David Paredes.`,
  description: (
    <>
    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I'm a <strong className="text-stone-100">Software Engineering student</strong> in my ninth semester. With a strong passion for web development, whether it's in the <strong className="text-stone-100">Front-End</strong> or <strong className="text-stone-100">Back-End</strong> domains. I'm well-versed in various programming languages, including <strong className="text-stone-100">Java</strong>, <strong className="text-stone-100">Python</strong>, <strong className="text-stone-100">PHP</strong>, <strong className="text-stone-100">JavaScript</strong>, and <strong className="text-stone-100">TypeScript</strong>, along with frameworks like <strong className="text-stone-100">Angular</strong> and <strong className="text-stone-100">Laravel</strong>.
    </p>
    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      When I'm not immersed in the world of software, you'll find me indulging in my love for entertainment. I'm a devoted movie enthusiast, and follower of anime.
    </p>
  </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm David Paredes, a Software Engineering , with a strong inclination towards Back-End development. Proficient in programming languages like Java, Python, PHP, JavaScript, and TypeScript, I'm also well-versed in frameworks such as Angular and Laravel.`,
  aboutItems: [
    {label: 'Location', text: 'Merida, YUC.', Icon: MapIcon},
    {label: 'Age', text: '24.', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Mexican.', Icon: FlagIcon},
    {label: 'Interests', text: 'Movies, Anime, Technology, Games.', Icon: SparklesIcon},
    {label: 'Study', text: 'Faculty of Mathematics UADY.', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML',
        level: 9,
      },
      {
        name: 'TypeScript',
        level: 8,
      },
      {
        name: 'javaScript',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'PHP',
        level: 8,
      },
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'python',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'APIS - The Book Store',
    description: 'Es un proyecto desarrollado con Spring Boot que ofrece una solución completa para gestionar una tienda de libros en línea.',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Blog Personal',
    description: 'Un blog personal simple creado con tecnologías de Front-End y Back-End para compartir pensamientos y experiencias.',
    url: '',
    image: porfolioImage2,
  },
  {
    title: 'Sistema de Gestión de Tareas',
    description: 'Una aplicación web que permite a los usuarios organizar y realizar un seguimiento de sus tareas y proyectos diarios.',
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'Juego de Adivinanza de Números',
    description: 'Un juego simple de adivinanza de números en el que los jugadores intentan adivinar un número aleatorio dentro de un rango específico.',
    url: '',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2023',
    location: 'Faculty of Mathematics',
    title: 'Bachelor in Software Engineering',
    content: <p>During my time at the Faculty of Mathematics, I acquired a deep understanding of software engineering principles, honed my programming skills in various languages, and gained practical experience in developing software solutions. This education has equipped me with the knowledge and skills needed to excel in the field.</p>,
  },

];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'If you had like to learn more about my skills, experience, or projects, feel free to contact me.',
  items: [
    {
      type: ContactType.Email,
      text: 'davidparedes01023@gmail.com',
      href: 'mailto:davidparedes01023@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Merida YUC, Mexico',
      href: '',
    },
    {
      type: ContactType.Github,
      text: 'XDave110',
      href: 'https://github.com/XDave110',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/XDave110'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/david-paredes-60583b28b/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/XDave110'},
];
