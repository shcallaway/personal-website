import { ContentContainer } from "@/components/ui/content-container"
import { PageHeader } from "@/components/ui/page-header"
import { Section } from "@/components/ui/section"
import { CardList } from '@/components/card-list'
import fs from 'fs'
import path from 'path'

interface BlogPost {
  title: string
  description: string
  date: string
  slug: string
  tags: string[]
  externalUrl?: string
  isExternal?: boolean
}

export default function Blog() {
  const blogPostsDirectory = path.join(process.cwd(), 'app/blog/posts')
  const filenames = fs.readdirSync(blogPostsDirectory)

  const blogPosts: BlogPost[] = filenames.reduce((posts, filename) => {
    const filePath = path.join(blogPostsDirectory, filename)
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const parsedContent = JSON.parse(fileContents)
      
      if (!parsedContent.title || !parsedContent.description || !parsedContent.date || !parsedContent.slug || !parsedContent.tags) {
        throw new Error('Missing required fields in blog post JSON')
      }

      const { title, description, date, slug, tags, externalUrl, isExternal } = parsedContent
      posts.push({ title, description, date, slug, tags, externalUrl, isExternal })
    } catch (error) {
      console.error(`Error processing ${filename}:`, error)
      console.error('File contents:', fs.readFileSync(filePath, 'utf8'))
    }
    return posts
  }, [] as BlogPost[])

  blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <ContentContainer>
      <PageHeader
        title="Our Blog"
        description="Stay up-to-date with our latest news, industry insights, and expert tips. Our blog covers a wide range of topics relevant to our field and beyond."
      />

      <Section title="Latest Posts">
        <CardList items={blogPosts} basePath="/blog" />
      </Section>
    </ContentContainer>
  )
}

