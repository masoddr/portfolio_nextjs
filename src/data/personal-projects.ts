export interface PersonalProject {
  id: string
  title: string
  description: string
  url: string
  image: string
  techStack: string[]
  translations?: {
    fr?: {
      title: string
      description: string
    }
    en?: {
      title: string
      description: string
    }
  }
}

export const personalProjects: PersonalProject[] = [
  {
    id: 'revise-tes-maths',
    title: 'Revise Tes Maths',
    description:
      'Site Astro pour mes cours de maths en ligne avec visionnage d\'annales, cours et exercices.',
    url: 'https://revise-tes-maths.fr',
    image: '/imgs/projets_perso/revise_tes_maths.jpg',
    techStack: ['Astro', 'React', 'VPS', 'Reverse Proxy', 'Administration Serveur'],
    translations: {
      fr: {
        title: 'Revise Tes Maths',
        description:
          'Site Astro pour mes cours de maths en ligne avec visionnage d\'annales, cours et exercices.',
      },
      en: {
        title: 'Revise Tes Maths',
        description:
          'Astro website for my online math courses with past papers viewing, lessons and exercises.',
      },
    },
  },
  {
    id: 'cinephoria',
    title: 'Cinephoria',
    description:
      'Répertorie les séances des cinémas de Toulouse pour faciliter la recherche de films.',
    url: 'https://cinephoria.fr',
    image: '/imgs/projets_perso/cinephoria.jpg',
    techStack: ['Astro', 'React', 'Backend Python', 'VPS', 'Reverse Proxy', 'Administration Serveur'],
    translations: {
      fr: {
        title: 'Cinephoria',
        description:
          'Répertorie les séances des cinémas de Toulouse pour faciliter la recherche de films.',
      },
      en: {
        title: 'Cinephoria',
        description:
          'Lists movie showtimes from Toulouse cinemas to facilitate film search.',
      },
    },
  },
  {
    id: 'optimise-ton-cv',
    title: 'Optimise Ton CV',
    description:
      'Site permettant d\'améliorer un CV uploadé pour les ATS (Applicant Tracking Systems).',
    url: 'https://optimise-ton-cv.fr',
    image: '/imgs/projets_perso/optimise_ton_cv.jpg',
    techStack: ['Astro', 'React', 'Backend Python', 'LLM API', 'Groq', 'VPS', 'Reverse Proxy', 'Administration Serveur'],
    translations: {
      fr: {
        title: 'Optimise Ton CV',
        description:
          'Site permettant d\'améliorer un CV uploadé pour les ATS (Applicant Tracking Systems).',
      },
      en: {
        title: 'Optimise Ton CV',
        description:
          'Website to improve an uploaded CV for ATS (Applicant Tracking Systems).',
      },
    },
  },
]
