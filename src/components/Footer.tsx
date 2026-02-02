'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  InstagramIcon,
  LinkedInIcon,
  GitLabIcon,
  TwitterXIcon,
  YoutubeIcon,
} from '@/components/SocialIcons'
import { useLanguage } from '@/contexts/LanguageContext'

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/massyl-ouaddour/', icon: LinkedInIcon },
  { name: 'GitHub', href: 'https://github.com/masoddr', icon: GitLabIcon },
]

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="relative py-16 md:py-24">
      <div className="mx-auto max-w-[1800px] px-6 md:px-12 lg:px-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Left side */}
          <div>
            <p className="font-dm-sans text-lg font-bold uppercase tracking-wider text-foreground">
              Massyl Ouaddour
            </p>
            <p className="mt-2 text-sm text-muted">
              {t.footer.tagline}
            </p>
          </div>

          {/* Social links with icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow on ${link.name}`}
                className="group"
              >
                <link.icon className="h-5 w-5 fill-muted transition group-hover:fill-accent" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 h-px bg-zinc-800" />

        <p className="mt-8 text-sm text-muted">
          &copy; {new Date().getFullYear()} Massyl Ouaddour. {t.footer.rights}.
        </p>
      </div>
    </footer>
  )
}
