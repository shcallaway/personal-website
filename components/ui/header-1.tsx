import { cn } from "@/lib/utils"

interface Header1Props {
  children: React.ReactNode
  className?: string
}

export function Header1({ children, className }: Header1Props) {
  return (
    <h1 className={cn("text-3xl font-bold mb-4", className)}>
      {children}
    </h1>
  )
}

