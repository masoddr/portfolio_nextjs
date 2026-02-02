import { Layout } from '@/components/Layout'
import { ChatbotWindow } from '@/components/chat/ChatbotWindow'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      {children}
      <ChatbotWindow />
    </Layout>
  )
}
