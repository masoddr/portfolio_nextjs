import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Oups! There was an error.',
  description: 'Try subscribing to my newsletter later.',
}

export default function Error() {
  return (
    <SimpleLayout
      title="Oups! There was an error."
      intro="Try subscribing to my newsletter later."
    />
  )
}
