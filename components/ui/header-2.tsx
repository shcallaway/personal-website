import { cn } from "@/lib/utils"

interface Header2Props {
  children: React.ReactNode
  className?: string
}

export function Header2({ children, className }: Header2Props) {
  return (
    <h2 className={cn("text-2xl font-semibold mb-4", className)}>
      {children}
    </h2>
  )
}

