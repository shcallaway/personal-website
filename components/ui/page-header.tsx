import { Header1 } from "@/components/ui/header-1"
import { Paragraph } from "@/components/ui/paragraph"

interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-6">
      <Header1>{title}</Header1>
      {description && (
        <Paragraph className="text-xl">
          {description}
        </Paragraph>
      )}
    </div>
  )
}

