import { ContentContainer } from "@/components/ui/content-container"
import { PageHeader } from "@/components/ui/page-header"
import { Section } from "@/components/ui/section"
import { CardList } from '@/components/card-list'
import { Paragraph } from "@/components/ui/paragraph"
import { OrderedList } from "@/components/ui/ordered-list"
import { ListItem } from "@/components/ui/list-item"
import fs from 'fs'
import path from 'path'

interface Project {
  title: string
  description: string
  date: string
  slug: string
  tags: string[]
  externalUrl?: string
  isExternal?: boolean
}

export default function Work() {
  const projectsDirectory = path.join(process.cwd(), 'app/work/projects')
  const filenames = fs.readdirSync(projectsDirectory)

  const projects: Project[] = filenames.reduce((allProjects, filename) => {
    const filePath = path.join(projectsDirectory, filename)
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const parsedContent = JSON.parse(fileContents)
      
      if (!parsedContent.title || !parsedContent.description || !parsedContent.date || !parsedContent.slug || !parsedContent.tags) {
        throw new Error('Missing required fields in project JSON')
      }

      const { title, description, date, slug, tags, externalUrl, isExternal } = parsedContent
      allProjects.push({ title, description, date, slug, tags, externalUrl, isExternal })
    } catch (error) {
      console.error(`Error processing ${filename}:`, error)
    }
    return allProjects
  }, [] as Project[])

  projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <ContentContainer>
      <PageHeader
        title="Our Work"
        description="Explore our portfolio of projects and case studies. We've worked with a diverse range of clients across various industries, delivering innovative solutions and achieving outstanding results."
      />

      <Section title="Featured Projects">
        <CardList items={projects} basePath="/work" />
      </Section>

      <Section title="Industries We Serve">
        <Paragraph>
          Our expertise spans across multiple sectors, including finance, healthcare, education, and retail. 
          We tailor our solutions to meet the unique challenges of each industry.
        </Paragraph>
      </Section>

      <Section title="Our Approach">
        <OrderedList>
          <ListItem>Understand client needs through in-depth consultations</ListItem>
          <ListItem>Develop customized strategies and solutions</ListItem>
          <ListItem>Implement with attention to detail and quality</ListItem>
          <ListItem>Provide ongoing support and optimization</ListItem>
        </OrderedList>
      </Section>
    </ContentContainer>
  )
}

