import { Card } from '@/components/Card'
import { SplitSection } from '@/components/SplitSection'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof SplitSection>) {
  return (
    <SplitSection {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </SplitSection>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card asChild>
      <li>
        <Card.Title asChild href={href} target="_blank">
          <h3>{title}</h3>
        </Card.Title>
        <Card.Description>{children}</Card.Description>
      </li>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="A curated list of the software, gadgets, and tools I use daily to enhance productivity, streamline my workflow, and support my personal and professional growth. From development essentials to the gadgets that keep me motivated, this page shares what I recommend based on my own experiences."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” Asus Vivobook, AMD Ryzen 7000 series, 16GB RAM">
            I was using an old laptop and the difference is night and day. I’ve
            never heard the fans turn on a single time.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Cursor" href="https://www.cursor.com/">
            Built on top of VSCode, it allows me to keep my workflow while
            offering the best AI coding assistance I’ve experienced.
          </Tool>
          <Tool title="Git—GitLab" href="https://gitlab.com/">
            I use Git for version control and GitLab for hosting my code for all
            of my projects, both personal and professional.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma" href="https://www.figma.com/">
            Figma is my go-to tool for creating beautiful & responsive designs,
            rapid prototyping, and collaboration with my tribe.
          </Tool>
          <Tool title="Pen & Paper">
            I love to sketch out ideas on paper and then bring them to life in
            Figma.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Daily planner">
            A physical daily planner that helps me stay organized and on top of
            my tasks, thoughts, and goals.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
