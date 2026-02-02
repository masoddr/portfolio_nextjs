import { type MDXComponents } from 'mdx/types'
import Image from 'next/image'

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    Image: (props: React.ComponentProps<typeof Image>) => <Image {...props} />,
  }
}
