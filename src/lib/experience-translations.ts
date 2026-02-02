import { Language } from './translations'
import { ExperienceOverview } from './experiences'

/**
 * Get translated experience data based on current language
 * Falls back to default title/description if translation is not available
 */
export function getTranslatedExperience(
  experience: ExperienceOverview,
  language: Language
): ExperienceOverview {
  if (!experience.translations) {
    return experience
  }

  const translation = experience.translations[language]

  if (!translation) {
    return experience
  }

  return {
    ...experience,
    title: translation.title ?? experience.title,
    description: translation.description ?? experience.description,
    link: translation.link ?? experience.link,
  }
}

/**
 * Get translated experiences array based on current language
 */
export function getTranslatedExperiences(
  experiences: ExperienceOverview[],
  language: Language
): ExperienceOverview[] {
  return experiences.map((experience) => getTranslatedExperience(experience, language))
}
