import { Header } from '@/components/Header'

export const metadata = {
  title: 'AI Chat',
  description: 'An AI chatbot that can answer questions.',
}

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-auto">{children}</main>
    </div>
  )
}
