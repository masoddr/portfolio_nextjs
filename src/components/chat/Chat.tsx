'use client'

import { useEffect, useRef, useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { RefreshCcwIcon } from 'lucide-react'

import { MemoizedMarkdown } from '@/components/memoized-markdown'
import { cn } from '@/lib/cn'

export function Chat({
  className,
  isOpen = true,
  isInsideChatBox = true,
  setIsChatbotWindowOpen,
}: {
  className?: string
  isOpen?: boolean
  isInsideChatBox?: boolean
  setIsChatbotWindowOpen?: (isOpen: boolean) => void
}) {
  // Single useChat hook - pass down to children
  const {
    messages,
    status,
    setMessages,
    sendMessage,
  } = useChat({
    id: 'chat',
  })

  // Manage input state locally (not provided by useChat in SDK v5+)
  const [input, setInput] = useState('')

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const isUserScrolling = useRef(false)
  const touchStartY = useRef(0)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const stopScrollThreshold = 50 // px
  const isNearBottom = () => {
    if (!messagesContainerRef.current) return true
    const { scrollTop, scrollHeight, clientHeight } =
      messagesContainerRef.current
    return scrollHeight - scrollTop - clientHeight < stopScrollThreshold
  }

  useEffect(() => {
    if (isOpen && shouldAutoScroll) {
      scrollToBottom()
    }
  }, [messages, isOpen, shouldAutoScroll])

  const handleUserScroll = () => {
    isUserScrolling.current = true
    setShouldAutoScroll(isNearBottom())
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY
    isUserScrolling.current = true
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isUserScrolling.current) return

    const touchY = e.touches[0].clientY
    const diff = touchStartY.current - touchY

    if (Math.abs(diff) > 5) {
      setShouldAutoScroll(isNearBottom())
      isUserScrolling.current = !isNearBottom()
    }
  }

  const handleScroll = () => {
    if (isUserScrolling.current) {
      setShouldAutoScroll(isNearBottom())
      isUserScrolling.current = !isNearBottom()
    }
  }

  return (
    <div
      className={cn(
        '@container mx-auto flex w-full max-w-3xl flex-col',
        !isInsideChatBox ? 'h-[calc(100dvh-64px-32px)]' : 'h-full',
        className,
      )}
    >
      <div
        ref={messagesContainerRef}
        onScroll={handleScroll}
        onWheel={handleUserScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className={cn(
          'flex-1 space-y-8 overflow-y-auto overflow-x-hidden overscroll-none',
          isInsideChatBox ? 'p-4' : '-mr-4 mb-4 pr-4',
        )}
      >
        {messages.length === 0 && (
          <div className="flex h-[calc(100%-2rem)] flex-col items-center justify-center gap-12">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-center text-muted">Hi there, I&apos;m an AI assistant.</p>
              <p className="text-center text-muted">
                Posez-moi des questions sur{' '}
                <span className="font-bold text-accent">
                  Massyl Ouaddour
                </span>
                .
              </p>
            </div>

            <div className="@xs:grid-cols-2 @2xl:grid-cols-4 grid grid-cols-1 gap-3">
              <ConversationStarterCard text="Quel est la dernière expérience que Massyl a livrée ?" sendMessage={sendMessage} />
              <ConversationStarterCard text="Quel est le dernier article écrit par Massyl ?" sendMessage={sendMessage} />
              <ConversationStarterCard text="Comment puis-je contacter Massyl ?" sendMessage={sendMessage} />
              <ConversationStarterCard text="Parlez-moi de Massyl." sendMessage={sendMessage} />
            </div>
          </div>
        )}
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              message.role === 'user' &&
                'ml-auto w-fit max-w-[calc(100%-1rem)] rounded-2xl border border-zinc-700 bg-zinc-800/50 px-5 py-3 sm:max-w-[80%]',
            )}
          >
            <div
              className={cn(
                'prose prose-invert prose-p:text-foreground prose-a:text-accent prose-strong:text-foreground break-words overflow-hidden',
                message.role === 'user' ? '[&>p]:m-0' : 'space-y-6',
              )}
            >
              {message.parts.map((part, i) => {
                if (part.type === 'text') {
                  return (
                    <MemoizedMarkdown
                      key={`${message.id}-${i}`}
                      id={`${message.id}-${i}`}
                      content={part.text}
                      openLocalLinksInNewTab={false}
                      setIsChatbotWindowOpen={setIsChatbotWindowOpen}
                    />
                  )
                }
                return null
              })}
            </div>
          </div>
        ))}
        {(() => {
          const lastMessage = messages[messages.length - 1]
          const lastAssistantHasText = lastMessage?.role === 'assistant' &&
            lastMessage.parts.some(p => p.type === 'text' && p.text)
          const showThinking = status === 'submitted' ||
            (status === 'streaming' && !lastAssistantHasText)
          return showThinking ? (
            <div className="flex items-center gap-2 text-muted">
              <div className="flex gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-accent [animation-delay:-0.3s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-accent [animation-delay:-0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-accent" />
              </div>
              <span className="text-sm">Thinking...</span>
            </div>
          ) : null
        })()}
        <div ref={messagesEndRef} />
      </div>

      <MessageInput
        className={cn(isInsideChatBox && 'mb-0 space-y-0 px-4 pb-2')}
        setShouldAutoScroll={setShouldAutoScroll}
        messages={messages}
        status={status}
        setMessages={setMessages}
        sendMessage={sendMessage}
        input={input}
        setInput={setInput}
      />
    </div>
  )
}

