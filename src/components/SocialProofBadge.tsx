import Link from 'next/link'
import clsx from 'clsx'

interface SocialProofBadgeProps {
  href: string
  icon?: React.ReactNode
  text: string
  className?: string
}

export function SocialProofBadge({
  href,
  icon,
  text,
  className,
}: SocialProofBadgeProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm transition-all hover:border-accent/50 hover:text-accent',
        className
      )}
    >
      {icon}
      <span>{text}</span>
    </Link>
  )
}
