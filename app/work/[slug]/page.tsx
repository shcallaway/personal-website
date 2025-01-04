import { ContentContainer } from "@/components/ui/content-container"
import { Section } from "@/components/ui/section"
import { MarkdownPageHeader } from "@/components/ui/markdown-page-header"
import { MarkdownContent } from "@/components/markdown-content"
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'

interface Project {
  title: string
  description: string
  date: string
  slug: string
  tags: string[]
  content: string
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const projectsDirectory = path.join(process.cwd(), 'app/work/projects')
  const filePath = path.join(projectsDirectory, `${params.slug}.json`)

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const project: Project = JSON.parse(fileContents)

  return (
    <ContentContainer>
      <MarkdownPageHeader
        title={project.title}
        description={project.description}
        date={project.date}
        tags={project.tags}
      />

      <Section>
        <MarkdownContent content={project.content} />
      </Section>
    </ContentContainer>
  )
}

