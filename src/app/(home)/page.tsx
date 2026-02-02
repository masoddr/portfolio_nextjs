import { HeroSection } from '@/components/sections/HeroSection'
import { WhatIDoSection } from '@/components/sections/WhatIDoSection'
import { TechnicalSkillsSection } from '@/components/sections/TechnicalSkillsSection'
import { FeaturedWorkSection } from '@/components/sections/FeaturedWorkSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { HomePageClient } from '@/components/HomePageClient'

export default function Home() {
  return (
    <HomePageClient>
      <main>
        <HeroSection />
        <WhatIDoSection />
        <TechnicalSkillsSection />
        <FeaturedWorkSection />
        <ContactSection />
      </main>
    </HomePageClient>
  )
}
