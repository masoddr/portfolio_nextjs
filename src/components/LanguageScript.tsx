'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export function LanguageScript() {
  const { language } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return null
}
