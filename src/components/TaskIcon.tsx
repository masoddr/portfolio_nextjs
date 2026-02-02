import {
  CheckCircleIcon,
  EllipsisHorizontalCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline'

import { CircleIcon } from '@/components/Icons'

export function TaskIcon({ status }: { status: string }) {
  return (
    <>
      {status === 'To do' && (
        <CircleIcon className="mt-[2px] h-5 w-5 flex-none text-zinc-500" />
      )}
      {status === 'In progress' && (
        <EllipsisHorizontalCircleIcon className="mt-[2px] h-5 w-5 flex-none text-blue-500" />
      )}
      {status === 'Done' && (
        <CheckCircleIcon className="mt-[2px] h-5 w-5 flex-none text-green-500" />
      )}
      {status === 'Abandoned' && (
        <XCircleIcon className="mt-[2px] h-5 w-5 flex-none text-red-500" />
      )}
      <span className="sr-only">{status}</span>
    </>
  )
}
