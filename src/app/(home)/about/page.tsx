import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  GitLabIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterXIcon,
  YoutubeIcon,
} from '@/components/SocialIcons'
import avatarImage from '@/images/avatar.webp'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/massyl-ouaddour/', icon: LinkedInIcon },
  { name: 'GitHub', href: 'https://github.com/masoddr', icon: GitLabIcon },
]

export const metadata: Metadata = {
  title: 'About',
  description:
    "Je suis Massyl Ouaddour. Ingénieur Systèmes Spatiaux | Développeur Python.",
}

export default function About() {
  return (
    <main className="bg-background pt-32 md:pt-40">
      <div className="mx-auto max-w-[1800px] px-6 md:px-12 lg:px-24">
        {/* Page header */}
        <header className="mb-20 md:mb-32">
          <h1 className="text-[20vw] font-black uppercase leading-[0.85] tracking-tighter text-foreground md:text-[8vw]">
            About
          </h1>
          <p className="mt-8 text-2xl font-bold text-accent md:text-3xl">
            Ingénieur Systèmes Spatiaux | Développeur Python
          </p>
        </header>

        {/* Content */}
        <div className="grid gap-16 pb-32 md:grid-cols-3 md:gap-12 md:pb-48">
          {/* Main content */}
          <div className="space-y-8 md:col-span-2">
            <p className="text-xl leading-relaxed text-muted md:text-2xl">
              Je suis un ingénieur spécialisé dans l&apos;ingénierie spatiale, avec une expertise dans la modélisation, la simulation et l&apos;optimisation de systèmes complexes pour le secteur spatial.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              Mon parcours professionnel m&apos;a conduit à travailler sur des projets variés allant de la simulation de constellations télécom à la distribution de clé quantique par satellite, en passant par le développement d&apos;outils pour essais CEM et Foudre.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              En tant que développeur Python, je mets en place des pipelines CI/CD pour les applications et je configure des environnements de développement et de production. Je développe également des sites web et applications web avec des compétences en développement front-end et back-end.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              Mes compétences techniques incluent Python, Flask, Vue.js, PostgreSQL, Docker, Git, GitHub Actions, ainsi que des outils spécialisés pour le traitement de données scientifiques comme Pandas, NumPy, Xarray et Dask.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              En parallèle de mon travail professionnel, je développe des projets personnels comme &quot;Revise tes maths&quot; et &quot;Cinéphoria&quot;, qui me permettent d&apos;explorer de nouvelles technologies et de partager mes créations avec la communauté.
            </p>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            {/* Avatar */}
            <div className="mb-12">
              <Image
                src={avatarImage}
                alt="Massyl Ouaddour"
                sizes="(min-width: 1024px) 32rem, 24rem"
                className="aspect-square rounded-lg bg-zinc-800 object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-wider text-muted">
                Connect
              </p>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-muted transition-colors hover:text-accent"
                  >
                    <link.icon className="h-5 w-5 flex-none fill-muted transition group-hover:fill-accent" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                ))}
              </div>

              {/* Email */}
              <div className="mt-8 border-t border-zinc-800 pt-8">
                <Link
                  href="mailto:ouaddour.massyl@gmail.com"
                  className="group flex items-center gap-3 text-muted transition-colors hover:text-accent"
                >
                  <MailIcon className="h-5 w-5 flex-none fill-muted transition group-hover:fill-accent" />
                  <span className="text-sm">ouaddour.massyl@gmail.com</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
