import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LanguageScript } from '@/components/LanguageScript'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <LanguageScript />
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  )
}
