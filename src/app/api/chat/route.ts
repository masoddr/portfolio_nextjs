import { openai } from '@ai-sdk/openai'
import { streamText, type UIMessage, convertToModelMessages } from 'ai'
import { experiences } from '@/data/experiences'
import { NextResponse } from 'next/server'

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 10 // 10 requests per minute for chat

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return false
  }

  if (record.count >= MAX_REQUESTS) {
    return true
  }

  record.count++
  return false
}

export async function POST(req: Request) {
  // Rate limiting
  const ip = req.headers.get('x-forwarded-for') || 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: 'Too many requests. Please try again later.' },
      { status: 429 },
    )
  }

  const { messages }: { messages: UIMessage[] } = await req.json()

  const projectsString = experiences
    .map(
      (project) =>
        `- [${project.date}] [${project.title}](/projects/${project.slug ?? ''}) ${project.link ? `Live link: [${project.link.label}](${project.link.href})` : ''}
    Description: ${project.description}`,
    )
    .join('\n')

  const aboutString = `Je suis Massyl Ouaddour, Ingénieur Systèmes Spatiaux et Développeur Python.

Je suis un ingénieur spécialisé dans l'ingénierie spatiale, avec une expertise dans la modélisation, la simulation et l'optimisation de systèmes complexes pour le secteur spatial.

🧑‍💻 Mes compétences principales incluent :
- Ingénierie Spatiale : Traitement de données, Modélisation, Simulation, Modélisation d'antennes, Bilans de liaison
- DevOps & Automation : Python, Flask API, Vue.js, PostgreSQL, Docker
- Développement Web : Git, GitHub Actions, Docker, Linux, Pandas, Selenium

🚀 Expériences Professionnelles :
- Ingénieur télécom - simulation Python (CNES) - Janvier 2025 : Modélisation et simulation constellation télécom Python (Dask, Numpy, Xarray), Linux, Git, Docker, Bilan de liaison
- Projet QKDSIM (Airbus Defence and Space) - Août 2023 - Octobre 2024 : Développement d'un simulateur de distribution de clé quantique par satellite Python, Git, Linux, Télécommunications spatiales, Physique quantique, Orbitographie
- Ingénieur Satcom (CNES) - Novembre 2022 - Juillet 2023 : Support technique plateforme CESARS Tests de performances antennes et modules IoT, Scripts Python & Bash
- Développeur logiciel (DGA Techniques Aéronautiques) - Février 2022 - Novembre 2022 : Développement d'outils pour essais CEM et Foudre Java, Git, PostgreSQL
- Développeur logiciel (CNES) - Novembre 2021 - Février 2022 : Transcription Scilab en VBA pour calculs d'électromagnétisme VBA, Scilab, Excel

💻 Expériences Personnelles :
- Revise tes maths : Application de révision des mathématiques avec une interface utilisateur simple et intuitive. Stack technique : Vue.js, Flask, PostgreSQL. Déployée sur un VPS avec Docker, CI/CD via GitHub Actions pour les tests et le déploiement automatique.
- Cinéphoria : Site web qui centralise la programmation de tous les cinémas de Toulouse. Stack technique : Vue.js, Flask (API & scraping), PostgreSQL. Infrastructure : Docker, VPS, CI/CD GitHub Actions pour l'intégration et le déploiement continu.`

  const contactString = `- Mail: [ouaddour.massyl@gmail.com](mailto:ouaddour.massyl@gmail.com)
- LinkedIn: [Massyl Ouaddour](https://www.linkedin.com/in/massyl-ouaddour/)
- GitHub: [massylouaddour](https://github.com/masoddr)`

  const result = streamText({
    system: `Tu es un assistant utile sur le Portfolio de Massyl Ouaddour.
Tu es capable de répondre aux questions sur Massyl Ouaddour et ses expériences.

Voici la liste de toutes ses expériences :
${projectsString}

Voici une section à propos de Massyl Ouaddour :
${aboutString}

Voici une section de contact pour Massyl Ouaddour :
${contactString}

Si ta réponse inclut une expérience, tu dois mettre le titre de l'expérience comme lien dans ta réponse, comme ceci : [titre](slug).
Si tu as un lien en direct, alors inclus le lien externe vers l'expérience.
Réponds à l'utilisateur en format Markdown.`,
    model: openai('gpt-5-mini'),
    messages: await convertToModelMessages(messages),
  })

  return result.toUIMessageStreamResponse()
}
