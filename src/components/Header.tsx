'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { useLanguage } from '@/contexts/LanguageContext'
import { Language } from '@/lib/translations'

gsap.registerPlugin(TextPlugin)

export function Header() {
  const pathname = usePathname()
  const { t, language, setLanguage } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLSpanElement>(null)
  const isFirstRender = useRef(true)

  const navigation = [
    { name: t.nav.work, href: '/work' },
    { name: t.nav.personalProjects, href: '/projets-perso' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.contact, href: '/#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuButtonRef.current) {
      if (isFirstRender.current) {
        menuButtonRef.current.textContent = t.nav.menu
        isFirstRender.current = false
        return
      }

      gsap.to(menuButtonRef.current, {
        duration: 0.3,
        text: mobileMenuOpen ? t.nav.close : t.nav.menu,
        ease: 'none',
      })
    }
  }, [mobileMenuOpen, t.nav.close, t.nav.menu])

  return (
    <header
      className={clsx(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'px-4 pt-4 md:px-6 md:pt-6' : 'px-0 pt-0'
      )}
    >
      <nav
        className={clsx(
          'relative z-50 mx-auto flex items-center justify-between transition-all duration-300',
          scrolled
            ? 'max-w-4xl rounded-full border border-zinc-700/50 bg-background/80 px-6 py-3 backdrop-blur-md'
            : 'max-w-[1800px] border-transparent px-6 py-6 md:px-12 lg:px-24'
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="font-dm-sans text-lg font-bold uppercase tracking-wider text-foreground transition-colors hover:text-accent"
        >
          Massyl Ouaddour
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (pathname.startsWith(item.href) && item.href !== '/')
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      'text-sm font-medium uppercase tracking-wider transition-colors',
                      isActive ? 'text-accent' : 'text-muted hover:text-foreground'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
          
          {/* Language selector */}
          <div className="flex items-center gap-2 border-l border-zinc-700/50 pl-8">
            <button
              onClick={() => setLanguage('fr')}
              className={clsx(
                'text-xs font-medium uppercase tracking-wider transition-colors',
                language === 'fr' ? 'text-accent' : 'text-muted hover:text-foreground'
              )}
            >
              FR
            </button>
            <span className="text-muted">/</span>
            <button
              onClick={() => setLanguage('en')}
              className={clsx(
                'text-xs font-medium uppercase tracking-wider transition-colors',
                language === 'en' ? 'text-accent' : 'text-muted hover:text-foreground'
              )}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile menu button and language selector */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Language selector */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage('fr')}
              className={clsx(
                'text-xs font-medium uppercase tracking-wider transition-colors',
                language === 'fr' ? 'text-accent' : 'text-muted'
              )}
            >
              FR
            </button>
            <span className="text-muted">/</span>
            <button
              onClick={() => setLanguage('en')}
              className={clsx(
                'text-xs font-medium uppercase tracking-wider transition-colors',
                language === 'en' ? 'text-accent' : 'text-muted'
              )}
            >
              EN
            </button>
          </div>
          
          <button
            type="button"
            className="text-sm font-medium uppercase tracking-wider text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span ref={menuButtonRef}>{t.nav.menu}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden">
          <nav className="flex h-full flex-col items-center justify-center">
            <ul className="space-y-8 text-center">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (pathname.startsWith(item.href) && item.href !== '/')
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={clsx(
                        'text-4xl font-bold uppercase tracking-tight transition-colors',
                        isActive ? 'text-accent' : 'text-foreground hover:text-accent'
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
