import { Card, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink } from 'lucide-react'
import { Header3 } from "@/components/ui/header-3"
import { Paragraph } from "@/components/ui/paragraph"

interface CardItem {
  title: string
  description: string
  date: string
  slug: string
  tags: string[]
  externalUrl?: string
  isExternal?: boolean
}

interface CardListProps {
  items: CardItem[]
  basePath: string
}

function getDomainFromUrl(url: string) {
  try {
    const domain = new URL(url).hostname.replace('www.', '')
    return domain
  } catch {
    return ''
  }
}

export function CardList({ items, basePath }: CardListProps) {
  return (
    <div className="space-y-6 mb-8">
      {items.map((item) => {
        const isExternal = item.isExternal
        const href = isExternal ? item.externalUrl : `${basePath}/${item.slug}`
        const LinkWrapper = isExternal ? 'a' : Link
        const linkProps = isExternal ? {
          href,
          target: "_blank",
          rel: "noopener noreferrer"
        } : { href }

        return (
          <LinkWrapper
            key={item.slug}
            {...linkProps}
            className="block transition-all duration-300 ease-in-out hover:scale-[1.01]"
          >
            <Card className="cursor-pointer hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="space-y-4">
                  {isExternal && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">{getDomainFromUrl(item.externalUrl!)}</span>
                    </div>
                  )}
                  
                  <Header3 className="hover:text-primary transition-colors duration-300">
                    {item.title}
                  </Header3>
                  
                  <Paragraph className="text-sm text-muted-foreground">
                    {item.date}
                  </Paragraph>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Paragraph>
                    {item.description}
                  </Paragraph>
                </div>
              </CardHeader>
            </Card>
          </LinkWrapper>
        )
      })}
    </div>
  )
}

