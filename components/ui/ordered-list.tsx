import { cn } from "@/lib/utils"
import React from "react"
import { ListItem } from "@/components/ui/list-item"

interface OrderedListProps {
  children: React.ReactNode
  className?: string
}

export function OrderedList({ children, className }: OrderedListProps) {
  return (
    <ol className={cn("list-decimal pl-6 mb-4 space-y-2", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === ListItem) {
            return child;
          } else if (child.type === 'li') {
            return <ListItem>{child.props.children}</ListItem>;
          }
        }
        return child;
      })}
    </ol>
  )
}

