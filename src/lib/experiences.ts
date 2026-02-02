import { StaticImageData } from 'next/image'

export interface ExperienceTranslations {
  title: string
  description: string
  link?: {
    href: string
    label: string
  }
}

export interface Experience {
  title: string
  description: string
  author: string
  date: string
  link?: {
    href: string
    label: string
  }
  repository?: {
    href: string
    label: string
    provider: 'github' | 'gitlab'
  }
  tags?: string[]
  // Support for translations
  translations?: {
    fr?: Partial<ExperienceTranslations>
    en?: Partial<ExperienceTranslations>
  }
}

export interface ExperienceWithSlug extends Experience {
  slug: string
}

export interface CaseStudySectionItem {
  icon: string
  text: string
}

export interface CaseStudySection {
  title: string
  items: CaseStudySectionItem[]
}

export interface CaseStudy {
  exploration: string
  solution: string
  architecture: string
  results: string
  sections?: CaseStudySection[]
  images?: {
    hero?: string
    exploration?: string
    solution?: string
    architecture?: string
  }
}

export interface ExperienceOverview extends Experience {
  slug?: string
  logo: StaticImageData
  caseStudy?: CaseStudy
}
