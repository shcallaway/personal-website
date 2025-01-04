import { cn } from "@/lib/utils"

interface Header3Props {
  children: React.ReactNode
  className?: string
}

export function Header3({ children, className }: Header3Props) {
  return (
    <h3 className={cn("text-xl font-medium mb-3", className)}>
      {children}
    </h3>
  )
}

