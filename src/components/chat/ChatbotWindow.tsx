'use client'

import { useState, useEffect, useRef } from 'react'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { gsap } from 'gsap'

import { Chat } from './Chat'

export function ChatbotWindow() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        if (window.innerWidth < 640) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'unset'
        }
      } else {
        document.body.style.overflow = 'unset'
      }
    }

    handleScroll()
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('resize', handleScroll)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const container = containerRef.current
    const content = contentRef.current
    const button = buttonRef.current
    if (!container || !content || !button) return

    const isMobile = window.innerWidth < 640

    if (isOpen) {
      // Opening animation
      gsap.to(container, {
        width: isMobile ? '100%' : 420,
        height: isMobile ? '100%' : 600,
        borderRadius: isMobile ? 0 : 16,
        bottom: isMobile ? 0 : 16,
        right: isMobile ? 0 : 16,
        duration: 0.4,
        ease: 'power3.out',
      })
      gsap.to(button, {
        borderRadius: isMobile ? 0 : '16px 16px 0 0',
        duration: 0.3,
        ease: 'power3.out',
      })
      gsap.to(content, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        delay: 0.2,
        ease: 'power2.out',
      })
    } else {
      // Closing animation
      gsap.to(content, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        ease: 'power2.in',
      })
      gsap.to(container, {
        width: 'auto',
        height: 44,
        borderRadius: 22,
        bottom: 16,
        right: 16,
        duration: 0.4,
        delay: 0.1,
        ease: 'power3.inOut',
      })
      gsap.to(button, {
        borderRadius: 22,
        duration: 0.3,
        delay: 0.1,
        ease: 'power3.inOut',
      })
    }
  }, [isOpen])

  return (
    <div
      ref={containerRef}
      className={`fixed bottom-4 right-4 h-[44px] w-auto overflow-hidden border transition-colors ${
        isOpen ? 'z-[60] border-zinc-800 bg-background' : 'z-40 border-zinc-700/50 bg-background/80 backdrop-blur-md'
      }`}
      style={{ borderRadius: 22 }}
    >
      <button
        ref={buttonRef}
        className={`group relative flex h-11 w-full items-center justify-center transition-colors ${
          isOpen ? 'border-b border-zinc-800 bg-zinc-900/80' : 'bg-transparent hover:bg-zinc-800/50'
        }`}
        style={{ borderRadius: 22 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex-1 whitespace-nowrap px-4 text-center text-sm font-bold uppercase tracking-wider text-foreground">
          {isOpen ? 'Ninibot' : 'AI Assistant'}
        </span>

        <div className="flex h-full w-11 items-center justify-center border-l border-zinc-800 text-muted transition-colors group-hover:text-accent">
          {isOpen ? (
            <MinusIcon className="h-4 w-4" />
          ) : (
            <PlusIcon className="h-4 w-4" />
          )}
        </div>
      </button>
      <div
        ref={contentRef}
        className="h-[calc(100%-44px)]"
        style={{ opacity: 0, transform: 'translateY(10px)' }}
      >
        <Chat
          isInsideChatBox={true}
          className="h-full"
          isOpen={isOpen}
          setIsChatbotWindowOpen={setIsOpen}
        />
      </div>
    </div>
  )
}
