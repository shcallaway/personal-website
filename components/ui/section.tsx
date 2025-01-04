import { cn } from "@/lib/utils"
import { Header2 } from "@/components/ui/header-2"

interface SectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function Section({ title, children, className }: SectionProps) {
  return (
    <section>
      <Header2>{title}</Header2>
      {children}
    </section>
  )
}

