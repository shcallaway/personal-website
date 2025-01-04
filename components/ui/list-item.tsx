import React from "react"
import { cn } from "@/lib/utils"

interface ListItemProps {
  children: React.ReactNode
  className?: string
}

export function ListItem({ children, className }: ListItemProps) {
  return (
    <li className={cn("text-base leading-7 text-muted-foreground", className)}>
      {children}
    </li>
  )
}

