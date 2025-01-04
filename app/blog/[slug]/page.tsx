import { ContentContainer } from "@/components/ui/content-container"
import { Section } from "@/components/ui/section"
import { MarkdownPageHeader } from "@/components/ui/markdown-page-header"
import { MarkdownContent } from "@/components/markdown-content"
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'

interface BlogPost {
  title: string
  description: string
  date: string
  slug: string
  tags: string[]
  content: string
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blogPostsDirectory = path.join(process.cwd(), 'app/blog/posts')
  const filePath = path.join(blogPostsDirectory, `${params.slug}.json`)

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const post: BlogPost = JSON.parse(fileContents)

  return (
    <ContentContainer>
      <MarkdownPageHeader
        title={post.title}
        description={post.description}
        date={post.date}
        tags={post.tags}
      />

      <Section>
        <MarkdownContent content={post.content} />
      </Section>
    </ContentContainer>
  )
}

