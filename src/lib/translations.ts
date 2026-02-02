export type Language = 'fr' | 'en'

export const translations = {
  fr: {
    nav: {
      work: 'Expériences',
      personalProjects: 'Projets Perso',
      about: 'À propos',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Fermer',
    },
    hero: {
      line1: 'Python.',
      line2: 'Performance.',
      line3: 'Simplicité.',
      subtitle: "Ingénieur Systèmes Spatiaux | Développeur Python",
      description: "Spécialisé dans la modélisation, la simulation et l'optimisation de systèmes complexes pour le secteur spatial.",
      contact: 'Contactez-moi',
      viewWork: 'Voir mes expériences',
      scroll: 'Défiler',
    },
    whatIDo: {
      title: 'Ce que je fais',
      services: [
        {
          number: '01',
          title: 'Backend Python',
          description: 'Développement d\'applications Python haute performance, sécurisées et scalables avec FastAPI, Flask et Django. Conception et optimisation de pipelines de traitement de données complexes, intégration d\'APIs tierces et développement de services backend robustes. Expertise en bases de données (PostgreSQL, SQL/NoSQL), ORM et traitement de grandes masses de données avec NumPy, Pandas et Dask. Architecture de systèmes distribués et scalables pour applications critiques.',
        },
        {
          number: '02',
          title: 'DevOps & Automation',
          description: 'Mise en place de pipelines CI/CD complets pour garantir la fiabilité et la qualité des applications. Configuration d\'environnements containerisés avec Docker et orchestration Kubernetes. Développement de tests automatisés (unitaires, intégration, end-to-end), validation de qualité de données et contrôles automatisés. Intégration d\'outils d\'analyse de code (SonarQube), monitoring et reporting pour assurer la reproductibilité et la traçabilité des systèmes.',
        },
        {
          number: '03',
          title: 'Développement Web',
          description: 'Conception et développement d\'applications web full-stack performantes. Backend Python avec FastAPI et Flask pour APIs haute performance, frontend moderne avec Vue.js pour interfaces utilisateur réactives. Gestion de bases de données PostgreSQL pour données complexes, avec optimisation des requêtes et modélisation adaptée aux besoins métier.',
        },
      ],
    },
    featuredWork: {
      title: 'Projets sélectionnés',
      viewAll: 'Voir tous les projets',
    },
    contact: {
      title: 'Construisons',
      titleAccent: 'quelque chose de grand',
      description: "Je suis sélectif concernant les expériences sur lesquelles je travaille.",
      descriptionLine2: "Si vous résolvez des problèmes intéressants, contactez-moi.",
    },
    footer: {
      tagline: 'Ingénieur Systèmes Spatiaux | Développeur Python',
      rights: 'Tous droits réservés',
    },
    badge: {
      rotatingText: "années d'expérience en développement Python",
      centerValue: '5 ans',
    },
    work: {
      title: 'Expériences',
      subtitle: 'Expériences sélectionnées et études de cas. Construire des systèmes qui résolvent de vrais problèmes.',
    },
    projects: {
      title: 'Une collection de choses que j\'ai construites en public.',
      intro: 'Une vitrine de logiciels, d\'outils et de produits que j\'ai construits et lancés en tant qu\'indie hacker au fil des années. Si quelque chose pique votre intérêt, consultez le lien et discutons !',
    },
    personalProjects: {
      title: 'Projets Personnels',
      intro: 'Une sélection de projets web que j\'ai développés et lancés en tant qu\'entrepreneur indépendant. Des outils pratiques qui résolvent des problèmes concrets.',
    },
    technicalSkills: {
      title: 'Compétences Techniques',
      categories: [
        {
          title: 'DevOps & Cloud',
          skills: [
            { name: 'Docker', level: 'Expert' },
            { name: 'Kubernetes', level: 'Avancé' },
            { name: 'Ansible', level: 'Avancé' },
            { name: 'GitLab CI/CD', level: 'Avancé' },
            { name: 'Infrastructure as Code', level: 'Avancé' },
          ],
        },
        {
          title: 'Développement',
          skills: [
            { name: 'Python', level: 'Expert' },
            { name: 'Java', level: 'Avancé' },
            { name: 'JavaScript/TypeScript', level: 'Avancé' },
            { name: 'PostgreSQL', level: 'Avancé' },
            { name: 'Shell/Bash', level: 'Avancé' },
            { name: 'Git', level: 'Avancé' },
          ],
        },
        {
          title: 'Ingénierie Spatiale',
          skills: [
            { name: 'Traitement de données', level: 'Expert' },
            { name: 'Modélisation', level: 'Expert' },
            { name: 'Simulation', level: 'Expert' },
            { name: 'Bilans de liaison', level: 'Expert' },
            { name: 'Orbitographie', level: 'Expert' },
            { name: 'Physique quantique', level: 'Expert' },
            { name: 'Optique', level: 'Expert' },
          ],
        },
      ],
    },
  },
  en: {
    nav: {
      work: 'Work',
      personalProjects: 'Personal Projects',
      about: 'About',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close',
    },
    hero: {
      line1: 'Python.',
      line2: 'Performance.',
      line3: 'Simplicity.',
      subtitle: 'Space Systems Engineer | Python Developer',
      description: 'Specialized in modeling, simulation and optimization of complex systems for the space sector.',
      contact: "Let's talk",
      viewWork: 'View work',
      scroll: 'Scroll',
    },
    whatIDo: {
      title: 'What I do',
      services: [
        {
          number: '01',
          title: 'Backend Python',
          description: 'Development of high-performance, secure, and scalable Python applications with FastAPI, Flask, and Django. Design and optimization of complex data processing pipelines, third-party API integration, and robust backend services. Expertise in databases (PostgreSQL, SQL/NoSQL), ORM libraries, and processing large datasets with NumPy, Pandas, and Dask. Architecture of distributed and scalable systems for critical applications.',
        },
        {
          number: '02',
          title: 'DevOps & Automation',
          description: 'Implementation of comprehensive CI/CD pipelines to ensure application reliability and quality. Configuration of containerized environments with Docker and Kubernetes orchestration. Development of automated testing (unit, integration, end-to-end), data quality validation, and automated checks. Integration of code analysis tools (SonarQube), monitoring and reporting to ensure system reproducibility and traceability.',
        },
        {
          number: '03',
          title: 'Web Development',
          description: 'Design and development of high-performance full-stack web applications. Python backend with FastAPI and Flask for high-performance APIs, modern frontend with Vue.js for reactive user interfaces. PostgreSQL database management for complex data, with query optimization and modeling adapted to business needs.',
        },
      ],
    },
    featuredWork: {
      title: 'Selected work',
      viewAll: 'View all experiences',
    },
    contact: {
      title: "Let's build",
      titleAccent: 'something great',
      description: "I'm selective about experiences I take on.",
      descriptionLine2: "If you're solving interesting problems, let's connect.",
    },
    footer: {
      tagline: 'Space Systems Engineer | Python Developer',
      rights: 'All rights reserved',
    },
    badge: {
      rotatingText: 'years of experience in Python development',
      centerValue: '5 years',
    },
    work: {
      title: 'Work',
      subtitle: 'Selected projects and case studies. Building systems that solve real problems.',
    },
    projects: {
      title: "A curated collection of things I've built in public.",
      intro: "A showcase of software, tools, and products I've built and launched as an indie hacker over the years. If you find something that piques your interest, check out the link and let's chat!",
    },
    personalProjects: {
      title: 'Personal Projects',
      intro: 'A selection of web projects I developed and launched as an independent entrepreneur. Practical tools that solve real problems.',
    },
    technicalSkills: {
      title: 'Technical Skills',
      categories: [
        {
          title: 'DevOps & Cloud',
          skills: [
            { name: 'Docker', level: 'Expert' },
            { name: 'Kubernetes', level: 'Advanced' },
            { name: 'Ansible', level: 'Advanced' },
            { name: 'GitLab CI/CD', level: 'Advanced' },
            { name: 'Infrastructure as Code', level: 'Advanced' },
          ],
        },
        {
          title: 'Development',
          skills: [
            { name: 'Python', level: 'Expert' },
            { name: 'C++', level: 'Advanced' },
            { name: 'JavaScript/TypeScript', level: 'Advanced' },
            { name: 'Golang', level: 'Intermediate' },
            { name: 'Shell/Bash', level: 'Advanced' },
          ],
        },
        {
          title: 'Radio Frequency',
          skills: [
            { name: 'Spectrum analyzer', level: 'Expert' },
            { name: 'Digital communications', level: 'Expert' },
            { name: 'Signal processing', level: 'Advanced' },
            { name: 'Ground stations', level: 'Expert' },
            { name: 'Antennas', level: 'Expert' },
          ],
        },
      ],
    },
  },
} as const

export type TranslationKey = keyof typeof translations.fr
