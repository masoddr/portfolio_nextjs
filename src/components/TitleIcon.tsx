export function TitleIcon({
  icon: Icon,
  title,
}: {
  icon:
    | React.ForwardRefExoticComponent<
        React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
          title?: string
          titleId?: string
        } & React.RefAttributes<SVGSVGElement>
      >
    | ((props: React.ComponentPropsWithoutRef<'svg'>) => React.ReactElement)
  title: string
}) {
  return (
    <span className="flex items-center">
      <Icon className="h-6 w-6 flex-none fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
      <span className="ml-3">{title}</span>
    </span>
  )
}
