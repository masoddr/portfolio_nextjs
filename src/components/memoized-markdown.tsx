import { marked } from 'marked'
import Link from 'next/link'
import { memo, useMemo } from 'react'
import ReactMarkdown from 'react-markdown'

function parseMarkdownIntoBlocks(markdown: string): string[] {
  const tokens = marked.lexer(markdown)
  return tokens.map((token) => token.raw)
}

const MemoizedMarkdownBlock = memo(
  ({
    content,
    openLocalLinksInNewTab = true,
    setIsChatbotWindowOpen,
  }: {
    content: string
    openLocalLinksInNewTab: boolean
    setIsChatbotWindowOpen?: (isOpen: boolean) => void
  }) => {
    return (
      <ReactMarkdown
        components={{
          a: ({ href, children }) => {
            return href?.startsWith('/') ? (
              <Link
                href={href}
                target={
                  !openLocalLinksInNewTab && href?.startsWith('/')
                    ? '_self'
                    : '_blank'
                }
                onClick={() => {
                  !openLocalLinksInNewTab &&
                    href?.startsWith('/') &&
                    setIsChatbotWindowOpen?.(false)
                }}
              >
                {children}
              </Link>
            ) : (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    )
  },
  (prevProps, nextProps) => {
    if (prevProps.content !== nextProps.content) return false
    return true
  },
)

MemoizedMarkdownBlock.displayName = 'MemoizedMarkdownBlock'

export const MemoizedMarkdown = memo(
  ({
    content,
    id,
    openLocalLinksInNewTab = true,
    setIsChatbotWindowOpen,
  }: {
    content: string
    id: string
    openLocalLinksInNewTab?: boolean
    setIsChatbotWindowOpen?: (isOpen: boolean) => void
  }) => {
    const blocks = useMemo(() => parseMarkdownIntoBlocks(content), [content])

    return blocks.map((block, index) => (
      <MemoizedMarkdownBlock
        content={block}
        key={`${id}-block_${index}`}
        openLocalLinksInNewTab={openLocalLinksInNewTab}
        setIsChatbotWindowOpen={setIsChatbotWindowOpen}
      />
    ))
  },
)

MemoizedMarkdown.displayName = 'MemoizedMarkdown'
