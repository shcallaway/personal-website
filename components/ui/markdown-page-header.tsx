import { PageHeader } from "@/components/ui/page-header"
import { Metadata } from "@/components/ui/metadata"

interface MarkdownPageHeaderProps {
  title: string
  description?: string
  date: string
  tags: string[]
}

export function MarkdownPageHeader({ 
  title, 
  description, 
  date, 
  tags 
}: MarkdownPageHeaderProps) {
  return (
    <div className="mb-6">
      <PageHeader
        title={title}
        description={description}
      />
      <Metadata 
        date={date}
        tags={tags}
      />
    </div>
  )
}

