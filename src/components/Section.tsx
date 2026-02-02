import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export function Section({
  asChild,
  className,
  children,
  ...props
}: {
  asChild?: boolean
  className?: string
  children?: React.ReactNode
  [key: string]: unknown
}) {
  const Comp = asChild ? Slot : 'section'

  return (
    <Comp
      className={clsx(
        className,
        'rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40',
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

Section.Title = function SectionTitle({
  asChild,
  className,
  children,
  ...props
}: {
  asChild?: boolean
  className?: string
  children?: React.ReactNode
  [key: string]: unknown
}) {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp
      className={clsx(
        className,
        'mb-6 flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100',
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