const ConversationStarterCard = ({
  text,
  sendMessage
}: {
  text: string
  sendMessage: (params: { text: string }) => void
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    sendMessage({ text })
  }

  return (
    <button
      className="w-40 rounded-xl border border-zinc-700 bg-zinc-900/50 p-4 text-left text-sm text-muted transition-all hover:border-accent/50 hover:bg-zinc-800/50 hover:text-foreground"
      type="button"
      onClick={handleClick}
    >
      <span className="line-clamp-3">{text}</span>
    </button>
  )
}

const MessageInput = ({
  className,
  setShouldAutoScroll,
  messages,
  status,
  setMessages,
  sendMessage,
  input,
  setInput,
}: {
  className?: string
  setShouldAutoScroll: (value: boolean) => void
  messages: ReturnType<typeof useChat>['messages']
  status: ReturnType<typeof useChat>['status']
  setMessages: ReturnType<typeof useChat>['setMessages']
  sendMessage: ReturnType<typeof useChat>['sendMessage']
  input: string
  setInput: (value: string) => void
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    setShouldAutoScroll(true)
    const text = input
    setInput('') // Clear immediately
    await sendMessage({ text })
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const maxLines = 9
  const textarea = textareaRef.current
  const lineHeight = textarea
    ? parseInt(getComputedStyle(textarea).lineHeight)
    : 24
  const maxHeight = maxLines * lineHeight

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current
    const lineHeight = textarea
      ? parseInt(getComputedStyle(textarea).lineHeight)
      : 24
    const maxHeight = maxLines * lineHeight
    if (textarea) {
      textarea.style.height = 'auto'
      const newHeight = Math.min(textarea.scrollHeight + 2, maxHeight)
      textarea.style.height = `${newHeight}px`
    }
  }

  useEffect(() => {
    adjustTextareaHeight()
  }, [input])

  return (
    <div
      className={cn(
        'group mx-auto mb-4 w-full max-w-3xl sm:mb-8',
        className,
      )}
    >
      <form onSubmit={handleSubmit} className="flex flex-col">
        <textarea
          ref={textareaRef}
          className="w-full resize-none overflow-y-auto rounded-t-xl border border-b-0 border-zinc-700 bg-zinc-900/50 px-4 py-3 text-foreground placeholder:text-muted focus:outline-none group-focus-within:border-accent/50"
          placeholder="Say something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          style={{
            minHeight: `${lineHeight}px`,
            maxHeight: `${maxHeight}px`,
          }}
        />
        <div className="flex justify-end gap-2 rounded-b-xl border border-t-0 border-zinc-700 bg-zinc-900/50 px-3 pb-3 pt-1 group-focus-within:border-accent/50">
          {messages.length > 0 && (
            <button
              type="button"
              disabled={status === 'streaming' || status === 'submitted'}
              onClick={() => {
                setMessages([])
              }}
              className="flex items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-zinc-800 hover:text-foreground disabled:opacity-50"
            >
              <RefreshCcwIcon className="h-4 w-4" />
              New chat
            </button>
          )}
          <button
            type="submit"
            disabled={!input.trim()}
            className="rounded-lg bg-accent px-4 py-1.5 text-sm font-bold text-background transition-colors hover:bg-accent-light disabled:opacity-50 disabled:hover:bg-accent"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
