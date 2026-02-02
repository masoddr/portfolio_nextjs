export function CircleIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
      data-slot="icon"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      ></path>
    </svg>
  )
}

export function DumbbellIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <rect x="19.375" y="8" width="1.75" height="8.25" rx="1" />
      <path d="M7.075 10.8V10.925H7.2L16.4 10.925H16.525V10.8V7.2C16.525 6.60629 17.0063 6.125 17.6 6.125C18.1938 6.125 18.675 6.60629 18.675 7.2V16.8C18.675 17.3937 18.1938 17.875 17.6 17.875C17.0063 17.875 16.525 17.3937 16.525 16.8V13.2V13.075H16.4H7.2H7.075V13.2V16.8C7.075 17.3937 6.59376 17.875 6 17.875C5.40634 17.875 4.925 17.3937 4.925 16.8V7.2C4.925 6.60629 5.40634 6.125 6 6.125C6.59376 6.125 7.075 6.60629 7.075 7.2V10.8Z" />
      <rect x="2.425" y="8" width="1.75" height="8.25" rx="1" />
    </svg>
  )
}

export function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}
