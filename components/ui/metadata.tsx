import { Badge } from "@/components/ui/badge"
import { Paragraph } from "@/components/ui/paragraph"

interface MetadataProps {
  date: string
  tags: string[]
  className?: string
}

export function Metadata({ date, tags, className }: MetadataProps) {
  return (
    <div className={className}>
      <Paragraph className="text-muted-foreground mb-2">{date}</Paragraph>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  )
}

