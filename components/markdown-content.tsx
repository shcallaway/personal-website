import ReactMarkdown from 'react-markdown'
import { Header2 } from "@/components/ui/header-2"
import { Header3 } from "@/components/ui/header-3"
import { Paragraph } from "@/components/ui/paragraph"
import { OrderedList } from "@/components/ui/ordered-list"
import { UnorderedList } from "@/components/ui/unordered-list"
import { ListItem } from "@/components/ui/list-item"
import { Image } from "@/components/ui/image"

interface MarkdownContentProps {
  content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      components={{
        h2: ({ children }) => (
          <Header2>{children}</Header2>
        ),
        h3: ({ children }) => (
          <Header3>{children}</Header3>
        ),
        p: ({ children, node }) => {
          if (node.children.length === 1 && node.children[0].type === 'element' && node.children[0].tagName === 'img') {
            return children;
          }
          return <Paragraph>{children}</Paragraph>;
        },
        ul: ({ children }) => (
          <UnorderedList>{children}</UnorderedList>
        ),
        ol: ({ children }) => (
          <OrderedList>{children}</OrderedList>
        ),
        li: ({ children }) => (
          <ListItem>{children}</ListItem>
        ),
        img: ({ src, alt }) => (
          <div className="w-full aspect-[2/1] relative mb-4">
            <Image
              src={src || ''}
              alt={alt || ''}
              fill
              className="w-full"
              priority
            />
          </div>
        ),
        pre: ({ children }) => (
          <pre className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
            {children}
          </pre>
        ),
        code: ({ children, className }) => {
          const isInline = !className
          return (
            <code className={`font-mono text-sm ${isInline ? "bg-muted px-1 py-0.5 rounded" : ""}`}>
              {children}
            </code>
          )
        },
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-muted pl-4 italic mb-4">
            {children}
          </blockquote>
        )
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

