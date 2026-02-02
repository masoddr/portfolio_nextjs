import { Chat } from '@/components/chat/Chat'

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-[1800px] px-6 pt-32 md:px-12 lg:px-24">
      <div className="max-h-[calc(100dvh-128px)]">
        <Chat isInsideChatBox={false} />
      </div>
    </div>
  )
}
